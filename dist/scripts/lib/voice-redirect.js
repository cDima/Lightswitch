// Dmitry Sadakov 2015 Voice standalone 
/*globals  $, voiceCommander, voice, chrome */

/*exported huevoice, voiceCmdFunc */
'use strict';

/*   voice commands */
var huevoice = null;

function initVoice() {
  if (huevoice === null) {
    huevoice = voice();
  }
  if (huevoice.available()) {
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


var editorExtensionId = 'bkjobgdhkjdholiipmcdbaefnoacfkcc';
var editorExtensionIdProd = 'ahcbfmbmpojngalhbkkggbfamgmkneoo';

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

function sendToMothership(obj){
    chrome.runtime.sendMessage(editorExtensionId, obj);
    chrome.runtime.sendMessage(editorExtensionIdProd, obj);
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