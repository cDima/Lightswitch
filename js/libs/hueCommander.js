/**
 * Dmitry Sadakov's Philips Hue Commander wrapper, exposed as an AMD module.
 * Dependencies:
 *    - jQuery 1.8.3
 *    - colors.js (packaged alongside this file)
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved. */
 
var hueCommander = function ($, hue, colorUtil, sceneCmd) { 
    
    'use strict';
    
    var logger = null,
        actors = null,
        executeCommand = function(command) {
            if (logger != null) logger("executing command: " + command + " on actors: " + actors);

            if (command == "#brighten") hue.brightenAll(Math.floor(255 / 3));
            if (command == "#darken") hue.brightenAll(Math.floor(-255 / 3));

            var color = colorUtil.getColor(command);
            if (color != false) {
                sceneCmd.stop();
                var lights = hue.numberOfLamps(actors)
                if (!$.isArray(lights)) lights = [lights];
                $.each(lights, function(index, val){
                    hue.setColor(val, color.substring(1));
                });
            }

            if (command.lastIndexOf('scene:', 0) === 0) {                
                var sceneName = command.substring(6);
                sceneCmd.start(sceneName, actors);
            }
        },
        log = function (text){
            if (logger != null) logger(text)
        };
        
 
    return {
        setActor: function(actor) {
            actors = actor;
        },
        command: function(commandText) {
            executeCommand(commandText);
        },
        setLogger: function(logHandler) {
            logger = logHandler;
        }
    };
};
