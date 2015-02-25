/**
 * Dmitry Sadakov's Philips Hue app
 */

'use strict';

/* globals chrome */
/*exported hueProxy
*/

var hueproxy = function(hueCommander) {

    function sendToMothership(obj, callback){

        if (hueCommander) {
            hueCommander.parse(obj, callback);
        } else {
            var editorExtensionId = 'bkjobgdhkjdholiipmcdbaefnoacfkcc';
            var editorExtensionIdProd = 'ahcbfmbmpojngalhbkkggbfamgmkneoo';
            chrome.runtime.sendMessage(editorExtensionId, obj, callback);
            chrome.runtime.sendMessage(editorExtensionIdProd, obj, callback);
        }
    }

    function hueCommand(command, args, callback) {
        var obj = {
            hueCommand: {
                command: command,
                args: args
            }
        };
        sendToMothership(obj, callback);
    }

    return {
        hueCommand: hueCommand,
        sendToMothership: sendToMothership
    };
}