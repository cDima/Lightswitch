/**
 * Philips Hue discoverer service
 * Copyright (c) 2015 Dmitry Sadakov; All rights reserved */

'use strict';

/*globals $*/
/*exported hueDiscoverer */

var hueBridge = function($, bridgeIP, apiKey, onNeedAuthorization, onAuthorized, onError){
    // defaults
    var baseUrl = 'http://' + bridgeIP + '/api';
    var baseApiUrl = baseUrl + '/' + apiKey;
    var status = 'init'; // found, notauthorized, ready, error
    var timeoutAuthCounter = 0;
        
    var log = function(text) {
            var message = 'hueBridge (' + bridgeIP + '): ' + text;
            console.log(message);
        },
        getBridgeState = function(){
            $.ajax({
                dataType: 'json',
                url: baseApiUrl,
                success: onGotBridgeState,
                error: onAuthError,
                timeout: 5000
            });
        },
        onAuthError = function(err){
            if (err.statusText === 'timeout') {
                timeoutAuthCounter++;
                if (timeoutAuthCounter >= 2) {
                    timeoutAuthCounter = 0;
                    log('too many timeouts with IP ' + baseUrl);
                    status = 'timeout';
                    onError(bridgeIP, 'Timeout', 'Too many timeouts on: ' + baseUrl);
                } else {
                    log('timeout on bridge ' + baseUrl + ': ' + err.statusText + ' retry #' + timeoutAuthCounter);
                    getBridgeState(); 
                }
            } else { 
                log('error on auth: ' + err.statusText);
                // error
                status = 'error';
                onError(bridgeIP, 'Error', 'Unknown error' + err.statusText);
            }
        },
        onGotBridgeState = function(dataArray) {
            var data = dataArray;
            if ($.isArray(data)) {
                data = dataArray[0]; // take first
            }
            
            if (data.hasOwnProperty('error') && data.error.description === 'unauthorized user')
            {
                log('Bridge found at ' + bridgeIP);
                status = 'found';
                addUser();
            }
            else if (data.hasOwnProperty('lights'))
            {
                status = 'ready';
                onAuthorized(bridgeIP, 'Ready', data);
            }
        },
        addUser = function(){
            log('adding user...');
            var dataString = JSON.stringify({devicetype: apiKey, username: apiKey });
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
                status = 'ready';
                bridgeSuccess(response);
             }
        },
        unauthorized = function(response){
            if (response[0].error.description === 'link button not pressed') {
                status = 'needauthorization';
                onNeedAuthorization(bridgeIP, 'NeedAuthorization', 'Bridge found. Press the bridge button...');
                setTimeout(addUser, 2000);
            } else  {
                status = 'error';
                onError(bridgeIP, 'Error', 'Error: ' + response[0].error.description);
            }
        },
        bridgeSuccess = function(response) {
            log('Authorization successful');
            // request success message from actual bridge:
            getBridgeState();
        };
    return {
        getStatus: function(){
            return status;
        },
        start: function(){
            getBridgeState();
        }
    };
};


var hueNupnpDiscoverer = function (onReady) { 

    var ips = [];
    var findNupnpBridges = function() {
            console.log('Requesting meethue.com/api/nupnp.');
            $.ajax({
                url: 'https://www.meethue.com/api/nupnp',
                dataType: 'json',
                timeout: 2000,
                success: onNupnpResponse,
                error: errorNupnp
            });
        },
        onNupnpResponse = function(data) {
            if (data !== null && data.length > 0) {
                var ips = [];
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
            onReady(ips);
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
        };
    return {
        ips: function(ips){
            return getIps();
        }
    };
};


var hueDiscoverer = function (onNeedAuthorization, onAuthorized, onError, onComplete) { 

    var hueBridges = [], 
        apiKey = 'lightswitch-v4';
    var completeCounter = 0;

    var addHueBridges = function(ips) {
            ips.forEach(function (ip) {
               addHueBridge(ip);
            });
            // then add brutes
            addHueBridges(bruteForcer().ips());
        },
        addHueBridge = function(ip){
            var probableHueBridge = hueBridge(ip, apiKey, onNeedAuthorization, onAuthorized, onError);
            hueBridges.push(probableHueBridge);
        },
        start = function(ip){
            if (ip) {
               addHueBridge(ip);
            } else {
                // nupnp and bruteforce supported.
                hueNupnpDiscoverer(addHueBridges);
            }
        },
        launch = function(){
            hueBridges.forEach(function(bridge) {
                bridge.start();
            });
        }, 
        onAuthorizedWrapper = function(ip, status, message) {
            onAuthorized(ip, status, message);
            completed();
        }, 
        onErrWrapper = function(ip, status, message) {
            onError(ip, status, message);
            completed();
        }, 
        completed = function(){
            completeCounter++;
            if (completeCounter === hueBridges.length && onComplete) {
                onComplete(); // call when every IP was traversed
            }
        };
    return {
        start: function(ip) {
            start(ip);
            launch();
        }
    };
};
