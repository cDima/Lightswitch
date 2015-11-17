'use strict';
/* jshint ignore:start */


if(navigationDocument !== undefined) {

  var resourceLoader;
  var window = {};
  var Promise = {};

  App.onLaunch = function(options) {
    console.log('loaded tvos js.');

    window.hue = hue(AjaxLite, window.colors);
    sceneCmd = sceneCommander(AjaxLite, window.hue);
    //ambieye = window.Ambient;
    window.hueCommander = hueCommander(AjaxLite, window.hue, colorUtil(), sceneCmd);
    //window.hueProxy = hueProxy(window.hueCommander);
    //ambieye.onUpdate(updatePreviewColors);

    hueProxy.cmd('discover');
    //var h = HueDiscoverer();
    //h.discover();
    

    return;
    /*
    var javascriptFiles = [
     //`${options.BASEURL}js/ResourceLoader.js`,
     //`${options.BASEURL}js/Presenter.js`,
     //`${options.BASEURL}js/hue/hueTest.js`
     //`${options.BASEURL}js/vendor/jquery-2.1.4.js`
    ];

    evaluateScripts(javascriptFiles, function(success) {
      if(success) {
        resourceLoader = new ResourceLoader(options.BASEURL);
        resourceLoader.loadResource(`${options.BASEURL}templates/RWDevConTemplate.xml.js`, function(resource) {
          var doc = Presenter.makeDocument(resource);
          doc.addEventListener("select", Presenter.load.bind(Presenter));
          Presenter.pushDocument(doc);

          flashLight();
        })
      } else {
        var errorDoc = createAlert("Evaluate Scripts Error", "Error attempting to evaluate external JavaScript files.");
        navigationDocument.presentModal(errorDoc);
      }
    });
    */
  }

  var createAlert = function(title, description) {
    var alertString = `<?xml version="1.0" encoding="UTF-8" ?>
      <document>
        <alertTemplate>
          <title>${title}</title>
          <description>${description}</description>
          <button>
            <text>OK</text>
          </button>
        </alertTemplate>
      </document>`
    var parser = new DOMParser();
    var alertDoc = parser.parseFromString(alertString, "application/xml");
    return alertDoc
  }


}


/* jshint ignore:end */
