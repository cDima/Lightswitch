/**
 * Dmitry Sadakov's Philips Hue Commander wrapper, exposed as an AMD module.
 * Dependencies:
 *    - jQuery 1.8.3
 *    - colors.js (packaged alongside this file)
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved. */

/*globals trackEvent, $, findActors */
/*exported 
    hueCommander,
    executeBrightness,
    executeHrefCommand,
    executeHrefCommand,
    executeCommand,
    executeToggle,
    activatedScene
 */
 
'use strict';

var hueCommander = function ($, hue, colorUtil, sceneCmd) { 
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

            if (actors === null) {
                // by default set all group
                var groupAll = findActors('All');
                if (groupAll === null) {
                  actors = 'group-1';
                } else {
                  actors = 'group-' + groupAll;
                }
            }

            if (command === undefined) {
                return;
            }
            if (command === 'brighten' || command === 'up') {
                //hue.brightenAll(Math.floor(255 / 3));
                executeOnActors(function(bulb){
                    hue.brighten(bulb, Math.floor(255 / 3));
                });            
            }
            if (command === 'darken' || command === 'dim' || command === 'dim down' || command === 'down') {
                //hue.brightenAll(Math.floor(-255 / 3));
                executeOnActors(function(bulb){
                    hue.dim(bulb, -Math.floor(255 / 3));
                });
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
            var json = parseJson(command);
            if (json !== null)
            {   
                // hue, sat, bri command:
                if('hue' in json) {
                    executeOnActors(function(bulb){
                        hue.setHueSatState(bulb, json.hue, json.sat, json.bri, json.time);
                    });
                    return;
                } else if('bri' in json) {
                    executeOnActors(function(bulb){
                       hue.setBrightness(bulb, json.bri);
                    });
                    return;
                } 
                //else if('color' in json) {
                //    hue.setColor(color.substring(1));
                //}
            }
            var bri = detectBrightness(command);
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
        parseJson = function(cmd){
            try {
                if (cmd.startsWith('{')) {
                    return JSON.parse(cmd);
                }
            }
            catch(ex)
            {
                log('Bad command:' + cmd + ' ex:' + ex.message);
            }
            return null;
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
        detectBrightness = function(command){
            if (command === undefined) {
                return null;
            }
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
            var actorStatesjQuery= [];
            if (state.lights !== null) {
                for(var i in state.lights) {
                    var lamp = state.lights[i];
                    lamp.key = i;
                    actorStates.push(lamp);
                }
                // each fails sometimes on ios safari
                $.each(state.lights, function (key, lamp) {
                    if (lampIds.indexOf(key) !== -1) {
                        lamp.key = key;
                        actorStatesjQuery.push(lamp);
                    }
                });
                // print perhaps fails?
                $.each(state.lights, function (key, lamp) {
                    log('Lights: ' + key  + 
                        ', name: ' + lamp.name + 
                        ', reachable: ' + lamp.state.reachable + 
                        ', on: ' + lamp.state.on);
                });
                log('ios safari actor count - js ' + actorStates.length + ' jq:' + actorStatesjQuery.length);
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
        }, 
        discover = function(){
            hue.discover();
        }, 
        onStatusChange = function(onStatus){
            hue.onStatusChange(onStatus);
        }, 
        setIp = function(ip){
            hue.setIp(ip);
        }, 
        heartbeat = function(){
            hue.heartbeat();
        },
        createGroup = function(name, lampIds){
            hue.createGroup(name, lampIds);
        },
        createGroup = function(key){
            hue.removeGroup(key);
        },
        refresh =  function(){
            hue.refresh();
        },
        flash = function(key){
            hue.flash(key);
        },
        getState = function(){
            return hue.getState();
        }
        ;
        
 
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
        }, 
        parse: function(cmd, args){
            return this[cmd](args);
        },
        discover: function() {
            discover();
        }, 
        onStatusChange: function(onStatus){
            onStatusChange(onStatus);
        },
        setIp: function(ip){
            setIp(ip);
        }, 
        heartbeat: function(){
            heartbeat();
        },
        createGroup: function(name, lampIds){
            createGroup(name, lampIds);
        },
        removeGroup: function(key){
            removeGroup(key);
        },
        refresh: function(){
            refresh();
        },
        flash: function(key){
            flash(key);
        },
        getState: function(){
            return getState();
        }
    };
};

function executeBrightness(val){
  window.hueCommander.command('bri:' + val);   
  return false;
}

function executeToggle(on){
  window.hueCommander.command(on ? 'on' : 'off');   
  return false;
}

function executeHrefCommand() {
  /*jshint validthis:true */
  var command = $(this).attr('href');
  executeCommand(command);
  return false;
}

function executeCommand(command) {
  window.hueCommander.command(command);
  //activatedScene('stop');
  return false; 
}

function activatedScene(key){
  $('#scenes button').removeClass('active');
  $('.scene').removeClass('active');
  $('#scenes button[id="' + key + '"]').addClass('active');
  $('.scene[data-scene="' + key + '"]').addClass('active');
}