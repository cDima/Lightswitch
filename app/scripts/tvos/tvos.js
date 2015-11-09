'use strict';

/* jshint ignore:start */
 
var runTests = function(){
	flashLight();
	testPut();
	testGet();
	getLarge();
}

var flashLight = function(){
  put("http://192.168.0.100/api/lightswitch-v4/lights/1/state");
}

var put = function(url){

  var request = new XMLHttpRequest();
  request.open('PUT', url, true);
  request.setRequestHeader('Content-Type', 'application/json');
  request.setRequestHeader('Accept', 'application/json, text/javascript, */*');
  request.send('{"xy":[0.167,0.04]}');
  // {"alert":"select"}

}

var successFunc = function(){
	console.log('Much Success');
};

var errFunc = function(){
	console.log('Error');
};

var url = 'http://192.168.0.100/api/lightswitch-v4/lights/1/state';
var data = '{"alert":select}';
var blueLight = {"xy":[0.167, 0.04]};
var redLight = {"xy":[0.64, 0.33]};

var testPut = function(){
	
	$.ajax({
	    type: 'PUT',
	    url: url,
	    success: successFunc,
	    error: errFunc,
	    dataType: 'json',
	    contentType: 'application/json',
	    data: JSON.stringify(redLight)
	});
}
var testGet = function(){
	$.ajax({
	    dataType: 'json',
	    url: url,
	    success: successFunc,
	    error: errFunc,
	    timeout: 2000
	});

}

var getLarge = function(){
	$.ajax({
	    dataType: 'json',
	    url: url,
	    success: successFunc,
	    error: errFunc,
	    timeout: 2000
	});
}


/* to replace jquery everywhere, I need these methods:


$.each(newstate, function(key, value){
                    hue.setXYState(value.key,value.state.xy, 0, value.state.bri);
                });


if (!$.isArray(lampIds)) {

var lampIds = $.map(state.lights, function(lamp, key) {
              return key;
            });



$.ajax({
                url: baseUrl,
                type: 'POST',
                data: dataString,
                success: onAddUserResponse
            });

PUT, POST

*/

var $ = {};
$.ajax = function(options) {

  var url = options.url;
  var type = options.type || 'GET';
  var headers = options.headers || {} ;
  var body = options.data || null;
  var timeout = options.timeout || null;
  var success = options.success || function(err, data) {
    console.log("options.success was missing for this request");
  };
  var contentType = options.contentType || 'application/json';
  var error = options.error || function(err, data) {
    console.log("options.error was missing for this request");
  };

  if (!url) {
    throw 'loadURL requires a url argument';
  }

  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.timeout = timeout;
  xhr.onreadystatechange = function() {
    try {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
        	if (xhr.responseType === 'json') {
        	 	success(null, xhr.response);
	        } else {
	        	success(null, JSON.parse(xhr.responseText));
	      	}
        } else {
          error(new Error("Error [" + xhr.status + "] making http request: " + url));
        }
      }
    } catch (err) {
      console.error('Aborting request ' + url + '. Error: ' + err);
      xhr.abort();
      error(new Error("Error making request to: " + url + " error: " + err));
    }
  };

  xhr.open(type, url, true);

  xhr.setRequestHeader("Content-Type", contentType);
  xhr.setRequestHeader("Accept", 'application/json, text/javascript, */*');
  
  Object.keys(headers).forEach(function(key) {
    xhr.setRequestHeader(key, headers[key]);
  });

  if(!body) {
  	xhr.send();
	} else {
		xhr.send(body);
	}

  return xhr;
}


runTests();

/* jshint ignore:end */
