// localstorage interface

'use strict';
/*jshint multistr: true */

/*globals chrome:false */

/* exported  storageClass */

var storageClass = function (){

	function setSetting(name, val, callback){
		if (canSave) {
		  	console.log('setting ' + name + ' = ' + val);
		  	var obj = {};
		  	obj[name] = val;

		  	if (syncAvailable()) {
				chrome.storage.sync.set(obj, callback);
			} else {
				localStorage.setItem(name, val);
				if (callback) { 
					callback(name, val);// might be different from sync
				}
			}
		}
	}

	function getSetting(name, callback) {
		if (syncAvailable()) {
			chrome.storage.sync.get(name, function (items) {
				console.log('got storage ' + name + ': ' + items[name]);
				callback(items[name]);
			});
		} else {
			var result = localStorage.getItem(name);
			if (callback) { 
				callback(result);
			}
		}
	}

	function syncAvailable() {
		return typeof(chrome) !== 'undefined'  && 
						chrome.storage !== undefined && 
						chrome.storage.sync !== undefined;
	}

	function canSave() {
		// safari flags lie
		try {
			setSetting('canSave', true);
		} catch(error) {
			return false;
		}
		return true;
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