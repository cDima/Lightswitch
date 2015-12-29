// extensions.js
// (c) Dmitry Sadakov - 2015 All rights reserved.

'use strict';

if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}
 
if (typeof String.prototype.startsWith !== 'function') {
    String.prototype.startsWith = function(prefix) {
        return this.indexOf(prefix) !== -1;
    };
}


var brokenPromises = [];

if (typeof Promise !== 'undefined' && Promise) {
	Promise.any = function(arrayOfPromises) {
	  if(!arrayOfPromises || !(arrayOfPromises instanceof Array)) {
	    throw new Error('Must pass Promise.any an array');
	  }
	    
	  if(arrayOfPromises.length === 0) {
	    return Promise.resolve([]);
	  }
	   
	    
	  // For each promise that resolves or rejects, 
	  // make them all resolve.
	  // Record which ones did resolve or reject
	  var i = 0;
	  var resolvingPromises = arrayOfPromises.map(function(promise) {
	  	promise.id = i;
	  	var localI = i;
	  	brokenPromises[localI] = promise;
	  	i++;

	    return promise.then(function(result) {
	      console.log('resolved ' + localI);
	      delete brokenPromises[localI];
	      return {
	        resolve: true,
	        result: result
	      };
	    }, function(error) {
	       console.log('rejected ' + localI);
	       delete brokenPromises[localI];
	      return {
	        resolve: false,
	        result: error
	      };
	    });
	  });

	  return Promise.all(resolvingPromises).then(function(results) {
	    // Count how many passed/failed
	    var passed = [], failed = [], allFailed = true;
	    results.forEach(function(result) {
	      if(result.resolve) {
	        allFailed = false;
	      }
	      if (result.resolve) {
	        passed.push(result.result);
	      } else {
	        failed.push(result.result);
	      }
	    });

	    if(allFailed) {
	      throw failed;
	    } else {
	      return passed;
	    }
	  });
	};

}