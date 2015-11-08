// localstorage interface

'use strict';
/*jshint multistr: true */

/*globals chrome:false */

/* exported Storage */

class Storage {
	static set (name, val) {
		return new Promise((resolve, reject) => {
			try {
			  	console.log('setting ' + name + ' = ' + JSON.stringify(val));
			  	var obj = {};
			  	obj[name] = val;

			  	if (this.syncAvailable()) {
					chrome.storage.sync.set(obj, resolve);
				} else {
					localStorage.setItem(name, JSON.stringify(val));
					resolve(name, val);// might be different from sync
				}
			} catch(e) {
				reject(e);
			}
		});
	}

	static get (name) {
		return new Promise((resolve, reject) => {
			if (this.syncAvailable()) {
				chrome.storage.sync.get(name, function (items) {
					console.log('got storage ' + name + ': ' + items[name]);
					resolve(items[name]);
				});
			} else if (localStorage) {
				var result = null;
				try {
					var b = localStorage.getItem(name);
					if (b === 'undefined') {
						result = undefined;
					} else if (b === 'null') {
						result = null;
					} else {
						result = JSON.parse(b);
					}
				}catch(e) {
					console.log('Error: ' + e);
					result = localStorage.getItem(name);
				}
				resolve(result);
			} else {
				resolve(null);
			}
		});
	}
	static syncAvailable() {
		return typeof(chrome) !== 'undefined'  && 
						chrome.storage !== undefined && 
						chrome.storage.sync !== undefined;
	}
}
