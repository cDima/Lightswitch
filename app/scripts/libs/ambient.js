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
		publicMethods = {};

	// fields
	publicMethods.on = false;
	publicMethods.updateImage = false;

	function onImageUpdated(image) {
		if (image === undefined) {
			return;
		}

		var img = new Image();
		img.src = image;

		// get main colors
		var colorThief = new ColorThief();
		var colors = colorThief.getPalette(img, 8);

		dominantColors = [];

		colors.forEach(function(color){
			dominantColors.push(
				colorUtil().rgbToHex(
				    color[0],
					color[1],
					color[2]
				)
			  );
		});

		updateHandlers.forEach(function(handler) {
			handler(dominantColors, image);
		});

		/*if (this.on) {
			hueCommander.command(
		  colorUtil().rgbToHex(
		    colors[0][0],
				colors[0][1],
				colors[0][2])
		  );
		}*/

		// do it again
		setTimeout(function() {
			if (publicMethods.on || publicMethods.updateImage) {
				requestImage();
			}
		}, 200);
	}

	function requestImage(){

    	if (chrome.runtime.lastError) {
        	console.log(chrome.runtime.lastError.message);
        	return;
        }
		if (chrome !== null && 
			chrome.tabs !== undefined && 
			chrome.tabs.captureVisibleTab !== undefined) {
			chrome.tabs.captureVisibleTab({quality:30}, onImageUpdated);	
			return true;
		}
		return false;
	}

	publicMethods.run = function() {
		return requestImage();
	};
	publicMethods.onUpdate = function(func){
		updateHandlers = []; // clear for now, memory might go unused on multi-timed open popup
		updateHandlers.push(func);
	};
	publicMethods.getDominantColors = function (colorCount) {
	    return dominantColors;
	};

	return publicMethods;
})();

