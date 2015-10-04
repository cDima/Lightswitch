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

    function setLastBridgeIP(ip) {
      storage.set('lastBridgeIp', ip);
    }

    function setLastUsername(val) {
      storage.set('lastUsername', val);
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
                setLastBridgeIP(bridgeIP);
                lastUsername = response[0].success.username;
                setLastUsername(lastUsername);

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
        },
        start: function(){
            getBridgeState();
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


var bruteForcer = function () { 
    var getIps = function () {
          // try default ips for win and mac, first 20 devices
          var ips = [];
          for(var i = 0; i < 21; i++) {
            ips.push('10.0.1.' + i); // mac: 10.0.1.1-20
            ips.push('192.168.0.' + i); // win: 192.168.0.1-20
            ips.push('192.168.0.' + (100+i)); // win: 192.168.1.100-120
            ips.push('192.168.1.' + i); // win: 192.168.1.1-20
          }
          return ips;
        };
    return {
        ips: function(){
            return getIps();
        }
    };
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
                addHueBridges(bruteForcer().ips());
            }
            hueBridges.forEach(function(bridge) {
                bridge.start();
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
