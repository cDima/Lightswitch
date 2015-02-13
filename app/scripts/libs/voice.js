// Dmitry Sadakov 2015 Voice module
/*globals 
          SpeechSynthesisUtterance: false
*/

/*exported voice , Reaction */
'use strict';

var Reaction = function() {
	var items = [];
    var otherwise = null;

    function on(regex, func){
    	items.push([regex, func]);
    }

    function setDefault(func) {
    	otherwise = func;
    }

    function react(text) {
	    for (var item in items) {
	        if (items[item][0].test(text)) {
		        var args = items[item][0].exec(text);
		        args.unshift(text);
		        var func = items[item][1];
		        func.apply(null, args);
		        return;
		    }
	    }

	    if (otherwise) {
	      otherwise.apply(null, [text]);
	    }
	}

    return {
        on: function(text, func) {
            on(text, func);
        },
    	react: function(text) {
    		react(text);
    	},
    	setDefault: function(text) {
    		setDefault(text);
    	}
    };
};

var voice = function () { 
    
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

    function available() {
        var SpeechRecognition = window.SpeechRecognition ||
                            window.webkitSpeechRecognition ||
                            window.mozSpeechRecognition ||
                            window.msSpeechRecognition ||
                            window.oSpeechRecognition;
        return SpeechRecognition;
    }
	
	function recognize(callbackFunc) { 
		callback = callbackFunc;

		var SpeechRecognition = available();
	    if (SpeechRecognition !== undefined) {
	        recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = false;
            recognition.addEventListener('result', onSpeachResult);
            return recognition;
	    }
	    else {
	        console.error('Your browser does not support the Web Speech API');
	        return null;
	    }
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
        recognize: function(func) {
            return recognize(func);
        },
        start: function() {
            return start();
        },
        stop: function() {
            return stop();
        },
        abort: function() {
            return abort();
        }, 
        available: function () {
            return available() === undefined;
        }
    };
};

