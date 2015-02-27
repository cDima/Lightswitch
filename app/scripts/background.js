/**
 * Dmitry Sadakov's Philips Hue api wrapper background page
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved.
 */
'use strict';

/*global 
	$, 
	hue:false,
 	sceneCommander:false, 
 	config:false, 
 	voiceCmd, 
 	findActors, 
 	setActor, 
 	huevoice, 
 	executeCommand,
 	hueCommander,
 	colorUtil, 
 	sceneCmd
 */

/*exported hasAllUrlAccess, requestAmbientPermission, voiceCmdFunc */


//$(document).ready(function(){
window.hue = hue(window.jQuery, window.colors);
window.hue.findBridge();
window.sceneCmd = sceneCommander(window.jQuery, window.hue);
window.hueCommander = hueCommander(window.jQuery, window.hue, colorUtil(), sceneCmd);

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


// listen to external voices
chrome.runtime.onMessageExternal.addListener(onExternal);

function onExternal(request, sender, sendResponse) {
  console.log('onExternal');
  if (request.voiceCmd) {
    console.log(request.voiceCmd.text + ',' +
      request.voiceCmd.match + ',' +
      request.voiceCmd.action + ',' +
      request.voiceCmd.actor
      );
    voiceCmd(request.voiceCmd.text,
      request.voiceCmd.match,
      request.voiceCmd.action,
      request.voiceCmd.actor);
  }
  if (request.hueCommand) {
    console.log('onExternal:' + request.hueCommand.command + ',' + request.hueCommand.args);
    
    var result = hueCommander.parse(request);
    if(sendResponse) {
      console.log('sending response to onExternal');
      sendResponse(result);
    }
  }
}



function voiceCmdFunc(text, match, action, actor) {
  try {
    
    if (actor !== undefined) {
      var actorId = findActors(actor);
      if(actorId !== null) {
        setActor('group-' + actorId);
      } else {
        huevoice.speak('Cannot find the ' + actor + ' lights');
        return;
      }
    }
    
    if ($.inArray(action, ['on','off','dim','dim down','up','brighten','lighten','down','light up']) >= 0 || action.match('^scene:')) {
      executeCommand(action);
    }
  } catch (err){
    console.log(err);
    // nothing
  }
}
