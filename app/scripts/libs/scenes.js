/**
 * Scene Commander
 * Dependencies:
 *    - jQuery 1.8.3
 *    - colors.js (packaged alongside this file)
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved. */

/*globals $:false, Palettes:false */
/*exported scenes */

'use strict';

var scenes = {
    'RelaxedRandom': {
        interval: 2000,
        Palette: Palettes.RomanticRed,
        update: function(numberOfLampsIn) {
            return scenes.randomPallete(numberOfLampsIn, this.Palette);
        }
    },
	'Romantic Red': {
		interval: 2000,
		Palette: Palettes.RomanticRed,
		update: function(numberOfLampsIn) {
			return scenes.randomPallete(numberOfLampsIn, this.Palette);
		}
	},
	'Sunrise': {
		interval: 5000,
		Palette: Palettes.Sunrise,
		update: function(numberOfLampsIn) {
            scenes.Sunrise.index++;
            if (scenes.Sunrise.index >= this.Palette.length){
                scenes.Sunrise.index = 0;
            }
			return scenes.cycle(numberOfLampsIn, this.Palette, scenes.Sunrise.index);
		},
        index: 0
	},
	'Disco': {
		interval: 100,
		Palette: Palettes.Rainbow,
		update: function(numberOfLampsIn) {
			return scenes.randomPallete(numberOfLampsIn, this.Palette);
		}
	},
    'Thanksgiving': {
        interval: 2000,
        Palette: Palettes.Thanksgiving,
        update: function(numberOfLampsIn) {
            return scenes.randomPallete(numberOfLampsIn, this.Palette);
        }
    },
    'TurkeyFeast': {
        interval: 5000,
        Palette: Palettes.TurkeyFeast,
        update: function(numberOfLampsIn) {
            return scenes.randomPallete(numberOfLampsIn, this.Palette);
        }
    },
    'TurkeyDinner': {
        interval: 1000,
        Palette: Palettes.TurkeyDinner,
        update: function(numberOfLampsIn) {
            return scenes.randomPallete(numberOfLampsIn, this.Palette);
        }
    },
    makeArray: function(numberoflamps){
        if (!$.isArray(numberoflamps)) {
            numberoflamps = [numberoflamps];
        }
        return numberoflamps;
    },
    cycle:  function(numberoflamps, palette, cycleIndex){
        numberoflamps = scenes.makeArray(numberoflamps);
        var lightStates = [];

        $.each(numberoflamps, function(index, val){
            var color = palette[cycleIndex]; 
            lightStates.push({lamp: val, color: color});
        });
        
        return lightStates;
    },
	randomPallete: function(numberoflamps, palette){
        numberoflamps = scenes.makeArray(numberoflamps);

        var lightStates = [];
        $.each(numberoflamps, function(index, val){
            var color = palette[Math.round(Math.random() * (palette.length - 1))]; // random
            lightStates.push({lamp: val, color: color});
        });
        
		return lightStates;
	}
};