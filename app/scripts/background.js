/**
 * Dmitry Sadakov's Philips Hue api wrapper background page
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved.
 */
'use strict';

/*global hue:false, sceneCommander:false, config:false */

/*exported hasAllUrlAccess, requestAmbientPermission,  */

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


// onstart hide permissions.

function requestAmbientPermission(callback){
    // Permissions must be requested from inside a user gesture, like a button's click handler.
    chrome.permissions.request({
      permissions: ['tabs'],
      origins: ['<all_urls>']
    }, callback);
}

function hasAllUrlAccess(success, mayRequest){
	chrome.permissions.contains({
	      permissions: ['tabs'],
	      origins: ['<all_urls>']
	    }, function(result) {
	      if (result) {
	        // The extension has the permissions.
	        if (success !== null) {
	          success();
	        }
	      } else {            
	         //log('The extension doesn\'t have the permissions.');
        }
    });
}