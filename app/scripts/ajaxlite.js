/*
 *  Copyright 2015 Dmitry Sadakov. All rights reserved.
 */

'use strict';

class AjaxLite {
  static ajax(options) {
    var url = options.url;
    var type = options.type || 'GET';
    var headers = options.headers || {};
    var body = options.data || null;
    var timeout = options.timeout || 1000;
    var success = options.success || function() {
      console.log('options.success was missing for this request');
    };
    var contentType = options.contentType || 'application/json';
    var error = options.error || function() {
      console.log('options.error was missing for this request');
    };

    if (!url) {
      error(null, 'loadURL requires a url argument');
    }

    var xhr = new XMLHttpRequest();
    xhr.contentType = 'json';
    xhr.ontimeout = function() {
      //error(xhr, 'timeout', xhr.response);
    };
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.contentType === 'json') {
          if (xhr.responseText === '') {
            xhr.responseJSON = null;
          } else {
            try {
              xhr.responseJSON = JSON.parse(xhr.responseText);
            } catch (err) {
              console.error(`JSON parsing error: ${url}. Error: ${err}`);
              xhr.responseJSON = null;
            }
          }
        }
        if (xhr.status === 200) {
          success(xhr.responseJSON || xhr.responseText, 'success', xhr);
        } else if (xhr.status === 0) {
          // xhr.statusText = 'timeout';
          error(xhr, 'timeout', xhr.response);
        } else {
          error(xhr, 'error', xhr.response);
        }
      }
    
    };

    xhr.open(type, url, true);

    xhr.setRequestHeader('Content-Type', contentType);
    xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*');
    xhr.timeout = timeout;

    Object.keys(headers).forEach(function(key) {
      xhr.setRequestHeader(key, headers[key]);
    });

    console.log('AjaxLite sending: ' + url);
    if (body) {
      xhr.send(body);
    } else {
      xhr.send();
    }

    return xhr;
  }
}
