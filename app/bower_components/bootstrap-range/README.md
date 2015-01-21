bootstrap-rangepicker [![Build Status](https://travis-ci.org/drewcovi/bootstrap-range.png?branch=master)](https://travis-ci.org/drewcovi/bootstrap-range)
================
Originally began as a loose "fork" of bootstrap-slider found on http://www.eyecon.ro/ by Stefan Petre.

Over time, this project has diverged sigfinicantly from Stefan Petre's version and is now almost completly different.

__Please ensure that you are using this library instead of the Petre version before creating issues in the repository Issue tracker!!__

Installation
============
Clone the repository, then run `npm install`
r
Want to use bower? `bower install bootstrap-range`

Then load the plugin CSS and JavaScript into your web page, and everything should work!

Remember to load the plugin code after loading the Bootstrap CSS and JQuery.

__JQuery is optional and the plugin can operate with or without it.__

Look below to see an example of how to interact with the non-JQuery interface.

Supported Browsers
========
__We only support modern browsers!!! Basically, anything below IE9 is not compatible with this plugin!__

Examples
========
You can see all of our API examples [here](http://drewcovi.github.io/bootstrap-range/).

Using bootstrap-range (with JQuery)
======================

Create an input element and call .rangepicker() on it:

```js
// Instantiate a rangepicker
var mySlider = $("input.rangepicker").rangepicker();

// Call a method on the rangepicker
var value = mySlider.rangepicker('getValue');

// For non-getter methods, you can chain together commands
	mySlider
		.rangepicker('setValue', 5)
		.rangepicker('setValue', 7);
```

If there is already a JQuery plugin named _rangepicker_ bound to the namespace, then this plugin will take on the alternate namespace _bootstrapRangepicker_.

```
// Instantiate a rangepicker
var mySlider = $("input.rangepicker").bootstrapRangepicker();

// Call a method on the rangepicker
var value = mySlider.bootstrapRangepicker('getValue');

// For non-getter methods, you can chain together commands
	mySlider
		.bootstrapRangepicker('setValue', 5)
		.bootstrapRangepicker('setValue', 7);
```

Using bootstrap-rangepicker (without JQuery)
======================

Create an input element in the DOM, and then create an instance of Slider, passing it a selector string referencing the input element.

```js
// Instantiate a rangepicker
var mySlider = new Slider("input.rangepicker", {
	// initial options object
});

// Call a method on the rangepicker
var value = mySlider.getValue();

// For non-getter methods, you can chain together commands
mySlider
	.setValue(5)
	.setValue(7);
```

Options
=======
Options can be passed either as a data (data-foo) attribute, or as part of an object in the rangepicker call.

| Name | Type |	Default |	Description |
| ---- |:----:|:-------:|:----------- |
| id | string | '' | set the id of the rangepicker element when it's created |
| min |	float	| 0 |	minimum possible value |
| max |	float |	10 |	maximum possible value |
| step | float |	1 |	increment step |
| precision | float |	0 |	The number of digits shown after the decimal. Defaults to the number of digits after the decimal of _step_ value. |
| orientation |	string | 'horizontal' |	set the orientation. Accepts 'vertical' or 'horizontal' |
| value |	float,array |	5	| initial value. Use array to have a range rangepicker. |
| range |	bool |	false	| make range rangepicker. Optional if initial value is an array. If initial value is scalar, max will be used for second value. |
| selection |	string |	'before' |	selection placement. Accepts: 'before', 'after' or 'none'. In case of a range rangepicker, the selection will be placed between the handles |
| tooltip |	string |	'show' |	whether to show the tooltip on drag, hide the tooltip, or always show the tooltip. Accepts: 'show', 'hide', or 'always' |
| tooltip_separator |	string |	':' |	tooltip separator |
| tooltip_split |	bool |	false |	if false show one tootip if true show two tooltips one for each handler |
| handle |	string |	'round' |	handle shape. Accepts: 'round', 'square', 'triangle' or 'custom' |
| reversed | bool | false | whether or not the rangepicker should be reversed |
| enabled | bool | true | whether or not the rangepicker is initially enabled |
| formatter |	function |	returns the plain value |	formatter callback. Return the value wanted to be displayed in the tooltip |
| natural_arrow_keys | bool | false | The natural order is used for the arrow keys. Arrow up select the upper rangepicker value for vertical rangepickers, arrow right the righter rangepicker value for a horizontal rangepicker - no matter if the rangepicker was reversed or not. By default the arrow keys are oriented by arrow up/right to the higher rangepicker value, arrow down/left to the lower rangepicker value. |

Functions
=========
__NOTE:__ Optional parameters are italisized.

| Function | Parameters | Description |
| -------- | ----------- | ----------- |
| getValue | --- | Get the current value from the rangepicker |
| setValue | newValue, _triggerSlideEvent_ | Set a new value for the rangepicker. If optional triggerSlideEvent parameter is _true_, the 'slide' event will be triggered. |
| destroy | --- | Properly clean up and remove the rangepicker instance |
| disable | ---| Disables the rangepicker and prevents the user from changing the value |
| enable | --- | Enables the rangepicker |
| toggle | --- | Toggles the rangepicker between enabled and disabled |
| isEnabled | --- |Returns true if enabled, false if disabled |
| setAttribute | attribute, value | Updates the rangepicker's [attributes](#options) |
| getAttribute | attribute | Get the rangepicker's [attributes](#options) |
| refresh | --- | Refreshes the current rangepicker |
| on | eventType, callback | When the rangepicker event _eventType_ is triggered, the callback function will be invoked |

Events
======
| Event | Description |
| ----- | ----------- |
| slide | This event fires when the rangepicker is dragged |
| slideStart | This event fires when dragging starts |
| slideStop | This event fires when the dragging stops |
| slideEnabled | This event fires when the rangepicker is enabled |
| slideDisabled | This event fires when the rangepicker is disabled |

Other Platforms & Libraries
===========================
- [Ruby on Rails](https://github.com/stationkeeping/bootstrap-slider-rails)
- [knockout.js](https://github.com/cosminstefanxp/bootstrap-slider-knockout-binding) ([@cosminstefanxp](https://github.com/cosminstefanxp), [#81](https://github.com/seiyria/bootstrap-slider/issues/81))
- [AngularJS](https://github.com/seiyria/angular-bootstrap-slider)
- [NuGet](https://www.nuget.org/packages/bootstrap.slider)
- [MeteorJS](https://github.com/kidovate/meteor-bootstrap-slider)

Maintainers
============
- Drew Covi
	* Twitter: [@drewcovi](https://twitter.com/drewcovi)
	* Github: [drewcovi](https://github.com/drewcovi)
