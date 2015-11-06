/**
 *  Copyright 2015 Dmitry Sadakov. All rights reserved.
 */

'use strict';

class $lite {
 	static ajax(options) {
		var url = options.url;
		var type = options.type || 'GET';
		var headers = options.headers || {} ;
		var body = options.data || null;
		var timeout = options.timeout || 1000;
		var success = options.success || function(err, data) {
			console.log('options.success was missing for this request');
		};
		var contentType = options.contentType || 'application/json';
		var error = options.error || function(err, data) {
			console.log('options.error was missing for this request');
		};

		if (!url) {
			throw 'loadURL requires a url argument';
		}

		var xhr = new XMLHttpRequest();
		xhr.contentType = 'json';
		xhr.timeout = timeout;
		xhr.ontimeout = function(){
			//error(xhr, 'timeout', xhr.response);
		}
		xhr.onreadystatechange = function() {
			try {
			  if (xhr.readyState === 4) {
			  	if (xhr.contentType === 'json') {
			  		if (xhr.responseText == "") {
						xhr.responseJSON = null;
			  		} else {
				  		xhr.responseJSON = JSON.parse(xhr.responseText);
				  	}
		  		}
			    if (xhr.status === 200) {
		    	 	success(xhr.responseJSON || xhr.responseText, 'success', xhr);
		    	} else if (xhr.status === 0) {
		    		error(xhr.responseJSON || xhr.responseText, 'timeout', xhr.response);
			    } else {
			      error(xhr.responseJSON || xhr.responseText, 'error', xhr.response);
			    }
			  }
			} catch (err) {
			  console.error(`Aborting request ${url}. Error: ${err}`);
			  xhr.abort();
			  error(xhr, 'error', xhr.response);
			}
		};

		xhr.open(type, url, true);

		xhr.setRequestHeader('Content-Type', contentType);
		xhr.setRequestHeader('Accept', 'application/json, text/javascript, */*');

		Object.keys(headers).forEach(function(key) {
			xhr.setRequestHeader(key, headers[key]);
		});

		console.log("$lite sending: " + url);
		if(!body) {
		  	xhr.send();
		} else {
			xhr.send(body);
		}

		return xhr;
	}
}
