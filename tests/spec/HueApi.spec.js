"use strict";


class HueTime {
  constructor(input) {

    this.dateTime = null;
    this.timerTime = null;
    this.randomizedTime = null;
    this.recurringDay = null;
    this.numberOfRecurrences = null;

    if(input) this.parse(input);
  }

  static get Recurrings (){
    return {
      'None': 0,
      'Sunday': 1,
      'Saturday': 2,
      'Friday': 4,
      'Thursday': 8,
      'Wednesday': 16,
      'Tuesday': 32,
      'Monday': 64,
      'Weekday': 124,
      'Weekend': 3,
      'Everyday': 127,
    };
  }

  get recurringDayName () {
    var obj = HueTime.Recurrings;
    for (var property in obj){
        if ((obj[property] == this.recurringDay)){
            return property;
        }
    }
    return 'None';
  }

  parse(input) {
    // if starts with W, R, 
    if (!input) return;
    var parser = input.substring(0, 1);
    switch(parser) {
      case 'W':
        //days recurring (optional random time)
        var match = /W(\d{1,3})\/T([0-9:]+)(A([0-9:]+))?/g.exec(input);
        if (match[1]) this.recurringDay = Number(match[1]);
        if (match[2]) this.timerTime = match[2];
        if (match[4]) this.randomizedTime = match[4]; 
        return;

      case 'R':
      case 'P':
        // timers (optional recurrences and random time)
        var match = /(R(\d{2})?\/)?PT([0-9:]+)(A([0-9:]+))?/g.exec(input);
        if (match[2]) { 
          this.numberOfRecurrences = Number(match[2]);
        } else if (match[1]) {
          this.numberOfRecurrences = 0; // infinate loop
        }
        if (match[3]) this.timerTime = match[3];
        if (match[5]) this.randomizedTime = match[5]; 
        return;

      default:
        // usual date time with optional random time
        var match = /([0-9\-]+)T([0-9:]+)(A([0-9:]+))?/g.exec(input);
        // straight date: var matches = new Date(input).toISOString().slice(0,-5);
        if (match[1] && match[2]) this.dateTime = match[1] + 'T' + match[2]; // [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss]
        if (match[4]) this.randomizedTime = match[4]; // [YYYY]:[MM]:[DD]T[hh]:[mm]:[ss]A[hh]:[mm]:[ss]
        return;
    }
  }

  pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  toString() {
    var returnValue = null;
    if (this.recurringDay)//recurrenceday
    {
      returnValue = `W${this.pad(this.recurringDay, 3)}/T${this.timerTime}`;
    }
    else if (this.timerTime)// timertime only when in timers and weekdays
    {
      returnValue = `PT${this.timerTime}`;

      //Recurrences (only with timers)
      if (this.numberOfRecurrences)
      {
        returnValue = `R${this.numberOfRecurrences}/${returnValue}`;
      } else if (this.numberOfRecurrences === 0) {
        returnValue = `R/${returnValue}`;
      }
    }
    else 
    {
      returnValue = this.dateTime;
    }

    if (this.randomizedTime) {
      returnValue += 'A' + this.randomizedTime;
    }

    return returnValue;
  }

  toHumanString (){
    var value = '';
    if (this.recurringDay) {
      value = `repeats every ${this.recurringDayName} `;
    } 
    if (this.numberOfRecurrences) {
      value = `repeats ${this.numberOfRecurrences} time`;
      if (this.numberOfRecurrences > 1) {
        value += 's ';
      }
    } 
    if (this.dateTime) {
      value += 'at ' + this.dateTime;
    }
    if (this.timerTime) {
      value += 'at ' + this.timerTime;
    }
    if (this.randomizedTime) {
      value += ' randomized until ' + this.randomizedTime;
    }

    return value;
  }
}


describe("HueTime", function() {

  it("should have recurrings flags", function() {
    
    var r = HueTime.Recurrings;
    expect(r).not.toBeNull();
    expect(r.None).toBe(0); 
    expect(r.Thursday).toBe(8); 
    expect(r.Weekday).toBe(124); 
    expect(r.Everyday).toBe(127); 
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
