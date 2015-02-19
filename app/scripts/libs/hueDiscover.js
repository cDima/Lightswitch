/**
 * Philips Hue discoverer service
 * Copyright (c) 2015 Dmitry Sadakov; All rights reserved */

'use strict';

/*exported hueDiscover */

var hueBridge = function(bridgeIP, onNeedAuthorization, onError, onAuthorized, onTimeout){
    // defaults
    var baseUrl = 'http://' + bridgeIP + '/api';
    var baseApiUrl = baseUrl + '/' + apiKey;

    var getBridgeState = function(){
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
                    updateStatus('BridgeNotFound', 'Philip Hue bridge not found.');
                } else {
                    log('timeout on auth: ' + err.statusText + ' retry #' + timeoutAuthCounter);
                    getBridgeState(); 
                }
            } else { 
                log('error on auth: ' + err.statusText);
                updateStatus('BridgeNotFound', 'Philip Hue bridge not found.');
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
                onNeedAuthorization(bridgeIP);
            }
            else if (data.hasOwnProperty('lights'))
            {
                onAuthorized(bridgeIP, data);
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
                bridgeSuccess(response);
             }
        },
        unauthorized = function(response){
            if (response[0].error.description === 'link button not pressed') {
                updateStatus('Authenticating', 'Bridge found. Press the bridge button...');
                setTimeout(addUser, 2000);
            } else  {
                log('Error: ' + response[0].error.description);
            }
        },
        bridgeSuccess = function(response) {
            log('Authorization successful');
            getBridgeState();
        };


    return {

    };
};

