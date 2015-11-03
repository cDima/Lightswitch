/**
 * Philips Hue discoverer service
 * Copyright (c) 2015 Dmitry Sadakov; All rights reserved */

'use strict';

/*globals $, trackState, storageClass */
/*exported hueDiscoverer */

/*

popup.js - hueCommander -> hue.discover()
background.js -> hue.discover();

hue.js -> discoverer.start(ip) -> onAuthorized -> onIPAuthorized -> setIP -> updateStatus
hue.js -> getBridgeState -> onGotBridgeState -> addUser *recursive -> updateStatus
hue.js -> getBridgeState -> onGotBridgeState -> onAuthorized -> updateStatus
hue.js -> getBridgeState -> onAuthError -> getBridgeState
hue.js -> getLightState -> onAuthError -> getBridgeState 


hueBridge.getBridgeState replaces hue.js
hueBridge.onAuthError (no timeout counter) replaces onAuthError on hue.js
hueBridge.getLightState new


todo: hueBridge rename to hueBridgeAuth.js   
*/

class MeetHueLookup {
    constructor($lite) {
        this.$lite = $lite;
    }
    discover() {
        return new Promise((resolveCallback, reject) => {
            console.log('Requesting meethue.com/api/nupnp.');
            var nupnp = 'https://www.meethue.com/api/nupnp';
            this.$lite.ajax({
                url: nupnp,
                dataType: 'json',
                success: (json) => {
                    console.log('calling resolveCallback');
                    resolveCallback(json);
                    console.log('called resolveCallback');
                },
                error: (err) => {
                    reject(err);
                }
            });
        });
    }
}

class BruteForcer {
    static ips(){
      var ips = [];
      for(var i = 0; i < 21; i++) {
        ips.push('10.0.1.' + i); // mac: 10.0.1.1-20
        ips.push('192.168.0.' + i); // win: 192.168.0.1-20
        ips.push('192.168.0.' + (100+i)); // win: 192.168.1.100-120
        ips.push('192.168.1.' + i); // win: 192.168.1.1-20
      }
      return ips;
    }
}

class HueBridge {

    status() {
        return this.status;
    }

    constructor($, storage, bridgeIP, appName, lastUsername, onNeedAuthorization, onAuthorized, onError, retryCount) {
        
        this.$ = $;
        this.storage = storage;

        this.ip = bridgeIP;
        // defaults
        if (lastUsername === null) {
            lastUsername = '123-bogus';
        }
        this.ip = bridgeIP;
        this.appname = appName;
        this.username = lastUsername;

        this.baseUrl = 'http://' + this.ip + '/api';
        this.baseApiUrl = this.baseUrl + '/' + this.username;
        this.status = 'init'; // found, notauthorized, ready, error
        
        this.timeoutAuthCounter = 0;
        this.retryAuthCounter = 0;

        this.onNeedAuthorization = onNeedAuthorization.bind(this);
        this.onAuthorized = onAuthorized.bind(this);
        this.onError = onError.bind(this);

    }

    save(lastBridgeIP, lastUsername) {
      this.storage.set('lastBridgeIp', lastBridgeIP);
      this.storage.set('lastUsername', lastUsername);
      this.baseApiUrl = this.baseUrl + '/' + this.lastUsername;
    }
    log (text) {
        var message = 'hueBridge (' + this.bridgeIP + '): ' + text;
        console.log(message);
    }
    getLightState (callback){
        try{
            this.$.ajax({
                dataType: 'json',
                url: this.baseApiUrl + '/lights',
                success: () => {
                  this.timeoutAuthCounter = 0;
                  callback();
                },
                error: this.onAuthError,
                timeout: 2000
            });
        }catch (err) {
            this.onAuthError(err);
        }
    }
    getBridgeState (){
        try{
            this.$.ajax({
                dataType: 'json',
                url: this.baseApiUrl,
                success: (data) => this.onGotBridgeState(data),
                error: (data) => this.onAuthError(data),
                //timeout: 5000
            });
        }catch (err) {
            this.onAuthError(err);
        }
    }
    onAuthError (err){
        if (err.statusText === 'timeout') {
            this.timeoutAuthCounter++;
            this.log('Bridge error timeout: ' + this.bridgeIP);
            if (this.timeoutAuthCounter >= 10) {
                this.timeoutAuthCounter = 0;
                this.log('too many timeouts with IP ' + this.baseUrl);
                this.onError(this.bridgeIP, 'Timeout', 'Too many timeouts on: ' + this.baseUrl);
            } else {
                this.log('timeout on auth: ' + err.statusText + ' retry #' + this.timeoutAuthCounter);
                this.getBridgeState(); // retry
            }
        } else { //if (err.statusText !== 'error') {
            this.log('error on auth: ' + err.statusText);
            this.status = 'error';
            this.onError(this.bridgeIP, 'Error', 'Unknown error: ' + err.statusText);
        } // what now?
    }
    onGotBridgeState (dataArray) {
        var data = dataArray;
        if (Array.isArray(data)) {
            data = dataArray[0]; // take first
        }
        this.timeoutAuthCounter = 0;
        if (data.hasOwnProperty('error') && data.error.description === 'unauthorized user')
        {
            this.log('Not authorized with bridge '+ this.bridgeIP + ', registering...');
            this.retryAuthCounter++;
            this.status = 'found';
            // bridgeAuth
            this.addUser();
        }
        else if (data.hasOwnProperty('lights'))
        {
            this.status = 'ready';
            this.log('Bridge ready ' + this.bridgeIP);
            this.retryAuthCounter = 0;
            this.onAuthorized(this.bridgeIP, this.lastUsername, 'Ready', data);
        }
    }
    addUser (){
        this.log('adding user...');
        var dataString = JSON.stringify({devicetype: this.appname }); // no username - bridge generates it
        this.log(dataString);
        this.$.ajax({
            url: this.baseUrl,
            type: 'POST',
            data: dataString,
            success: this.onAddUserResponse
        });
    }
    onAddUserResponse (response) {
        this.log(response);
        if (response[0].hasOwnProperty('error'))
        {
            this.unauthorized(response);
        }
        else if (response[0].hasOwnProperty('success'))
        {
            // lastUsername

            // save bridge ip to storage
            this.lastUsername = response[0].success.username;
            this.save(this.bridgeIP, this.lastUsername);

            this.status = 'ready';
            this.log('Authorization successful');
            // request success message from actual bridge:
            this.getBridgeState();
        }
    }
    unauthorized (response){
        if (response[0].error.description === 'link button not pressed') {
            this.status = 'needauthorization';
            this.onNeedAuthorization(this.bridgeIP, 'NeedAuthorization', 'Bridge found. Press the bridge button...');
            setTimeout(this.addUser, 2000); // recursively call every 2 seconds for 30 seconds.
        } else  {
            this.status = 'error';
            this.onError(this.bridgeIP, 'Error', 'Error: ' + response[0].error.description);
        }
    }
    ip (){
        return this.ip;
    }
    username () {
        return this.username;
    }
    getStatus (){
        return this.status;
    }

}


