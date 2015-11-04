describe("HueDiscover", function() {

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
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });
  

  it("specifying response when you need it", function() {
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

      // set response from fake server:
      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 200,
        "contentType": 'text/plain',
        "responseText": 'awesome response'
      });

      // excepect after call
      expect(doneFn).toHaveBeenCalledWith('awesome response');
    });


  it("promise works?", function(doneCallback) {
      var doneFn = jasmine.createSpy("success");

      var success = function(data) {
        console.log("1 in success");
        doneFn(data);
      };
      var error = function(data) {
        console.log("1 in err");
        doneFn(data);
      };

      var prom = new Promise((resolveCallback, reject) => {
        resolveCallback([]);
      });

      prom.then(() => { 
        console.log('1 in prom then callback, calling success');
        success('[]');
      }, error).then(function(){
        console.log("1 calling done");
        expect(doneFn).toHaveBeenCalledWith('[]');
        doneCallback();
      });
      
    });

  it("meethue lookup works against mock", function(done) {
      var doneFn = jasmine.createSpy("success");

      var successC = function(data) {
        console.log("2 in success");
        doneFn(data);
      };
      var errorC = function(data) {
        console.log("2 in err");
        doneFn(data);
      };

      var meethue = new MeetHueLookup($lite);
      meethue.discover().then((data) => { 
        console.log('2 in prom then callback, calling success');
        successC(data);
        console.log('2 in prom then callback end');
      }, errorC).then(() => {

        console.log("2 calling done");
        // excepect after call
        expect(doneFn).toHaveBeenCalledWith([]);
        done();
      });

      //expect(jasmine.Ajax.requests.mostRecent().url).toBe('https://www.meethue.com/api/nupnp');
      expect(doneFn).not.toHaveBeenCalled();


      // set response from fake server:
      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 200,
        "contentType": 'json',
        "responseText": '[]' // no bridges on wifi
      });

    });

  describe('BruteForcer', function() {
    it('should return 84 IPs.', function() {
      expect(BruteForcer.ips().length).toEqual(84);
    });
  });

  describe('HueBridge', function() {
    
    var probableHueBridge;
    var ip = '111.111.111.111';
    var appname = 'appname';
    var username = 'lastUsername';

    it('should launch request on start', function() {
      probableHueBridge = new HueBridge($lite, storageClass, ip, appname, username, onNeedAuthorization, onAuthorized, onError, 0);
      probableHueBridge.getBridgeState();

      var req = jasmine.Ajax.requests.mostRecent();
      expect(req.url).toBe('http://' + ip + '/api/lastUsername');
      // set response from fake server:
      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 300,
        "contentType": 'json',
        "responseText": '{}' // no bridges on wifi
      });
    });

    it('should respond to timeout', function(done) {
      function error(data){
        console.log('timeout - calling done')
        done();
      }
      probableHueBridge = new HueBridge($lite, storageClass, ip, appname, username, onNeedAuthorization, onAuthorized, error, 0);
      probableHueBridge.getBridgeState();

      var req = jasmine.Ajax.requests.mostRecent();
      expect(req.url).toBe('http://' + ip + '/api/' + username);

      // set response from fake server:
      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 300,
        "contentType": 'json',
        "responseText": '{}' // no bridges on wifi
      });
    });

    it('should respond to good result', function(done) {
      function success(bridgeIP, username, status, data){
        console.log('calling done')
        console.log(data);
        expect(bridgeIP).toEqual(ip);
        done();
      }
      probableHueBridge = new HueBridge($lite, storageClass, ip, appname, username, success, success, onError, 0);
      probableHueBridge.getBridgeState();

      var req = jasmine.Ajax.requests.mostRecent();

      // set response from fake server:
      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 200,
        "contentType": 'json',
        "responseText": JSON.stringify({'lights': 'yes'}) // no bridges on wifi
      });
    });


    it('should respond to need authorization', function(done) {
      function needauth(bridgeIP, userName, status, data){
        expect(bridgeIP).toEqual(ip);
        expect(userName).toEqual(username);
        done();
      }
      probableHueBridge = new HueBridge($lite, storageClass, ip, appname, username, needauth, null, null, 0);
      probableHueBridge.getBridgeState();

      // set response from fake server:
      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 200,
        "contentType": 'json',
        "responseText": JSON.stringify({'error': { 'description': 'unauthorized user' }}) // no bridges on wifi
      });


      expect(req.url).toBe('http://' + ip +'/api/' + username);
      // set response from fake server:
      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 200,
        "contentType": 'json',
        "responseText": JSON.stringify([{'error': { 'description': 'link button not pressed' }}]) // no bridges on wifi
      });
    });

  });


  xdescribe("search for nupnp on launch", function() {
    var discover;
    beforeEach(function(){
      discover = hueDiscoverer(onNeedAuthorization, onAuthorized, onError);
    });


    it("should not start", function() {
      expect(state).toEqual(null);
    });

    it("should check meethue by default", function() {

      var url = 'https://www.meethue.com/api/nupnp';
      jasmine.Ajax.stubRequest(url).andReturn([]);
      discover.start();
      expect(discover.ips().length).toEqual(0);

      expect(jasmine.Ajax.requests.mostRecent().url).toEqual(url); 
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

  xdescribe("search for nupnp on launch", function() {

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
