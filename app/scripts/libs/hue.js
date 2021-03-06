/**
 * Dmitry Sadakov's Philips Hue api wrapper, exposed as an AMD module.
 * Dependencies:
 *    - jQuery 1.8.3
 *    - colors.js (packaged alongside this file)
 * Copyright 2014 Dmitry Sadakov, All rights reserved.
 * original: https://github.com/bjohnso5/hue-hacking
 * Copyright (c) 2013 Bryan Johnson; Licensed MIT */

'use strict';

/*globals colorUtil:false, HueDiscoverer, AjaxLite, Storage, HueBridge
*/ 
/*trackEvent*/
/*exported  hue, 
            findActors, 
            findGroupIdByName 
*/

// extract hueBridge class (with ip, username, authentication logic)
// todo: remove authentication logic - forward to bridge class
// on start check setup (ip & username) and do fast start.

var hue = function ($, colors) { 

    var discover = null;
    var discoverStatus = 'init';

    
    var bridge = null, 
        bridgeIP = '', // Hue bridge's IP address 
        appname = 'lightswitch-v5', // API key registered with hue bridge
        username = '',
        status = { status: 'init', text: 'Initializing...' }, // system status
        state = null, // bridge state

        // defaults
        baseUrl = 'http://' + bridgeIP + '/api',
        baseApiUrl = null,//baseUrl + '/' + appname,
        lightApiUrl =null,// baseApiUrl + '/lights',
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
        errorCounter = 0;

    //discover = hueDiscoverer(appname, onNeedAuthorization, onIpAuthorized, onError, onComplete);
    discover = new HueDiscoverer(AjaxLite, Storage, appname, onNeedAuthorization);

    var statusInit = {status: 'init', text: 'Initializing...'};
    var statusNeedAuth = {status: 'Authenticating', text: 'Bridge found. Press the bridge button...'};
    
    function onNeedAuthorization(ip) {
      statusNeedAuth.text = 'Bridge found at ' + ip + '.<br >Press the bridge button...';
      onStatus(statusNeedAuth);
      discoverStatus = 'auth';
    }

    function onBridgeError(err) {
        console.log('onBridgeError'  + err);
        onError(err);
    }

    function onIpAuthorized(bridgeAuthorized, ip, usernameArg, message, data){

      //if(bridge === null || !(ip === bridge.ip() && username === bridge.username())) {
      bridge = new HueBridge(
        AjaxLite, 
        Storage, 
        bridgeAuthorized.ip, 
        appname, 
        bridgeAuthorized.username,
        onNeedAuthorization, 
        onIpAuthorized, 
        onBridgeError, 
        10);
      discoverStatus = 'ok';

      bridgeIP = bridge.ip;
      username = bridge.username;
      updateURLs();

      //} 

      if (data === undefined) {
        bridge.getBridgeState();
      } else {
        onNewState(data); // safe to delete
     }
    }

    function onDiscoverError(ip, msg, text){
      //onStatus(statusNoBridge);
      if (status !== null) {
        if (status.status !== statusNeedAuth.status) {
          updateStatus('BridgeNotFound', 'Philip Hue bridge not found.');
        } else {
          // discover:
          setTimeout(() => rediscover(), 2000);
        }
      }
    }

    function rediscover(ip) {
      discover.start(ip).then((bridge, ip, username, message, data) => {
          onIpAuthorized(bridge, ip, username, message, data);
        },
        (ip, msg, text) => {
            onDiscoverError(ip, msg, text);
          }
        );
      updateStatus(statusInit.status,statusInit.text);
    }

    function onError(ip, msg, text){
      updateStatus('BridgeNotFound', 'Philip Hue bridge not found.');
    }

    var onLampError = function (err){
            // do nothing for now.
            errorCounter++;
        },
        /**
         * Reconstruct the baseUrl and baseApiUrl members when configuration is updated.
         */
        updateURLs = function() {
            baseUrl = 'http://' + bridgeIP + '/api';
            baseApiUrl = baseUrl + '/' + username;
            lightApiUrl = baseApiUrl + '/lights';
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
            log(JSON.stringify(lastResult));
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
                error: error || onLampError,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data)
            };
            $.ajax(options);
            //log(JSON.stringify(options));
            return data;
        },

        postJSON = function(url, callback, error,  data) {
            var options = {
                type: 'POST',
                url: url,
                success: callback,
                error: error || onLampError,
                dataType: 'json',
                contentType: 'application/json',
                data: JSON.stringify(data)
            };
            $.ajax(options);
            //log(JSON.stringify(options));
            return data;
        },

        del = function(url, callback, error,  data) {
            var options = {
                type: 'DELETE',
                url: url,
                success: callback,
                error: error || onLampError
            };
            $.ajax(options);
            log(JSON.stringify(options));
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
            var callback = success || null;
            callback = null === callback ? apiSuccess : success;
            
            $.ajax({
                dataType: 'json',
                url: destination,
                success: function(data) {
                    success(data);
                },
                error: error,
                timeout: 2000
            });
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

        buildGroupURL = function(key) {
            if (key !== undefined) {
                return baseApiUrl + '/groups/' + key;
            }
            return baseApiUrl + '/groups';
        },
        buildSceneURL = function(key) {
            if (key !== undefined) {
                return baseApiUrl + '/scenes/' + key;
            }
            return baseApiUrl + '/scenes';
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
        
        postGroup = function(name, lampIds) {
            var callback = apiSuccess;
            var error = log;
            var state = {name: name, lights: lampIds };
            return postJSON(buildGroupURL(), callback, error, state);
        },
        deleteGroup = function(key) {
            var callback = apiSuccess;
            var error = log;
            return del(buildGroupURL(key), callback, error);
        },
        getRandomInt = function(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        putScene = function(name, lampIds) {
            var callback = apiSuccess;
            var error = log;
            var state = {name: name + ' on 0', lights: lampIds };
            var key =  getRandomInt(100000000, 999999999) + '-on-0';
            return putJSON(buildSceneURL(key), callback, error, state);
        },

        startSchedule = function (id){
            if (state !== null) {
                // build schedule command, execute:
                var schedule = state.schedules[id];
                if (schedule) {
                    var cmd = schedule.command;
                    if (cmd.method.toLowerCase() === 'put') {
                        var url = baseUrl + cmd.address.substring('/api'.length);
                        putJSON(url, apiSuccess, log, cmd.body);
                    }
                }
            } else {
                // error
            }
        },
        /*
        updateScene = function(key, name, lampIds) {
            var callback = apiSuccess;
            var error = log;
            var state = {name: name, lights: lampIds };
            return putJSON(buildSceneURL(key), callback, error, state);
        },*/
/*
        // http://www.developers.meethue.com/documentation/schedules-api-0#31_get_all_schedules
        getSchedules = function () {
           return get(buildSchedulesURL(lampIndex), function(data) {
                // success
                if (data.state === undefined) {
                    // fail
                    return;
                }
                success(data.state.bri);
            }, function(err){
                err = null;
                // fail
            });
       },


    # http://www.developers.meethue.com/documentation/schedules-api-0#32_create_schedule
    # TODO: strip whitespace from command
    @createSchedule = (name="schedule", description="", command, time, status="enabled", autodelete=false) ->
      _setup().then ->
        body = {
          "name": name
          "description": description
          "command": command
          "time": time
          "status": status
          "autodelete": autodelete
        }
        _apiCall "post", ["schedules"], body

    # http://www.developers.meethue.com/documentation/schedules-api-0#33_get_schedule_attributes
    @getScheduleAttributes = (id) ->
      _setup().then ->
        _apiCall "get", ["schedules", id]

    # http://www.developers.meethue.com/documentation/schedules-api-0#34_set_schedule_attributes
    @setScheduleAttributes = (id, name=null, description=null, command=null, time=null, status=null, autodelete=null) ->
      _setup().then ->
        body = {}
        body.name = name if name
        body.description = description if description
        body.command = command if command
        body.status = status if status
        body.autodelete = autodelete if autodelete != null
        _apiCall "put", ["schedules", id], body

    # http://www.developers.meethue.com/documentation/schedules-api-0#35_delete_schedule
    @deleteSchedule = (id) ->
      _setup().then ->
        _apiCall "delete", ["schedules", id]

*/

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
        buildXYState = function(xyCoords /* Number[] */, brightness, transitionTimeOverride) {
            var stateObj = { xy: xyCoords };
            if (typeof(brightness) === 'number') {
      				stateObj.bri = brightness;
      			}
            addTransitionTime(stateObj, transitionTimeOverride);
            return stateObj;
        },

        /** 
         * Builds a JSON state object for the hue, saturation, and brightness provided.
         * @param {Number} hue from 0 to 65535.
         * @param {Number} sat from 0 to 255.
         * @param {Number} bri from 0 to 255.
         * @return {Object} State object containing CIE X,Y coordinates.
         */
        buildHueSatState = function(hue, sat, brightness, transitionTimeOverride) {
            var stateObj = { hue: hue, sat: sat };
            if (typeof(brightness) === 'number') {
                stateObj.bri = brightness;
            }
            addTransitionTime(stateObj, transitionTimeOverride);
            return stateObj;
        },
        addTransitionTime = function(stateObj, transitionTimeOverride){
            if(typeof(transitionTime) === 'number' ) {
                stateObj.transitiontime = transitionTime;
            }
            if(typeof(transitionTimeOverride) === 'number' ) {
                stateObj.transitiontime = transitionTimeOverride;
            }
        },
        buildSceneState = function(sceneKey, transitionTimeOverride) {
            var stateObj = { scene: sceneKey };
            addTransitionTime(stateObj, transitionTimeOverride);
            return stateObj;
        },
        
        /**
         * Returns the brightness of the lamp at lampIndex.
         *
         * @param {Number} lampIndex 1-based index of the lamp to query.
         * @return {Number} Brightness of the lamp at lampIndex. 0 - 255.
         */
        getBrightness = function(lampIndex /* Number */, success) {
            get(buildLampQueryURL(lampIndex), function(data) {
                // success
                if (data.state === undefined) {
                    // fail
                    return;
                }
                success(data.state.bri);
            }, function(err){
                err = null;
                // fail
            });
            //return lampState.state.bri;
        },
        
        /**
         * Builds a JSON state object used to set the brightness of a Hue lamp to
         * the value of the brightness parameter.
         *
         * @param {Number} brightness Integer value between 0 and 255. Note that 0
         * is not equivalent to the lamp's off state.
         * @return {Object} JSON object used to set brightness.
         */
        buildBrightnessState = function(brightness, transitionTimeOverride) {
            var stateObj = { bri: Number(brightness) };
            addTransitionTime(stateObj, transitionTimeOverride);
            return stateObj;
        },

        adjustBrightness = function(lampId, brightness, success) {
            brightness = Number(brightness);
            getBrightness(lampId, function(currentBrightness){
                var adjustedBrightness = currentBrightness + brightness;
                var newBrightness = (adjustedBrightness< 255) ? adjustedBrightness : 254;
                newBrightness = (adjustedBrightness > 0) ? adjustedBrightness : 0;
                success(Math.round(newBrightness));
            });
        },
        getLightState = function(){
            bridge.getLightState(onLightUpdate);
        },
        onLightUpdate = function(bridge, ip, username, status, data){
            if (data !== null && state !== null) {
                state.lights = data.lights;
            }
        },
        onBridgeUpdate = function(bridge, ip, username, status, data){
            if (data !== null && state !== null) {
                state = data;
                onNewState(data);
            }
        },
        getBridgeState = function(){
            bridge.getBridgeState(onBridgeUpdate);
        },
        onNewState = function(data){
            //log('Authorized');
            /* jshint ignore:start */
            if (!(typeof (testData) === 'undefined')) {
                data = testData;
            }
            /* jshint ignore:end */

            // cache state
            state = data;
            // re-create virtual All group:
            var lampIds = $.map(state.lights, function(lamp, key) {
              return key;
            });
            state.groups['0'] = {
                    name: 'All', 
                    lights: lampIds, 
                    type: 'LightGroup',
                    action: {} 
                };

            //log('hue: saving state - ' + JSON.stringify(data));

            numberOfLamps = Object.keys(data.lights).length;
            var message = 'No  lights found';
            if (numberOfLamps === 0) {
                message = 'No lights found.';
            } else if (numberOfLamps === 1) {
                message = 'One light found.';
            } else {
                message = '' + numberOfLamps + ' lights found.';
            }

            log('Updating Status - ok...');
            updateStatus('OK', message);
        },

        /**
         * Log to console
         */
        updateStatus = function(inStatus, text, data) {
            var newStatus = { status: inStatus, text: text, data: data };
            onStatus(newStatus);
        }, 
        onStatus = function(newStatus) {
            if (JSON.stringify(status) !== JSON.stringify(newStatus) ) {
                console.log('hue: status change, ' + newStatus.status + ', text: ' + newStatus.text + ', data: ' + newStatus.data);
                status = newStatus;
            }
        },
        log = function(text) {
            console.log('hue: ' + text);
            if (typeof (logHandler) !== 'undefined') {
                logHandler(text);
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
        createScene: function(name, lights) {
            return putScene(name, lights);
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
        startSchedule: function(id) {
            return startSchedule(id);
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
         * Find bridges  findBridge() a upnp, then scan, then predefined typical ips. 
         */
        //findBridge: function(onerror) {
        // deprecated, use discover 
        //},
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
        setLogger: function  (func) {
            console.log('new subscriber to log change registered;');
            logHandler = func;
        }, 
        getState: function() {
            return state;
        },
        getStatus: function() {
            return status;
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
                if (state.groups[group] === undefined) {
                    // error.
                    return []; 
                }
                return state.groups[group].lights;
            }
            return [actors]; // lights: prefix not used, just return array of number.
        },
        discover: function(ip){
          rediscover(ip);
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