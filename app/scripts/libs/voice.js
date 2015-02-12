// Dmitry Sadakov 2015 Voice module
/*globals 
          SpeechSynthesisUtterance: false
*/

/*exported voice , lightCmdParser*/
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
	        if (item[0].test(text)) {
		        var args = item[0].exec(text);
		        args.unshift(text);
		        var func = item[1];
		        func.apply(null, args);
		        return;
		    }
	    }

	    if (otherwise) {
	      otherwise.apply(null, [text]);
	    }
	}

    return {
    	on: function(text) {
    		on(text);
    	},
    	react: function(text) {
    		react(text);
    	},
    	setDefault: function(text) {
    		setDefault(text);
    	}
    };
};
 
function lightCmdParser() {
	var cmds = new Reaction();
	cmds.on(/\d+/, function(text, match) {
	    console.log(match);
	});
	cmds.on(/(to me)|(my issues)|(issues for me)/, function(text, match) {
	    console.log(match);
	});
	cmds.on(/criticals?/, function(text, match) {
	    console.log(match);
	});
	cmds.setDefault(function (text) {
	    console.log('not-found/#{text}');
	});
	return cmds;
}
  	

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
