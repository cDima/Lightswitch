"use strict";function initVoice(){null===huevoice&&(huevoice=voice()),huevoice.available()&&$("#voice-control").hide(),$("#voice-mic").click(toggleVoice)}function toggleVoice(){var e=$("#voice-mic");e.toggleClass("active");var o=voiceCommander(voiceCmdProxy);e.hasClass("active")?huevoice.recognize(o.react,voiceError,voiceEnd)&&(huevoice.speak("Enabling voice commands"),huevoice.start()):(huevoice.speak("Voice commands disabled"),huevoice.stop())}function voiceCmdProxy(e,o,i,c){$("#voice-feedback").html(""),$("#voice-feedback").html('<i class="voice-fade ">'+e+"</i>");var n={voiceCmd:{text:e,match:o,action:i,actor:c}};sendToMothership(n)}function sendToMothership(e){chrome.runtime.sendMessage(editorExtensionId,e),chrome.runtime.sendMessage(editorExtensionIdProd,e)}function voiceError(e){var o=$("#voice-mic");o.removeClass("active"),console.error(e)}function voiceEnd(){var e=$("#voice-mic");e.removeClass("active"),console.log("voice end")}function voiceCmdFunc(e,o,i,c){voiceCmdProxy(e,o,i,c)}var huevoice=null,editorExtensionId="bkjobgdhkjdholiipmcdbaefnoacfkcc",editorExtensionIdProd="ahcbfmbmpojngalhbkkggbfamgmkneoo";$(function(){initVoice(),toggleVoice()});