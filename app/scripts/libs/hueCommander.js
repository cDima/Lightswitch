/**
 * Dmitry Sadakov's Philips Hue Commander wrapper, exposed as an AMD module.
 * Dependencies:
 *    - jQuery 1.8.3
 *    - colors.js (packaged alongside this file)
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved. */

/*globals trackEvent, $, findActors */
/*exported 
    hueCommander,
    executeCommand,
    activatedScene
 */
 
'use strict';

var hueCommander = function ($, hue, colorUtil, sceneCmd) { 
    
    var logger = null,
        actorId = null,
        stateCache = null,
        executeCommand = function(command) {
            log('executing command: ' + command + ' on actor: ' + actorId);
            trackEvent('huecommander', 'command', command);

            if (actorId === null) {
                // by default set all group
                var groupAll = findActors('All');
                if (groupAll === null) {
                  actorId = 'group-1';
                } else {
                  actorId = 'group-' + groupAll;
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
                return 'stop';
            } else {
                if (command.lastIndexOf('scene:', 0) === 0) {
                    var sceneName = command.substring(6);
                    var lampids = hue.getLampIds(actorId);

                    saveState();

                    sceneCmd.start(sceneName, lampids);
                    return sceneName;
                } else if (command.lastIndexOf('schedule:', 0) === 0) {
                    var scheduleId = command.substring('schedule:'.length);
                    hue.startSchedule(scheduleId);
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

            var lampIds = hue.getLampIds(actorId);
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
        getActorStatesInternal = function(){
            var lampIds = hue.getLampIds(actorId);
            var state = window.hue.getState();
            var actorStates= [];
            if (state.lights !== null) {
                for(var i in state.lights) {
                    var lamp = state.lights[i];
                    lamp.key = i;
                    if (lampIds.indexOf(i) !== -1) {
                        actorStates.push(lamp);
                    }
                }
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
        discover = function(ip){
            hue.discover(ip);
        }, 
        heartbeat = function(){
            hue.heartbeat();
        },
        createGroup = function(name, lampIds){
            hue.createGroup(name, lampIds);
        },
        removeGroup = function(key){
            hue.removeGroup(key);
        },
        createScene = function(key){
            var lampIds = hue.getLampIds(actorId);
            hue.createScene(key, lampIds);
        },
        refresh =  function(){
            hue.refresh();
        },
        flash = function(key){
            hue.flash(key);
        },
        getState = function(){
            var state = hue.getState();
            state.actorId = actorId;
            return state;
        },
        getStatus = function(){
            return hue.getStatus();
        },
        palette = function(colors){
            return sceneCmd.palette(colors);
        }
        ;
        
 
    return {
        setActor: function(actor) {
            actorId = actor;
            return actorId;
        },
        getActor: function(actor) {
            return actorId;
        },
        getActorBrightness: function() {
            return {
                bri: getActorBrightnessInternal(), 
                on: getActorTurnedOn() 
            };
        },
        getActorStates: function() {
            return getActorStatesInternal();
        },
        command: function(commandText) {
            return executeCommand(commandText);
        },
        setLogger: function(logHandler) {
            logger = logHandler;
        },
        discover: function(ip) {
            discover(ip);
        }, 
        heartbeat: function(){
            heartbeat();
        },
        createGroup: function(group){
            //name, lampIds){
            createGroup(group.name, group.lampIds);
        },
        removeGroup: function(key){
            removeGroup(key);
        },
        createScene: function(name){
            //name, lampIds){
            createScene(name);
        },
        refresh: function(){
            refresh();
        },
        flash: function(key){
            flash(key);
        },
        getState: function(){
            return getState();
        },
        getStatus: function(){
            return getStatus();
        }, 
        palette: function(colors) {
           return palette(colors); 
        },
        parse: function(cmd){
            return this[cmd.hueCommand.command](cmd.hueCommand.args);
        }
    };
};


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

function activatedSchedule(key){
  $('#schedule button').removeClass('active');
  $('.schedule').removeClass('active');
  $('#schedule button[id="schedule-' + key + '"]').addClass('active');
  $('.schedule[data-schedule="' + key + '"]').addClass('active');
}