var hueBridge = function(bridgeIP, appName, lastUsername, onNeedAuthorization, onAuthorized, onError, retryCount){
    // defaults
    if (lastUsername === null) {
        lastUsername = '123-bogus';
    }
    var ip = bridgeIP;
    var appname = appName;
    var username = lastUsername;

    var baseUrl = 'http://' + bridgeIP + '/api';
    var baseApiUrl = baseUrl + '/' + lastUsername;
    var status = 'init'; // found, notauthorized, ready, error

    var storage = storageClass();

    function save(lastBridgeIP, lastUsername) {
      storage.set('lastBridgeIp', lastBridgeIP);
      storage.set('lastUsername', lastUsername);
      baseApiUrl = baseUrl + '/' + lastUsername;
    }

    var timeoutAuthCounter = 0;
    var retryAuthCounter = 0;

    //if (retryCount)
        
    var log = function(text) {
            var message = 'hueBridge (' + bridgeIP + '): ' + text;
            console.log(message);
        },
        getLightState = function(callback){
            try{
                $.ajax({
                    dataType: 'json',
                    url: baseApiUrl + '/lights',
                    success: function(){
                      timeoutAuthCounter = 0;
                      callback();
                    },
                    error: onAuthError,
                    timeout: 2000
                });
            }catch (err) {
                onAuthError(err);
            }
        },
        getBridgeState = function(){
            try{
                $.ajax({
                    dataType: 'json',
                    url: baseApiUrl,
                    success: onGotBridgeState,
                    error: onAuthError//,
                    //timeout: 5000
                });
            }catch (err) {
                onAuthError(err);
            }
        },
        onAuthError = function(err){
            if (err.statusText === 'timeout') {
                timeoutAuthCounter++;
                log('Bridge error timeout: ' + bridgeIP);
                if (timeoutAuthCounter >= 10) {
                    timeoutAuthCounter = 0;
                    log('too many timeouts with IP ' + baseUrl);
                    onError(bridgeIP, 'Timeout', 'Too many timeouts on: ' + baseUrl);
                } else {
                    log('timeout on auth: ' + err.statusText + ' retry #' + timeoutAuthCounter);
                    getBridgeState(); // retry
                }
            } else { //if (err.statusText !== 'error') {
                log('error on auth: ' + err.statusText);
                status = 'error';
                onError(bridgeIP, 'Error', 'Unknown error: ' + err.statusText);
            } // what now?
        },
        onGotBridgeState = function(dataArray) {
            var data = dataArray;
            if ($.isArray(data)) {
                data = dataArray[0]; // take first
            }
            timeoutAuthCounter = 0;
            if (data.hasOwnProperty('error') && data.error.description === 'unauthorized user')
            {
                log('Not authorized with bridge '+ bridgeIP + ', registering...');
                retryAuthCounter++;
                status = 'found';
                // bridgeAuth
                addUser();
            }
            else if (data.hasOwnProperty('lights'))
            {
                status = 'ready';
                log('Bridge ready ' + bridgeIP);
                retryAuthCounter = 0;
                onAuthorized(bridgeIP, lastUsername, 'Ready', data);
            }
        },
        addUser = function(){
            log('adding user...');
            var dataString = JSON.stringify({devicetype: appname }); // no username - bridge generates it
            log(dataString);
            $.ajax({
                url: baseUrl,
                type: 'POST',
                data: dataString,
                success: onAddUserResponse
            });

        }, 
        onAddUserResponse = function(response) {
             log(response);
             if (response[0].hasOwnProperty('error'))
             {
                unauthorized(response);
             }
             else if (response[0].hasOwnProperty('success'))
             {
                // lastUsername

                // save bridge ip to storage
                lastUsername = response[0].success.username;
                save(bridgeIP, lastUsername);

                status = 'ready';
                log('Authorization successful');
                // request success message from actual bridge:
                getBridgeState();
             }
        },
        unauthorized = function(response){
            if (response[0].error.description === 'link button not pressed') {
                status = 'needauthorization';
                onNeedAuthorization(bridgeIP, 'NeedAuthorization', 'Bridge found. Press the bridge button...');
                setTimeout(addUser, 2000); // recursively call every 2 seconds for 30 seconds.
            } else  {
                status = 'error';
                onError(bridgeIP, 'Error', 'Error: ' + response[0].error.description);
            }
        };
    return {
        ip: function(){
            return ip;
        },
        username: function(){
            return username;
        },
        getLightState:function(callback){
            getLightState(callback);
        },
        getBridgeState: function(){
            getBridgeState();
        },
        getStatus: function(){
            return status;
        }
    };
};


