/*
  Created 2014 Triangle717
  <http://Triangle717.WordPress.com/>

  Source code licensed under The MIT License
  <http://opensource.org/licenses/MIT/>

  Dedicated to the good folks at Rock Raiders United
  <http://www.rockraidersunited.org/>
*/

(function(){
  "use strict";
  /* One-time page load processes */

  var IamTeeVee, welcomeToHeadquaters,
      a = document.createElement("audio");

  // Initialize stopwatch
  $("#timer").runner();

  // Test HTML5 audio compatibility, preferring MP3 audio
  // Taken from http://diveintohtml5.info/everything.html#audio-mp3
  //http://www.youtube.com/watch?v=ySniIhppmRg
  if (!!(a.canPlayType && a.canPlayType("audio/mpeg;").replace(/no/, ""))) {
    welcomeToHeadquaters = "audio/introloop.mp3";
    IamTeeVee = "audio/teevee.mp3";
  } else {
    welcomeToHeadquaters = "audio/introloop.ogg";
    IamTeeVee = "audio/teevee.ogg";
  }

  window.welcomeToHeadquaters = welcomeToHeadquaters;
  window.IamTeeVee = IamTeeVee;
})();

$("#teevee").on("click", function() {
  "use strict";
  /* Trigger new glitches with each click of Tee Vee */

  // On click, fire an event to load a new player.
  // Not firing the event ends up triggering two glitches on the first click,
  // which is not what needs to happen.
  $("#teevee").trigger("if-at-any-time");

  // On each subsequent click of Tee Vee, install him
  // on more Windows XP machines.
  $("#teevee").bind("if-at-any-time", function() {
    var needsMoreWindowsXP = new SeamlessLoop();
    needsMoreWindowsXP.addUri(IamTeeVee, 1900, "needsMoreWindowsXP");
    function windowsXP() {
      needsMoreWindowsXP.start("needsMoreWindowsXP");
    }
    needsMoreWindowsXP.callback(windowsXP);
  });
});

$("#teevee").one("click", function() {
  "use strict";

  // Set up looping library
  var loop = new SeamlessLoop();
  loop.addUri(IamTeeVee, 1900, "iRepeatMyself");

  // Do not reset stopwatch with multiple installations
  // Also delay timer until Tee Vee starts talking
  window.setTimeout(function() {
    $("#timer").runner("start");
  }, 3995);

  // Tee Vee glitches out the first time
  var teeVeeHereAtYourService = new Audio(welcomeToHeadquaters);
  teeVeeHereAtYourService.load();
  teeVeeHereAtYourService.play();

  /** Now that Tee Vee has repeated his line one,
   * he gets to say it AGAIN! :D
   */
  window.setTimeout(function() {
    loop.callback(loop.start("iRepeatMyself"));
  }, 7100);
});
