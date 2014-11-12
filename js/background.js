/**
 * Dmitry Sadakov's Philips Hue api wrapper background page
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved.
 */


//var back = chrome.extention.getBackgroundPage()
window.hue = hue(window.jQuery, window.colors);
window.hue.findBridge();
window.sceneCmd = sceneCommander(window.jQuery, window.hue);

//var heartbeat = setInterval(window.hue.heartbeat, 500);
//chrome.browserAction.setPopup('')

//Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-55863666-2']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function trackButton(e) {
    _gaq.push(['_trackEvent', e.target.id, 'clicked']);
  };
