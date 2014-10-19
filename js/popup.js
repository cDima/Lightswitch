/**
 * Dmitry Sadakov's Philips Hue api wrapper background page
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved.
 */

if (chrome !== null && chrome.extension != null) {
    console.log("loading as chrome extention popup");
    window.hue = chrome.extension.getBackgroundPage().hue;
 

} else {
    console.log("loading as no chrome, running as usual");
    window.hue = hue(window.jQuery, window.colors);
    window.hue.findBridge();
}


    //console.log(background.hue.status);
    //chrome.runtime.onMessage.addListener(function (message, sender, callback){
        // received message from hue backend
    //});
    console.log("client: binding to status change.");

    var statusText = "";

    window.hue.onStatusChange(function(status) {
        console.log("client: status changed - " + status.status);
        $('#connectStatus').html("<div class='intro-text'>" + status.text + "</div>");

        if (status.status == "OK") {
            $('#cmn-toggle-1').prop('disabled', false);
            if (statusText !== status.text) {
                statusText = status.text;
                $('#connectStatus').html("<div class='intro-text'>" + status.text + "</div>");
            }
            $('#cmn-toggle-1').prop('checked', status.data);
        } else {
            $('#cmn-toggle-1').prop('disabled', true);
            $('#cmn-toggle-1').prop('checked', false);
        }

        //updateStatus("BridgeNotFount", "Philip Hue lights not found.");
    });

    if (window.hue.status == "OK") $('#cmn-toggle-1').prop('checked', window.hue.status.data);
    //var heartbeat = setInterval(hue.heartbeat, 1000); // dies with closed popup.

    // if no hearbeat, then activate the fail button.
    /*if ($('#linkButton').length === 0) {
        $('#connectStatus') // Replace this selector with one suitable for you
            .append('<input type="button" id="linkButton" value="Push link button">') // Create the element
            .click(function(){ 
                addUser();
        }); // Add a click handler
    }*/

    $('#cmn-toggle-1').click(function(e){
        var turnOn = $('#cmn-toggle-1').is(':checked');
        if (turnOn) {
            window.hue.turnOnAll();
        } else {
            window.hue.turnOffAll();
        }
        trackButton(e);
    });

//Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-55863666-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function trackButton(e) {
    _gaq.push(['_trackEvent', e.target.id, 'clicked']);
  };
