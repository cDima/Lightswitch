/**
 * Copyright (c) 2015 Dmitry Sadakov; All rights reserve
*/

'use strict';

/*globals trackState,AjaxLite */
/*exported HueDiscoverer */

class MeetHueLookup {
    constructor(AjaxLite) {
        this.AjaxLite = AjaxLite;
    }
    discover() {
        return new Promise((resolveCallback, reject) => {
            console.log('Requesting meethue.com/api/nupnp.');
            var nupnp = 'https://www.meethue.com/api/nupnp';
            this.AjaxLite.ajax({
                url: nupnp,
                dataType: 'json',
                success: data => {
                    trackState('nunpnp', data);
                    if (data !== null && data.length > 0) {
                        var ips = [];
                        data.forEach(function(bridgeInfo, index) {
                            var bridgeIP = bridgeInfo.internalipaddress;
                            if (bridgeIP !== '0.0.0.0') {
                                ips.push(bridgeIP);
                            }
                        });
                        resolveCallback(ips);
                    } else {
                        console.log('meethue portal did not return');
                        reject([]);
                    }
                },
                error: err => {
                    reject(err);
                }
            });
        });
    }
}

class BruteForcer {
    static ips(){
        var ips = [];
        var i = 0;
        for(i = 1; i < 8; i++) { ips.push('10.0.1.' + i); } // mac: 10.0.1.1-20
        for(i = 1; i < 8; i++) { ips.push('192.168.0.' + i); } // win: 192.168.0.1-20
        for(i = 0; i < 8; i++) { ips.push('192.168.0.' + (100+i)); } // win: 192.168.1.100-120
        for(i = 1; i < 8; i++) { ips.push('192.168.1.' + i); } // win: 192.168.1.1-20
      
      return ips;
    }
}

class HueBridge {

    status() {
        return this.status;
    }

    constructor($, storage, bridgeIP, appName, lastUsername, onNeedAuthorization, onAuthorized, onError, retryCount) {
        // todo: remove storage from HueBridge
        this.$ = $;

        // defaults
        if (!lastUsername) {
            lastUsername = '123-bogus';
        }
        this.ip = bridgeIP;
        this.appname = appName;
        this.username = lastUsername;

        this.baseUrl = 'http://' + this.ip + '/api';
        this.baseApiUrl = this.baseUrl + '/' + this.username;
        this.status = 'init'; // found, notauthorized, ready, error
        
        this.timeoutAuthCounter = 0;
        this.retryCount = retryCount || 0;

        this.onNeedAuthorization = onNeedAuthorization;
        this.onAuthorized = onAuthorized;
        this.onError = onError;

    }

