/**
 * Dmitry Sadakov's Philips Hue app
 */

'use strict';

/* globals chrome */
/*exported hueProxy
*/

var hueProxy = function(hueCommander) {

    function sendToMothership(obj, args, callback){
        if (hueCommander) {
            var result = hueCommander.parse(obj, args);
            if (result && callback) {
                callback(result);
            }
        } else {
            var editorExtensionId = 'bkjobgdhkjdholiipmcdbaefnoacfkcc';
            //var editorExtensionIdProd = 'ahcbfmbmpojngalhbkkggbfamgmkneoo';
            chrome.runtime.sendMessage(editorExtensionId, obj, callback);
            //chrome.runtime.sendMessage(editorExtensionIdProd, obj, callback);
        }
    }

    function hueCommand(command, args, callback) {
        if (typeof(args) === 'function') {
            // reorder arguments if second is skipped
            callback = args;
            args = undefined;
        }
        var obj = {
            hueCommand: {
                command: command,
                args: args
            }
        };
        sendToMothership(obj, args, callback);
    }

    return {
        cmd: hueCommand,
        sendToMothership: sendToMothership
    };
};
// Dmitry Sadakov 2015 Voice standalone 
/*globals  $, voiceCommander, voice, sendToMothership */

/*exported huevoice, voiceCmdFunc */
'use strict';

/*   voice commands */
var huevoice = null;

function initVoice() {
  if (huevoice === null) {
    huevoice = voice();
  }
  if (huevoice.notAvailable()) {
    $('#voice-control').hide();
  }

  $('#voice-mic').click(toggleVoice);
}


function toggleVoice() {
  var mic = $('#voice-mic');
  mic.toggleClass('active');
  var parser = voiceCommander(voiceCmdProxy);
  if (mic.hasClass('active')) {
    if (huevoice.recognize(parser.react, voiceError, voiceEnd)) {
      huevoice.speak('Enabling voice commands');
      huevoice.start();
    }
  } else {
    huevoice.speak('Voice commands disabled');
    huevoice.stop();
  }
}



function voiceCmdProxy(text, match, action, actor) {

    $('#voice-feedback').html('');
    $('#voice-feedback').html('<i class="voice-fade ">' + text + '</i>');

    // Make a simple request:
    var obj = {
        voiceCmd: {
            text: text,
            match: match,
            action: action,
            actor: actor
        }
    };
    sendToMothership(obj);
}


function voiceError(err){
  var mic = $('#voice-mic');
  mic.removeClass('active');
  console.error(err);
  //sendToMothership({voiceErr: err});
}

function voiceEnd(){
  var mic = $('#voice-mic');
  mic.removeClass('active');
  console.log('voice end');
  //sendToMothership({voiceEnd: true});
}

$(function(){
    initVoice();
    toggleVoice(); // auto request listen    
});

function voiceCmdFunc(text, match, action, actor) {
    voiceCmdProxy(text, match, action, actor);
}