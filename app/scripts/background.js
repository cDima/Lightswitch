/**
 * Dmitry Sadakov's Philips Hue api wrapper background page
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved.
 */
'use strict';

/*global hue:false, sceneCommander:false, config:false */

/*exported hasAllUrlAccess, requestAmbientPermission,  */


//$(document).ready(function(){
window.hue = hue(window.jQuery, window.colors);
window.hue.findBridge();
window.sceneCmd = sceneCommander(window.jQuery, window.hue);
if (config.app === 'app') {
	/* global chrome */
	if (chrome.app.runtime.onLaunched !== undefined) {
		chrome.app.runtime.onLaunched.addListener(function() {
		  chrome.app.window.create('index.html', {
		  	id: 'app',
		  	frame: 'none',
		  	resizable: false,
		    innerBounds: {
		      width: 320,
		      height: 140
		    }
		  });
		});
	}
}
//});
