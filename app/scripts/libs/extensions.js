// extensions.js
// (c) Dmitry Sadakov - 2015 All rights reserved.

'user strict';

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


if (Promise) {
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
	  var resolvingPromises = arrayOfPromises.map(function(promise) {
	    return promise.then(function(result) {
	      return {
	        resolve: true,
	        result: result
	      };
	    }, function(error) {
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