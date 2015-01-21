describe("Public Method Tests", function() {
  var testSlider;

  describe("rangepicker constructor", function() {
    it("reads and sets the 'id' attribute of the rangepicker instance that is created", function() {
      var rangepickerId = "mySlider";

      testSlider = $("#testSlider1").rangepicker({
        id : rangepickerId
      });

      var rangepickerInstanceHasExpectedId = $("#testSlider1").siblings("div.bootstrap-range").is("#" + rangepickerId);
      expect(rangepickerInstanceHasExpectedId).toBeTruthy();
    });

    it("generates multiple rangepicker instances from selector", function() {

      $(".makeSlider").rangepicker();

      var rangepickerInstancesExists = $(".makeSlider").siblings().is(".bootstrap-range");
      expect(rangepickerInstancesExists).toBeTruthy();

      var rangepickerInstancesCount = $(".makeSlider").siblings(".bootstrap-range").length;
      expect(rangepickerInstancesCount).toEqual(2);
    });

    it("reads and sets the 'min' option properly", function() {
      var minVal = -5;

      testSlider = $("#testSlider1").rangepicker({
        min : minVal
      });
      testSlider.rangepicker('setValue', minVal);

      var rangepickerValue = testSlider.rangepicker('getValue');
      expect(rangepickerValue).toBe(minVal);
    });

    it("reads and sets the 'max' option properly", function() {
      var maxVal = 15;

      testSlider = $("#testSlider1").rangepicker({
        max : maxVal
      });
      testSlider.rangepicker('setValue', maxVal);

      var rangepickerValue = testSlider.rangepicker('getValue');
      expect(rangepickerValue).toBe(maxVal);
    });

    describe("reads and sets the 'step' option properly", function() {
      // TODO: Don't really know how to properly test this
      expect(true).toBeTruthy();
    });

    it("reads and sets the 'precision' option properly", function() {
      testSlider = $("#testSlider1").rangepicker({
        precision: 2
      });
      testSlider.rangepicker('setValue', 8.115);
      
      var rangepickerValue = testSlider.rangepicker('getValue');
      expect(rangepickerValue).toBe(8.12);
    });

    it("reads and sets the 'orientation' option properly", function() {
      var orientationVal = "vertical";

      testSlider = $("#testSlider1").rangepicker({
        orientation : orientationVal
      });
      
      var orientationClassApplied = $("#testSlider1").siblings("div.bootstrap-range").hasClass("rangepicker-vertical");
      expect(orientationClassApplied).toBeTruthy();
    });

    it("reads and sets the 'value' option properly", function() {
      var val = 8;

      testSlider = $("#testSlider1").rangepicker({
        value : val
      });
      testSlider.rangepicker('setValue', val);

      var rangepickerValue = testSlider.rangepicker('getValue');
      expect(rangepickerValue).toBe(val);
    });

    it("reads and sets the 'selection' option properly", function() {
      var selectionVal = "after",
          maxSliderVal = 10;

      testSlider = $("#testSlider1").rangepicker({
        selection : selectionVal
      });
      testSlider.rangepicker('setValue', maxSliderVal);

      var rangepickerSelectionWidthAtMaxValue = $("#testSlider1").siblings(".bootstrap-range").children("div.rangepicker-track").children("div.rangepicker-selection").width();
      expect(rangepickerSelectionWidthAtMaxValue).toBe(0);
    });

    it("reads and sets the 'handle' option properly", function() {
      var handleVal = "triangle";

      testSlider = $("#testSlider1").rangepicker({
        handle : handleVal
      });
      
      var handleIsSetToTriangle = $("#testSlider1").siblings(".bootstrap-range").children("div.rangepicker-track").children("div.rangepicker-handle").hasClass("triangle");
      expect(handleIsSetToTriangle).toBeTruthy();
    });

    it("reads and sets the 'reversed' option properly", function() {
      // this has been reversed, since a reversed rangepicker should show the selection from the right side of a horizontal thus, it would still have width at it's max
      var reversedVal = true,
          maxSliderVal = 0;

      testSlider = $("#testSlider1").rangepicker({
        reversed : reversedVal
      });
      testSlider.rangepicker('setValue', maxSliderVal);
      
      var rangepickerSelectionHeightAtMaxValue = $("#testSlider1").siblings(".bootstrap-range").children("div.rangepicker-track").children("div.rangepicker-selection").width();
      expect(rangepickerSelectionHeightAtMaxValue).toBe(0);
    });

    /* TODO: Fix this test! It keeps throwing a weird bug where is says '955' instead of '9' for the value */
    // it("reads and sets the 'formatter' option properly", function() {
    //   var tooltipFormater = function(value) {
    //     return 'Current value: ' + value;
    //   };

    //   testSlider = $("#testSlider1").rangepicker({
    //     formatter : tooltipFormater
    //   });
    //   testSlider.rangepicker('setValue', 9);

    //   var tooltipMessage = $("#testSlider1").siblings(".bootstrap-range").find("div.tooltip").children("div.tooltip-inner").text();
    //   var expectedMessage = tooltipFormater(9);
    //   expect(tooltipMessage).toBe(expectedMessage);
    // });

    it("reads and sets the 'enabled' option properly", function() {
      testSlider = $("#testSlider1").rangepicker({
        enabled: false
      });
      var isEnabled = testSlider.rangepicker('isEnabled');
      expect(isEnabled).not.toBeTruthy();
    });

    describe("reads and sets the 'tooltip' option properly", function() {
      it("tooltip is not shown if set to 'hide'", function() {
        testSlider = $("#testSlider1").rangepicker({
          tooltip : "hide"
        });
        
        var tooltipIsHidden = testSlider.siblings(".bootstrap-range").children("div.tooltip").hasClass("hidden");
        expect(tooltipIsHidden).toBeTruthy();
      });

      it("tooltip is shown during sliding if set to 'show'", function() {
        testSlider = $("#testSlider1").rangepicker({
          tooltip : "show"
        });

        var tooltipIsHidden = !($("#testSlider1").siblings(".bootstrap-range").children("div.tooltip").hasClass("in"));
        expect(tooltipIsHidden).toBeTruthy();
        
        // Trigger hover
        var mouseenterEvent = document.createEvent("Events");
        mouseenterEvent.initEvent("mouseenter", true, true);
        testSlider.data('rangepicker').rangepickerElem.dispatchEvent(mouseenterEvent);

        var tooltipIsShownAfterSlide = $("#testSlider1").siblings(".bootstrap-range").children("div.tooltip").hasClass("in");
        expect(tooltipIsShownAfterSlide).toBeTruthy();
      });

      it("tooltip is always shown if set to 'always'", function() {
        testSlider = $("#testSlider1").rangepicker({
          tooltip : "always"
        });
        
        var tooltipIsShown = $("#testSlider1").siblings(".bootstrap-range").children("div.tooltip").hasClass("in");
        expect(tooltipIsShown).toBeTruthy();
      });

      it("defaults to 'show' option if invalid value is passed", function() {
        testSlider = $("#testSlider1").rangepicker({
          tooltip : "invalid option value"
        });

        var tooltipIsHidden = !($("#testSlider1").siblings(".bootstrap-range").children("div.tooltip").hasClass("in"));
        expect(tooltipIsHidden).toBeTruthy();

        // Trigger hover
        var mouseenterEvent = document.createEvent("Events");
        mouseenterEvent.initEvent("mouseenter", true, true);
        testSlider.data('rangepicker').rangepickerElem.dispatchEvent(mouseenterEvent);

        
        var tooltipIsShownOnHover = $("#testSlider1").siblings(".bootstrap-range").children("div.tooltip").hasClass("in");
        expect(tooltipIsShownOnHover).toBeTruthy();
      });
    });
  });


  describe("'setValue()' tests", function() {
    var formatInvalidInputMsg = function(invalidValue) { return "Invalid input value '" + invalidValue + "' passed in"; };

    describe("if rangepicker is a single value rangepicker", function() {
      beforeEach(function() {
        testSlider = $("#testSlider1").rangepicker();
      });

      it("properly sets the value of the rangepicker when given a numeric value", function() {
        var valueToSet = 5;
        testSlider.rangepicker('setValue', valueToSet);

        var rangepickerValue = testSlider.rangepicker('getValue');
        expect(rangepickerValue).toBe(valueToSet);
      });

      it("if a value passed in is greater than the max (10), the rangepicker only goes to the max", function() {
        var maxValue = 10,
            higherThanSliderMaxVal = maxValue + 5;
      
        testSlider.rangepicker('setValue', higherThanSliderMaxVal);

        var rangepickerValue = testSlider.rangepicker('getValue');
        expect(rangepickerValue).toBe(maxValue);
      });

      it("if a value passed in is less than the min (0), the rangepicker only goes to the min", function() {
        var minValue = 0,
            lowerThanSliderMaxVal = minValue - 5;
      
        testSlider.rangepicker('setValue', lowerThanSliderMaxVal);

        var rangepickerValue = testSlider.rangepicker('getValue');
        expect(rangepickerValue).toBe(minValue);
      });

      describe("when an invalid value type is passed in", function() {
        var invalidValue;
        
        beforeEach(function() {
          invalidValue = "a";
        });

        it("throws an error and does not alter the rangepicker value", function() {
          var originalSliderValue = testSlider.rangepicker('getValue');

          var settingValue = function() {
            testSlider.rangepicker('setValue', invalidValue);
          };
          expect(settingValue).toThrow(new Error( formatInvalidInputMsg(invalidValue) ));

          var rangepickerValue = testSlider.rangepicker('getValue');
          expect(rangepickerValue).toBe(originalSliderValue);
        });
      });
    });

    describe("if rangepicker is a range rangepicker", function() {
      beforeEach(function() {
        testSlider = $("#testSlider1").rangepicker({
          value : [3, 8]
        });
      });

      it("properly sets the values if both within the max and min", function() {
        var valuesToSet = [5, 7];
        testSlider.rangepicker('setValue', valuesToSet);

        var rangepickerValues = testSlider.rangepicker('getValue');
        expect(rangepickerValues[0]).toBe(valuesToSet[0]);
        expect(rangepickerValues[1]).toBe(valuesToSet[1]);
      });

      describe("caps values to the min if they are set to be less than the min", function() {
        var minValue = -5,
            otherValue = 7;

        it("first value is capped to min", function() {
          testSlider.rangepicker('setValue', [minValue, otherValue]);
          
          var rangepickerValues = testSlider.rangepicker('getValue');
          expect(rangepickerValues[0]).toBe(0);
        });

        it("second value is capped to min", function() {
          testSlider.rangepicker('setValue', [otherValue, minValue]);
          
          var rangepickerValues = testSlider.rangepicker('getValue');
          expect(rangepickerValues[1]).toBe(0);
        });
      });

      describe("caps values to the max if they are set to be higher than the max", function() {
        var maxValue = 15,
            otherValue = 7;

        it("first value is capped to max", function() {
          testSlider.rangepicker('setValue', [maxValue, otherValue]);
          
          var rangepickerValues = testSlider.rangepicker('getValue');
          expect(rangepickerValues[0]).toBe(10);
        });

        it("second value is capped to max", function() {
          testSlider.rangepicker('setValue', [otherValue, maxValue]);
          
          var rangepickerValues = testSlider.rangepicker('getValue');
          expect(rangepickerValues[1]).toBe(10);
        });
      });

      describe("if either value is of invalid type", function() {
        var invalidValue = "a",
            otherValue = 7;

        it("first value is of invalid type", function() {
          var setSliderValueFn = function() {
            testSlider.rangepicker('setValue', [invalidValue, otherValue]);
          };
          expect(setSliderValueFn).toThrow(new Error( formatInvalidInputMsg(invalidValue) ));
        });
        it("second value is of invalid type", function() {
          var setSliderValueFn = function() {
            testSlider.rangepicker('setValue', [otherValue, invalidValue]);
          };
          expect(setSliderValueFn).toThrow(new Error( formatInvalidInputMsg(invalidValue) ));
        });
      });
    });
    
    it("if second argument is true, the 'slide' event is triggered", function() {
      var testSlider = $("#testSlider1").rangepicker({
        value : 3
      });

      var newSliderVal = 5;

      testSlider.on('slide', function(evt) {
        expect(newSliderVal).toEqual(evt.value);
      });

      testSlider.rangepicker('setValue', newSliderVal, true);
    });

  });


  describe("'getValue()' tests", function() {
    it("returns the current value of the rangepicker", function() {
      testSlider = $("#testSlider1").rangepicker();

      var valueToSet = 5;
      testSlider.rangepicker('setValue', valueToSet);

      var rangepickerValue = testSlider.rangepicker('getValue');
      expect(rangepickerValue).toBe(valueToSet);
    });
  });


  describe("'destroy()' tests", function() {
    describe("rangepicker instance tests", function() {
      beforeEach(function() {
        testSlider = $("#testSlider1").rangepicker();
      });

      it("removes the extra DOM elements associated with a rangepicker", function() {
        testSlider.rangepicker('destroy');

        var rangepickerParentElement = $("#testSlider1").parent('div.rangepicker').length,
            rangepickerChildrenElements = $("#testSlider1").siblings('div.rangepicker-track, div.tooltip').length;
        
        expect(rangepickerParentElement).toBe(0);
        expect(rangepickerChildrenElements).toBe(0);
      });

      describe("unbinds all rangepicker events", function() {
        var flag, evtName;

        beforeEach(function() {
          flag = false;
        });

        it("unbinds from 'slideStart' event", function() {
          evtName = 'slideStart';
          testSlider.on(evtName, function() {
            flag = true;
          });
          testSlider.rangepicker('destroy');
          testSlider.trigger(evtName);
          expect(flag).toBeFalsy();
        });

        it("unbinds from 'slide' event", function() {
          evtName = 'slide';
          testSlider.on(evtName, function() {
            flag = true;
          });
          testSlider.rangepicker('destroy');
          testSlider.trigger(evtName);
          expect(flag).toBeFalsy();
        });

        it("unbinds from 'slideStop' event", function() {
          evtName = 'slideStop';
          testSlider.on(evtName, function() {
            flag = true;
          });
          testSlider.rangepicker('destroy');
          testSlider.trigger(evtName);
          expect(flag).toBeFalsy();
        });

        it("unbinds from 'slideChange' event", function() {
          evtName = 'slideChange';
          testSlider.on(evtName, function() {
            flag = true;
          });
          testSlider.rangepicker('destroy');
          testSlider.trigger(evtName);
          expect(flag).toBeFalsy();
        });
      });

      afterEach(function() {
        testSlider = null;
      });
    });
  });

  describe("'enable()' tests", function() {
    it("correctly enables a rangepicker", function() {
      testSlider = $("#testSlider1").rangepicker({
        enabled: false
      });
      testSlider.rangepicker("enable");
      var isEnabled = testSlider.rangepicker("isEnabled");
      expect(isEnabled).toBeTruthy();
    });
  });

  describe("'disable()' tests", function() {
    it("correctly disable a rangepicker", function() {
      testSlider = $("#testSlider1").rangepicker();
      testSlider.rangepicker("disable");
      var isEnabled = testSlider.rangepicker("isEnabled");
      expect(isEnabled).not.toBeTruthy();
    });
  });

  describe("'toggle()' tests", function() {
    it("correctly enables a disabled rangepicker", function() {
      testSlider = $("#testSlider1").rangepicker({
        enabled: false
      });
      testSlider.rangepicker("toggle");
      var isEnabled = testSlider.rangepicker("isEnabled");
      expect(isEnabled).toBeTruthy();
    });

    it("correctly disables an enabled rangepicker", function() {
      testSlider = $("#testSlider1").rangepicker();
      testSlider.rangepicker("toggle");
      var isEnabled = testSlider.rangepicker("isEnabled");
      expect(isEnabled).not.toBeTruthy();
    });
  });

  describe("'isEnabled()' tests", function() {
    it("returns true for an enabled rangepicker", function() {
      testSlider = $("#testSlider1").rangepicker({
        id: "enabled",
        enabled: true
      });
      
      var isEnabled = testSlider.rangepicker("isEnabled");
      var $rangepicker = testSlider.siblings("#enabled");
      var hasDisabledClass = $rangepicker.hasClass("rangepicker") && $rangepicker.hasClass("#enabled");
      
      expect(isEnabled).toBeTruthy();
      expect(hasDisabledClass).not.toBeTruthy();
    });

    it("returns false for a disabled rangepicker", function() {
      testSlider = $("#testSlider1").rangepicker({
        id: "disabled",
        enabled: false
      });

      var isEnabled = testSlider.rangepicker("isEnabled");
      var $rangepicker = testSlider.siblings("#disabled");
      var hasDisabledClass = $rangepicker.hasClass("bootstrap-range") && $rangepicker.hasClass("rangepicker-disabled");

      expect(isEnabled).not.toBeTruthy();
      expect(hasDisabledClass).toBeTruthy();
    });
  });

  it("get attribute", function() {
    testSlider = $("#testSlider1").rangepicker();

    var rangepickerMaxValue = testSlider.rangepicker('getAttribute', 'max');
    expect(rangepickerMaxValue).toBe(10);
  });

  it("changes rangepicker from basic to range", function() {
    testSlider = $("#makeRangeSlider").rangepicker();
    testSlider.rangepicker('setAttribute', 'range', true).rangepicker('refresh');

    var isRangeSlider = $("#changeOrientationSlider").parent("div.rangepicker").find('.rangepicker-handle').last().hasClass('hide');
    expect(isRangeSlider).toBeFalsy();
  });

  it("setAttribute: changes the 'data-orientation' property from horizontal to vertical", function() {
    testSlider = $("#changeOrientationSlider").rangepicker({
      id: "changeOrientationSliderElem"
    });
    testSlider.rangepicker('setAttribute', 'orientation', 'vertical').rangepicker('refresh');

    var $rangepicker = $("#changeOrientationSliderElem");
    var orientationClassApplied = $rangepicker.hasClass("rangepicker-vertical");
    
    expect(orientationClassApplied).toBeTruthy();
  });

  afterEach(function() {
    if(testSlider) {
      testSlider.rangepicker('destroy');
      testSlider = null;
    }
  });

});