/**
 * Scene Commander
 * Dependencies:
 *    - jQuery 1.8.3
 *    - colors.js (packaged alongside this file)
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved. */

/*globals $:false, Palettes:false, Ambient */
/*exported scenes */

'use strict';

var scenes = {
    'RelaxedRandom': {
        interval: 2000,
        Palette: Palettes.RomanticRed,
        update: function(lampIds) {
            return scenes.randomPallete(lampIds, this.Palette);
        }
    },
	'Romantic Red': {
		interval: 2000,
		Palette: Palettes.RomanticRed,
		update: function(lampIds) {
			return scenes.randomPallete(lampIds, this.Palette);
		}
	},
    'Valentines': {
        interval: 2000,
        Palette: Palettes.Valentines,
        update: function(lampIds) {
            return scenes.randomPallete(lampIds, this.Palette);
        }
    },
    'Christmas': {
        interval: 5000,
        Palette: Palettes.Christmas,
        update: function(lampIds) {
            return scenes.randomPallete(lampIds, this.Palette, 5);
        },
        index: 0
    },
    'NewYears': {
        interval: 500,
        Palette: Palettes.NewYears,
        update: function(lampIds) {
            var lightStates = [];
            $.each(lampIds, function(index, val){
                if (Math.random() > 0.6) {
                    var color = Palettes.NewYears[Math.round(Math.random() * (Palettes.NewYears.length - 1))]; // random
                    lightStates.push({lamp: val, color:color, bri: 255, transitionTime: 0});
                } else {
                    var random = Math.floor((Math.random()*(15-6+1)+6) );
                    lightStates.push({lamp: val, bri: -255, transitionTime: random});
                }
            });
            return lightStates;
        },
        index: 0
    },
    'Broadway': {
        interval: 500,
        Palette: Palettes.Broadway,
        update: function(lampIds) {
            scenes.Broadway.index++;
            if (scenes.Broadway.index >= lampIds.length){
                scenes.Broadway.index = 0;
            }
            return scenes.one(lampIds, this.Palette, scenes.Broadway.index, 0);
        },
        index: 0
    },
    'Police': {
        interval: 200,
        Palette: Palettes.Police,
        update: function(lampIds) {
            scenes.Police.index++;
            if (scenes.Police.index >= this.Palette.length){
                scenes.Police.index = 0;
            }
            return scenes.cycle(lampIds, this.Palette, scenes.Police.index, 0);
        },
        index: 0
    },
	'Sunrise': {
		interval: 5000,
		Palette: Palettes.Sunrise,
		update: function(lampIds) {
            scenes.Sunrise.index++;
            if (scenes.Sunrise.index >= this.Palette.length){
                scenes.Sunrise.index = 0;
            }
			return scenes.cycle(lampIds, this.Palette, scenes.Sunrise.index, 5);
		},
        index: 0
	},
	'Disco': {
		interval: 200,
		Palette: Palettes.Rainbow,
		update: function(lampIds) {
			return scenes.randomPallete(lampIds, this.Palette);
		}
	},
    'Thanksgiving': {
        interval: 2000,
        Palette: Palettes.Thanksgiving,
        update: function(lampIds) {
            return scenes.randomPallete(lampIds, this.Palette);
        }
    },
    'TurkeyFeast': {
        interval: 5000,
        Palette: Palettes.TurkeyFeast,
        update: function(lampIds) {
            return scenes.randomPallete(lampIds, this.Palette);
        }
    },
    'TurkeyDinner': {
        interval: 1000,
        Palette: Palettes.TurkeyDinner,
        update: function(lampIds) {
            return scenes.randomPallete(lampIds, this.Palette);
        }
    },
    'Patriots': {
        interval: 5000,
        index: 0,
        Palette: Palettes.SuperbowlPatriots,
        update: function(lampIds) {
            scenes.Patriots.index++;
            if (scenes.Patriots.index >= this.Palette.length){
                scenes.Patriots.index = 0;
            }
            return scenes.chain(lampIds, this.Palette, scenes.Patriots.index, 2);
        }
    },
    'Seahawks': {
        interval: 5000,
        index: 0,
        Palette: Palettes.SuperbowlSeahawks,
        update: function(lampIds) {
            scenes.Seahawks.index++;
            if (scenes.Seahawks.index >= this.Palette.length){
                scenes.Seahawks.index = 0;
            }
            return scenes.chain(lampIds, this.Palette, scenes.Seahawks.index, 2);
        }
    },
    'Ambient': {
        interval: 1000,
        Palette: Palettes.Empty,
        update: function(lampIds) {
            var lightStates = [];

            var dominantColors = Ambient.getDominantColors();
            $.each(lampIds, function(index, val){            
                var c = dominantColors[index];
                lightStates.push({
                    lamp: val, 
                    color: c.color, 
                    bri: c.bri, 
                    transitionTime: Ambient.getDelay()  * 10});
            });
            return lightStates;
        }
    },
    makeArray: function(lampIds){
        if (!$.isArray(lampIds)) {
            lampIds = [lampIds];
        }
        return lampIds;
    },
    one:  function(lampIds, palette, cycleIndex, transitionTime){
        lampIds = scenes.makeArray(lampIds);
        var lightStates = [];
        $.each(lampIds, function(index, val){
            if (index === cycleIndex) {
                lightStates.push({lamp: val, color: palette[1], transitionTime: transitionTime * 10});
            } else {
                lightStates.push({lamp: val, color: palette[0], transitionTime: transitionTime * 10});
            }
        });
        
        return lightStates;
    },
    chain:  function(lampIds, palette, cycleIndex, transitionTime){
        lampIds = scenes.makeArray(lampIds);
        var lightStates = [];
        var chain = cycleIndex;
        $.each(lampIds, function(index, val){
            chain++;
            if (palette.length <= chain) {
                chain = 0; // need to circle back if length larger
            }
            var co = palette[chain]; 
            lightStates.push({lamp: val, color: co, transitionTime: transitionTime * 10});
        });
        
        return lightStates;
    },
    cycle:  function(lampIds, palette, cycleIndex, transitionTime){
        lampIds = scenes.makeArray(lampIds);
        var lightStates = [];
        var color = palette[cycleIndex]; 

        $.each(lampIds, function(index, val){            
            lightStates.push({lamp: val, color: color, transitionTime: transitionTime * 10});
        });
        
        return lightStates;
    },
	randomPallete: function(lampIds, palette, transitionTime){
        lampIds = scenes.makeArray(lampIds);

        var lightStates = [];
        $.each(lampIds, function(index, val){
            var color = palette[Math.round(Math.random() * (palette.length - 1))]; // random
            lightStates.push({lamp: val, color: color, transitionTime: transitionTime * 10});
        });
        
		return lightStates;
	}
};