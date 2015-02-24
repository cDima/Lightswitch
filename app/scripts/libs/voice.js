// Dmitry Sadakov 2015 Voice module
/*globals 
    SpeechSynthesisUtterance: false,
    trackEvent
*/
/*exported voice, voiceCommander, huevoice, voiceCmd */
'use strict';

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
            speak('Voice not supported');
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
        trackEvent('voice', 'started');
    }

    function onErrored(err){
        console.log('voice error: ' + err);
        if (errfunc) {
            errfunc(err);
        }    
        trackEvent('voice', 'error', err.message);
    }

    function onEnd(){
        console.log('voice end');
        trackEvent('voice', 'end');
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
        trackEvent('voice', 'speech', text);

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
        notAvailable: function () {
            return available() === undefined;
        }
    };
};


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
        var textIn = text;
        for (var index in filters) {
            text = filters[index](text);
        }
        
        var obj = {'voice': true, 'text': textIn, 'text-reaction': text, match: false};
        for (var item in items) {
            if (items[item][0].test(text)) {
                console.log('filtered text: "' + textIn + '" -> "' + text +'" matched: ' + items[item][0]);
                obj.match = items[item][0];
                trackEvent('voice', 'reaction', text, textIn, obj);
                var args = items[item][0].exec(text);
                args.unshift(text);
                var func = items[item][1];
                func.apply(null, args);
                return;
            }
        }
        console.log('filtered text: "' + textIn + '" -> "' + text +'", no match');
        trackEvent('voice', 'reaction', text, textIn, obj);
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

var voiceCommander = function (voiceFunc) {
    var voiceCallback = voiceFunc;

    function lightCmdParser() {
        var cmds = new reaction();
        cmds.filter(removeDeterminers);
        cmds.filter(replaceLightSynonyms);
        cmds.filter(replaceSceneSynonyms);
        cmds.filter(replaceCommandSynonyms);

        cmds.on(/make it look like (?:a )?(.+)/, sceneCmd);
        cmds.on(/(?:start |stop )(?:dynamic )?([a-z ]+)(?: scene| lights)?(?: in )([a-z ]+)/, toggleSceneCmd);
        cmds.on(/(start|stop)(?: dynamic)?(?: scene| lights)?/, toggleSceneCmd);
        cmds.on(/(?:set|up|dim) ([a-z ]+) to ([a-z0-9%]*)(?: brightness)?/, inverseCmd);
        cmds.on(/(?:set|up|dim) to ([a-z0-9%]*)(?: brightness)?/, voiceCmd);
        cmds.on(/(on|off|up|dim)+? ([a-z]+)+/, voiceCmd);
        cmds.on(/([a-z0-9% ]*) brightness/, inverseCmd);
        cmds.on(/([a-z]+) (on|off|up|dim|dimmer)+?/, inverseCmd);
        cmds.on(/(on|off|up|dim|dimmer)+ ([a-z]+)/, voiceCmd);
        cmds.on(/(on|off|up|down|dim|lower|higher)/, voiceCmd);
        cmds.setDefault(function (text) {
            voiceCallback(text);
        });
        return cmds;
    }

    function removeDeterminers(text) {
      return text.replace(/the |my /g, '');
    }

    function replaceLightSynonyms(text) {
      return text.replace(/bulbs |lamps |lights | lights?/g, '');
    }

    function replaceCommandSynonyms(text) {
      text = text.replace(/ percent/g, '%');
      text = text.replace(/maximum/g, '100%');
      text = text.replace(/minimum/g, '1%');
      text = text.replace(/turn /g, '');
      text = text.replace(/dim down|down|dimmer/g, 'dim');
      text = text.replace(/animate|continue/g, 'start');
      text = text.replace(/brighten|lighten/g, 'up');
      return text;
    }

    function replaceSceneSynonyms(text) {
      return text.replace(/animation|theme/g, 'scene');
    }

    function voiceCmd(text, match, action, actor) {
        if (voiceCallback) {
            voiceCallback(text, match, action, actor);
        }
    }
    
    //function inverseSceneCmd(text, match, actor, action) {
    //  voiceCmd(text, match, 'scene:' + action, actor);
    //}

    function toggleSceneCmd(text, match, action, actor) {
      voiceCmd(text, match, 'scene:' + action, actor);
    }

    function inverseCmd(text, match, actor, action) {
      voiceCmd(text, match, action, actor);
    }

    function sceneCmd(text, match, action, actor) {
      voiceCmd(text, match, 'scene:' + action, actor);
    }

    return lightCmdParser();
};



/*   voice commands */
var huevoice = null;

/*
function voiceError(err){
  var mic = $('#voice-mic');
  mic.removeClass('active');
  console.error(err);
}

function voiceEnd(){
  var mic = $('#voice-mic');
  mic.removeClass('active');
  console.log('voice end');
}*/


function voiceCmd(text, match, action, actor) {
    if (window.voiceCmdFunc) {
        window.voiceCmdFunc(text, match, action, actor);
    }
}