"use strict";

describe("HueTime", function() {

  it("should have recurrings flags", function() {
    
    var r = HueTime.Recurrings;
    expect(r).not.toBeNull();
    expect(r.Thursday).toBe(8); 
    expect(r.weekday).toBe(124); 
    expect(r['every day']).toBe(127); 

  }); 

  it("should parse names", function() {
    expect(new HueTime().recurringDayName(124)).toBe("weekday");
    expect(new HueTime().recurringDayName(HueTime.Recurrings.Thursday | HueTime.Recurrings.Tuesday)).toBe("Tuesday, Thursday");
    expect(new HueTime().recurringDayName(HueTime.Recurrings.Saturday | HueTime.Recurrings.Sunday)).toBe("weekend");
    expect(new HueTime().recurringDayName(HueTime.Recurrings.weekend)).toBe("weekend");
    expect(new HueTime().recurringDayName(HueTime.Recurrings.day)).toBe("day");
  }); 


  it("should init to nulls", function() {
    var d = new HueTime();
    expect(d).not.toBeNull();
    expect(d.dateTime).toBe(null); 
    expect(d.toString()).toBe(null); 
  }); 

  describe("should parse", function() {

    it("dates", function() {
      var d = new HueTime();
      expect(d).not.toBeNull();
      expect(d.dateTime).toBe(null); 
      var date = "2014-09-20T19:35:26";
      d.parse(date);
      expect(d.dateTime).toBe(new Date(date).toISOString().slice(0,-5)); 
      expect(d.toString()).toBe(date); 
      console.log(d.toHumanString());
      expect(d.humanDate, "Sat, September 20th 2014");
      expect(d.humanRandomTime, "");
      expect(d.humanRepeats, "");
      expect(d.humanTime, "7:35 PM");
    }); 

    it("randomized date times", function() {
      var d = new HueTime();
      expect(d).not.toBeNull();
      expect(d.dateTime).toBe(null); 
      var date = "2014-09-20T19:35:26A20:00:00";
      d.parse(date);
      expect(d.dateTime).toBe("2014-09-20T19:35:26"); 
      expect(d.randomizedTime).toBe("20:00:00"); 
      expect(d.toString()).toBe(date); 
      console.log(d.toHumanString());
    }); 

    it("inits with randomized date times", function() {
      var t = "2014-09-20T19:35:26A20:00:00";
      var d = new HueTime(t);
      expect(d.dateTime).toBe("2014-09-20T19:35:26"); 
      expect(d.randomizedTime).toBe("20:00:00"); 
      expect(d.toString()).toBe(t); 
      console.log(d.toHumanString());
    }); 

    it("inits with days recurring", function() {
      var t = "W032/T19:45:00";
      var d = new HueTime(t);
      expect(d.dateTime).toBe(null); 
      expect(d.recurringDay).toBe(32); 
      expect(d.timerTime).toBe("19:45:00"); 
      expect(d.toString()).toBe(t); 
      console.log(d.toHumanString());
    }); 

    it("inits with days recurring with random time", function() {
      var t = "W127/T19:45:00A00:30:00";
      var d = new HueTime(t);
      expect(d.dateTime).toBe(null); 
      expect(d.recurringDay).toBe(127); 
      expect(d.timerTime).toBe("19:45:00"); 
      expect(d.randomizedTime).toBe("00:30:00"); 
      expect(d.toString()).toBe(t); 
      console.log(d.toHumanString());
    }); 

    it("inits with timers", function() {
      var t = "PT19:45:00";
      var d = new HueTime(t);
      expect(d.dateTime).toBe(null); 
      expect(d.recurringDay).toBe(null); 
      expect(d.timerTime).toBe("19:45:00"); 
      expect(d.randomizedTime).toBe(null); 
      expect(d.toString()).toBe(t); 
      console.log(d.toHumanString());
    }); 

    it("inits with timer with random time", function() {
      var t = "PT19:45:00A00:30:00";
      var d = new HueTime(t);
      expect(d.dateTime).toBe(null); 
      expect(d.recurringDay).toBe(null); 
      expect(d.timerTime).toBe("19:45:00"); 
      expect(d.randomizedTime).toBe("00:30:00"); 
      expect(d.toString()).toBe(t); 
      console.log(d.toHumanString());
    }); 

    it("inits with recurring time", function() {
      var t = "R65/PT19:45:00";
      var d = new HueTime(t);
      expect(d.dateTime).toBe(null); 
      expect(d.recurringDay).toBe(null); 
      expect(d.numberOfRecurrences).toBe(65); 
      expect(d.timerTime).toBe("19:45:00"); 
      expect(d.randomizedTime).toBe(null); 
      expect(d.toString()).toBe(t); 
      console.log(d.toHumanString());
    }); 
    
    it("inits with recurring loop", function() {
      var t = "R/PT19:45:00";
      var d = new HueTime(t);
      expect(d.dateTime).toBe(null); 
      expect(d.recurringDay).toBe(null); 
      expect(d.numberOfRecurrences).toBe(0); 
      expect(d.timerTime).toBe("19:45:00"); 
      expect(d.randomizedTime).toBe(null); 
      expect(d.toString()).toBe(t); 
      console.log(d.toHumanString());
    }); 

    it("inits with recurring loop with random time", function() {
      var t = "R65/PT19:45:00A00:30:00";
      var d = new HueTime(t);
      expect(d.dateTime).toBe(null); 
      expect(d.recurringDay).toBe(null); 
      expect(d.numberOfRecurrences).toBe(65); 
      expect(d.timerTime).toBe("19:45:00"); 
      expect(d.randomizedTime).toBe("00:30:00"); 
      expect(d.toString()).toBe(t); 
      console.log(d.toHumanString());
    }); 

    it("Sunrise random alrm 2fadedaily", function() {
      var t = "W127/T07:07:00A00:30:00";
      var d = new HueTime(t);
      expect(d.dateTime).toBe(null); 
      expect(d.recurringDay).toBe(127); 
      expect(d.numberOfRecurrences).toBe(null); 
      expect(d.timerTime).toBe("07:07:00"); 
      expect(d.randomizedTime).toBe("00:30:00"); 
      expect(d.toString()).toBe(t); 
      console.log(d.toHumanString());
    }); 

    it("Alarm beach 9:13pm no repeat", function() {
      var t = "2015-12-07T21:13:00";
      var d = new HueTime(t);
      expect(d.dateTime).toBe("2015-12-07T21:13:00"); 
      expect(d.recurringDay).toBe(null); 
      expect(d.numberOfRecurrences).toBe(null); 
      expect(d.timerTime).toBe(null); 
      expect(d.randomizedTime).toBe(null); 
      expect(d.toString()).toBe(t); 
      console.log(d.toHumanString());
    }); 

    it("W124/T23:59:00", function() {
      var t = "W124/T23:59:00";
      var d = new HueTime(t);
      expect(d.dateTime).toBe(null); 
      expect(d.recurringDay).toBe(124); 
      expect(d.numberOfRecurrences).toBe(null); 
      expect(d.timerTime).toBe('23:59:00'); 
      expect(d.randomizedTime).toBe(null); 
      expect(d.toString()).toBe(t); 
      console.log(d.toHumanString());
    }); 

    it("PT00:04:00", function() {
      var t = "PT00:04:00";
      var d = new HueTime(t);
      expect(d.dateTime).toBe(null); 
      expect(d.recurringDay).toBe(null); 
      expect(d.numberOfRecurrences).toBe(null); 
      expect(d.timerTime).toBe('00:04:00'); 
      expect(d.randomizedTime).toBe(null); 
      expect(d.toString()).toBe(t); 
      console.log(d.toHumanString());
    }); 

    it("W064/T22:01:00", function() {
      var t = "W064/T22:01:00";
      var d = new HueTime(t);
      expect(d.dateTime).toBe(null); 
      expect(d.recurringDay).toBe(64); 
      expect(d.numberOfRecurrences).toBe(null); 
      expect(d.timerTime).toBe('22:01:00'); 
      expect(d.randomizedTime).toBe(null); 
      expect(d.toString()).toBe(t); 
      console.log(d.toHumanString());
    });

    it("W084/T22:00:00", function() {
      var t = "W084/T22:00:00";
      var d = new HueTime(t);
      expect(d.dateTime).toBe(null); 
      expect(d.recurringDay).toBe(84); 
      expect(d.numberOfRecurrences).toBe(null); 
      expect(d.timerTime).toBe('22:00:00'); 
      expect(d.randomizedTime).toBe(null); 
      expect(d.toString()).toBe(t); 
      console.log(d.toHumanString());
    });




/*
  "7435031860821904": {
    "name": "Sunrise random alrm 2fadedaily",
    "description": "Sunset",
    "command": {
      "address": "/api/PKSjRbUoPH6IcBsm/groups/0/action",
      "body": {
        "scene": "087f88f52-on-2"
      },
      "method": "PUT"
    },
    "localtime": "W127/T07:07:00A00:30:00",
    "time": "W127/T12:07:00A00:30:00",
    "created": "2015-12-07T02:00:57",
    "status": "enabled"
  },
  "2477469222305790": {
    "name": "Alarm",
    "description": "",
    "command": {
      "address": "/api/PKSjRbUoPH6IcBsm/groups/0/action",
      "body": {
        "scene": "02b12e930-off-0"
      },
      "method": "PUT"
    },
    "localtime": "W124/T23:59:00",
    "time": "W062/T04:59:00",
    "created": "2015-01-29T12:58:07",
    "status": "enabled"
  },
  "3138920733877920": {
    "name": "Timer",
    "description": "",
    "command": {
      "address": "/api/PKSjRbUoPH6IcBsm/groups/0/action",
      "body": {
        "scene": "02b12e930-off-0"
      },
      "method": "PUT"
    },
    "time": "PT00:04:00",
    "created": "2015-01-29T12:58:54",
    "status": "disabled",
    "autodelete": false,
    "starttime": "2015-01-29T12:58:54"
  },
  "4898553139813510": {
    "name": "Alarm beach 9:13pm no repeat",
    "description": "Beach",
    "command": {
      "address": "/api/PKSjRbUoPH6IcBsm/groups/0/action",
      "body": {
        "scene": "809f9686c-on-0"
      },
      "method": "PUT"
    },
    "localtime": "2015-12-07T21:13:00",
    "time": "2015-12-08T02:13:00",
    "created": "2015-12-07T02:01:54",
    "status": "enabled",
    "autodelete": false
  },
  "4125118938878359": {
    "name": "4 Lights off 10pm mon wed thur",
    "description": "",
    "command": {
      "address": "/api/PKSjRbUoPH6IcBsm/groups/0/action",
      "body": {
        "scene": "39c55fe21-off-3"
      },
      "method": "PUT"
    },
    "localtime": "W084/T22:00:00",
    "time": "W042/T03:00:00",
    "created": "2015-12-07T02:03:13",
    "status": "enabled"
  },
  "2408037275213699": {
    "name": "Alarm 10pm feetup monday",
    "description": "Feet up",
    "command": {
      "address": "/api/PKSjRbUoPH6IcBsm/groups/0/action",
      "body": {
        "scene": "33300ac17-on-1"
      },
      "method": "PUT"
    },
    "localtime": "W064/T22:01:00",
    "time": "W032/T03:01:00",
    "created": "2015-12-07T02:04:36",
    "status": "enabled"
  }
*/

  });

});
