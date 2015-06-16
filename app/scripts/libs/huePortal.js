/**
 * Copyright (c) 2015 Dmitry Sadakov; All rights reserved */

'use strict';

/*globals storageClass */
/*exported huePortalModule */

var huePortalModule = function(){
    // defaults
    var storage = storageClass();
    var huePortalCode = null;

    function getAuthorized() {
      storage.get('HuePortalCode', function (code) {
        huePortalCode = code;
      });
    }

    function authorized(code) {
      if (code !== null) {
          storage.set('HuePortalCode', code);
          huePortalCode = code;
      }
      return huePortalCode;
    }

    function authorize() {
        if (authorized() !== null) {

        }
    }

    getAuthorized();

    return {
        init: function(){
            return authorize();
        },
        authorize: function(){
            return authorize();
        },
        authorized: function(code){
            authorized(code);
        }
    };
};