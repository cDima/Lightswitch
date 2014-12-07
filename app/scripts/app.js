/**
 * Dmitry Sadakov's Philips Hue api wrapper app page
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved.
 */
'use strict';
/*global chrome */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('popup.html', {
  	id: 'main',
    innerBounds: {
      width: 320,
      height: 115
    }
  });
});