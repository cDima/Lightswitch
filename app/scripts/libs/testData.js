/*exported testData */
/* jshint ignore:start */

trackEvent = function() {
  // do nothing
};
trackState = function(){};

storageClass = function (){
  
  return {
    get: function(nothing, callback){ 
      callback(null);
    },
    set: function() {}
  }
};

var testData = {
  "lights": {
    "1": {
      "state": {
        "on": true,
        "bri": 254,
        "hue": 13162,
        "sat": 211,
        "effect": "none",
        "xy": [
          0.5115,
          0.415
        ],
        "ct": 463,
        "alert": "none",
        "colormode": "ct",
        "reachable": true
      },
      "type": "Extended color light",
      "name": "Nederste",
      "modelid": "LCT001",
      "uniqueid": "00:17:88:01:00:b2:64:0d-0b",
      "swversion": "66013452",
      "pointsymbol": {
        "1": "none",
        "2": "none",
        "3": "none",
        "4": "none",
        "5": "none",
        "6": "none",
        "7": "none",
        "8": "none"
      }
    },
    "2": {
      "state": {
        "on": true,
        "bri": 254,
        "hue": 13162,
        "sat": 211,
        "effect": "none",
        "xy": [
          0.5115,
          0.415
        ],
        "ct": 463,
        "alert": "none",
        "colormode": "ct",
        "reachable": true
      },
      "type": "Extended color light",
      "name": "Skabet",
      "modelid": "LCT001",
      "uniqueid": "00:17:88:01:00:b2:82:55-0b",
      "swversion": "66013452",
      "pointsymbol": {
        "1": "none",
        "2": "none",
        "3": "none",
        "4": "none",
        "5": "none",
        "6": "none",
        "7": "none",
        "8": "none"
      }
    },
    "3": {
      "state": {
        "on": true,
        "bri": 254,
        "hue": 13162,
        "sat": 211,
        "effect": "none",
        "xy": [
          0.5115,
          0.415
        ],
        "ct": 463,
        "alert": "none",
        "colormode": "ct",
        "reachable": true
      },
      "type": "Extended color light",
      "name": "Ã˜verste",
      "modelid": "LCT001",
      "uniqueid": "00:17:88:01:00:be:3a:6f-0b",
      "swversion": "66013452",
      "pointsymbol": {
        "1": "none",
        "2": "none",
        "3": "none",
        "4": "none",
        "5": "none",
        "6": "none",
        "7": "none",
        "8": "none"
      }
    },
    "4": {
      "state": {
        "on": true,
        "bri": 254,
        "hue": 13162,
        "sat": 211,
        "effect": "none",
        "xy": [
          0.5115,
          0.415
        ],
        "ct": 463,
        "alert": "none",
        "colormode": "ct",
        "reachable": true
      },
      "type": "Extended color light",
      "name": "KÃ¸kken",
      "modelid": "LCT001",
      "uniqueid": "00:17:88:01:00:be:94:41-0b",
      "swversion": "66013452",
      "pointsymbol": {
        "1": "none",
        "2": "none",
        "3": "none",
        "4": "none",
        "5": "none",
        "6": "none",
        "7": "none",
        "8": "none"
      }
    },
    "5": {
      "state": {
        "on": true,
        "bri": 254,
        "hue": 6113,
        "sat": 134,
        "effect": "none",
        "xy": [
          0.5421,
          0.3791
        ],
        "alert": "none",
        "colormode": "hs",
        "reachable": true
      },
      "type": "Color light",
      "name": "Ontop bedroom",
      "modelid": "LST001",
      "uniqueid": "00:17:88:01:00:cd:44:ca-0b",
      "swversion": "66010400",
      "pointsymbol": {
        "1": "none",
        "2": "none",
        "3": "none",
        "4": "none",
        "5": "none",
        "6": "none",
        "7": "none",
        "8": "none"
      }
    },
    "6": {
      "state": {
        "on": true,
        "bri": 254,
        "hue": 4909,
        "sat": 230,
        "effect": "none",
        "xy": [
          0.6342,
          0.3466
        ],
        "alert": "none",
        "colormode": "xy",
        "reachable": true
      },
      "type": "Color light",
      "name": "LightStrips 1",
      "modelid": "LST001",
      "uniqueid": "00:17:88:01:00:cd:44:ba-0b",
      "swversion": "66010400",
      "pointsymbol": {
        "1": "none",
        "2": "none",
        "3": "none",
        "4": "none",
        "5": "none",
        "6": "none",
        "7": "none",
        "8": "none"
      }
    }
  },
  "groups": {
    "1": {
      "name": "HPMusicGroup",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "type": "LightGroup",
      "action": {
        "on": true,
        "bri": 254,
        "hue": 13162,
        "sat": 211,
        "effect": "none",
        "xy": [
          0.5115,
          0.415
        ],
        "ct": 463,
        "colormode": "xy"
      }
    }
  },
  "config": {
    "name": "Philips hue",
    "zigbeechannel": 11,
    "mac": "00:17:88:0a:b8:8d",
    "dhcp": false,
    "ipaddress": "192.168.1.55",
    "netmask": "255.255.255.0",
    "gateway": "192.168.1.1",
    "proxyaddress": "none",
    "proxyport": 0,
    "UTC": "2015-01-09T16:55:16",
    "localtime": "2015-01-09T17:55:16",
    "timezone": "Europe/Copenhagen",
    "whitelist": {
      "0000000055b291d67d6cd2e97d6cd2e9": {
        "last use date": "2014-08-11T13:32:50",
        "create date": "2013-04-13T09:44:28",
        "name": "samsung GT-I9300"
      },
      "94c24a0bc4fb8d342f0db892a5d39b4a": {
        "last use date": "2014-08-11T13:37:13",
        "create date": "2013-04-13T11:39:08",
        "name": "HueMore"
      },
      "c4721fc1b6d1e79a8016582fabd75d1b": {
        "last use date": "2013-04-21T19:34:15",
        "create date": "2013-04-13T11:39:43",
        "name": "TASS Hue App"
      },
      "phillipshue-rec2": {
        "last use date": "2015-01-07T11:05:46",
        "create date": "2015-01-07T10:49:58",
        "name": "Philips hue JavaScript"
      },
      "f66bdcb067993b42d6a15d4dbb1a95a9": {
        "last use date": "2013-04-13T12:10:34",
        "create date": "2013-04-13T12:10:30",
        "name": "xbmc-player"
      },
      "721f8094b4215ccbbd38f91010bf8216": {
        "last use date": "2013-06-03T23:07:09",
        "create date": "2013-04-13T12:30:03",
        "name": "xbmc-player"
      },
      "18db81e6ffb8aed1": {
        "last use date": "2013-05-06T21:47:06",
        "create date": "2013-05-03T21:22:04",
        "name": "HueProApp"
      },
      "bff3c5dba8cfec2b": {
        "last use date": "2014-05-13T08:18:07",
        "create date": "2013-05-07T10:18:31",
        "name": "HueProApp"
      },
      "a7dff2b7bc7ad893": {
        "last use date": "2013-10-22T22:33:47",
        "create date": "2013-06-24T23:01:04",
        "name": "HueProApp"
      },
      "00000000431607a97d6cda707d6cda70": {
        "last use date": "2013-09-25T08:31:06",
        "create date": "2013-06-29T14:41:51",
        "name": "samsung GT-I9505"
      },
      "1aaa43faab871a4c": {
        "last use date": "2013-10-26T21:57:07",
        "create date": "2013-10-26T20:07:37",
        "name": "HueProApp"
      },
      "userHueful": {
        "last use date": "2015-01-08T19:20:43",
        "create date": "2013-12-27T23:42:10",
        "name": "Hueful"
      },
      "a750da2e33af2ba7": {
        "last use date": "2014-06-26T07:33:46",
        "create date": "2014-05-13T11:29:33",
        "name": "HueProApp"
      },
      "1f5c3355a6bd1d208b90bca64d3977bd": {
        "last use date": "2014-10-07T17:01:32",
        "create date": "2014-05-17T21:17:16",
        "name": "xbmc-player"
      },
      "583bac7ddec9425b": {
        "last use date": "2014-09-30T19:37:07",
        "create date": "2014-07-03T22:26:51",
        "name": "HueProApp"
      },
      "ffffffffacc397e3ffffffffe9931467": {
        "last use date": "2014-08-13T06:29:15",
        "create date": "2014-08-11T13:27:20",
        "name": "Hue#Samsung SM-G900F"
      },
      "a27e0ac425e4f964": {
        "last use date": "2015-01-09T16:05:40",
        "create date": "2014-10-10T17:15:14",
        "name": "HueProApp"
      },
      "0000000004c63be4ffffffffe9931467": {
        "last use date": "2015-01-07T11:35:46",
        "create date": "2014-10-11T09:48:10",
        "name": "Hue#Samsung SM-G900F"
      },
      "bH1uC5RGeUvSBiGa": {
        "last use date": "2014-10-28T06:14:11",
        "create date": "2014-10-19T17:38:08",
        "name": "Huemanic"
      },
      "lightswitch-v3": {
        "last use date": "2014-12-01T10:56:04",
        "create date": "2014-11-30T22:58:02",
        "name": "lightswitch-v3"
      },
      "yonomiuser": {
        "last use date": "2014-12-18T08:08:38",
        "create date": "2014-12-13T01:09:39",
        "name": "yonomi"
      },
      "lightswitch-v4": {
        "last use date": "2015-01-09T16:55:16",
        "create date": "2015-01-07T10:57:31",
        "name": "lightswitch-v4"
      }
    },
    "swversion": "01018228",
    "apiversion": "1.5.0",
    "swupdate": {
      "updatestate": 2,
      "checkforupdate": false,
      "devicetypes": {
        "bridge": false,
        "lights": [
          "5",
          "6"
        ]
      },
      "url": "",
      "text": "HUE0103 â€“ 66013452",
      "notify": false
    },
    "linkbutton": false,
    "portalservices": true,
    "portalconnection": "connected",
    "portalstate": {
      "signedon": true,
      "incoming": true,
      "outgoing": true,
      "communication": "connected"
    }
  },
  "schedules": {},
  "scenes": {
    "c48ba1f7b-off-0": {
      "name": "Mushrooms off 14",
      "lights": [
        "1",
        "2",
        "3",
        "4"
      ],
      "active": true
    },
    "64f0ebf54-on-0": {
      "name": "Mushrooms on 141",
      "lights": [
        "1",
        "2",
        "3",
        "4"
      ],
      "active": true
    },
    "02b12e930-off-0": {
      "name": "Blacklight off 1",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "e749a56ac-on-0": {
      "name": "Blacklight on 14",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "f4293d731-on-0": {
      "name": "TV on 1413028670",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "b115f381a-on-0": {
      "name": "glow stick color",
      "lights": [
        "1",
        "2",
        "3",
        "4"
      ],
      "active": true
    },
    "948ce012e-on-0": {
      "name": "Kathy on 1366579",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "5da2271e3-on-0": {
      "name": "Moon Light on 1413028671000",
      "lights": [
        "1",
        "2",
        "3",
        "4"
      ],
      "active": true
    },
    "91eefa170-on-0": {
      "name": "Sunrise F 2 on 1413028673000",
      "lights": [
        "1",
        "2",
        "3",
        "4"
      ],
      "active": true
    },
    "087f88f52-on-0": {
      "name": "Sunset on 1413028572000",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "84fa88aa5-on-0": {
      "name": "Energize on 1366579799000",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "f90b4d882-on-0": {
      "name": "Frost on 1413375387000",
      "lights": [
        "1",
        "2",
        "3",
        "4"
      ],
      "active": true
    },
    "a08c2be21-on-0": {
      "name": "Storm on 1413028668000",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "54ae5d997-on-0": {
      "name": "Ski on 1366579800000",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "33300ac17-on-0": {
      "name": "Feet up on 1413028587000",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    },
    "726af216a-on-0": {
      "name": "Deep sea on 1366579800000",
      "lights": [
        "1",
        "2",
        "3"
      ],
      "active": true
    }
  },
  "rules": {},
  "sensors": {
    "1": {
      "state": {
        "daylight": false,
        "lastupdated": "none"
      },
      "config": {
        "on": true,
        "long": "none",
        "lat": "none",
        "sunriseoffset": 30,
        "sunsetoffset": -30
      },
      "name": "Daylight",
      "type": "Daylight",
      "modelid": "PHDL00",
      "manufacturername": "Philips",
      "swversion": "1.0"
    }
  }
};

var testData = null;
/* jshint ignore:end */