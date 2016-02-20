"use strict";

/// supports three types of dates from the hue bridge: alarm or timer.
// timers are split up:
  // date-time strings 2014-09-20T19:35:26 + randomized time 20h
  // Weekly reoccurences at a specific time: W032/T19:45:00 repeats Tuesday at 7:45 pm.
// alarm
class HueTime {
  constructor(input) {

    this.dateTime = null;
    this.timerTime = null;
    this.randomizedTime = null;
    this.recurringDay = null;
    this.numberOfRecurrences = null;
    this.humanTime = '';
    this.humanDesc = '';
    this.hueString = null;

    if(input) this.parse(input);
  }

  static get Recurrings (){
    return {
      'never': 0,
      'Sunday': 1,
      'Saturday': 2,
      'Friday': 4,
      'Thursday': 8,
      'Wednesday': 16,
      'Tuesday': 32,
      'Monday': 64,
      'weekday': 124,
      'weekend': 3,
      'day': 127,
    };
  }

  get recurringDayName () {
    var obj = HueTime.Recurrings;
    for (var property in obj){
        if ((obj[property] == this.recurringDay)){
            return property;
        }
    }
    return 'Never';
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
        break;

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
        break;

      default:
        // usual date time with optional random time
        var match = /([0-9\-]+)T([0-9:]+)(A([0-9:]+))?/g.exec(input);
        // straight date: var matches = new Date(input).toISOString().slice(0,-5);
        if (match[1] && match[2]) this.dateTime = match[1] + 'T' + match[2]; // [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss]
        if (match[4]) this.randomizedTime = match[4]; // [YYYY]:[MM]:[DD]T[hh]:[mm]:[ss]A[hh]:[mm]:[ss]
        break;
    }

    if (this.randomizedTime) {
      this.humanRandomTime = new moment(this.randomizedTime, 'hh:mm:ss').format("h:mm A");
    }
    if (this.dateTime) {
      this.m = new moment(this.dateTime);
      this.humanTime = this.m.format("h:mm A");
      if (this.humanRandomTime) this.humanTime += ' ~ ' + this.humanRandomTime;
      this.humanDesc = this.m.format("ddd, MMMM Do YYYY");
    } 
    if (this.timerTime) {
      this.m = new moment(this.timerTime, 'hh:mm:ss');
      this.humanTime = this.m.format("h:mm A");
      if (this.humanRandomTime) this.humanTime += ' ~ ' + this.humanRandomTime;
    }
    
    var repeatable = '';
    if (this.recurringDay) {
      repeatable = `repeats every ${this.recurringDayName} `;
    } 
    if (this.numberOfRecurrences) {
      repeatable = `repeats ${this.numberOfRecurrences} time`;
      if (this.numberOfRecurrences > 1) {
        repeatable += 's ';
      }
    } 
    this.humanDesc += repeatable;
    this.hueString = this.toString();

    var input = input;
    let s = `${this.humanTime}; ${this.humanDesc}`;

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
      value += 'at ' + this.dateTime.substring(0, 2);
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
