/**
 * Dmitry Sadakov's Philips Hue Commander wrapper, exposed as an AMD module.
 * Dependencies:
 *    - jQuery 1.8.3
 *    - colors.js (packaged alongside this file)
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved. */

/*globals trackEvent*/
/*exported hueCommander */
 
var hueCommander = function ($, hue, colorUtil, sceneCmd) { 
    
    'use strict';
    

    if (typeof String.prototype.endsWith !== 'function') {
        String.prototype.endsWith = function(suffix) {
            return this.indexOf(suffix, this.length - suffix.length) !== -1;
        };
    }
     
    if (typeof String.prototype.startsWith !== 'function') {
        String.prototype.startsWith = function(prefix) {
            return this.indexOf(prefix) !== -1;
        };
    }

    var logger = null,
        actors = null,
        stateCache = null,
        executeCommand = function(command) {
            log('executing command: ' + command + ' on actors: ' + actors);
            trackEvent('huecommander', 'command', command);

            if (command === '#brighten') {
                hue.brightenAll(Math.floor(255 / 3));
            }
            if (command === '#darken') {
                hue.brightenAll(Math.floor(-255 / 3));
            }
            if (command === 'on') {
                executeOnActors(function(bulb){
                    hue.turnOn(bulb);
                });
                return;
            }
            if (command === 'off') {
                executeOnActors(function(bulb){
                    hue.turnOff(bulb);
                });
                return;
            }
            var bri = detectBrigthness(command);
            if (bri !== null) {
                executeOnActors(function(bulb){
                    hue.setBrightness(bulb, bri);
                });
                return;
            }
            var color = colorUtil.getColor(command);
            if (color !== false) {
                executeOnActors(function(bulb){
                    hue.setColor(bulb, color.substring(1));
                });
                return;
            }

            if (command === 'scene:stop') {
                sceneCmd.stop();
                restoreState();
            } else {
                if (command.lastIndexOf('scene:', 0) === 0) {
                    var sceneName = command.substring(6);
                    var lampids = hue.getLampIds(actors);

                    saveState();

                    sceneCmd.start(sceneName, lampids);
                    return;
                }
            }
        },
        saveState = function(){
            if (stateCache === null) {
                stateCache = getActorStatesInternal();
                log('Saved state' + JSON.stringify(stateCache));
            }
        },
        restoreState = function(){
            if (stateCache !== null) {
                var newstate = stateCache;
                stateCache = null;
                log('Restoring state' + JSON.stringify(newstate));
                $.each(newstate, function(key, value){
                    hue.setXYState(value.key,value.state.xy, 0, value.state.bri);
                });
                hue.heartbeat();// force refresh from bridge
            }
        },
        executeOnActors = function(func){
            sceneCmd.stop();
            restoreState();

            var lampIds = hue.getLampIds(actors);
            if (!$.isArray(lampIds)) {
                lampIds = [lampIds];
            }
            $.each(lampIds, function(index, val){
                func(val, index);
            });
        },
        detectBrigthness = function(command){
            if (command.startsWith('bri:')) {
                return command.substring('bri:'.length);
            }
            return null;
        },
        log = function (text){
            if (logger !== null) {
                logger(text);
            }
        },
        getActorStatesInternal = function(actor){
            var lampIds = hue.getLampIds(actors);
            var state = window.hue.getState();
            var actorStates= [];
            if (state.lights !== null) {
                $.each(state.lights, function(key, lamp) {
                    if (lampIds.indexOf(key) !== -1) {
                        log('Lights: ' + key  + 
                            ', name: ' + lamp.name + 
                            ', reachable: ' + lamp.state.reachable + 
                            ', on: ' + lamp.state.on);
                        lamp.key = key;
                        actorStates.push(lamp);
                    }
                });
            } 
            return actorStates;
        },
        getActorBrightnessInternal = function() {
            var bri = 0;
            var actors = getActorStatesInternal();
            $.each(actors, function(key, lamp){
                if (lamp.state.bri > bri) {
                  bri = lamp.state.bri;
                }
            });
            return bri;
        },
        getActorTurnedOn = function() {
            var on = false;
            var actors = getActorStatesInternal();
            $.each(actors, function(key, lamp){
                on = on || lamp.state.on;
            });
            return on;
        };
        
 
    return {
        setActor: function(actor) {
            actors = actor;
        },
        getActor: function(actor) {
            return actors;
        },
        getActorBrightness: function() {
            return {
                bri: getActorBrightnessInternal(), 
                on: getActorTurnedOn() 
            };
        },
        getActorStates: function(actor) {
            return getActorStatesInternal(actor);
        },
        command: function(commandText) {
            executeCommand(commandText);
        },
        setLogger: function(logHandler) {
            logger = logHandler;
        }
    };
};
