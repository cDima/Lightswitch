/*! =========================================================
 * bootstrap-rangepicker.js
 *
 * Maintainers: 
 *    Kyle Kemp 
 *      - Twitter: @seiyria
 *      - Github:  seiyria
 *    Rohit Kalkur
 *      - Twitter: @Rovolutionary
 *      - Github:  rovolution
 *
 * =========================================================
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


/**
 * Bridget makes jQuery widgets
 * v1.0.1
 * MIT license
 */
( function( $ ) {

  ( function( $ ) {

    'use strict';

    // -------------------------- utils -------------------------- //

    var slice = Array.prototype.slice;

    function noop() {}

    // -------------------------- definition -------------------------- //

    function defineBridget( $ ) {

      // bail if no jQuery
      if ( !$ ) {
        return;
      }

      // -------------------------- addOptionMethod -------------------------- //

      /**
       * adds option method -> $().plugin('option', {...})
       * @param {Function} PluginClass - constructor class
       */
      function addOptionMethod( PluginClass ) {
        // don't overwrite original option method
        if ( PluginClass.prototype.option ) {
          return;
        }

        // option setter
        PluginClass.prototype.option = function( opts ) {
          // bail out if not an object
          if ( !$.isPlainObject( opts ) ){
            return;
          }
          this.options = $.extend( true, this.options, opts );
        };
      }


      // -------------------------- plugin bridge -------------------------- //

      // helper function for logging errors
      // $.error breaks jQuery chaining
      var logError = typeof console === 'undefined' ? noop :
        function( message ) {
          console.error( message );
        };

      /**
       * jQuery plugin bridge, access methods like $elem.plugin('method')
       * @param {String} namespace - plugin name
       * @param {Function} PluginClass - constructor class
       */
      function bridge( namespace, PluginClass ) {
        // add to jQuery fn namespace
        $.fn[ namespace ] = function( options ) {
          if ( typeof options === 'string' ) {
            // call plugin method when first argument is a string
            // get arguments for method
            var args = slice.call( arguments, 1 );
            for ( var i=0, len = this.length; i < len; i++ ) {
              var elem = this[i];
              var instance = $.data( elem, namespace );
              if ( !instance ) {
                logError( "cannot call methods on " + namespace + " prior to initialization; " +
                  "attempted to call '" + options + "'" );
                continue;
              }
              if ( !$.isFunction( instance[options] ) || options.charAt(0) === '_' ) {
                logError( "no such method '" + options + "' for " + namespace + " instance" );
                continue;
              }

              // trigger method with arguments
              var returnValue = instance[ options ].apply( instance, args);

              // break look and return first value if provided
              if ( returnValue !== undefined && returnValue !== instance) {
                return returnValue;
              }
            }
            // return this if no return value
            return this;
          } else {
            var objects = this.map( function() {
              var instance = $.data( this, namespace );
              if ( instance ) {
                // apply options & init
                instance.option( options );
                instance._init();
              } else {
                // initialize new instance
                instance = new PluginClass( this, options );
                $.data( this, namespace, instance );
              }
              // console.log(this);
              
              return $(this);
              
            });

            // console.log($(objects));
            new PluginClass()._createSliderGroups();
            // $().each(function(){
            //   $.data( this.element, namespace, this );
            //   objects.push(this);
            // });
            // console.log(objects);

            if(!objects || objects.length > 1) {
              // console.log(this, this.map)
              objects = this.map( function(){
                return this;
              });
              // console.log(objects);
              return objects;
            } else {
              return objects[0];
            }
          }
        };

      }

      // -------------------------- bridget -------------------------- //

      /**
       * converts a Prototypical class into a proper jQuery plugin
       *   the class must have a ._init method
       * @param {String} namespace - plugin name, used in $().pluginName
       * @param {Function} PluginClass - constructor class
       */
      $.bridget = function( namespace, PluginClass ) {
        addOptionMethod( PluginClass );
        bridge( namespace, PluginClass );
      };

      return $.bridget;

    }

      // get jquery from browser global
      defineBridget( $ );

  })( $ );


  /*************************************************
          
      bootstrap-rangepicker SOURCE CODE

  **************************************************/

  (function( $ ) {
    var RangeGroups = {};
    var ErrorMsgs = {
      formatInvalidInputErrorMsg : function(input) {
        return "Invalid input value '" + input + "' passed in";
      },
      callingContextNotSliderInstance : "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the rangepicker() initializer is calling the method"
    };
    var i;



    /*************************************************
            
              CONSTRUCTOR

    **************************************************/
    var RangePicker = function(element, options) {
      if(element){
        createNewSlider.call(this, element, options);
      }
      return this;
    };
    function dasherize(string){
      string = string.replace(/(A-Z)/g, '-'+"$1".toLowerCase());
      string = string.replace(/_/g, '-');
      return string;
    }
    function createNewSlider(element, options) {
      function getDataAttrib(element, optName) {
        var dataName = "data-" + dasherize(optName);

        var valString = element.getAttribute(dataName)  ||
                        (optName === 'value' && $(element).val()) ||
                        // use any native attributes besides id
                        (optName !== 'id' && 
                          element.getAttribute(optName));

        try {
          return JSON.parse(valString);
        }
        catch(err) {
          return valString; 
        }
      }

      if(typeof element === "string") {
        this.element = document.querySelector(element);
      } else if(element instanceof HTMLElement) {
        this.element = element;
      }

      
      /*************************************************
            
              Process Options

      **************************************************/
      options = options ? options : {};
      var optionTypes = Object.keys(this.defaultOptions);

      for(i = 0; i < optionTypes.length; i++) {
        var optName = optionTypes[i];

        // First check if an option was passed in via the constructor
        var val = options[optName];
        // If no data attrib, then check data atrributes
        val = (typeof val !== 'undefined') ? val : getDataAttrib(this.element, optName);
        // Finally, if nothing was specified, use the defaults
        val = (val !== null) ? val : this.defaultOptions[optName];

        // Set all options on the instance of the Slider
        if(!this.options) {
          this.options = {};
        }
        if(typeof val === 'string' && Boolean(parseFloat(val))){
          val = parseFloat(val);
        }
        this.options[optName] = val;
      }
      

      // ensure the limit is a multiple of step

      if(this.options.limit && this.options.limit < this.options.step){
        this.options.limit = this.options.step;
      }else if(this.options.limit > this.options.step){
        this.options.limit = parseInt(this.options.limit/this.options.step,10)*this.options.step;
      }

      this.eventToCallbackMap = {};

      if($){
        this.$element = $(this.element);
      }

      // Don't process inputs that have a parent, post process those later
      if(this.options.parent){
        RangeGroups[this.options.parent] = RangeGroups[this.options.parent] || [];
        this.options.element = this.element;
        RangeGroups[this.options.parent].push(this.options);
        return false;
      }
      /*************************************************
            
              Create Markup

      **************************************************/

      var origWidth = this.element.style.width;
      var updateSlider = false;
      var parent = this.element.parentNode;
      var handles = [], selections = [];
      var handle, selection;
      var handleClassName = "rangepicker-handle";
      var tooltipClassName = 'tooltip';
      var className;
      var tooltip;
      var rangepicker;
      var keydown;
      var selectionHidden;
      var handleClass;
      var rangepickerTrack;

      if (this.options.value instanceof Array !== true ){
          this.options.value = [parseInt(this.options.value, 10)];
      }
      if (this.options.value instanceof Array && this.options.value.length > 1) {
        // this.options.range = true;
      } else if (this.options.range && this.options.value.length === 1) {
        // User wants a range, but value is not an array
        this.options.value.push(this.options.max);
      }

      if (this.rangepickerElem) {
        updateSlider = true;
        rangepickerTrack = this.rangepickerTrack;
        this.handles.forEach(function(handle){
          rangepickerTrack.removeChild(handle);
        });
        this.selections.forEach(function(selection){
          rangepickerTrack.removeChild(selection);
        });
      } else {
        /* Create elements needed for rangepicker */
        this.rangepickerElem = document.createElement("div");
        this.rangepickerElem.className = "bootstrap-range";
        
        /* Create rangepicker track elements */
        rangepickerTrack = this.rangepickerTrack = document.createElement("div");
        rangepickerTrack.className = "rangepicker-track";
        

        this.rangepickerElem.appendChild(rangepickerTrack);
        /* Create tooltip elements */

        /* Append components to rangepickerElem */

        /* Append rangepicker element to parent container, right before the original <input> element */
        parent.insertBefore(this.rangepickerElem, this.element);
        
        /* Hide original <input> element */
        this.element.style.display = "none";
      }

      if (this.options.value instanceof Array){
        for(i = 0; i < this.options.value.length; i++){
          className = handleClassName+' '+handleClassName+'-'+(i+1);
          if(i === 0){
            className = className+' '+'min-'+handleClassName;
          }else if(i === this.options.value.length-1){
            className = className+' '+'max-'+handleClassName;
          }
          handle = document.createElement("div");
          handle.className = className;
          handle.setAttribute('data-id', i+1);
          handles.push(handle);

          selection = document.createElement("div");
          selection.className = "rangepicker-selection rangepicker-selection-"+(i+1);
          selection.setAttribute('data-id', i+1);
          selections.push(selection);

          // rangepickerTrack.appendChild(selection);

          rangepickerTrack.insertBefore(selection,rangepickerTrack.childNodes[0]);
          rangepickerTrack.appendChild(handle);

        }
        if(this.options.limit || this.options.value.length === 1){
          selection = document.createElement("div");

          // if(this.options.limit){
          //   selectionHidden = ' hidden';
          // }else{
            selectionHidden = '';
          // }
          selection.className = 
            "rangepicker-selection rangepicker-selection-"+(this.options.value.length+1)+selectionHidden;

          selection.style.right = '0%';
          selection.setAttribute('data-id', i+2);
          selections.push(selection);
          // rangepickerTrack.appendChild(selection);
          rangepickerTrack.insertBefore(selection,rangepickerTrack.childNodes[0]);
        }


        this.handles = handles;
        this.selections = selections;
      }

      this.tooltips = [];
      this.tooltipInners = [];

      if(this.options.tooltip_split || this.options.value.length === 1 || (!this.options.tooltip_split && this.options.value.length > 1 && !this.options.range)){
        for(i = 0; i < this.handles.length; i++){
          tooltip = document.createElement("div");
          className = tooltipClassName+' '+tooltipClassName+'-'+(i+1);
          if(i === 0){
            className = className+' '+tooltipClassName+'-min';
          }else if(i === this.handles.length){
            className = className+' '+tooltipClassName+'-max';
          }
          tooltip.className = className;
          this.createAndAppendTooltipSubElements(tooltip);
          this.tooltips.push(tooltip);
          this.rangepickerElem.appendChild(tooltip);
        }
      }else{
        for(i = 0; i < this.selections.length; i++){
          tooltip = document.createElement("div");
          className = tooltipClassName+' '+tooltipClassName+'-'+(i+1);
          if(i === 0){
            className = className+' '+tooltipClassName+'-min';
          }else if(i === this.selections.length){
            className = className+' '+tooltipClassName+'-max';
          }
          tooltip.className = className;
          this.createAndAppendTooltipSubElements(tooltip);
          this.tooltips.push(tooltip);
          this.rangepickerElem.appendChild(tooltip);
        }
      }

      /* If JQuery exists, cache JQ references */
      if($) {
        this.$rangepickerElem = $(this.rangepickerElem);
      }

      /*************************************************
            
                Setup

      **************************************************/
      
      this.rangepickerElem.id = this.options.id;

      this.touchCapable = 'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch);

      // this.tooltip = this.rangepickerElem.querySelector('.tooltip-main');
      // this.tooltipInner = this.tooltip.querySelector('.tooltip-inner');

      // this.tooltip_min = this.rangepickerElem.querySelector('.tooltip-min');
      // this.tooltipInner_min = this.tooltip_min.querySelector('.tooltip-inner');

      // this.tooltip_max = this.rangepickerElem.querySelector('.tooltip-max');
      // this.tooltipInner_max= this.tooltip_max.querySelector('.tooltip-inner');

      if (updateSlider === true) {
        // Reset classes
        this._removeClass(this.rangepickerElem, 'rangepicker-horizontal');
        this._removeClass(this.rangepickerElem, 'rangepicker-vertical');
        for(i=0; i<this.tooltips.length; i++){
          this._removeClass(this.tooltips[i], 'hidden');
        }

        // Undo existing inline styles for track
        this.selections.forEach(function(selection) {
          rangepicker = this;
          ["left", "top", "width", "height"].forEach(function(prop){
            rangepicker._removeProperty(selection, prop);
          });
        }, this);

        // Undo inline styles on handles
        this.handles.forEach(function(handle) {
          this._removeProperty(handle, 'left');
          this._removeProperty(handle, 'top');  
        }, this);

        // Undo inline styles and classes on tooltips
        this.tooltips.forEach(function(tooltip) {
          this._removeProperty(tooltip, 'left');
          this._removeProperty(tooltip, 'top');
          this._removeProperty(tooltip, 'margin-left');
          this._removeProperty(tooltip, 'margin-top');

          this._removeClass(tooltip, 'right');
          this._removeClass(tooltip, 'top');
        }, this);
      }
      if(this.options.orientation === 'vertical') {
        this._addClass(this.rangepickerElem,'rangepicker-vertical');

        this.stylePos = 'top';
        this.mousePos = 'pageY';
        this.sizePos = 'offsetHeight';

        for(i=0; i<this.tooltips.length; i++){
          this._addClass(this.tooltips[i], 'right');
        }
        for(i=0; i< this.tooltips.length; i++){
          this.tooltips[i].style.left = '100%';
        }
      } else {
        this._addClass(this.rangepickerElem, 'rangepicker-horizontal');
        this._addClass(this.rangepickerElem, this.element.getAttribute('class')||"");
        this.rangepickerElem.style.width = origWidth;

        this.options.orientation = 'horizontal';
        this.stylePos = 'left';
        this.mousePos = 'pageX';
        this.sizePos = 'offsetWidth';
        
        for(i=0; i<this.tooltips.length; i++){
          this._addClass(this.tooltips[i], 'top');
        }
      }

      if(this.options.value.length === 1){
        if (this.options.selection === 'after') {
          this._addClass(this.selections[0], 'hidden');
        }else{
          this._addClass(this.selections[1], 'hidden');
        }
      }
      if (this.options.selection === 'none') {
        this.selections.forEach(function(selection){
          this._addClass(selection, 'hidden');
        });
      }

      // this.trackSelection = rangepickerTrackSelection || this.trackSelection;
      

      if (updateSlider === true) {
        // Reset classes
        for(i=0; i<this.handles.length; i++){
          handle = this.handles[i];
          this._removeClass(handle, 'round triangle hide');
        }
      }

      for(i=0; i<this.handles.length; i++){
        handle=this.handles[i];
        handleClass = this.options.handle instanceof Array ?
                        this.options.handle[i]:this.options.handle;
        this._addClass(handle, handleClass);
      }

      this.offset = this._offset(this.rangepickerElem);
      this.size = this.rangepickerElem[this.sizePos];

      this.setValue(this.options.value);

      /******************************************
            
            Bind Event Listeners

      ******************************************/

      if (this.touchCapable) {
        // Bind touch handlers
        this.mousedown = this._mousedown.bind(this);
        this.rangepickerElem.addEventListener("touchstart", this.mousedown, false);
      } else {
        // Bind mouse handlers
        this.mousedown = this._mousedown.bind(this);
        this.rangepickerElem.addEventListener("mousedown", this.mousedown, false);
      }

      // Bind keyboard handlers
      this.keydowns = [];

      this.showTooltip = this._showTooltip.bind(this);
      this.hideTooltip = this._hideTooltip.bind(this);

      for(i=0; i<this.handles.length; i++){
        keydown = this._keydown.bind(this,0);
        this.keydowns.push(keydown);
        this.handles[i].addEventListener('keydown', keydown, false);
        if(this.options.tooltip !== 'hide' && this.options.tooltip !== 'always'){
          this.handles[i].addEventListener("focus", this.showTooltip, false);
          this.handles[i].addEventListener("blur", this.hideTooltip, false);
        }
      }
      // Bind tooltip-related handlers
      if(this.options.tooltip === 'hide') {
        for(i=0; i<this.tooltips.length; i++){
          this._addClass( this.tooltips[i], 'hidden');
        }
      } else if(this.options.tooltip === 'always') {
        this._showTooltip();
        this._alwaysShowTooltip = true;
      } else {

        if(this.tooltips.length > 1 && !this.options.tooltip_split){
          for(i=0; i<this.tooltips.length; i++){
            selection = this.selections[i] && this.selections[i];
            handle = this.handles[i] && this.handles[i];
            selection.addEventListener("mouseenter", this.showTooltip, false);
            selection.addEventListener("mouseleave", this.hideTooltip, false);
            if(handle){
              handle.addEventListener("mouseenter", this.showTooltip, false);
              handle.addEventListener("mouseleave", this.hideTooltip, false);
            }
          }
        }else if(this.tooltips.length === 1){
          this.rangepickerElem.addEventListener("mouseenter", this.showTooltip, false);
          this.rangepickerElem.addEventListener("mouseleave", this.hideTooltip, false);
        }else{
          for(i=0; i<this.tooltips.length; i++){
            this.handles[i].addEventListener("mouseenter", this.showTooltip, false);
            this.handles[i].addEventListener("mouseleave", this.hideTooltip, false);
          }
        }
        
      }
      if(this.options.enabled) {
        this.enable();
      } else {
        this.disable();
      }
    }
    

    // function lcm_nums(ar) {
    //   function lcm(a, b) { 
    //     function gcf(a, b) { 
    //       return ( b === 0 ) ? (a):( gcf(b, a % b) ); 
    //     }
    //     return ( a / gcf(a,b) ) * b; 
    //   }
    //   if (ar.length > 1) {
    //     ar.push( lcm( ar.shift() , ar.shift() ) );
    //     return lcm_nums( ar );
    //   } else {
    //     return ar[0];
    //   }
    // }

    /*************************************************
            
          INSTANCE PROPERTIES/METHODS

    - Any methods bound to the prototype are considered 
    part of the plugin's `public` interface

    **************************************************/
    RangePicker.prototype = {
      _init: function() {}, // NOTE: Must exist to support bridget

      constructor: RangePicker,

      defaultOptions: {
        id: "",
        min: 0,
        max: 10,
        step: 1,
        precision: 0,
        limit: false,
        orientation: 'horizontal',
        value: 5,
        range: false,
        selection: 'before',
        children: false,
        tooltip: 'show',
        tooltip_split: false,
        parent: false,
        handle: 'round',
        reversed: false,
        enabled: true,
        formatter: '',
        natural_arrow_keys: false
      },
      
      over: false,
      
      inDrag: false,

      getValue: function() {
        if (this.options.value.length > 1) {
          return this.options.value;
        }
        return this.options.value[0];
      },
      createAndAppendTooltipSubElements : function(tooltipElem) {
          var arrow = document.createElement("div");
          arrow.className = "tooltip-arrow";

          var inner = document.createElement("div");
          inner.className = "tooltip-inner";

          tooltipElem.appendChild(arrow);
          tooltipElem.appendChild(inner);
          this.tooltipInners.push(inner);
      },
      setValue: function(val, triggerSlideEvent) {
        var context, target;
        if(this.parent){ // Called on a child element via method
          target = this;
          context = this.parent;
          context.targetChild = this.parent.children[this.index];
        }else if(this.children){ // Called on a group via mouse event
          context = this;
          target = this.targetChild;
        }else{
          context = this;
          target = this;
        }

        var value,
          min = context.options.min,
          max = context.options.max,
          i;

        if (!val) {
          val = 0;
        }

        context.options.value = context._validateInputValue(val);

        var applyPrecision = context._applyPrecision.bind(context);
        if (
            // context.children ||
            // context.options.range ||
            context.options.value.length > 1
          ) {
          for(i=0; i<context.options.value.length; i++){
            value = context.options.value[i];
            value = applyPrecision(value);
            value = Math.min(max, value);
            value = Math.max(min, value);
            context.options.value[i] = value;
          }
        } else {
          value = context.options.value[0];
          value = applyPrecision(value);
          value = Math.min(max, value);
          value = Math.max(min, value);
          context.options.value[0] = value;
        }

        context.diff = max - min;
        if (context.diff > 0) {
          context.percentage = [];
          for(i=0; i<context.options.value.length; i++){
            value = context.options.value[i];
            context.percentage.push((value - min) * 100/context.diff);
          }
          context.stepPercentage = context.options.step * 100 / context.diff;
          context.limitPercentage = context.options.limit * 100 / context.diff;
        } else {
          context.percentage = [0, 0];
          context.stepPercentage = 100;
        }
        // context.percentage.push(100);

        context._layout();

        var rangepickerValue = context.options.value.length > 1 || context.options.range ? context.options.value : context.options.value[0];

        target._setDataVal(rangepickerValue);

        if(triggerSlideEvent === true) {
          target._trigger('slide', rangepickerValue);
        }
        return context;
      },

      destroy: function(){
        // Remove event handlers on rangepicker elements
        this._removeSliderEventHandlers();

        // Remove the rangepicker from the DOM
        this.rangepickerElem.parentNode.removeChild(this.rangepickerElem);
        /* Show original <input> element */
        this.element.style.display = "";

        // Clear out custom event bindings
        this._cleanUpEventCallbacksMap();

        // Remove data values
        this.element.removeAttribute("data");

        // Remove JQuery handlers/data
        if($) {
          this._unbindJQueryEventHandlers();
          this.$element.removeData('rangepicker');
        }
      },

      disable: function() {
        this.options.enabled = false;

        for(i=0; i<this.handles.length; i++){
          this.handles[i].removeAttribute("tabindex");
        }
        this._addClass(this.rangepickerElem, 'rangepicker-disabled');
        this._trigger('slideDisabled');

        return this;
      },

      enable: function() {
        this.options.enabled = true;
        for(i=0; i<this.handles.length; i++){
          this.handles[i].setAttribute("tabindex", 0);
        }
        this._removeClass(this.rangepickerElem, 'rangepicker-disabled');
        this._trigger('slideEnabled');

        return this;
      },

      toggle: function() {
        if(this.options.enabled) {
          this.disable();
        } else {
          this.enable();
        }

        return this;
      },

      isEnabled: function() {
        return this.options.enabled;
      },

      on: function(evt, callback) {
        if($) {
          this.$element.on(evt, callback);
          this.$rangepickerElem.on(evt, callback);
        } else {
          this._bindNonQueryEventHandler(evt, callback);
        }
        return this;
      },

      getAttribute: function(attribute) {
        if(attribute) {
          return this.options[attribute];   
        } else {
          return this.options;
        }
      },

      setAttribute: function(attribute, value) {
        this.options[attribute] = value;
        return this;
      },

      refresh: function() {
        this._removeSliderEventHandlers();
        createNewSlider.call(this, this.element, this.options);
        if($) {
          // Bind new instance of rangepicker to the element
          $.data(this.element, 'rangepicker', this);
        }
        return this;
      },
      
      /******************************+
          
            HELPERS

      - Any method that is not part of the public interface.
      - Place it underneath this comment block and write its signature like so:

                  _fnName : function() {...}

      ********************************/
      _removeSliderEventHandlers: function() {
        // Remove event listeners from handle1
        var handle;
        for(i=0; i<this.handles.length; i++){
          handle = this.handles[i];
          handle.removeEventListener('keydown', this.keydowns[i], false);
          handle.removeEventListener('focus', this.showTooltip, false);
          handle.removeEventListener('blur', this.hideTooltip, false);
        }

        for(i=0; i<this.tooltips.length; i++){
          if(this.tooltips.length > 1 && !this.options.tooltip_split){
            this.selections[i].removeEventListener("keydown", this.keydowns[i], false);
            this.selections[i].removeEventListener("focus", this.showTooltip, false);
            this.selections[i].removeEventListener("blur", this.hideTooltip, false);
          }else{
            this.handles[i].removeEventListener("keydown", this.keydowns[i], false);
            this.handles[i].removeEventListener("focus", this.showTooltip, false);
            this.handles[i].removeEventListener("blur", this.hideTooltip, false);
          }
        }

        // Remove event listeners from rangepickerElem
        this.rangepickerElem.removeEventListener("mouseenter", this.showTooltip, false);
        this.rangepickerElem.removeEventListener("mouseleave", this.hideTooltip, false);
        this.rangepickerElem.removeEventListener("touchstart", this.mousedown, false);
        this.rangepickerElem.removeEventListener("mousedown", this.mousedown, false);
        
      },
      _bindNonQueryEventHandler: function(evt, callback) {
        var callbacksArray = this.eventToCallbackMap[evt];
        if(callbacksArray) {
          callbacksArray.push(callback);
        } else {
          this.eventToCallbackMap[evt] = [];
        }
      },
      _cleanUpEventCallbacksMap: function() {
        var eventNames = Object.keys(this.eventToCallbackMap);
        for(var i = 0; i < eventNames.length; i++) {
          var eventName = eventNames[i];
          this.eventToCallbackMap[eventName] = null;
        }
      },
      _showTooltip: function(event) {
        var target = event && event.target;
        var i = target && target.getAttribute('data-id');
        var handle = false;
        this.handles.forEach(function(element){
          if(target === element){
            handle = true;
          }
        });
        if(i){
          this._addClass( this.tooltips[i-1], 'in');

          // hovering over a handle with range and split enabled: show next range
          if(handle && this.tooltips[i] && this.options.range && this.options.tooltip_split){
            this._removeClass( this.tooltips[i], 'top');
            this._addClass( this.tooltips[i], 'in bottom');
          }

        }else{
          for(i=0; i<this.tooltips.length; i++){
            this._addClass( this.tooltips[i], 'in');
          }
        }
        this.over = true;
      },
      _hideTooltip: function(i) {
        if (this.inDrag === false && this.alwaysShowTooltip !== true) {
          for(i=0; i<this.tooltips.length; i++){
            this._removeClass( this.tooltips[i], 'in bottom');
            if(this.options.orientation === 'horizontal'){
              this._addClass( this.tooltips[i], 'top');
            }else{
              this._addClass( this.tooltips[i], 'right');
            }
          }
        }
        this.over = false;
      },
      _layout: function() {
        var percentage = this.percentage;
        var left, right, leftPercent, rightPercent;
        var i, handle, dim, selection, prev;
        if(this.options.reversed) {
          for(i=0; i<percentage.length; i++){
            percentage[i] = 100-percentage[i];
          }
        }
        for(i=0; i<this.handles.length; i++){
          handle = this.handles[i];
          handle.style[this.stylePos] = percentage[i]+'%';
        }
        if(this.options.orientation === 'vertical'){
          dim = ['top','bottom'];
        }else{
          dim = ['left','right'];
        }
        for(i=0; i<this.selections.length; i++){
          selection = this.selections[i];
          if(i===0 || (this.options.limit === false && this.options.value.length !== 1)){
            prev = 0;
          }else{
            prev = this.percentage[i-1];
          }
          if(this.options.reversed){
            selection.style[dim[1]] = prev + '%';
            selection.style[dim[0]] = this.percentage[i]+'%';
          }else{
            selection.style[dim[0]] = prev + '%';
            selection.style[dim[1]] = 100-this.percentage[i]+'%';
          }
        }

        var formattedTooltipVal, formatter;

        function defaultFormatter(left, right) {
          if(left && right){
            return left + " : " + right;
          } else {
            return left;
          }
        }

        formatter = typeof this.options.formatter === 'function'?
                      this.options.formatter:
                      this.options.formatter?
                        new Function(this.options.formatter):defaultFormatter;

        for(i=0; i<this.tooltips.length; i++){
          if(
            this.tooltips.length > 1 &&
            !this.options.tooltip_split &&
            this.options.range && this.options.limit
            ){
              left = this.options.value[i-1] || this.options.min;
              right = this.options.value[i] || this.options.max;
              leftPercent = this.percentage[i-1] || 0;
              rightPercent = this.percentage[i] || 100;
              this.tooltips[i].style[this.stylePos] = (rightPercent-leftPercent)/2 + leftPercent + '%';
          }else if(this.options.range && !this.options.limit){
            left = this.options.value[i];
            leftPercent = this.percentage[i];
            this.tooltips[i].style[this.stylePos] = leftPercent/2+'%';
          }else{
            left = this.options.value[i];
            this.tooltips[i].style[this.stylePos] = percentage[i] + '%';
          }
          if(
            this.options.tooltip_split ||
            (!this.options.limit && this.options.range)
            ){
              formattedTooltipVal = formatter(left);
          }else{
            formattedTooltipVal = formatter(left, right);
          }
          this._setText(this.tooltipInners[i], formattedTooltipVal);
          
          if (this.options.orientation === 'vertical') {
            this._css(this.tooltips[i], 'margin-top', -this.tooltips[i].offsetHeight / 2 + 'px');
          } else {
            this._css(this.tooltips[i], 'margin-left', -this.tooltips[i].offsetWidth / 2 + 'px');
          }
        }
      },
      _removeProperty: function(element, prop) {
        if (element.style.removeProperty) {
            element.style.removeProperty(prop);
        } else {
            element.style.removeAttribute(prop);
        }
      },
      _mousedown: function(ev) {
        var i;
        if(!this.options.enabled) {
          return false;
        }

        this._triggerFocusOnHandle();

        this.offset = this._offset(this.rangepickerElem);
        this.size = this.rangepickerElem[this.sizePos];


        var percentage = this._getPercentage(ev);


        this.downElement = ev.target;
        this.downPercentage = percentage;

        for(i=0; i<this.selections.length; i++){
          if(ev.target === this.selections[i]){
            this.downPrev = this.percentage[i-1];
            this.downNext = this.percentage[i];
          }
        }
        
        if(this.options.reversed){
          this.downPrev = 100 - this.downPrev;
          this.downNext = 100 - this.downNext;
        }

        this._adjustPercentageForRangeSliders(this.downElement, percentage);

        for(i=0; i<this.handles.length; i++){
          if(ev.target === this.handles[i]){
            this._addClass(this.selections[i], 'active');
            this._addClass(this.handles[i], 'active');
          }
        }

        // this._layout();

        this.mousemove = this._mousemove.bind(this);
        this.mouseup = this._mouseup.bind(this);
        if (this.touchCapable) {
          // Touch: Bind touch events:
          document.addEventListener("touchmove", this.mousemove, false);
          document.addEventListener("touchend", this.mouseup, false);
        } else {
          // Bind mouse events:
          document.addEventListener("mousemove", this.mousemove, false);
          document.addEventListener("mouseup", this.mouseup, false);
        }

        this.inDrag = true;

        var val = this._calculateValue();

        this._trigger('slideStart', val);

        this._setDataVal(val);

        this.setValue(val, false);

        this._trigger('slide', (val instanceof Array)?val:val[0]);
        
        if(this.targetChild){
          this.targetChild._trigger('mousedown');
          this.targetChild._trigger('touchstart');
          this.targetChild._trigger('click');
        }else{
          this._trigger('mousedown');
          this._trigger('click');
        }

        this._pauseEvent(ev);
        return true;
      },
      _triggerFocusOnHandle: function(handleIdx) {
        if(this.handles[handleIdx]){
          this.handles[handleIdx].focus();
        }
      },
      _keydown: function(handleIdx, ev) {
        if(!this.options.enabled) {
          return false;
        }

        var dir;
        switch (ev.keyCode) {
          case 37: // left
          case 40: // down
            dir = -1;
            break;
          case 39: // right
          case 38: // up
            dir = 1;
            break;
        }
        if (!dir) {
          return;
        }

        // use natural arrow keys instead of from min to max
        if (this.options.natural_arrow_keys) {
          var ifVerticalAndNotReversed = (this.options.orientation === 'vertical' && !this.options.reversed);
          var ifHorizontalAndReversed = (this.options.orientation === 'horizontal' && this.options.reversed);

          if (ifVerticalAndNotReversed || ifHorizontalAndReversed) {
            dir = dir * -1;
          }
        }

        var oneStepValuePercentageChange = dir * this.stepPercentage;
        var percentage = this.percentage[handleIdx] + oneStepValuePercentageChange;

        if (percentage > 100) {
          percentage = 100;
        } else if (percentage < 0) {
          percentage = 0;
        }

        this.dragged = handleIdx;
        this._adjustPercentageForRangeSliders(percentage);
        this.percentage[this.dragged] = percentage;
        this._layout();

        var val = this._calculateValue();
        
        this._trigger('slideStart', val);
        this._setDataVal(val);
        this.setValue(val, true);

        this._trigger('slideStop', val);
        this._setDataVal(val);
        
        this._pauseEvent(ev);

        return false;
      },
      _pauseEvent: function(ev) {
        if(ev.stopPropagation) {
          ev.stopPropagation();
        }
          if(ev.preventDefault) {
            ev.preventDefault();
          }
          ev.cancelBubble=true;
          ev.returnValue=false;     
      },
      _mousemove: function(ev) {
        if(!this.options.enabled) {
          return false;
        }

        var percentage = this._getPercentage(ev);
        // if(this.options.reversed){
        //   percentage = 100 - percentage;
        // }

        if(this.targetChild){
          this.targetChild._trigger('touchmove');
        }else{
          this._trigger('touchmove');
        }

        this._adjustPercentageForRangeSliders(this.downElement, percentage);

        var val = this._calculateValue();
        // this._layout();

        this.setValue(val, true);

        return false;
      },
      _adjustPercentageForRangeSliders: function(el, percentage) {
        var diff;

        
        if(this.options.value.length === 1 && (el === this.rangepickerTrack || el === this.rangepickerElem)){
          this.percentage[0] = percentage;
        }
        
        for(i=0; i<this.handles.length; i++){
          if(el === this.handles[i]){
            if(this.children){
              this.targetChild = this.children[i];
            }
            this.percentage[i] = percentage;
          }
        }
        for(i=0; i<this.selections.length; i++){
          if(el === this.selections[i]){        
            diff = percentage - this.downPercentage;
            this.percentage[i-1] = this.downPrev + diff;
            this.percentage[i] = this.downNext + diff;
          }
        }
      },
      _mouseup: function() {
        this.downElement = this.downPrev = this.downNext = this.downPercentage =  null;

        if(!this.options.enabled) {
          return false;
        }
        if (this.touchCapable) {
          // Touch: Unbind touch event handlers:
          document.removeEventListener("touchmove", this.mousemove, false);
          document.removeEventListener("touchend", this.mouseup, false);
        } else {
          // Unbind mouse event handlers:
          document.removeEventListener("mousemove", this.mousemove, false);
          document.removeEventListener("mouseup", this.mouseup, false);
        }

        if(this.targetChild){
          this.targetChild._trigger('mouseup');
          this.targetChild._trigger('touchend');
        }else{
          this._trigger('mouseup');
          this._trigger('touchend');
        }

        for(i=0; i<this.handles.length; i++){
          this._removeClass(this.selections[i], 'active');
          this._removeClass(this.handles[i], 'active');
        }
        this.inDrag = false;
        if (this.over === false) {
          this._hideTooltip();
        }
        var val = this._calculateValue();
        this._setDataVal(val);
        this._trigger('slideStop', val);
        return false;
      },
      _calculateValue: function() {

        var val=[], i, value, percentage, next, previous, step, limit;
        if (this.options.range || this.children || this.options.value.length > 1) {
          for(i=0; i<this.percentage.length; i++){
            percentage = this.percentage[i];
            next = this.percentage[i+1]?this.percentage[i+1]:100;
            previous = this.percentage[i-1]?this.percentage[i-1]:0;
            step = parseFloat(this.options.step);

            value = (Math.min(this.options.max, this.options.min + Math.round((this.diff * percentage/100)/step)*step));

            if(typeof this.options.limit === 'boolean'){
              val.push(value);
              continue;
            }
            limit = (this.options.limit !== false) ? parseFloat(this.options.limit) : step;
            
            // console.log('next',next, this.diff);
            next = (Math.min(this.options.max, this.options.min + Math.round((this.diff * next/100)/step)*step));
            // console.log('next value',next);

            previous = (Math.min(this.options.max, this.options.min + (this.diff * previous/100)/step*step));

            value = this._applyPrecision(value);

            if(value >= next - limit && value > this.options.value[i]){
              value = (i === this.percentage.length-1)?value:this._applyPrecision(next) - this.options.limit;
            }else if(value <= previous+limit && value < this.options.value[i]){
              value = (i === 0)?value:this._applyPrecision(previous) + this.options.limit;
            }
            val.push(value);
            // console.log(next, previous, value, val, next-limit);
          }
        } else {
          percentage = this.percentage[0];
          val = (this.options.min + Math.round((this.diff * percentage/100)/this.options.step)*this.options.step);
          if (val < this.options.min) {
            val = this.options.min;
          }
          else if (val > this.options.max) {
            val = this.options.max;
          }
          val = parseFloat(val);
          val = this._applyPrecision(val);
          this.options.value = [val];
        }
        return val;
      },
      _applyPrecision: function(val) {
        var precision = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.step);
        return this._applyToFixedAndParseFloat(val, precision);
      },
      _getNumDigitsAfterDecimalPlace: function(num) {
        var match = (''+num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        if (!match) { return 0; }
        return Math.max(0, (match[1] ? match[1].length : 0) - (match[2] ? +match[2] : 0));
      },
      _applyToFixedAndParseFloat: function(num, toFixedInput) {
        var truncatedNum = num.toFixed(toFixedInput);
        return parseFloat(truncatedNum);
      },
      /*
        Credits to Mike Samuel for the following method!
        Source: http://stackoverflow.com/questions/10454518/javascript-how-to-retrieve-the-number-of-decimals-of-a-string-number
      */
      _getPercentage: function(ev) {
        if (this.touchCapable && (ev.type === 'touchstart' || ev.type === 'touchmove')) {
          ev = ev.touches[0];
        }

        var percentage = (ev[this.mousePos] - this.offset[this.stylePos])*100/this.size;

        if(this.options.reversed){
          percentage = 100-percentage;
        }
        percentage = Math.round(percentage/this.stepPercentage)*this.stepPercentage;

        return Math.max(0, Math.min(100, percentage));
      },
      _validateInputValue: function(val) {
        if(typeof val === 'number') {
          return [val];
        } else if(val instanceof Array) {
          this._validateArray(val);
          return val;
        } else {
          throw new Error( ErrorMsgs.formatInvalidInputErrorMsg(val) );
        }
      },
      _validateArray: function(val) {
        for(var i = 0; i < val.length; i++) {
          var input =  val[i];
          if (typeof input !== 'number') { throw new Error( ErrorMsgs.formatInvalidInputErrorMsg(input) ); }
        }
      },
      _setDataVal: function(val) {
        var target;
        target = this;
        if(this.parent){
          this.parent.children.forEach(function(child, i){
            if(child === target){
              target.element.value = val[i];
            }
            child.element.setAttribute('data-value', val);
            child.element.setAttribute('data', 'value: ['+val+']');
          });
        }else if(parseFloat(val) === val){
          this.element.value = val;
          this.element.setAttribute('data', 'value: '+val+'');
        }else{
          // this.element.setAttribute('data-value', val);
          this.element.value = val;
        }
        // }
      },
      _trigger: function(evt, val) {
        val = val || undefined;

        var callbackFnArray = this.eventToCallbackMap[evt];
        if(callbackFnArray && callbackFnArray.length) {
          for(var i = 0; i < callbackFnArray.length; i++) {
            var callbackFn = callbackFnArray[i];
            callbackFn(val);
          }
        }

        /* If JQuery exists, trigger JQuery events */
        if($) {
          this._triggerJQueryEvent(evt, val);
        }
      },
      _triggerJQueryEvent: function(evt, val) {
        var eventData = {
          type: evt,
          value: val
        };
        this.$element.trigger(eventData);
        this.$rangepickerElem.trigger(eventData);
      },
      _unbindJQueryEventHandlers: function() {
        this.$element.off();
        this.$rangepickerElem.off();
      },
      _setText: function(element, text) {
        if(typeof element.innerText !== "undefined") {
          element.innerText = text;
        } else if(typeof element.textContent !== "undefined") {
          element.textContent = text;
        }
      },
      _removeClass: function(element, classString) {
        var classes = classString.split(" ");
        var newClasses = element.className;

        for(var i = 0; i < classes.length; i++) {
          var classTag = classes[i];
          var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
          newClasses = newClasses.replace(regex, " ");
        }

        element.className = newClasses.trim();
      },
      _addClass: function(element, classString) {
        var classes = classString.split(" ");
        var newClasses = element.className;

        for(var i = 0; i < classes.length; i++) {
          var classTag = classes[i];
          var regex = new RegExp("(?:\\s|^)" + classTag + "(?:\\s|$)");
          var ifClassExists = regex.test(newClasses);
          
          if(!ifClassExists) {
            newClasses += " " + classTag;
          }
        }

        element.className = newClasses.trim();
      },
      _offset: function (obj) {
        var ol = 0;
        var ot = 0;
        if (obj.offsetParent) {
          do {
            ol += obj.offsetLeft;
            ot += obj.offsetTop;
          } while (obj = obj.offsetParent);
        }
        return {
          left: ol,
          top: ot
        };
      },
      _css: function(elementRef, styleName, value) {
        elementRef.style[styleName] = value;
      },
      _gcd: function(array){
        if(!array.length){
          return 0;
        }
        for(var r, a, i = array.length - 1, b = array[i]; i;){
          for(a = array[--i]; r = a % b; a = b, b = r){
          }
        }
        return b;
      },
      _createSliderGroups: function(){
        var groups = [];
        var self = this;
        $.each(RangeGroups, function(selector, group){
          var min, max, step, element, orientation,
              tooltip, handle, children, groupOptions,
              reversed, enabled, formatter, id, precision, range, selection, natural_arrow_keys, tooltip_split, value, limit, parent;

          max = 0;
          step = [];
          tooltip = [];
          value = [];
          handle = [];
          enabled = [];
          selection = [];
          children = [];
          id = [];
          precision = 0;
          orientation = 'horizontal';
          reversed = natural_arrow_keys = false;
          min = Number.MAX_VALUE;

          element = document.querySelector(selector);

          if ($(element).data('rangepicker')){
            return; // RangeGroup already created for this element
          }
          
          $(group).each(function(i, options){

            min = Math.min(min, options.min);
            max = Math.max(max, options.max);
            precision = Math.max(precision, options.precision);

            children.push(options.element);
            tooltip.push(options.tooltip);
            enabled.push(options.enabled);
            selection.push(options.selection);
            
            step.push(options.step);
            value.push(options.value);
            id.push(options.id);
            handle.push(options.handle);
            if(options.range){
              range = options.range;
            }
            if(options.limit !== false){
              limit = options.limit;
            }

            if(options.formatter && typeof options.formatter === 'string'){
              formatter = new Function(options.formatter);
            }else if(typeof options.formatter === 'function'){
              formatter = options.formatter;
            }
            if(options.tooltip_split){
              tooltip_split = options.tooltip_split;
            }
            if(options.natural_arrow_keys){
              natural_arrow_keys = options.natural_arrow_keys;
            }
            if(options.orientation === 'vertical'){
              orientation = 'vertical';
            }
            if(options.reversed){
              reversed = true;
            }
          });

          step = self._gcd(step); // Find Greatest common denominator
          limit = limit < step ? step : parseInt(limit/step,10)*step;

          groupOptions = {
            max: max,
            min: min,
            step: step,
            natural_arrow_keys: natural_arrow_keys,
            reversed: reversed,
            limit: limit,
            selection: selection,
            tooltip_split: tooltip_split,
            orientation: orientation,
            tooltip: tooltip,
            precision: precision,
            formatter: formatter,
            handle: handle,
            range: range,
            value: value,
            enabled: enabled,
            id: id,
            children: children
          };

          parent = new RangePicker(element, groupOptions);

          $(group).each(function(i){
            parent.children = parent.children || [];
            parent.children.push($(this.element).data('rangepicker'));
            $(this.element).data('rangepicker').index = i;
            $(this.element).data('rangepicker').parent = parent;
            $(this.element).data('rangepicker')['$rangepickerElem'] = $(parent.rangepickerElem);
          });
          groups.push();
        });
        
        RangeGroups = {}; // All groups added, clear out temporary storage
        return groups;
      }
    };

    /*********************************

      Attach to global namespace

    *********************************/

    if($) {
      var namespace = $.fn.rangepicker ? 'bootstrapRangepicker' : 'rangepicker';
      $.bridget(namespace, RangePicker);
    }
    window.RangePicker = RangePicker;

    $(window).on('load.bs.rangepicker.data-api', function () {
      $('.rangepicker').rangepicker();
    });
  })( $ );

})( window.jQuery );