"use strict";var hueBridge=function(r,n,t,e,o){var u="http://"+r+"/api",i=u+"/"+n,s="init",c=function(n){var t="hueBridge ("+r+"): "+n;console.log(t)},a=function(){try{$.ajax({dataType:"json",url:i,success:p,error:f,timeout:5e3})}catch(r){f(r)}},f=function(n){"timeout"===n.statusText?(c("Bridge error timeout: "+r),o(r,"Timeout","Too many timeouts on: "+u)):(c("error on auth: "+n.statusText),s="error",o(r,"Error","Unknown error"+n.statusText))},p=function(n){var t=n;$.isArray(t)&&(t=n[0]),t.hasOwnProperty("error")&&"unauthorized user"===t.error.description?(c("Bridge found at "+r),s="found",h()):t.hasOwnProperty("lights")&&(s="ready",c("Bridge ready "+r),e(r,"Ready",t))},h=function(){c("adding user...");var r=JSON.stringify({devicetype:n,username:n});c(r),$.ajax({url:u,type:"POST",data:r,success:d})},d=function(r){c(r),r[0].hasOwnProperty("error")?l(r):r[0].hasOwnProperty("success")&&(s="ready",g(r))},l=function(n){"link button not pressed"===n[0].error.description?(s="needauthorization",t(r,"NeedAuthorization","Bridge found. Press the bridge button..."),setTimeout(h,2e3)):(s="error",o(r,"Error","Error: "+n[0].error.description))},g=function(){c("Authorization successful"),a()};return{getStatus:function(){return s},start:function(){a()}}},hueNupnpDiscoverer=function(r){var n=[],t=function(){console.log("Requesting meethue.com/api/nupnp."),$.ajax({url:"https://www.meethue.com/api/nupnp",dataType:"json",type:"put",timeout:2e3,success:e,error:o})},e=function(r){trackState("nunpnp",r),null!==r&&r.length>0?(r.forEach(function(r){var t=r.internalipaddress;"0.0.0.0"!==t&&n.push(t)}),u()):(console.log("meethue portal did not return"),u())},o=function(r){console.log(r),u()},u=function(){r(n)};return t(),{}},bruteForcer=function(){var r=function(){for(var r=[],n=0;21>n;n++)r.push("10.0.1."+n),r.push("192.168.0."+n),r.push("192.168.0."+(100+n)),r.push("192.168.1."+n);return r};return{ips:function(){return r()}}},hueDiscoverer=function(r,n,t,e,o){var u=[],i=0,s=function(r){r.forEach(function(r){a(r)})},c=function(r){s(r),p()},a=function(n){var t=hueBridge(n,r,h,d,l);u.unshift(t)},f=function(r){r?(a(r),p()):hueNupnpDiscoverer(c)},p=function(){0===u.length&&s(bruteForcer().ips()),u.forEach(function(r){r.start()})},h=function(r,t,e){n(r,t,e),g()},d=function(r,n,e){t(r,n,e),g()},l=function(r,n,t){e(r,n,t),g()},g=function(){i++,i>=u.length&&o&&o()};return{start:function(r,n){f(r,n)},ips:function(){return u}}};