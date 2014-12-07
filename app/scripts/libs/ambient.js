/*
  Ambient Class  
  (c) 2014, Dmitry Sadakov, all rights reserved
*/

'use strict';
/*globals $, ColorThief, chrome, colorUtil*/
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

		$('#ambientpreview').attr('src', image);

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
			handler(dominantColors);
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
		if (chrome !== null && 
			chrome.tabs !== undefined && 
			chrome.tabs.captureVisibleTab !== undefined) {
			chrome.tabs.captureVisibleTab(null, {quality:50}, onImageUpdated);	
			return true;
		}
		return false;
	}

	publicMethods.run = function() {
		return requestImage();
	};
	publicMethods.onUpdate = function(func){
		updateHandlers.push(func);
	};
	publicMethods.getDominantColors = function (colorCount) {
	    return dominantColors;
	};

	return publicMethods;
})();

