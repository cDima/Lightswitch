describe("Player", function() {
  var parser;
  var actor;
  var action;

  beforeEach(function() {
    parser = lightCmdParser();
  });

  function react(text, match, actionArg, actorArg) {
      actor = actorArg;
      action = actionArg;
  }

  it("should be able to turn on lights", function() {
    parser.react("turn off the lights", react);
    expect(actor).toEqual(null);
    expect(action).toEqual('off');
  });

  describe("when song has been paused", function() {
    // beforeEach(function() {
    //   player.play(song);
    //   player.pause();
    // });

    // it("should indicate that the song is currently paused", function() {
    //   expect(player.isPlaying).toBeFalsy();

    //   // demonstrates use of 'not' with a custom matcher
    //   expect(player).not.toBePlaying(song);
    // });

    // it("should be possible to resume", function() {
    //   player.resume();
    //   expect(player.isPlaying).toBeTruthy();
    //   expect(player.currentlyPlayingSong).toEqual(song);
    // });
  });
});
