// Dmitry Sadakov 2015 Voice module
/*globals 
          SpeechSynthesisUtterance: false
*/

/*exported voice */
var voice = function ($, hue, colorUtil, sceneCmd) { 
    
    'use strict';
	
	var recognition = null;
	var callback = null;

	function speak(text){
		if ('speechSynthesis' in window) {
	      var speech = new SpeechSynthesisUtterance();
	      speech.lang = 'en-US';
	      speech.text = text;
	      window.speechSynthesis.speak(speech);
	  }
	}

	
	function recognize(continuous, callbackFunc) { 
		callback = callbackFunc;
	    recognition.continuous = continuous;
	    recognition.interimResults = false;

		var SpeechRecognition = window.SpeechRecognition ||
                            window.webkitSpeechRecognition ||
                            window.mozSpeechRecognition ||
                            window.msSpeechRecognition ||
                            window.oSpeechRecognition;

	    if (SpeechRecognition !== undefined) {
	        recognition = new SpeechRecognition();
	    }
	    else {
	        console.error('Your browser does not support the Web Speech API');
	        return null;
	    }

        recognition.addEventListener('result', onSpeachResult);
    }

    function onSpeachResult(e) {
    	var text = '';
        for (var i = e.resultIndex; i < e.results.length; ++i) {
            text += e.results[i][0].transcript;
        }
        if (callback) {
        	callback(text);
        }   
    }

    function start() {
    	if (recognition) {
        	recognition.start();
    	}
    }

    function stop() {
    	if (recognition) {
        	recognition.stop();
    	}
    }

    function abort() {
    	if (recognition) {
        	recognition.abort();
    	}
    }


    return {
        speak: function(text) {
            return speak(text);
        },
        recognize: function() {
            return recognize();
        },
        start: function() {
            return start();
        },
        stop: function() {
            return stop();
        },
        abort: function() {
            return abort();
        }
    };
};