var hueDiscover = function ($) { 

    var bridgeIPs = [], 
        apiKey = 'lightswitch-v4';

    var onAuthorized = function(data){

        },
        

        /**
         * Log to console
         */
        updateStatus = function(inStatus, text, data) {
            var newStatus = { status: inStatus, text: text, data: data };
            if (JSON.stringify(status) !== JSON.stringify(newStatus) ) {
                console.log('hue: sending status change, ' + newStatus.status + ', text: ' + newStatus.text + ', data: ' + newStatus.data);
                status = newStatus;
                statusChange();
            }
            
        }, 
        log = function(text) {
            console.log('hue: ' + text);
            if (logHandler !== null) {
                logHandler(text);
            }
        },
        // events:
        statusChangeHandler = null,
        logHandler = null,
        statusChange = function() { 
            if (statusChangeHandler !== null) {
                console.log('hue: sending status change, ' + status.status + ', text: ' + status.text + ', data: ' + status.data);
                statusChangeHandler(status);
            }
        },
        setHueSatState = function(lampIndex, hue, sat, bri, transitiontime) {
            var state = buildHueSatState(hue, sat, bri, transitiontime);
            put(lampIndex, state);
        },
        setXYState = function(lampIndex /* Number */, xy, transitiontime, bri) {
            var state = buildXYState(xy, bri, transitiontime);
            put(lampIndex, state);
        };
        
    return {
        /** 
         * Flash the lamp at lampIndex for a short time. 
         *	
         * @param {Number} lampIndex 1-based index of the Hue lamp to flash.
         * @return {Object} JSON object containing lamp state.
         */
        flash: function(lampIndex /* Number */) {
            return put(lampIndex, shortFlashState);
        },
        /** 
         * Flash all connected lamps for a short time.
         *
         * @return {Object} JSON object containing lamp state.
         */
        flashAll: function() {
            return putAll(shortFlashState);
        },
        /** 
         * Flash the lamp at lampIndex for a long time.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp to flash.
         * @return {Object} JSON object containing lamp state.
         */
        longFlash: function(lampIndex /* Number */) {
            return put(lampIndex, longFlashState);
        },
        /** 
         * Flash all connected lamps for a long time.
         *
         * @return {Object} JSON object containing lamp state.
         */
        longFlashAll: function() {
            return putAll(longFlashState);
        },
        /** 
         * Set the lamp at lampIndex to the approximate CIE x,y equivalent of 
         * the provided hex color.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp to colorize.
         * @param {String} color String representing a hexadecimal color value.
         * @return {Object} JSON object containing lamp state.
         */
        setColor: function(lampIndex /* Number */, color /* String */, transitiontime, brightness) {
            var xy = colors.getCIEColor(color);
            if (typeof(brightness) === 'number') {
                if (brightness < 0) { // min
                    // adjust it:
                    var bri = colorUtil().getBrightness(color);
                    adjustBrightness(lampIndex, bri, function(bri){
                        setXYState(lampIndex, xy, transitiontime, bri);
                    });
                    return;
                }
                setXYState(lampIndex, xy, transitiontime, brightness);
                
            } else {
                setXYState(lampIndex, xy, transitiontime, null);
            }
        },
        setXYState: function(lampIndex, xy, transitiontime, bri){
            setXYState(lampIndex, xy, transitiontime, bri);
        },
        /** 
         * Sets state for the hue, saturation, and brightness provided.
         * @param {Number} hue from 0 to 65535.
         * @param {Number} sat from 0 to 255.
         * @param {Number} bri from 0 to 255.
         * @return {Object} State object containing CIE X,Y coordinates.
         */
        setHueSatState: function(lampIndex, hue, sat, bri, transitiontime){
            setHueSatState(lampIndex, hue, sat, bri, transitiontime);
        },

        /**
         * Sets all connected lamps to the approximate CIE x,y equivalent of 
         * the provided hex color.
         *
         * @param {String} color String representing a hexadecimal color value.
         * @return {Object} JSON object containing lamp state.
         */
        setAllColors: function(color /* String */) {
			var xy = colors.getCIEColor(color);
            colorUtil().getBrightness(color, function(bri){
                var state = buildXYState(xy, bri);
                putGroupAction(0, state);
            });
        },
        createGroup: function(name, lights) {
            return postGroup(name, lights);
        },
        removeGroup: function(key) {
            return deleteGroup(key);
        },
        /** 
         * Turn on scene by key
         */
        startScene: function(sceneKey) {
            var state = buildSceneState(sceneKey);
            return putGroupAction(0, state);
            //var scene = hue.getState().scenes[sceneKey];
            //if (scene !== undefined) {
                //var state = buildSceneState(sceneKey);
                //$.each(scene.lights, function(index, val){
                //    put(val, state);
                //});       
            //}
        },
        /**
         * Turn off the lamp at lampIndex.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp to turn off.
         * @return {Object} JSON object containing lamp state.
         */
        turnOff: function(lampIndex /* Number */) {
            return put(lampIndex, offState);
        },
        /** 
         * Turn on the lamp at lampIndex.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp to turn on.
         * @return {Object} JSON object containing lamp state.
         */
        turnOn: function(lampIndex /* Number */) {
            return put(lampIndex, onState);
        },
        /** 
         * Turn off all connected lamps.
         *
         * @return {Object} JSON object containing lamp state.
         */
        turnOffAll: function() {
            if (status.status === 'OK') { status.data = false; }
            return putGroupAction(0, offState);
        },
        /** 
         * Turn on all connected lamps.
         *
         * @return {Object} JSON object containing lamp state.
         */
        turnOnAll: function() {
            if (status.status === 'OK') { status.data = true; }
            return putGroupAction(0, onState);
        },
        /**
         * Set the brightness of the lamp at lampIndex.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp to modify.
         * @param {Number} brightness Integer value between 0 and 254.
         * @return {Object} JSON object containing lamp state.
         */
        setBrightness: function(lampIndex /* Number */, brightness /* Number */, transitiontime /* Number */) {
            var state = buildBrightnessState(brightness, transitiontime);
            return put(lampIndex, state);
        },
        /**
         * Set the brightness of all connected lamps.
         *
         * @param {Number} brightness Integer value between 0 and 254.
         * @return {Object} JSON object containing all lamp state.
         */
        setAllBrightness: function(brightness /* Number */) {
            var state = buildBrightnessState(brightness);
            return putGroupAction(0, state);
        },
        /**
         * Set the brightness of an indexed group of lamps.
         *
         * @param {Number} groupIndex 0-based lamp group index.
         * @param {Number} brightness Integer value between 0 and 254.
         * @return {Object} JSON object containing group state.
         */
        setGroupBrightness: function(groupIndex /* Number */, brightness /* Number */) {
            var state = buildBrightnessState(brightness);
            return putGroupAction(groupIndex, state);
        },
        /**
         * Dim the lamp at lampIndex by decrement.
         * 
         * @param {Number} lampIndex 1-based lamp index.
         * @param {Number} [decrement] Amount to decrement brightness by (between 0 and 255).
         * @return {Object} JSON object containing lamp state.
         */
        dim: function(lampIndex /* Number */, decrement /* Number */, transitiontime) {
            decrement = decrement || -10; // default to 10 if decrement not provided.
            adjustBrightness(lampIndex, decrement, function(newBrightness) {
                return put(lampIndex, buildBrightnessState(newBrightness, transitiontime));
            });
        },
        /**
         * Dim all lamps by decrement.
         * 
         * @param {Number} [decrement] Amount to decrement brightness by (between 0 and 255).
         * @return {Object[]} JSON objects containing lamp states.
         */
        dimAll: function(decrement /* Number */) {
            var states = [];
            for(var i = 0; i < numberOfLamps; ++i ) {
                states[i] = this.dim(i + 1, decrement);
            }
            return states;
        },
        /**
         * Brighten the lamp at lampIndex by increment.
         *
         * @param {Number} lampIndex 1-based lamp index.
         * @param {Number} [increment] Amount to increment brightness by (between 0 and 255).
         * @return {Object} JSON object containing lamp state.
         */
        brighten: function(lampIndex, increment, transitiontime) {
            increment = increment || 10;
            adjustBrightness(lampIndex, increment, function(newBrightness) {
                //this.setBrightness(lampIndex, newBrightness, transitiontime);
                return put(lampIndex, buildBrightnessState(newBrightness, transitiontime));
            });
        },
        /**
         * Brighten all lamps by increment.
         *
         * @param {Number} [increment] Amount to increment brightness by (between 0 and 255).
         * @return {Object[]} JSON objects containing lamp states.
         */
        brightenAll: function(increment /* Number */) {
            var states = [];
            for(var i = 0; i < numberOfLamps; ++i) {
                states[i] = this.brighten(i + 1, increment);
            }
            return states;
        },
        /** 
         * Return the value of the configured transitionTime property.
         *
         * @return {Number} Value of the transitionTime property. Null by default if not
         * set.
         */
        getTransitionTime: function() {
            return transitionTime;
        },
        /**
         * Set the value of the transitionTime property.
         *
         * @param {Number} time Lamp color transition time in approximate milliseconds.
         */
        setTransitionTime: function(time /* Number */) {
            transitionTime = time;
        },
        /**
         * Set the IP address of the bridge and the API key to use to control
         * the Hue lamps.
         * 
         * @param {String} IP Address as a String (e.g. 192.168.1.1)
         * @param {String} API key that was registered with the Hue bridge.
         */
        setIp: function(ip) {
            bridgeIP = ip;
            updateURLs();
        },
        /**
         * Find bridges  findBridge() a upnp, then scan, then predefined typical ips. 
         */
        findBridge: function(onerror) {
            log('Requesting meethue.com/api/nupnp.');
            $.ajax({
                url: 'https://www.meethue.com/api/nupnp',
                dataType: 'json',
                timeout: 2000,
                success: function(data) {
                    if (data !== null && data.length > 0) {
                        bridgeIP = data[0].internalipaddress;
                        if (bridgeIP !== '0.0.0.0')
                        {
                            log('Found bridge at ' + bridgeIP);
                            updateURLs();

                            getBridgeState();
                        }
                        else{
                            log('Bridge not found');
                            updateStatus('BridgeNotFound', 'Philip Hue lights not found.');
                        }
                    } else {
                        log('meethue portal did not return');
                        updateStatus('BridgeNotFound', 'Philip Hue lights not found.');
                    }
                },
                error: function(err){
                    // error
                    log(err);
                    updateStatus('BridgeNotFound', 'Philip Hue lights not found.');
                    if (typeof(onerror) !== 'undefined') {
                        onerror(err);
                    }
                }
            });
        },
        /**
         * Set the number of lamps available to control.
         *
         * @param {Number} The total number of lamps available to interact with. Default is 3.
         */
        setNumberOfLamps: function(numLamps /* Number */) {
            if(typeof(numLamps) === 'number') {
                numberOfLamps = numLamps;
            }
        },
        //status: status,
        // events
        onStatusChange: function  (func) {
            console.log('new subscriber to status change registered; internal status' + status);
            statusChangeHandler = func;
            statusChangeHandler(status);
        }, 
        setLogger: function  (func) {
            console.log('new subscriber to log change registered;');
            logHandler = func;
        }, 
        getState: function() {
            return state;
        },
        refresh: function(){
            getBridgeState();
        },
        heartbeat: function(){
            getLightState();
        },
        getLampIds: function(actors){
            // parse actors
            //actors
            if (actors === null) {
                return []; // no lamps
            }
            if (actors.substring(0, 'group-'.length) === 'group-')
            {
                var group = actors.substring('group-'.length);
                return state.groups[group].lights;
            }
            return [actors]; // lights: prefix not used, just return array of number.
        } 
    };
};


function findActors(key) {
  return findGroupIdByName(key);
}

function findGroupIdByName(name) {
  if (name.toLowerCase() === 'all') {
    return '0';// special case group-0 is all.
  }
  var state = window.hue.getState();
  if (state !== null) {
      for(var group in state.groups) {
        if (state.groups[group].name.toLowerCase() === name.toLowerCase()) {
          return group;
        }
      }
    }
  return null;
}