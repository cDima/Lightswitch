describe("Element Data Attributes Tests", function() {
  var rangepicker;

  it("reads the 'data-min' property and sets it on rangepicker", function() {
    rangepicker = $("#minSlider").rangepicker();
    rangepicker.rangepicker('setValue', 1);

    var rangepickerValue = rangepicker.rangepicker('getValue');
    expect(rangepickerValue).toBe(5);
  });

  it("reads the 'data-max' property and sets it on rangepicker", function() {
    rangepicker = $("#maxSlider").rangepicker();
    rangepicker.rangepicker('setValue', 10);

    var rangepickerValue = rangepicker.rangepicker('getValue');
    expect(rangepickerValue).toBe(5);
  });

  it("reads the 'data-step' property and sets it on rangepicker", function() {

    rangepicker = $("#stepSlider").rangepicker();
    //TODO How do you test this? Maybe manually trigger a slideChange event?
    expect(true).toBeTruthy();
  });

  it("reads the 'data-precision' property (which is set to 2) and sets it on rangepicker", function() {
    rangepicker = $("#precisionSlider").rangepicker();
    rangepicker.rangepicker('setValue', 8.115);
    
    var rangepickerValue = rangepicker.rangepicker('getValue');
    expect(rangepickerValue).toBe(8.12);
  });

  it("reads the 'data-orientation' property and sets it on rangepicker", function() {
    rangepicker = $("#orientationSlider").rangepicker();
      
    var orientationIsVertical = $("#orientationSlider").data('rangepicker').options.orientation === 'vertical';
    expect(orientationIsVertical).toBeTruthy();
  });

  it("reads the 'data-value' property and sets it on rangepicker", function() {
    rangepicker = $("#valueSlider").rangepicker();

    var rangepickerValue = rangepicker.rangepicker('getValue');
    expect(rangepickerValue).toBe(5);
  });

  it("reads the 'data-selection' property and sets it on rangepicker", function() {
    rangepicker = $("#selectionSlider").rangepicker({
      id: "selectionSliderId"
    });
    rangepicker.rangepicker('setValue', 0);

    var newSliderValue = rangepicker.rangepicker('getValue');
    expect(newSliderValue).toBe(0);
  });

  it("reads the 'data-tooltip' property and sets it on rangepicker", function() {
    rangepicker = $("#tooltipSlider").rangepicker({
      id: "tooltipSliderElem"
    });
    var tooltipIsHidden = $("#tooltipSliderElem").children("div.tooltip").hasClass("hidden");
    expect(tooltipIsHidden).toBeTruthy();
  });

  describe("reads the 'data-handle' property and sets it on rangepicker", function() {
    it("applies 'triangle' class tag to handle", function() {
      rangepicker = $("#handleSlider").rangepicker({
        id: "handleSliderElem"
      });
      var handleIsSetToTriangle = $("#handleSliderElem div.rangepicker-track").children("div.rangepicker-handle").hasClass("triangle");
      expect(handleIsSetToTriangle).toBeTruthy();
    });

    it("applies 'custom' class tag to handle", function() {
      rangepicker = $("#customHandleSlider").rangepicker({
        id: "customHandleSliderElem"
      });
      var handleIsSetToCustom = $("#customHandleSliderElem div.rangepicker-track").children("div.rangepicker-handle").hasClass("custom");
      expect(handleIsSetToCustom).toBeTruthy();
    });
  });

  it("reads the 'data-reversed' property and sets it on rangepicker", function() {
    // this has been reversed from the original test, since a reversed rangepicker should show the selection from the right side of a horizontal thus, it would still have width at it's max
    rangepicker = $("#reversedSlider").rangepicker({
      id: "reversedSliderElem"  
    });
    rangepicker.rangepicker('setValue', 0);
      
    var rangepickerSelectionHeightAtMaxValue = $("#reversedSliderElem div.rangepicker-track").children("div.rangepicker-selection").width();
    expect(rangepickerSelectionHeightAtMaxValue).toBe(0);
  });

  it("reads the 'data-enabled' property and sets it on rangepicker", function() {
    rangepicker = $("#disabledSlider").rangepicker();
    var isEnabled = rangepicker.rangepicker('isEnabled');
    expect(isEnabled).not.toBeTruthy();
  });

  it("always sets the 'value' attribute of the original <input> element to be the current rangepicker value", function() {
    var $rangepicker = $("#testSliderGeneric");
    var val = 7;

    rangepicker = $rangepicker.rangepicker({
      value: val
    });
    var rangepickerValueAttrib = $rangepicker.val();
    var valAsString = val.toString();

    expect(rangepickerValueAttrib).toBe(valAsString);
  });

  afterEach(function() {
    if(rangepicker) { rangepicker.rangepicker('destroy'); }
  });
});