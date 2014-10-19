/**
 * Dmitry Sadakov's Philips Hue api wrapper, exposed as an AMD module.
 * Dependencies:
 *    - jQuery 1.8.3
 *    - colors.js (packaged alongside this file)
 * Copyright 2014 Dmitry Sadakov, All rights reserved.
 * original: https://github.com/bjohnso5/hue-hacking
 * Copyright (c) 2013 Bryan Johnson; Licensed MIT */
 
var hue = function ($, colors) { 
    
    'use strict';
    
    var bridgeIP = '', // Hue bridge's IP address 
        apiKey = 'lightswitch-v3', //'1391b1706caeb6f4b2c8418fd8f402d8', // lightswitch - API key registered with hue bridge
        status = { status: 'init', text: "Initializing..." },

        // defaults
        baseUrl = 'http://' + bridgeIP + '/api',
        baseApiUrl = baseUrl + '/' + apiKey,
        lastResult = null,
        numberOfLamps = 3, // defaulted to the # of lamps included in the starter kit, update if you've connected additional bulbs

        // lamp states:
        shortFlashType = 'select',
        longFlashType = 'lselect',
        offState = { on: false },
        onState = { on: true },
        shortFlashState = { alert: shortFlashType },
        longFlashState = { alert: longFlashType },
        transitionTime = null,

        
        /**
         * Reconstruct the baseUrl and baseApiUrl members when configuration is updated.
         */
        updateURLs = function() {
            baseUrl = 'http://' + bridgeIP + '/api';
            baseApiUrl = baseUrl + '/' + apiKey;
        },
        /**
         * Sets the response to the lastResult member for use. Currently unused.
         *
         * @param {String} Response data as a String
         * @param {String} Status text
         * @param {jqXHR} jQuery XmlHttpResponse object
         */
        apiSuccess = function(data, successText, jqXHR) {
            lastResult = data;
            //debugger;
            log(lastResult);
            getBridgeState();
        },
        
        /**
         * Convenience function to perform an asynchronous HTTP PUT with the
         * provided JSON data.
         *
         * @param {String} url The URL to send the PUT request to.
         * @param {Function} callback The function to invoke on a successful response.
         * @param {Object} data The JSON data.
         * @return {Object} The JSON data.
         */
        putJSON = function(url, callback, error,  data) {
            var options = {
                type: 'PUT',
                url: url,
                success: callback,
                error: error,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data)
            };
            $.ajax(options);
            return data;
        },
        
        /**
         * Convenience function used to query the state of a Hue lamp or other
         * bridge-administered resource.
         *
         * @param {String} destination URL to send HTTP GET request to.
         * @param {Function} success Callback function to invoke on successful response.
         * @return {Object} JSON bulb configuration data.
         */
        get = function(destination, success, error) {
            var callback = success || null,
                stateData = null;
            callback = null === callback ? apiSuccess : success;
            
            $.ajaxSetup({async: false});
            $.getJSON(destination)
            .done(function(data) {
                stateData = data;
            })
            .fail(error);
            return stateData;
        },
        
        /**
         * Convenience function used to build a state URL for a provided Hue lamp
         * index.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp.
         * @return {String} URL to put state to a lamp.
         */
        buildStateURL = function(lampIndex /* Number */) {
            return baseApiUrl + '/lights/' + lampIndex + '/state';
        },
        
        /**
         * Convenience function used to build a state URL for a provided Hue lamp
         * group.
         *
         * @param {Number} groupIndex 0-based index of the lamp group.
         * @return {String} URL to trigger a group action.
         */
        buildGroupActionURL = function(groupIndex /* {Number} */) {
            return baseApiUrl + '/groups/' + groupIndex + '/action';
        },
        
        /**
         * Convenience function used to initiate an HTTP PUT request to modify 
         * state.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp to modify.
         * @param {String} data String containing the JSON state object to commit to the lamp.
         * @param {Function} success Callback function to invoke on successful response.
         * @return {Object} JSON bulb state data.
         */
        put = function(lampIndex, data, success, error) {
            var callback = success || null;
            callback = null === callback ? apiSuccess : success;
            return putJSON(buildStateURL(lampIndex), callback, error, data);
        },
        
        /**
         * Convenience function used to initiate an HTTP PUT request to modify state of a group of lamps.
         *
         * @param {Number} Index of the lamp group to modify
         * @param {Object} Object containing desired lamp state
         * @return {Object} JSON bulb group state data.
         */
        putGroupAction = function(groupIndex /* {Number} */, action /* String */) {
            var callback = apiSuccess;
            var error = log;
            return putJSON(buildGroupActionURL(groupIndex), callback, error, action);
        },
        
        /**
         * Convenience function used to initiate HTTP PUT requests to modify state
         * of all connected Hue lamps.
         *
         * @param {String} data String containing the JSON state object to commit to the lamps.
         * @param {Function} success Callback function to invoke on successful response.
         * @return {Object} JSON object containing state to apply to lamp.
         */
        putAll = function(data, success, error) {
            var callback = success || null;
            callback = null === callback ? apiSuccess : success;
            
            for(var i = 0; i < numberOfLamps; ++i) {
                putJSON(buildStateURL(i+1), callback, error,  data);
            }
            return data;
        },
        
        /**
         * Convenience function used to build a URL to query a lamp's status.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp.
         * @return {String} URL to query a specific lamp.
         */
        buildLampQueryURL = function(lampIndex /* Number */) {
            return baseApiUrl + '/lights/' + lampIndex;
        },
        
        /** 
         * Builds a JSON state object for the CIE 1931 color coordinates provided.
         * If the transitionTime property has been set, it is also included in the
         * JSON object.
         *
         * @param {Number[]} CIE 1931 X,Y color coordinates.
         * @return {Object} State object containing CIE X,Y coordinates.
         */
        buildXYState = function(xyCoords /* Number[] */) {
            var stateObj = { xy: xyCoords };
            
            if(typeof(transitionTime) === 'number' ) {
                stateObj.transitiontime = transitionTime;
            }
            
            return stateObj;
        },
        
        /**
         * Returns the brightness of the lamp at lampIndex.
         *
         * @param {Number} lampIndex 1-based index of the lamp to query.
         * @return {Number} Brightness of the lamp at lampIndex. 0 - 255.
         */
        getBrightness = function(lampIndex /* Number */) {
            var lampState = get(buildLampQueryURL(lampIndex));
            return lampState.state.bri;
        },
        
        /**
         * Builds a JSON state object used to set the brightness of a Hue lamp to
         * the value of the brightness parameter.
         *
         * @param {Number} brightness Integer value between 0 and 254. Note that 0
         * is not equivalent to the lamp's off state.
         * @return {Object} JSON object used to set brightness.
         */
        buildBrightnessState = function(brightness) {
            var stateObj = { bri: brightness };
            return stateObj;
        },
        getBridgeState = function(){
            log("Checking Authorization");
            $.ajax({
              dataType: "json",
              url: baseApiUrl,
              success: function(dataArray) {

                var data = dataArray;
                if ($.isArray(data)) {
                    data = dataArray[0]; // take first
                }

                if (data.hasOwnProperty('error') && data.error.description == "unauthorized user")
                {
                    log("Not authorized with bridge, registering...");
                    addUser();
                }
                else if (data.hasOwnProperty('lights'))
                {
                    log("Authorized");

                    var allOn = true;
                    var lightsReachable = [];
                    $.each(data.lights, function(key, value){
                        //$('#connectStatus').append('<input class="light_select" type="checkbox" id=' + key + ' value="false">') 
                        //$('#connectStatus').append(key + ": " + value.name + "<br>");

                        if (value.state.reachable) lightsReachable.push(value);
                        allOn = allOn && value.state.reachable && value.state.on;
                    });

                    numberOfLamps = Object.keys(lightsReachable).length
                    var message = "No  lights found";
                    if (numberOfLamps == 0) {
                        message = "No lights found.";
                    } else if (numberOfLamps == 1) {
                        message = "One light found.";
                    } else {
                        message = "" + numberOfLamps + " lights found.";
                    }
                    updateStatus("OK", message, allOn);

                    if (chrome !== null && chrome.browserAction != null) {
                        chrome.browserAction.setIcon({path:"img/lightswitch.logo.128.png"});
                    }
                }
            },
            error: function(err){
                    // error
                    log(err);
                    updateStatus("BridgeNotFount", "Philip Hue bridge not found.");
            },
            timeout: 1000
            });
        },
        addUser = function(){
            log("adding user...");
            var dataString = '{"devicetype":"' + apiKey + '", "username":"' + apiKey +'"}';
            log(dataString);
            $.ajax({
                url: baseUrl,
                type: 'POST',
                data: dataString,
                success: function(response) {
                     debugger;
                     log(response);
                     if (response[0].hasOwnProperty('error'))
                     {
                        if (response[0].error.description == "link button not pressed") {
                            updateStatus("Authenticating", "Bridge found. Press link button.");
                            setTimeout(addUser, 2000);
                        } else  {
                            log("Error: " + response[0].error.description);
                        }
                     }
                     else if (response[0].hasOwnProperty('success'))
                     {
                        //$('#linkButton').remove();
                        log("Authorization successful");
                        getBridgeState();
                     }
                }
            });

        },

        /**
         * Log to console
         */
        updateStatus = function(newStatus, text, data) {
            var newStatus = { status: newStatus, text: text, data: data };
            if (JSON.stringify(status) !== JSON.stringify(newStatus) ) {
                console.log("hue: sending status change, " + newStatus.status + ", text: " + newStatus.text + ", data: " + newStatus.data);
                status = newStatus;
                statusChange();
            }
            //$('#connectStatus').html("<div class='intro-text'>" + text + "</div>");
        }, 
        log = function(text) {
            console.log("hue: " + text);
            $('.log-text').append(text + "<br>");
        },

        // events:
        statusChangeHandler = null,
        statusChange = function() { 
            if (statusChangeHandler != null) {
                console.log("hue: sending status change, " + status.status + ", text: " + status.text + ", data: " + status.data);
                statusChangeHandler(status);
            }
        }
        ;
        
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
        setColor: function(lampIndex /* Number */, color /* String */) {
            var state = buildXYState(colors.getCIEColor(color));
            return put(lampIndex, state);
        },
        /**
         * Sets all connected lamps to the approximate CIE x,y equivalent of 
         * the provided hex color.
         *
         * @param {String} color String representing a hexadecimal color value.
         * @return {Object} JSON object containing lamp state.
         */
        setAllColors: function(color /* String */) {
            var state = buildXYState(colors.getCIEColor(color));
            return putGroupAction(0, state);
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
            if (status.status == "OK") { status.data = false; }
            return putGroupAction(0, offState);
        },
        /** 
         * Turn on all connected lamps.
         *
         * @return {Object} JSON object containing lamp state.
         */
        turnOnAll: function() {
            if (status.status == "OK") { status.data = true; }
            return putGroupAction(0, onState);
        },
        /**
         * Set the brightness of the lamp at lampIndex.
         *
         * @param {Number} lampIndex 1-based index of the Hue lamp to modify.
         * @param {Number} brightness Integer value between 0 and 254.
         * @return {Object} JSON object containing lamp state.
         */
        setBrightness: function(lampIndex /* Number */, brightness /* Number */) {
            var state = buildBrightnessState(brightness);
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
        dim: function(lampIndex /* Number */, decrement /* Number */) {
            decrement = decrement || 10; // default to 10 if decrement not provided.
            var currentBrightness = getBrightness(lampIndex);
            var adjustedBrightness = currentBrightness - decrement;
            var newBrightness = (adjustedBrightness > 0) ? adjustedBrightness : 0;
            return this.setBrightness(lampIndex, newBrightness);
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
        brighten: function(lampIndex /* Number */, increment /* Number */) {
            increment = increment || 10;
            var currentBrightness = getBrightness(lampIndex);
            var adjustedBrightness = currentBrightness + increment;
            var newBrightness = (adjustedBrightness< 255) ? adjustedBrightness : 254;
            return this.setBrightness(lampIndex, newBrightness);
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
        setIpAndApiKey: function(ip, key) {
            apiKey = key;
            bridgeIP = ip;
            updateURLs();
        },
        /**
         * Find bridges  findBridge() a upnp, then scan, then predefined typical ips. 
         */
        findBridge: function() {
            log('Requesting meethue.com/api/nupnp.');
            $.ajax({
                url: 'https://www.meethue.com/api/nupnp',
                dataType: "json",
                success: function(data) {
                    bridgeIP = data[0].internalipaddress;
                    if (bridgeIP != "0.0.0.0")
                    {
                        log("Found bridge at " + bridgeIP);
                        updateURLs();

                        getBridgeState();
                    }
                    else{
                        log("Bridge not found");
                    }
                },
                error: function(err){
                    // error
                    log(err);
                    updateStatus("BridgeNotFound", "Philip Hue lights not found.");
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
            console.log("new subscriber to status change registered; internal status" + status);
            statusChangeHandler = func;
            statusChangeHandler(status);
        }, 
        heartbeat: function(){
            return getBridgeState();
        }
    };
};

/* handled in background.js 
if(typeof(define) !== 'undefined' && typeof(define.amd) !== 'undefined') {
    define(["../jquery", "./colors"], hue);
} else {
    // window.colors is defined by the colors.js file; if AMD is not used, it must be included BEFORE hue.js
    window.hue = hue(window.jQuery, window.colors);
    window.hue.findBridge();
}
*/

/* handled in popup.js 
if (chrome !== null && chrome.browserAction != null) {
    chrome.browserAction.setIcon({path:"img/lightswitch.logo.128.png"});
}*/
