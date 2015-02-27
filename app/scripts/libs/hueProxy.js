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