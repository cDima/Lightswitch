// Dmitry Sadakov 2015 Voice module
/*globals 
          SpeechSynthesisUtterance: false
*/

/*exported voice , lightCmdParser */
'use strict';

var reaction = function() {
	var items = [];
    var filters = [];
    var otherwise = null;

    function on(regex, func){
    	items.push([regex, func]);
    }

    function filterAdd(func){
        filters.push(func);
    }

    function setDefault(func) {
    	otherwise = func;
    }

    function react(text) {
        for (var filter in filters) {
            text = filter(text);
        }
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
    	},
        filter: function(func) {
            filterAdd(func);
        }
    };
};

var voice = function () { 
    
 	var recognition = null;
	var callback = null;
    var errfunc = null;
    var endfunc = null;

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
	
	function recognize(callbackFunc, err, onend) { 
		callback = callbackFunc;
        errfunc = err;
        endfunc = onend;

		var SpeechRecognition = available();
	    if (SpeechRecognition !== undefined) {
            if (recognition === null) {
	            recognition = new SpeechRecognition();
           } else {
                return recognition;
           }
        }
	    else {
	        console.error('Your browser does not support the Web Speech API');
	        return null;
	    }
        recognition.continuous = true;
        recognition.interimResults = false;
        recognition.onresult = onSpeechResult;
        recognition.onstart = onStarted;
        recognition.onerror = onErrored;
        recognition.onend = onEnd;
        return recognition;
    }

    function onStarted(){
        console.log('voice started');
    }

    function onErrored(err){
        console.log('voice error: ' + err);
        if (errfunc) {
            errfunc(err);
        }
    }

    function onEnd(){
        console.log('voice end');
        //recognition.start();
        if (endfunc) {
            endfunc();
        }
    }

    function onSpeechResult(e) {
    	var text = '';
        for (var i = e.resultIndex; i < e.results.length; ++i) {
            text += e.results[i][0].transcript;
        }

        console.log('voice:' + text);

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
        recognize: function(func, errfunc, endfunc) {
            return recognize(func, errfunc, endfunc);
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


function lightCmdParser(voiceCmd, sceneCmd, toggleSceneCmd, setValCmd, feedback) {
    var cmds = new reaction();
    //cmds.on(/.+/, voiceCmd);
    cmds.filter(/the /, function(text) {
      return text.replace(/the /g, '');
    });
    cmds.on(/(?:turn )?(?:lights )?(on|off|up|down)/, voiceCmd);
    cmds.on(/(?:turn )(dim down|dim|on|off|lighten|down|up|brighten)?(([a-z ]+)*?) light(?:s)?/, voiceCmd);
    //cmds.on(/turn (up|down|on|off) ([a-z]+)*?) light(?:s)?/, voiceCmd);
    cmds.on(/set(?: the )?([a-z ]*?) light(?:s)? to ([a-z0-9% ]*)(?: brightness| percent)*?/, setValCmd);//|state, entity|
    cmds.on(/make it look like (?:a )?(.+)/, sceneCmd);
    cmds.on(/(start|stop) (?:dynamic |light )? (scene|theme|animation)/, toggleSceneCmd);
    cmds.setDefault(function (text) {
        feedback(text);
    });
    return cmds;
}
