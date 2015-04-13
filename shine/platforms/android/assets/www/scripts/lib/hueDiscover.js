"use strict";var hueBridge=function(r,n,t,e,o){function u(r){c.set("lastBridgeIp",r)}var i="http://"+r+"/api",s=i+"/"+n,a="init",c=storageClass(),f=function(n){var t="hueBridge ("+r+"): "+n;console.log(t)},p=function(){try{$.ajax({dataType:"json",url:s,success:d,error:h,timeout:5e3})}catch(r){h(r)}},h=function(n){"timeout"===n.statusText?(f("Bridge error timeout: "+r),o(r,"Timeout","Too many timeouts on: "+i)):(f("error on auth: "+n.statusText),a="error",o(r,"Error","Unknown error"+n.statusText))},d=function(n){var t=n;$.isArray(t)&&(t=n[0]),u(r),t.hasOwnProperty("error")&&"unauthorized user"===t.error.description?(f("Bridge found at "+r),a="found",l()):t.hasOwnProperty("lights")&&(a="ready",f("Bridge ready "+r),e(r,"Ready",t))},l=function(){f("adding user...");var r=JSON.stringify({devicetype:n,username:n});f(r),$.ajax({url:i,type:"POST",data:r,success:g})},g=function(r){f(r),r[0].hasOwnProperty("error")?v(r):r[0].hasOwnProperty("success")&&(a="ready",y(r))},v=function(n){"link button not pressed"===n[0].error.description?(a="needauthorization",t(r,"NeedAuthorization","Bridge found. Press the bridge button..."),setTimeout(l,2e3)):(a="error",o(r,"Error","Error: "+n[0].error.description))},y=function(){f("Authorization successful"),p()};return{getStatus:function(){return a},start:function(){p()}}},hueNupnpDiscoverer=function(r){var n=[],t=function(){console.log("Requesting meethue.com/api/nupnp.");var r="https://www.meethue.com/api/nupnp";$.ajax({url:r,dataType:"json",timeout:2e3,success:e,error:o})},e=function(r){trackState("nunpnp",r),null!==r&&r.length>0?(r.forEach(function(r){var t=r.internalipaddress;"0.0.0.0"!==t&&n.push(t)}),u()):(console.log("meethue portal did not return"),u())},o=function(r){console.log(r),u()},u=function(){r(n)};return t(),{}},bruteForcer=function(){var r=function(){for(var r=[],n=0;21>n;n++)r.push("10.0.1."+n),r.push("192.168.0."+n),r.push("192.168.0."+(100+n)),r.push("192.168.1."+n);return r};return{ips:function(){return r()}}},hueDiscoverer=function(r,n,t,e,o){function u(){c.get("lastBridgeIp",function(r){a=r})}var i=[],s=0,a=null,c=null;c=storageClass(),u();var f=function(r){r.forEach(function(r){h(r)})},p=function(r){f(r),l()},h=function(n){var t=hueBridge(n,r,g,v,y);i.unshift(t)},d=function(r){r?h(r):h(a),l(),hueNupnpDiscoverer(p)},l=function(){0===i.length&&f(bruteForcer().ips()),i.forEach(function(r){r.start()})},g=function(r,t,e){n(r,t,e),m()},v=function(r,n,e){t(r,n,e),m()},y=function(r,n,t){e(r,n,t),m()},m=function(){s++,s>=i.length&&o&&o()};return{start:function(r,n){d(r,n)},ips:function(){return i}}};