/**
 * Copyright 2015 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

'use strict';



var PrecacheConfig = [["dist/background.html","48e069de018e27ca99a07b8933074c2d"],["dist/basic.html","d5f2673556ca401f0a6da4d3f444375c"],["dist/bower.json","424e8e992e42bbd5d98b6558a0032f73"],["dist/fonts/RobotoCondensed-Bold.woff","b957df7eb343c0e307cc3c4b5e642b0a"],["dist/fonts/RobotoCondensed-BoldItalic.woff","fea624b4c2620b6f5db428e227f2845c"],["dist/fonts/RobotoCondensed-Italic.woff","f6a7296c31954622227519621438298d"],["dist/fonts/RobotoCondensed-Light.woff","febf32a2c55979f8644ba9dfe804ca2b"],["dist/fonts/RobotoCondensed-LightItalic.woff","f09b84ef0af8be7687407830447ec594"],["dist/fonts/RobotoCondensed-Regular.woff","94e480548f3165c92301d1e317593e90"],["dist/fonts/fontawesome-webfont.woff","d95d6f5d5ab7cfefd09651800b69bd54"],["dist/fonts/glyphicons-halflings-regular.woff","68ed1dac06bf0409c18ae7bc62889170"],["dist/images/Ambience-10.png","004109eb45a1b33e125f728177916314"],["dist/images/Google-Chrome-Flat-Browser.jpg","4543d06849aa4b1af6b22247185ae60a"],["dist/images/HueScript.png","178bb0ab5fcc0e53419421b528c3439f"],["dist/images/ambience.png","93c81ced4d1b9d49c3184e5353a2292a"],["dist/images/ambieye-beta.png","7c682818b4be093ecc5e08d1ab53f055"],["dist/images/ambieye-beta1.png","79d643cbc5c66ad9bc9b862990793bde"],["dist/images/ambieye-ico-on.png","2aeb5dc1ccb9a6b14a3d024bce95051f"],["dist/images/ambieye-ico.png","82d1bcff9eec07fb1532e9aefafc31a2"],["dist/images/ambieye-logo.128.png","9a9a17e7e860a0c8337eb9eed303380a"],["dist/images/ambieye-off.png","f2e202ef3588b51653a63df569f9baa3"],["dist/images/ambieye.on.png","135547ddf7805130400c8f96ec39cb90"],["dist/images/ambieye.png","104d69e825315e12462a39a18a569dd6"],["dist/images/apistarter.png","15abb21e1ec4a8324817669681688209"],["dist/images/chromewebstore.png","a6fd6ff3fa5f313ff74ad02b49a3db52"],["dist/images/colorbox-100.png","43bf6a5eba6b7f96b757f5742c263c5e"],["dist/images/colorbox.png","20fbea576db374e4c6f97e2348c28531"],["dist/images/colorwheel-100.png","b783567027bd87387e78d51884d62fd8"],["dist/images/colorwheel.png","26ebdf66ca1703b160d92463ef800469"],["dist/images/colorwhell2.png","4f1ef3b02de41644f6b3c8480592d9df"],["dist/images/eye-large.png","1cd18429648bac57c4dab2e6b7b70d7e"],["dist/images/eye-m.png","ceed761c8c27babc34d117eb42b69e3c"],["dist/images/eye-small.png","88376da70c84b3cce2f6e3720a60e5c5"],["dist/images/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["dist/images/hue-kit.png","9eabaf8453ae53f16a974906a54fa854"],["dist/images/huekit.png","c0375e1a1edd56ed5433f83786c38459"],["dist/images/hueweb.png","ae13f5e395a69d8242d664ac42618ac9"],["dist/images/icons/icons-hinted.ttf","d41d8cd98f00b204e9800998ecf8427e"],["dist/images/icons/icons.eot","742c4affdabd597249ab4d8f32ceb5d9"],["dist/images/icons/icons.svg","46661d6d65debc63884004fed6e37e5c"],["dist/images/icons/icons.ttf","43ac9104d6fac184272ba3784167577d"],["dist/images/icons/icons.woff","e470c7159d62bbeedf51a7d98e65ca4d"],["dist/images/icons/icons.woff2","1a75a1500dc4614b85523f4183cdeef7"],["dist/images/icons/placeholder--medium.png","baa033665c8a070a9e5a66c2bd8b0474"],["dist/images/icons/placeholder--small.png","d5efa06871740522ebb8ae5da95b7737"],["dist/images/icons/placeholder--wide.png","0f9f6ff52eac6a13ab562341c6e329d1"],["dist/images/light.png","c71263d751ee9ab14d9c7821bad426a2"],["dist/images/lightswitch.grey.png","298e7107b8bf07c7d0a8ceae063f463a"],["dist/images/lightswitch.logo.128.png","4be99446778e409b16056ea947ef524f"],["dist/images/lightswitch.logo.16.png","2e37e2e71b77533ae1a37dafed65d193"],["dist/images/lightswitch.logo.32.png","8c8da63cc4ad6f071a91ad9b93ab00dc"],["dist/images/lightswitch.logo.48.png","c3e7f036ab6c214ddbc6d9822e15c1ea"],["dist/images/lightswitch.logo.on.128.png","89c7e5ee9cbb38ee6a9c6dc6a1268031"],["dist/images/lightswitch.logo.on.128.v2.png","1355c0dc6138343b1b45616ffee4f93c"],["dist/images/lightswitch.logo.on.16.png","8f14a931dbb5db2fe95ca49b1d6e23b0"],["dist/images/lightswitch.logo.on.32.png","2ac1ac1b40be2560484b20a50ab99f8c"],["dist/images/lightswitch.logo.on.48.png","5de875868f4cd0f66045b16c015276fa"],["dist/images/lightswitch.white.bold.png","c767824c78a6c3f8485fe7bc8139ed3a"],["dist/images/lightswitch.white.png","f7fc329aeb26510a33c5fd3e00949739"],["dist/images/ls/Logo-LS.png","91cf905c06e1f6bfb6011c8f2e2cb13f"],["dist/images/ls/Logo-header.png","28a2796993dde20ef8bfb2971fbb1663"],["dist/images/ls/Logo-transparent.png","2a2acd85a6864b5b40e7518876de3da4"],["dist/images/ls/Logo.png","2630fb21ca420e3f968ddcaf8301372a"],["dist/images/ls/apistarterlogo-wh.png","2b1721c45d5b64e294ceadb4c73ce87a"],["dist/images/ls/apistarterlogo.png","496a47e5b7475ecbaf9e17fb97590a35"],["dist/images/ls/demo1.png","0a0ec78628a7c2196b47b84f4686b074"],["dist/images/ls/demo2.png","179db298fba559cdecfc18eaa1e4ae4e"],["dist/images/ls/demo3.png","1abe2b84aeb03adc46669888c72cc630"],["dist/images/ls/ls-1.png","3546b545f5ade32f29f1640c30a840e1"],["dist/images/ls/ls-2.png","e4081387f86d2b8aa422977ec7dbddcc"],["dist/images/ls/ls-3.png","d2effaa42796030b2bfa4f54b5163d96"],["dist/images/ls/ls-4.png","8284d23aa1ae5cdaf9f23909c564dc91"],["dist/images/ls/ls1.png","9989492a0e2db507e07832d5b20ed00c"],["dist/images/ls/ls2.png","cb491f7cbe5b3762853c268ee7f153a4"],["dist/images/ls/ls3.png","1f8c851fdf4aad96333252b8ff4076f2"],["dist/images/ls/ls4.png","69dd1eb01bf58336ed50d611db928c67"],["dist/images/material-icon.png","8846cb0a7f550323fd9883fbd92b0690"],["dist/images/pro.png","5e1096bb512eec25bea7cda49de5d7ea"],["dist/images/shine-logo128.png","51672c2d2772ee8901cda4f20e4b0050"],["dist/images/shine.logo.v1.png","39f49af95a9499fbe450dfae87bdcef9"],["dist/images/shine.png","593614cc767f1fec5cda5405ad61a4a0"],["dist/images/splash-off.png","4f8c82c7015bc526921a6a9c30b3eb3d"],["dist/images/splash.png","710d74b852cdf71ac31961eca0554be5"],["dist/images/touch/chrome-touch-icon-192x192.png","2b2fd01b05d384c1ccbba90f31b0a366"],["dist/images/touch/icon-128x128.png","2b2fd01b05d384c1ccbba90f31b0a366"],["dist/images/touch/ms-touch-icon-144x144-precomposed.png","2b2fd01b05d384c1ccbba90f31b0a366"],["dist/images/tvos/blueblur.jpg","0074d3f5020a3d15615c91e9701f3f5d"],["dist/images/win/Screenshot 2015-02-11 00.40.52.png","34c0cb9497d53b3836db5b4ba83495c3"],["dist/images/win/Screenshot 2015-02-11 00.41.03.png","ff52044259e549b49a84adea4ce0671f"],["dist/images/win/Screenshot 2015-02-11 00.41.05.png","56ef6d135b9965d09b35b88e88802ece"],["dist/images/win/ambieye.png","20d3e0ff1a849abaeed47a061132f885"],["dist/images/win/appbar.lightbulb.hue.png","42285c15f6ed6b2a49273aceaa559e05"],["dist/images/win/bg.jpg","0c588dae7c7fa226e0f2335796edb7bd"],["dist/images/win/blanck-.png","a23b7d8e110544e31ba585d2508ea5de"],["dist/images/win/branch-popover@2x.png","8d9cdf5e8862c1040f8a9ccf10af3044"],["dist/images/win/branches-bg@2x.png","e682320dc15a136025875d3e1ddecd21"],["dist/images/win/branches.png","0e09342bea28d0fa3688df5784ab3d35"],["dist/images/win/check.png","7f12cd90c43c4469d908d5518b60cf74"],["dist/images/win/colors.png","65673ea9ff5f52fa476932df24de264c"],["dist/images/win/download-arrow.png","68da0cebaf881cffca3ab517cbf22ad8"],["dist/images/win/download.png","bf2399313a28cd6aec4eb3ca0f7f5acd"],["dist/images/win/download@2x.png","aea98b4c5ab6a1755ef9a064713ad806"],["dist/images/win/dynamic.png","d06ee902cde1598191861dd23657a3f4"],["dist/images/win/favicon.ico","3046037cd9f72499b31c5e10da7655d5"],["dist/images/win/groups.png","645e9b7c01d6029329c498ec207e84f4"],["dist/images/win/light.appbar.lightbulb.hue.png","59b199b3b9d85430637eb581bee9e817"],["dist/images/win/logo-dark.png","785e733da6416b814d3b6e64d282f669"],["dist/images/win/logo-white.png","befa25eaff925caa038277114e65ae9c"],["dist/images/win/logo.png","befa25eaff925caa038277114e65ae9c"],["dist/images/win/logo@2x.png","befa25eaff925caa038277114e65ae9c"],["dist/images/win/logos-ambieye.png","7c32426811e3db7d9eeaec50118067ff"],["dist/images/win/material-icon-256.png","4292999c9008e60c94fc464346863d2a"],["dist/images/win/material-icon.png","8846cb0a7f550323fd9883fbd92b0690"],["dist/images/win/repo-create@2x.png","eb2b6df7b35b14cdbac36e835ca16dca"],["dist/images/win/screen1.png","fa498283880ee5520ede92ba9babc67f"],["dist/images/win/screen1@2x.png","89777c23da0b8e00eb5af9564300bc2a"],["dist/images/win/screenshot-overview@2x.png","7211e96cb06558f7900f4c4768e8f58e"],["dist/images/win/section-shadow.png","9da064623888a3ead2173858f04bafb8"],["dist/images/win/sourcelist-bg@2x.png","e6d40617a21c934081eec16bb1b3d96b"],["dist/images/win/sync-bg@2x.png","f143b7da148e58f0c63fa222d679e633"],["dist/images/win/sync-controls@2x.png","83cb72de6f813ed49010f3e986d055d1"],["dist/images/win/sync-spinner@2x.png","4049381d86919adc01e525c33ec39b7a"],["dist/images/win/sync.png","61007f937566d18b0ba4e190e13db9b1"],["dist/images/win/windows-logo.png","fe1129d6c05ece15efe25f19d0015df5"],["dist/images/win/windows-logo@2x.png","831ba2ba776a678e0e1e4c54da7f0b36"],["dist/index.html","707249ae6be2d1c6e1804526bc6a0b40"],["dist/injectedscripts.html","9a556da7268073e8f7b0d6c1aae6937c"],["dist/light.html","2f71e63a6e7d24e459731b4e938af4bd"],["dist/lightswitch.html","68adaee51922c02c1b0e76daee4aed31"],["dist/manifest.json","29d4526ee9c822ca7d84ea303689efd8"],["dist/scripts/background.min.js","73f0c948f132da92f0976acb5cf3200c"],["dist/scripts/injecthue.js","fb008142b29227d976af800f867c5b44"],["dist/scripts/lib/hueDiscover.js","1ad1bd96f00de312d4d9e24efca1753f"],["dist/scripts/lib/voice-redirect.js","d940ebac65d511cc1bca9c78231f9dc6"],["dist/scripts/main-lite.min.js","ff95d78f066a8f80ebb70c968e9dba16"],["dist/scripts/main.min.2015111510.js","1cb19a980702a6d0a29359e7baf743f9"],["dist/scripts/modernizr.min.js","6a35dc92d10c9ff9a47bb49ffb6d8790"],["dist/scripts/modernizr2.min.js","6a35dc92d10c9ff9a47bb49ffb6d8790"],["dist/scripts/tvos.min.js","cb9735e962d383187f9325502c4276f5"],["dist/scripts/voice-page.js","a6a6eba2eee69b7466c3f7de906fd6e7"],["dist/styles/bootstrap.min.css","16142c961bf03bd080522f5fed1ee48c"],["dist/styles/components/components.css","b0259e0afef6311c17a06d45094ef53c"],["dist/styles/font-awesome.min.css","1dc06c52e2fd90c85fc4ccbdffaf34d5"],["dist/styles/font-montserrat.min.css","85664b985cfaed2e26839e7955334212"],["dist/styles/ls.css","b7f66c17373751c6a69a1fb68c6574ce"],["dist/styles/main.css","a64174bfb1eb448adc6c02c6c09e6b85"],["dist/styles/popup.css","772ded5c23588728d2be9f99ed326ff1"],["dist/styles/shine.css","f9215fa319b89b40e7589a5c51f4824c"],["dist/styles/slider.css","fb046ef11bebbce4598a057268bfa318"],["dist/styles/slider1.css","71e53cc0cec9b77d62fc3e81bd8cf5a4"],["dist/styles/social-likes_flat.css","3bf4f102c1144a049617ad59ff40038e"],["dist/styles/switch.css","c5a145baae2af843e4a11dbc4fdbdcc6"],["dist/styles/voice.css","2e38bb20b8ec0cbd587fbb29405e9a8d"],["dist/styles/win.css","0a50b5c972d32256ff3d522b9e3bee3c"],["dist/tvos.html","50fbf386a5f5a84c931e1e39984a5b88"],["dist/voice.html","be931a1ac6d866547eec0aba73fdac7c"]];
var CacheNamePrefix = 'sw-precache-v1-web-starter-kit-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var populateCurrentCacheNames = function (precacheConfig, cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl, ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  var now = Date.now();

  event.waitUntil(
    caches.keys().then(function(allCacheNames) {
      return Promise.all(
        Object.keys(CurrentCacheNamesToAbsoluteUrl).filter(function(cacheName) {
          return allCacheNames.indexOf(cacheName) == -1;
        }).map(function(cacheName) {
          var url = new URL(CurrentCacheNamesToAbsoluteUrl[cacheName]);
          // Put in a cache-busting parameter to ensure we're caching a fresh response.
          if (url.search) {
            url.search += '&';
          }
          url.search += 'sw-precache=' + now;
          var urlWithCacheBusting = url.toString();

          console.log('Adding URL "%s" to cache named "%s"', urlWithCacheBusting, cacheName);
          return caches.open(cacheName).then(function(cache) {
            var request = new Request(urlWithCacheBusting, {credentials: 'same-origin'});
            return fetch(request.clone()).then(function(response) {
              if (response.status == 200) {
                return cache.put(request, response);
              } else {
                console.error('Request for %s returned a response with status %d, so not attempting to cache it.',
                  urlWithCacheBusting, response.status);
                // Get rid of the empty cache if we can't add a successful response to it.
                return caches.delete(cacheName);
              }
            });
          });
        })
      ).then(function() {
        return Promise.all(
          allCacheNames.filter(function(cacheName) {
            return cacheName.indexOf(CacheNamePrefix) == 0 &&
                   !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            console.log('Deleting out-of-date cache "%s"', cacheName);
            return caches.delete(cacheName);
          })
        )
      });
    }).then(function() {
      if (typeof self.skipWaiting == 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim == 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command == 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method == 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    if (cacheName) {
      event.respondWith(
        // We can't call cache.match(event.request) since the entry in the cache will contain the
        // cache-busting parameter. Instead, rely on the fact that each cache should only have one
        // entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              return response || fetch(event.request).catch(function(e) {
                console.error('Fetch for "%s" failed: %O', urlWithoutIgnoredParameters, e);
              });
            });
          });
        }).catch(function(e) {
          console.error('Couldn\'t serve response for "%s" from cache: %O', urlWithoutIgnoredParameters, e);
          return fetch(event.request);
        })
      );
    }
  }
});

