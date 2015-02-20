describe("HueDiscover", function() {
  var discover = null;

  var state = null;
  function onNeedAuthorization() {
    state = 'needauthorization';
  }
  function onAuthorized(){
    state = 'ready';
  }
  function onError(){
    state = 'error';
  }


  beforeEach(function() {
    jasmine.Ajax.install();
    discover = hueDiscoverer(onNeedAuthorization, onAuthorized, onError);
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });
  

  xit("specifying response when you need it", function() {
      var doneFn = jasmine.createSpy("success");


      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(args) {
        if (this.readyState == this.DONE) {
          doneFn(this.responseText);
        }
      };
      var url = "http://dddd/some/cool/url";
      xhr.open("GET", url);
      xhr.send();

      expect(jasmine.Ajax.requests.mostRecent().url).toBe(url);
      expect(doneFn).not.toHaveBeenCalled();

      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 200,
        "contentType": 'text/plain',
        "responseText": 'awesome response'
      });

      expect(doneFn).toHaveBeenCalledWith('awesome response');
    });

  xdescribe("search for nupnp on launch", function() {
    
    it("should not start", function() {
      expect(state).toEqual(null);
    });

    it("should support 1 manual ip", function() {

      jasmine.Ajax.stubRequest('http://192.168.0.1/api/lightswitch-v4').andReturn({data: [{'error': 'linkbuttons'}]});
      //      spyOn( $, 'ajax' ).and.returnValue( function (params) {
      //  params.success({data: [{'internalipaddress': '192.0.0.1'}]});
      //});
  
      var ip = '192.168.0.1';
      discover.start(ip);
      expect(discover.ips(ip).length).toEqual(1);

      expect(jasmine.Ajax.requests.mostRecent().url).toEqual('http://' + ip + '/api/lightswitch-v4'); 
    });

    it("should brute 84 ips", function() {
      discover.start();
      expect(discover.ips().length).toEqual(84);
    });
  });

  describe("search for nupnp on launch", function() {

    it("should handle single bridge from nupnp", function() {

      //jasmine.Ajax.stubRequest('https://www.meethue.com/api/nupnp').andReturn({data: [{'internalipaddress': '192.0.0.1'}]});

      discover.start(undefined, false);

      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 200,
        "contentType": 'application/json',
        "responseText": JSON.stringify([{'internalipaddress': '192.0.0.1'}])
      });

      expect(discover.ips().length).toEqual(1);

    });

    it("should handle 2 bridges from nupnp", function() {

      discover.start(undefined, false);

      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 200,
        "contentType": 'application/json',
        "responseText": JSON.stringify([
          {'internalipaddress': '192.0.0.1'}, 
          {'internalipaddress': '192.0.0.2'}
          ])
      });

      expect(discover.ips().length).toEqual(2);

    });
  });

  
});