    log (text) {
        var message = 'hueBridge (' + this.ip + '): ' + text;
        console.log(message);
    }
    getLightState (successCallback){
        try{
            var options = {
                dataType: 'json',
                url: this.baseApiUrl + '/lights',
                success: data => {
                  this.timeoutAuthCounter = 0;
                  this.onGotLightState(data,successCallback);
                },
                error: data => this.onAuthError(data),
                timeout: 2000
            };
            this.$.ajax(options);
        }catch (err) {
            this.onAuthError(err);
        }
    }
    getBridgeState (successCallback){
        try{
            var options = {
                dataType: 'json',
                url: this.baseApiUrl,
                success: data => this.onGotBridgeState(data, successCallback), // lighter bag of data
                error: data => this.onAuthError(data),
                timeout: 5000
            };
            this.$.ajax(options);
        }catch (err) {
            this.onAuthError(err);
        }
    }
    onAuthError (err){
        if (err.statusText === 'timeout' || err.status === 0) {
            this.timeoutAuthCounter++;
            this.log('Bridge error timeout: ' + this.ip);
            if (this.timeoutAuthCounter >= this.retryCount) {
                this.timeoutAuthCounter = 0;
                if (this.retryCount !== 0) {
                    this.log('too many timeouts with IP ' + this.baseUrl);
                }
                this.onError(this.ip, 'Timeout', 'Too many timeouts on: ' + this.baseUrl);
            } else {
                this.log('timeout on auth: ' + err.statusText + ' retry #' + this.timeoutAuthCounter);
                this.getBridgeState(); // retry
            }
        } else { //if (err.statusText !== 'error') {
            this.log('error on auth: ' + err.statusText);
            this.status = 'error';
            this.onError(this.ip, 'Error', 'Unknown error: ' + err.statusText);
        } // what now?
    }
    onGotLightState (data, successCallback) {
        if (data.hasOwnProperty('1') && 
            data['1'].hasOwnProperty('manufacturername')) {
            // indeed a light response.
            data = {'lights' : data};
        } 
        this.onGotBridgeState(data, successCallback);
    }
    onGotBridgeState (data, successCallback) {
        if (Array.isArray(data)) {
            data = data[0]; // take first
        }
        this.timeoutAuthCounter = 0;
        if (data.hasOwnProperty('error'))
        {
            if (data.error.description === 'unauthorized user') {
                this.log('Not authorized with bridge '+ this.ip + ', registering...');
                this.retryCounter++;
                this.status = 'found';
                // bridgeAuth
                this.addUser();
            } else {
                this.status = 'error';
                this.onError(this.ip, 'Error', 'Error: ' + data.error.description);
            }
        }
        else if (data.hasOwnProperty('lights'))
        {
            this.status = 'ready';
            this.log('Bridge ready ' + this.ip);
            this.retryCounter = 0;
            (successCallback || this.onAuthorized)(this, this.ip, this.username, 'Ready', data);
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
            success: data => this.onAddUserResponse(data),
            error: data => this.unauthorized()
        });
    }
    onAddUserResponse (response) {
        this.log(JSON.stringify(response));
        if (response[0].hasOwnProperty('error'))
        {
            this.unauthorized(response);
        }
        else if (response[0].hasOwnProperty('success'))
        {
            this.username = response[0].success.username;
            this.baseApiUrl = this.baseUrl + '/' + this.username;
            this.status = 'ready';
            this.log('Authorization successful');
            // request success message from actual bridge:
            this.getBridgeState();
        }
    }
    unauthorized (response){
        if (!response) {
            this.onError(this.ip, 'Error', 'Request cancelled');
        } else
        if (response[0].error.description === 'link button not pressed') {
            this.status = 'needauthorization';
            this.onNeedAuthorization(this.ip, this.username, 'NeedAuthorization', response); // changed signature
            this.onError(this.ip, 'Error', 'Need authentication: ' + response[0].error.description);
        } else  {
            this.status = 'error';
            this.onError(this.ip, 'Error', 'Error: ' + response[0].error.description);
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


class HueDiscoverer {
    constructor(AjaxLite, storage, appname, onNeedAuthorization) {
        this.AjaxLite = AjaxLite;
        this.storage = storage;
        this.appname = appname;
        this.onNeedAuthorization = onNeedAuthorization;
        this.self = this;
    }
    bridgeThenable (ip){
        var bridgeThenable = new Promise((resolve, reject) => {
            if (!ip) {
                reject(ip);
                return;
            }

            var bridge = null;

            function onResolve(ip, status, message){
                resolve(bridge, ip, status, message);
            }
            function onReject(ip, status, message){
                reject(bridge, ip, status, message);
            }

            bridge = new HueBridge(this.AjaxLite, this.storage, ip, this.appname, this.username, 
                this.onNeedAuthorization, 
                (ip, status, message) => onResolve(bridge, status, message), 
                (ip, status, message) => onReject(bridge, status, message));
            bridge.getLightState();
        }); 
        return bridgeThenable;
    } 
    start(ip) {
        function getIP () {
            return this.storage.get('lastBridgeIp');
        }
        function getUsername () {
            return this.storage.get('lastUsername');
        }
        function saveIP (ip) {
            this.ip = ip;
        }
        return new Promise((resolve, reject) => {

            var promise = this.self.storage.get('lastBridgeIp')
            .then((ip) => {
                this.self.ip = ip;
                return this.self.storage.get('lastUsername');
            })
            .then((val) => this.self.username = val)
            .then(() => {
                var promises = [];
                if (ip){
                    promises.push(this.self.bridgeThenable(ip)); // from arguments
                }
                if (this.self.ip){
                    promises.push(this.self.bridgeThenable(this.self.ip)); // from storage
                }
                return promises.length != 0 ? Promise.any(promises) : Promise.reject();
            })
            .catch(() => {
                var promises = [];
                var meethuePromise = new Promise((resolve,reject) => {
                    return new MeetHueLookup(this.self.AjaxLite).discover().then((ips) => {
                        var bridges = [];
                        for(var i of ips) {
                            bridges.push(this.self.bridgeThenable(i)); 
                        }
                        Promise.any(bridges).then((bridges) => resolve(bridges[0]), () => reject());
                    }, () => reject());
                });
                promises.push(meethuePromise);

                var ips = BruteForcer.ips();
                for(var i of ips) {
                    if (i !== this.self.ip && i !== ip) {
                        promises.push(this.self.bridgeThenable(i)); // 84 requests
                    }
                }
                return Promise.any(promises);
            })
            .then((bridges) => {
              this.self.storage.set('lastBridgeIp', bridges[0].ip);
              this.self.storage.set('lastUsername', bridges[0].username);
              resolve(bridges[0]);
            })
            .catch(() => {
                reject();
            }); 

            //resolve();
            return promise;
        });
    }
}

