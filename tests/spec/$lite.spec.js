describe("$lite", function() {

  function respondWithJSON(json, status) {
      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": status || 200,
        "contentType": 'json',
        "responseText": JSON.stringify(json) // no bridges on wifi
      });
  }

  function respondWithTimeout() {
      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 'timeout',
        "statusText": 'timeout',
      });
  }

  var responses = [];
  var doneCallback = null;

  function onSuccess(response, status, xhr){
    responses.push({'onSuccess': false, response: response, status: status, xhr: xhr});
    compareResponses();
  }
  function onError(response, status, xhr){
    responses.push({'onError': false, response: response, status: status, xhr: xhr});
    compareResponses();
  }
  function compareResponses() {
    if (responses.length > 1){
      var r0 = responses[0];
      var r1 = responses[0];
      
      expect(r0.onSuccess).toEqual(r1.onSuccess);
      expect(r0.onError).toEqual(r1.onError);
      expect(r0.status).toEqual(r1.status);
      expect(r0.response).toEqual(r1.response);
      expect(r0.xhr.statusText).toEqual(r1.xhr.statusText);
      expect(r0.xhr.responseText).toEqual(r1.xhr.responseText);
      expect(r0.xhr.responseJSON).toEqual(r1.xhr.responseJSON);
      expect(r0.xhr.status).toEqual(r1.xhr.status);
      doneCallback();
    }
  }

  beforeEach(function() {
    //jasmine.Ajax.install();
    responses = [];
  });

  afterEach(function() {
    //jasmine.Ajax.uninstall();
  });
  

  it("should GET resolve", function(done) {
    doneCallback = done;

    var url = 'http://192.168.0.102/api/1234/';
    var options = {
          type: 'GET',
          url: url,
          success: onSuccess,
          error: onError,
          dataType: 'json',
          contentType: 'application/json',
          //data: JSON.stringify(data)
    };
    $.ajax(options);
    $lite.ajax(options);

  });

  it("should GET timeout", function(done) {

    doneCallback = done;

    var url = 'http://11.11.11.11/api/1234/';
    var options = {
          type: 'GET',
          url: url,
          success: onSuccess,
          error: onError,
          dataType: 'json',
          contentType: 'application/json',
          timeout: 1
          //data: JSON.stringify(data)
    };
    $.ajax(options);
    $lite.ajax(options);

  });

  it("should PUT ", function(done) {

    doneCallback = done;

    var url = 'http://192.168.0.102/api/1234/';
    var options = {
          type: 'PUT',
          url: url,
          success: onSuccess,
          error: onError,
          dataType: 'json',
          contentType: 'application/json',
          data: JSON.stringify({'on':true})
    };
    $.ajax(options);
    $lite.ajax(options);

  });

  it("should POST ", function(done) {

    doneCallback = done;

    var url = 'http://192.168.0.102/api/1234/';
    var options = {
          type: 'POST',
          url: url,
          success: onSuccess,
          error: onError,
          dataType: 'json',
          contentType: 'application/json',
          data: JSON.stringify({'on':true})
    };
    $.ajax(options);
    $lite.ajax(options);

  });
});
