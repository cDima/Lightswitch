/*
  Ambient Class  
  (c) 2014, Dmitry Sadakov, all rights reserved
*/

'use strict';
/*globals ColorThief, chrome, colorUtil*/
/*exported Ambient*/


var Ambient = (function () {

    var dominantColors  = [],
	    updateHandlers = [],
		publicMethods = {}, 
		lastUpdate = null;

	// fields
	publicMethods.on = false;
	publicMethods.updateImage = false;
	publicMethods.changeBrightness = false;
	publicMethods.enablePrimary = false;
	publicMethods.mode = 'eye-ambient';

	function parseBrightness(color){
		var helper = colorUtil();
		if (publicMethods.changeBrightness) {
			return helper.getBrightness(color);
		} else {
			return undefined;
		}
	}

	function onImageUpdated(image) {
		if (image === undefined) {
			return;
		}
		if (chrome.runtime.lastError) {
        	console.log(chrome.runtime.lastError.message);
        	chrome.runtime.lastError = null;
        } else {
			var img = new Image();
			img.src = image;

			// get main colors
			var colorThief = new ColorThief();
			var colors = colorThief.getPalette(img, 8);

			lastUpdate = new Date();

			dominantColors = [];
			var helper = colorUtil();

			if (publicMethods.enablePrimary) {
				var primary = helper.rgbToHex(
						    colors[0][0],
							colors[0][1],
							colors[0][2]
						);
				var bri = parseBrightness(primary);
				
				// thrice for ui.
				var color = {color: primary, bri: bri};
				dominantColors.push(color);
				dominantColors.push(color);
				dominantColors.push(color);

			} else {
				colors.forEach(function(color){
					var hex = helper.rgbToHex(
						    color[0],
							color[1],
							color[2]
						);
					var b = parseBrightness(hex);
					dominantColors.push({ color: hex, bri: b });
				});
			}

			updateHandlers.forEach(function(handler) {
				handler(dominantColors, image);
			});
		}

		// do it again
		setTimeout(retryRequestImage, getDelay() * 1000);
	}

	function retryRequestImage(){	
		if (publicMethods.on || publicMethods.updateImage) {		
			try {
				requestImage();
			} catch(e) {
				setTimeout(retryRequestImage, 1000);
				console.log(e);
			}
		}
	}

	function requestImage(){
    	if (chrome.runtime.lastError) {
        	console.log(chrome.runtime.lastError.message);
        	return;
        }
		if (typeof(chrome) !== 'undefined' && 
			chrome.tabs !== undefined && 
			chrome.tabs.captureVisibleTab !== undefined) {
			chrome.tabs.captureVisibleTab({quality:1}, onImageUpdated);	
			return true;
		}
		return false;
	}

	function getDelay(){
		switch(publicMethods.mode) {
		    case 'eye-ambient':
		        return 10;
		    case 'eye-work':
		        return 5;
		    case 'eye-movie':
		        return 1;
		    case 'eye-gaming':
		        return 0;
		    default:
		        return 1;
		}
	}

	publicMethods.definedBrightness = function() {
		if (publicMethods.changeBrightness === false) {
			return 255; // always bright
		}
		return undefined;
	};
	publicMethods.run = function() {
		return requestImage();
	};
	publicMethods.onUpdate = function(func){
		updateHandlers = []; // clear for now, memory might go unused on multi-timed open popup
		updateHandlers.push(func);
	};
	// in seconds
	publicMethods.getDelay = function(){ 
		return getDelay();
	};
	publicMethods.getDominantColors = function (colorCount) {
		if ((new Date() - lastUpdate) > (getDelay() * 1000)) { // if more than delay
			retryRequestImage();
		}
	    return dominantColors;
	};

	return publicMethods;
})();

