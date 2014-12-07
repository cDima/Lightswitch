/**
 * Dmitry Sadakov's Philips Hue api wrapper background page
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved.
 */
'use strict';
/*global hue:false, sceneCommander:false */
window.hue = hue(window.jQuery, window.colors);
window.hue.findBridge();
window.sceneCmd = sceneCommander(window.jQuery, window.hue);
