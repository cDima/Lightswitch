describe("Voice commands", function() {
  var parser;
  var actor;
  var action;
  var match;
  beforeEach(function() {
    parser = voiceCommander(voiceCmd);
    actor = null;
    action = null;
    match = null;
  });

  function voiceCmd(text, matchArg, actionArg, actorArg) {
      actor = actorArg;
      action = actionArg;
      match = matchArg;
  }

  function expectActorAction(actorArg, actionArg) {
     //console.log(match);
     expect(actor).toEqual(actorArg);
     expect(action).toEqual(actionArg);
  }

  function shouldHandle(text, actor, action) {
    it("'"+ text +'" -> (' + (actor || 'undefined') + ', ' + action + ')', function() {
      parser.react(text);
      expectActorAction(actor, action);
    });  
  }

  describe("should handle on/off commands", function() {


    shouldHandle("turn off the lights", undefined, 'off');
    shouldHandle("lights on", undefined, 'on');
    shouldHandle("lights off", undefined, 'off');
    shouldHandle("turn the lights on", undefined, 'on');

    shouldHandle("turn off all the lights", 'all', 'off');
    shouldHandle("all lights on", 'all', 'on');
    shouldHandle("lights off", undefined, 'off');
    shouldHandle("turn all the lights on", 'all', 'on');

  });  

  describe("should handle room names", function() {
    shouldHandle("turn the bedroom lights on", 'bedroom', 'on');
    shouldHandle("turn the livingroom lights off", 'livingroom', 'off');
    shouldHandle("hallway off", 'hallway', 'off');
    shouldHandle("set the kitchen lights on", 'kitchen', 'on');
    shouldHandle("bedroom lights on", 'bedroom', 'on');
    shouldHandle("turn on the bedroom lights", 'bedroom', 'on');

  });  

  describe("should handle brightness commands", function() {
    shouldHandle("turn up the lights", undefined, 'up');
    shouldHandle("brighten the lights", undefined, 'up');
    shouldHandle("dim the lights", undefined, 'dim');
    shouldHandle("turn down the lights", undefined, 'dim');
    shouldHandle("dim down the lights", undefined, 'dim');
  });

  describe("should handle exact commands", function() {
    shouldHandle("turn up the lights to 80%", undefined, '80%');
    shouldHandle("set lights to 55", undefined, '55');
    shouldHandle("dim the kitchen to 55%", 'kitchen', '55%');
    shouldHandle("set the bedroom lights to 50%", 'bedroom', '50%');
    shouldHandle("set all the lights to 20% brightness", 'all', '20%');
    shouldHandle("set the lights to 20%", undefined, '20%');
    shouldHandle("set the lights to 20% brightness", undefined, '20%');
  });

  describe("should handle scenes", function() {
    shouldHandle("stop scenes", undefined, 'scene:stop');
    shouldHandle("stop the lights", undefined, 'scene:stop');
    shouldHandle("start the disco in the livingroom", 'livingroom', 'scene:disco');
    shouldHandle("stop the animation", undefined, 'scene:stop');
    shouldHandle("animate lamps", undefined, 'scene:start');
    shouldHandle("start animation", undefined, 'scene:start');
    shouldHandle("start scene", undefined, 'scene:start');
    shouldHandle("continue scene", undefined, 'scene:start');
  });
});