var hueNupnpDiscoverer = function (callback) { 

    var ips = [];
    var findNupnpBridges = function() {
            console.log('Requesting meethue.com/api/nupnp.');
            var nupnp = 'https://www.meethue.com/api/nupnp';
            
            // debugging only!
            //nupnp = 'https://debugging';

            $.ajax({
                url: nupnp,
                dataType: 'json',
                //timeout: 2000,
                success: onNupnpResponse,
                error: errorNupnp
            });
        },
        onNupnpResponse = function(data) {
            trackState('nunpnp', data);
            if (data !== null && data.length > 0) {
                data.forEach(function(bridgeInfo, index) {
                    var bridgeIP = bridgeInfo.internalipaddress;
                    if (bridgeIP !== '0.0.0.0') {
                        ips.push(bridgeIP);
                    }
                });
                ready();
            } else {
                console.log('meethue portal did not return');
                ready();
            }
        },
        errorNupnp = function(err){
            // error
            console.log(err);
            ready();
        }, 
        ready = function(){
            callback(ips);
        };
        
        // auto launch
        findNupnpBridges();

        return {};
    };

var hueDiscoverer = function (appname, onNeedAuthorization, onAuthorized, onError, onComplete) { 

    var hueBridges = [];
    var completeCounter = 0;

    var lastBridgeIp = null;
    var lastUsername = null;

    var storage = null;
    //var tryNupnp = false;

    function getLastBridgeIP() {
      storage.get('lastBridgeIp', function (ip) {
        
        lastBridgeIp = ip;
        // debugging only!
        //lastBridgeIp = null;

      });

      storage.get('lastUsername', function (val) {
        lastUsername = val;
      });
    }

    // constructor
    storage = storageClass();
    getLastBridgeIP();

    var addHueBridges = function(ips) {
            ips.forEach(function (ip) {
               addHueBridge(ip);
            });
        },
        launchAfter = function(ips) {
            addHueBridges(ips);
            launch();
        },
        addHueBridge = function(ip){
            var probableHueBridge = hueBridge(ip, appname, lastUsername, onNeedAuthWrapper, onAuthorizedWrapper, onErrWrapper, 0);
            hueBridges.unshift(probableHueBridge);
        },
        start = function(ip){
            if (ip) {
               addHueBridge(ip);
            } else if (lastBridgeIp !== null) {
               addHueBridge(lastBridgeIp);
            }
            launch();

            //if (tryNupnp) {
                hueNupnpDiscoverer(launchAfter);
            //}
        },
        launch = function(){
            if(hueBridges.length === 0) {
                addHueBridges(BruteForcer.ips());
            }
            hueBridges.forEach(function(bridge) {
                bridge.getBridgeState();
            });
        }, 
        onNeedAuthWrapper = function(ip, status, message) {
            onNeedAuthorization(ip, status, message);
            completed();
        }, 
        onAuthorizedWrapper = function(ip, username, status, message) {
            onAuthorized(ip, username, status, message);
            completed();
        }, 
        onErrWrapper = function(ip, status, message) {
            onError(ip, status, message);
            completed();

        }, 
        completed = function(){
            completeCounter++;
            if (completeCounter >= hueBridges.length && onComplete) {
            //if(tryNupnp) {

            //} else {
            //    completed();
            //}
                onComplete(); // call when every IP was traversed
            }
        };
    return {
        start: function(ip) {
            start(ip);
        },
        ips: function() {
            return hueBridges;
        }
    };
};
