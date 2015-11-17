describe("HueDiscover timings", function() {

  function needAuth(ip){
    console.log("Push button on bridge ip " + ip);
  }

  it("should work fast", function(done) {

    var dis = new HueDiscoverer(AjaxLite, Storage, 'appname', needAuth);

    var t0 = performance.now();

    dis.start().then(() => {
        var t1 = performance.now();
        console.log("Call took " + (t1 - t0) + " milliseconds.")
        expect((t1 - t0)).toBeLessThan(5000);
        done();
    }, () => {
        var t1 = performance.now();
        console.log("Call took " + (t1 - t0) + " milliseconds.")
        expect((t1 - t0)).toBeLessThan(5000);
        done();
    });
  });

  it("should fail fast against live bridge unauthenticated", function(done) {

    var dis = new HueDiscoverer(AjaxLite, Storage, 'appname', needAuth);

    var t0 = performance.now();

    dis.bridgeThenable('192.168.0.102').then(() => {
        var t1 = performance.now();
        console.log("Call took " + (t1 - t0) + " milliseconds.")
        expect((t1 - t0)).toBeLessThan(5000);
        done();
    }, () => {
        var t1 = performance.now();
        console.log("Call took " + (t1 - t0) + " milliseconds.")
        expect((t1 - t0)).toBeLessThan(5000);
        done();
    });
  });

});

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

  function respondWithJSON(json, status) {
      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": status || 200,
        "contentType": 'json',
        "responseText": JSON.stringify(json)
      });
  }

  function stubWithJSON(url, json, status){
    jasmine.Ajax.stubRequest(url).andReturn({
      "status": status || 200,
      "contentType": 'json',
      "responseText": JSON.stringify(json)
    });
  }

  function respondWithSuccess() {
        respondWithJSON({'1':{'manufacturername':'Philips'}});
      }

  function respondWithTimeout() {
      jasmine.Ajax.requests.mostRecent().respondWith({
        "status": 'timeout',
        "statusText": 'timeout',
      });
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
        doneFn(data);
      };
      var error = function(data) {
        doneFn(data);
      };

      var prom = new Promise((resolveCallback, reject) => {
        resolveCallback([]);
      });

      prom.then(() => { 
        success('[]');
      }, error).then(function(){
        expect(doneFn).toHaveBeenCalledWith('[]');
        doneCallback();
      });
      
  });


  describe('MeetHue lookup', function() {
    
    it("meethue lookup works against mock", function(done) {
        
        stubWithJSON('https://www.meethue.com/api/nupnp', []);

        var meethue = new MeetHueLookup(AjaxLite);
        meethue.discover().then((data) => { 
          expect(JSON.stringify(data)).toBe(JSON.stringify([]));
        }, null).catch((response) => {
          expect(JSON.stringify(response)).toBe(JSON.stringify([]));
          done();
        });
    });

    it("meethue lookup returns ips", function(done) {
        
        var meethue = new MeetHueLookup(AjaxLite);
        meethue.discover().then((data) => { 
          expect(JSON.stringify(data)).toBe(JSON.stringify(['11.11.11.11']));
        }, null).then(() => {
          done();
        });

        // set response from fake server:
        respondWithJSON([{'internalipaddress':'11.11.11.11'}]);
    });

  });

  describe('BruteForcer', function() {
    it('should return 29 IPs.', function() {
      expect(BruteForcer.ips().length).toEqual(29);
    });
  });

  describe('HueBridge', function() {
    
    var probableHueBridge;
    var ip = '111.111.111.111';
    var appname = 'appname';
    var username = 'lastUsername';

    it('should launch request on start', function() {
      probableHueBridge = new HueBridge(AjaxLite, new Storage(), ip, appname, username, onNeedAuthorization, onAuthorized, onError, 0);
      probableHueBridge.getBridgeState();

      var req = jasmine.Ajax.requests.mostRecent();
      expect(req.url).toBe('http://' + ip + '/api/lastUsername');
      // set response from fake server:
      respondWithJSON({}); // no bridges on wifi

    });

    it('should respond to timeout', function(done) {
      function error(data){
        console.log('timeout - calling done')
        done();
      }
      probableHueBridge = new HueBridge(AjaxLite, new Storage(), ip, appname, username, onNeedAuthorization, onAuthorized, error, 0);
      probableHueBridge.getBridgeState();

      var req = jasmine.Ajax.requests.mostRecent();
      expect(req.url).toBe('http://' + ip + '/api/' + username);

      respondWithJSON({}, 300)
    });

    describe('Light request', function(){
      it('should respond to success', function(done) {
        function success(data){
          done();
        }
        probableHueBridge = new HueBridge(AjaxLite, new Storage(), ip, appname, username, null, null, null, 0);
        probableHueBridge.getLightState(success);

        var req = jasmine.Ajax.requests.mostRecent();
        expect(req.url).toBe('http://' + ip + '/api/' + username + '/lights');

        respondWithSuccess();
      });

      it('should respond to success without callback', function(done) {
        function success(data){
          done();
        }
        probableHueBridge = new HueBridge(AjaxLite, new Storage(), ip, appname, username, null, success, null, 0);
        probableHueBridge.getLightState();

        var req = jasmine.Ajax.requests.mostRecent();
        expect(req.url).toBe('http://' + ip + '/api/' + username + '/lights');

        respondWithSuccess();
      });

      it('should respond to timeout', function(done) {
        function error(data){
          done();
        }
        probableHueBridge = new HueBridge(AjaxLite, new Storage(), ip, appname, username, onNeedAuthorization, onAuthorized, error, 0);
        probableHueBridge.getLightState();

        var req = jasmine.Ajax.requests.mostRecent();
        expect(req.url).toBe('http://' + ip + '/api/' + username + '/lights');

        respondWithJSON({}, 300);
      });

      it('should retry timeouts', function(done) {
        function error(data){
          done();
        }
        probableHueBridge = new HueBridge(AjaxLite, new Storage(), ip, appname, username, onNeedAuthorization, onAuthorized, error, 0);
        probableHueBridge.getLightState();

        var req = jasmine.Ajax.requests.mostRecent();
        expect(req.url).toBe('http://' + ip + '/api/' + username + '/lights');

        respondWithTimeout();
        respondWithTimeout();
        respondWithTimeout();
        respondWithTimeout();
        respondWithTimeout();
      });

      it('should respond to auth requested', function(done) {
        function needauth(data){
          done();
        }
        probableHueBridge = new HueBridge(AjaxLite, new Storage(), ip, appname, username, needauth, null, null, 0);
        probableHueBridge.getLightState();

        var req = jasmine.Ajax.requests.mostRecent();
        expect(req.url).toBe('http://' + ip + '/api/' + username + '/lights');

        respondWithJSON({'error': { 'description': 'unauthorized user' }});
        respondWithJSON([{'error': { 'description': 'link button not pressed' }}]);
      });

    });

    it('should respond to good result', function(done) {
      function success(bridge, username, status, data){
        console.log('calling done')
        console.log(data);
        expect(bridge.ip).toEqual(ip);
        done();
      }
      probableHueBridge = new HueBridge(AjaxLite, new Storage(), ip, appname, username, success, success, onError, 0);
      probableHueBridge.getBridgeState();

      var req = jasmine.Ajax.requests.mostRecent();

      // set response from fake server:
      respondWithJSON({'lights': 'yes'}); // no bridges on wifi
    });


    it('should respond to need authorization', function(done) {
      function needauth(bridge, userName, status, data){
        expect(bridge).toEqual(ip);
        expect(userName).toEqual(username);
        done();
      }
      function onerr(){
        done();
      }

      probableHueBridge = new HueBridge(AjaxLite, new Storage(), ip, appname, username, needauth, null, onerr, 0);
      probableHueBridge.getBridgeState();

      respondWithJSON({'error': { 'description': 'unauthorized user' }});
      
      expect(jasmine.Ajax.requests.mostRecent().url).toBe('http://' + ip +'/api');

      respondWithJSON([{'error': { 'description': 'link button not pressed' }}]);

    });

    describe('setTimeouts', function(){

        beforeEach(function() {
          jasmine.clock().install();
        });

        afterEach(function() {
          jasmine.clock().uninstall();
        });

        xit('should re-ask for auth every 2 seconds', function(done) {
          var secondPass = false;
          function needauth(bridgeIP, userName, status, data){
            expect(bridgeIP).toEqual(ip);
            expect(userName).toEqual(username);
            if (secondPass) done();
          }

          function onError() {
            console.log("error");
          }

          probableHueBridge = new HueBridge(AjaxLite, new Storage(), ip, appname, username, needauth, null, onError, 0);
          probableHueBridge.getBridgeState();

          // set response from fake server:
          respondWithJSON({'error': { 'description': 'unauthorized user' }});

          // set response from fake server:
          respondWithJSON([{'error': { 'description': 'link button not pressed' }}]);
          
          jasmine.clock().tick(2001);

          // set response from fake server:
          secondPass = true;
          expect(jasmine.Ajax.requests.mostRecent().url).toBe('http://' + ip +'/api');

          respondWithJSON([{'error': { 'description': 'link button not pressed' }}]);

        });

        it('should authenticate if link button pressed', function(done) {
          function authorized(bridge, userName, status, data){
            expect(bridge.ip).toEqual(ip);
            expect(bridge.username).toEqual('SALDKJASD');
            done();
          }
          probableHueBridge = new HueBridge(AjaxLite, new Storage(), ip, appname, username, null, authorized, null, 0);
          probableHueBridge.getBridgeState();

          respondWithJSON({'error': { 'description': 'unauthorized user' }});

          respondWithJSON([{'success': {'username': 'SALDKJASD'}}]); 

          respondWithJSON([{'lights': '' }]); 
          //stubSuccess();

        });
    });
  });

  describe("HueDiscoverer", function() {

      var p = '11.11.11.11';
      var u = '123-bogus';
      var url = 'http://' + p +'/api/' + u + '/lights';

      function stubSuccess(url) {
        stubWithJSON(url + '/lights', {'1':{'manufacturername':'Philips'}});
        stubWithJSON(url, {'lights':'1'});
      }


      function stubMeethue(success){
        stubWithJSON('https://www.meethue.com/api/nupnp', [{'internalipaddress':'3'},{'internalipaddress':'4'}]);
        stubWithJSON('http://4/api/' + u + '/lights', [{'error': '' }]);
        if (success) {
          stubSuccess('http://3/api/' + u);
        } else {
          stubWithJSON('http://3/api/' + u + '/lights', [{'error': '' }]);
        }
      }
      function stubBruteforce(){
        var ips = BruteForcer.ips();
        var bridges = [];
        for(var i of ips) {
            stubWithJSON('http://' + i + '/api/' + u + '/lights', [{'error': '' }]);
        }
      }

      it("should authenticate", function(done) {
        stubWithJSON(url, {'error': { 'description': 'unauthorized user' }});
        stubWithJSON(url, [{'error': { 'description': 'link button not pressed' }}]);
        stubWithJSON(url, {'lights': [] });

        var dis = new HueDiscoverer(AjaxLite, Storage, 'appname', onNeedAuthorization);

        dis.bridgeThenable(p).then((bridge) => {
          expect(bridge.ip).toEqual(p);
          done();
        });
      });

      it("should ask for link button", function(done) {

        function needAuth(bridge){
          expect(bridge).toBe(p);
          done();
        }
        stubWithJSON(url, {'error': { 'description': 'unauthorized user' }});
        stubWithJSON('http://' + p + '/api', [{'error': { 'description': 'link button not pressed' }}]);
        stubWithJSON('http://' + p + '/api', [{'error': { 'description': 'link button not pressed' }}]);

        var dis = new HueDiscoverer(AjaxLite, Storage, 'appname', needAuth);

        dis.bridgeThenable(p).then((bridge) => {
          expect(bridge.ip).toEqual(p);
        });
      });


      it("should reject", function(done) {
        stubWithJSON(url, {'error': { 'description': 'unauthorized user' }});
        stubWithJSON(url, [{'error': { 'description': 'link button not pressed' }}]);
        stubWithJSON(url, {'error': [] });

        var dis = new HueDiscoverer(AjaxLite, Storage, 'appname', onNeedAuthorization);

        dis.bridgeThenable(p).then(null, (err) => {
          expect(err.ip).toEqual(p);
          done();
        });

        expect(jasmine.Ajax.requests.mostRecent().url).toBe(url);
      });

      it("should succeed stored ip", function(done) {

        var dis = new HueDiscoverer(AjaxLite, Storage, 'appname', onNeedAuthorization);
        // ajax responses
        stubWithJSON('http://' + p +'/api/' + u + '/lights', [{'lights': '' }]);
        stubMeethue(false);
        stubBruteforce();

        Storage.set('lastBridgeIp', p)
        .then(() => {
          return Storage.set('lastUsername', u);
        })
        .then(() => {
          return dis.start();
        }).then((bridge) => {
          expect(bridge.ip).toBe(p);
          done();
        })
        
      });

      it("should succeed explicit ip", function(done) {

        var dis = new HueDiscoverer(AjaxLite, Storage, 'appname', onNeedAuthorization);

        var ip = '2.2.2.2';

        // ajax responses
        stubMeethue(false);
        stubBruteforce();
        stubSuccess('http://' + ip +'/api/' + u);

        Storage.set('lastBridgeIp', undefined)
        .then(() => {
          return Storage.set('lastUsername', u);
        })
        .then(() => {
          return dis.start(ip);
        }).then((bridge) => {
          expect(bridge.ip).toBe(ip);
          done();
        }).catch((b) => {
          console.log(b);
        })

      });


      it("should fail explicit ip failover to stored", function(done) {

        var dis = new HueDiscoverer(AjaxLite, Storage, 'appname', onNeedAuthorization);

        var ip = '2.2.2.2';

        // ajax responses
        stubWithJSON('http://' + ip +'/api/' + u + '/lights', [{'error': '' }]);
        stubWithJSON('http://' + p +'/api/' + u + '/lights', [{'lights': '' }]);

        stubMeethue(false);
        stubBruteforce();

        Storage.set('lastBridgeIp', p)
        .then(() => {
          return Storage.set('lastUsername', u);
        })
        .then(() => {
          return dis.start(ip);
        }).then((bridge) => {
          expect(bridge.ip).toBe(p);
          done();
        })

      });


      it("should await link button before failover", function(done) {

        function needAuth(bridge){
          expect(bridge).toBe(p);
          done();
        }
        var dis = new HueDiscoverer(AjaxLite, Storage, 'appname', needAuth);

        var ip = '2.2.2.2';

        // ajax responses

        stubWithJSON('http://' + ip +'/api/' + u + '/lights', [{'error': '' }]);
        stubWithJSON('http://' + p +'/api/' + u + '/lights', {'error': { 'description': 'unauthorized user' }});
        stubWithJSON('http://' + p + '/api', [{'error': { 'description': 'link button not pressed' }}]);
        stubWithJSON('http://' + p + '/api', [{'error': { 'description': 'link button not pressed' }}]);

        stubMeethue(false);
        stubBruteforce();

        Storage.set('lastBridgeIp', p)
        .then(() => {
          return Storage.set('lastUsername', u);
        })
        .then(() => {
          return dis.start(ip);
        });

      });

      it("should failover to nupnp", function(done) {

        var dis = new HueDiscoverer(AjaxLite, Storage, 'appname', onNeedAuthorization);

        var ip = '2.2.2.2';

        // ajax responses
        stubWithJSON('http://' + ip +'/api/' + u + '/lights', [{'error': '' }]);
        stubWithJSON('http://' + p +'/api/' + u + '/lights', [{'error': '' }]);
        stubMeethue(true);
        stubBruteforce();

        Storage.set('lastBridgeIp', p)
        .then(() => {
          return Storage.set('lastUsername', u);
        })
        .then(() => {
          return dis.start(ip);
        }).then((bridge) => {
          expect(bridge.ip).toBe('3');
          done();
        })

      });

      it("should failover to brute", function(done) {

        var dis = new HueDiscoverer(AjaxLite, Storage, 'appname', onNeedAuthorization);

        var ip = '2.2.2.2';

        // ajax responses
        stubWithJSON('http://' + ip +'/api/' + u + '/lights', [{'error': '' }]);
        stubWithJSON('http://' + p +'/api/' + u + '/lights', [{'error': '' }]);
        
        stubMeethue(false);
        stubBruteforce();

        Storage.set('lastBridgeIp', p)
        .then(() => {
          return Storage.set('lastUsername', u);
        })
        .then(() => {
          return dis.start(ip);
        }).catch((bridge) => {
          expect(bridge).toBe(undefined);
          done();
        });

      });

      it("should failover to brute succeeds", function(done) {

        var dis = new HueDiscoverer(AjaxLite, Storage, 'appname', onNeedAuthorization);

        var ip = '2.2.2.2';

        // ajax responses
        stubWithJSON('http://' + ip +'/api/' + u + '/lights', [{'error': '' }]);
        stubWithJSON('http://' + p +'/api/' + u + '/lights', [{'error': '' }]);

        stubMeethue(false);
        stubBruteforce();
        stubWithJSON('http://192.168.0.7/api/' + u + '/lights', [{'lights': '' }]);

        Storage.set('lastBridgeIp', p)
        .then(() => {
          return Storage.set('lastUsername', u);
        })
        .then(() => {
          return dis.start(ip);
        }).then((bridge) => {
          expect(bridge.ip).toBe('192.168.0.7');
          done();
        }).catch((bridge) => {
          expect(bridge).toBe(undefined);
        });

      });

  });

  describe('Storage class', function() {

      it('should save as promised', function(done) {
        var obj = {'ip': '11.11.11.11', 'appname': 'JasminTests', 'username': 'GIBBERISH' };
        Storage.set('test', obj).then((data) => {
          console.log(data);
          return Storage.get('test');
        }).then((data) => {
          console.log(data);
          expect(data).toEqual(obj);
          done();
        });
      });

      it('should return null', function(done) {
        Storage.get('gibberish').then((data) => {
          console.log(data);
          expect(data).toEqual(null);
          done();
        });
      });

      it('should be chainable', function(done) {
        Storage.set('unit-1', {'unit-1': 1})
        .then(() => {
          return Storage.set('unit-2', {'unit-2':2});
        })
        .then(() => {
          return Storage.set('unit-3', {'unit-3':3});
        })
        .then(() => {
          return Promise.all([
          Storage.get('unit-1'),
          Storage.get('unit-2'),
          Storage.get('unit-3'),
          ]);
        })
        .then((datas) => {
          console.log(datas);
          expect(datas).toEqual([ {'unit-1':1}, {'unit-2':2}, {'unit-3':3}]);
          done();
        });
      });

  });  
});
