// localstorage interface

'use strict';
/*jshint multistr: true */

/*globals chrome:false */

/* exported  storageClass */

var storageClass = function (){

	function setSetting(name, val, callback){
		try{
		  	console.log('setting ' + name + ' = ' + JSON.stringify(val));
		  	var obj = {};
		  	obj[name] = val;

		  	if (syncAvailable()) {
				chrome.storage.sync.set(obj, callback);
			} else {
				localStorage.setItem(name, JSON.stringify(val));
				if (callback) { 
					callback(name, val);// might be different from sync
				}
			}
		} catch(error) {
			// do nothing
		}
	}

	function getSetting(name, callback) {
		if (syncAvailable()) {
			chrome.storage.sync.get(name, function (items) {
				console.log('got storage ' + name + ': ' + items[name]);
				callback(items[name]);
			});
		} else if (localStorage) {
			var result = null;
			try {
				result = JSON.parse(localStorage.getItem(name));
			}catch(e) {
				console.log('Error: ' + e);
				result = localStorage.getItem(name);
			}
			if (callback) { 
				callback(result);
			}
		} else {
			if (callback) {
				callback(null);
			}
		}
	}

	function syncAvailable() {
		return typeof(chrome) !== 'undefined'  && 
						chrome.storage !== undefined && 
						chrome.storage.sync !== undefined;
	}

	// public functions
	return {
		set: function(name, value, onSave){
			return setSetting(name, value, onSave);
		},
		get: function(name, onGet){
			return getSetting(name, onGet);
		}
	};
};