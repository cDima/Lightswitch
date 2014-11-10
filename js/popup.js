/**
 * Dmitry Sadakov's Philips Hue api wrapper background page
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved.
 */

//$.ready(function())
if (chrome !== null && chrome.extension != null) {
    log("loading as chrome extention popup");
    window.hue = chrome.extension.getBackgroundPage().hue;
    window.sceneCmd = chrome.extension.getBackgroundPage().sceneCmd;
} else {
    log("loading as no chrome, running as usual");
    window.hue = hue(window.jQuery, window.colors);
    window.hue.findBridge();
    window.sceneCmd = sceneCommander(window.jQuery, window.hue);
}

window.hueCommander = hueCommander(window.jQuery, window.hue, colorUtil(), sceneCmd);

// copyright
$("footer time").text(new Date().getFullYear());


$("#brightness-control").slider().on('slideStop', function(slideEvt){
  var val = slideEvt.value;
  log("new brightness: " + val);
  window.hue.setAllBrightness(val);
});

//console.log(background.hue.status);
//chrome.runtime.onMessage.addListener(function (message, sender, callback){
    // received message from hue backend
//});

$(".switch").hide();
$("#controls").hide();
$('.successsubscribe').hide(); 
$('html').animate({height: "130"}, 0);

/* email subscribe form */
$('.subscribe-form').submit(function(e) {
  var $this = $(this);
  $.ajax({
      type: "POST", // GET & url for json slightly different
      url: "https://APIStarter.us9.list-manage.com/subscribe/post-json?u=83c6f205a4379f5136e187d52&amp;id=cad0da3b8a&c=?",
      data: $this.serialize(),
      dataType: 'jsonp',
      contentType: "application/json; charset=utf-8",
      error: errorOnEmailSubmit,
      success: function(data) {
          if (data.result != "success") {
              // Something went wrong, parse data.msg string and display message
              errorOnEmailSubmit();
          } else {
              // It worked, so hide form and display thank-you message.
              $('.subscribe-form').removeClass("error"); 
              $('.subscribe-form').addClass("ok"); 
              $('.successsubscribe').show(); 
              $('.subscribe-form').hide();               
          }
      }
  });
  return false;
});

function errorOnEmailSubmit(){
  $('.subscribe-form').addClass("error"); 
  $('.subscribe-form').addClass("shake");
  $(".subscribe-form").bind('oanimationend animationend webkitAnimationEnd', function() { 
     $('.subscribe-form').removeClass("shake");
  });
}

/* search */
var clPalettes = null;
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  if (e.target.text == "Search" && clPalettes == null)
  {
    initSearch();
  }
});

$('#colorsearch').keyup(function(e){
    if(e.keyCode == 13) initSearch();
});

$("button#search").click(initSearch);

function initSearch(){
  var paletteCount = 0;
    $.getJSON("http://www.colourlovers.com/api/palettes/top?jsonCallback=?", {
          keywords: $("#colorsearch").val(),
          numResults: 7
    }, function(allPalettes) {
        clPalettes = allPalettes;
        showPalettes(clPalettes);
    });
}

function showPalettes(palettes){

  results = $(".search-results");
  results.empty();
  $.each(palettes, function(k, v) {


    var result = $('<div class="palette"> \
                      <div class="colors"></div> \
                      <div class="palette-name"></div>  \
                    </div>');

    v.colors.forEach(function(co) {
        $('.colors', result).append($('<a></a>')
        .addClass("color")
        .attr('href', "#" + co)
        .css({backgroundColor: "#" + co})
        .click(executeCommand));
    });

    $('.palette-name', result).text(v.title);

    results.append(result);
  });  
}


log("client: binding to status change.");

var statusText = "";
//window.hue.setLogger(onLog);

window.hue.onStatusChange(onStatus);
window.hueCommander.setLogger(log);

//function onLog(text){
    //$('.log-text').append(text + "<br>");
//}
function log(text) {
    console.log(text);
    //onLog(text)
}

            
function onStatus(status) {
    console.log("client: status changed - " + status.status);
    $('#connectStatus').html("<div class='intro-text'>" + status.text + "</div>");
    
    if (status.status == "OK") {
        $('#cmn-toggle-1').prop('disabled', false);
        //if (statusText !== status.text) {
        //    statusText = status.text;
        //    $('#connectStatus').html("<div class='intro-text'>" + status.text + "</div>");
        //}
        $("#connectStatus").fadeOut(600, function() {
            $('html').animate({height: "400"},400);
            $(".switch").fadeIn(600, showControls);
            //$('body').addClass('on');
            fillSettings();
        });
        $('#cmn-toggle-1').prop('checked', status.data);
    } else {
        $('#cmn-toggle-1').prop('disabled', true);
        $('#cmn-toggle-1').prop('checked', false);

        //$('body').removeClass('on');
        $("#controls").fadeOut(600);
        $(".tab-content").hide();
        $('html').animate({height: "130"}, 0);

        $(".switch").fadeOut(600, function() {
            $("#connectStatus").fadeIn(600);
        });
    }

    //updateStatus("BridgeNotFount", "Philip Hue lights not found.");
};

function fillSettings() {
    var state =window.hue.getState();
    if (state.lights != null) {
        $.each(state.lights, function(key, value) {
            log("Lights: " + key  + ", name: " + value.name + ", reachable: " + value.state.reachable + ", on: " + value.state.on);
            if (value.state.reachable) {
              var btn = $('<button type="button" class="actor"></button>').text(value.name).attr('id', key);
              btn.click(function(){
                $("button").removeClass('active');
                $("#lamps button[id=" + key + "]").addClass('active');
                hueCommander.setActor(key); 
              });
              $("#lamps").append(btn);

            }
        });
        $.each(state.groups, function(key, value) {
            log("Groups: " + key  + ", name: " + value.name + ", # lights: " + value.lights.length);
            var btn = $('<button type="button" class="actor"></button>').text(value.name).attr('id', key);
            btn.click(function(){
              $("button").removeClass('active');
              $("#groups button[id=" + key + "]").addClass('active');
              hueCommander.setActor('group:' + key);
            });
            $("#groups").append(btn);
        });
        $.each(state.scenes, function(key, value) {
            log("Scenes: " + key  + ", name: " + value.name + ", # lights: " + value.lights.length);
            var btn = $('<button type="button" class="savedscene"></button>').text(value.name).attr('id', key);
            btn.click(function(){
              hueCommander.command('scene:' + key);
            });
            $("#scenes").append(btn);
        });
        log("Config: " + state.config.name 
            + ", version: " + state.config.swversion
            + ", ip: " + state.config.ipaddress 
            + ", portal: " + state.config.portalconnection 
            + ", zigbeechannel:" + state.config.zigbeechannel);

        hueCommander.setActor('group:1');
        $("#groups button[id=1]").addClass("active");
    }
}

function showControls(){
    $(".tab-content").hide(0);
    $("#controls").fadeIn(600, showTabContent);
}
function showTabContent() {
    $(".tab-content").fadeIn(600);
};

if (window.hue.status == "OK") $('#cmn-toggle-1').prop('checked', window.hue.status.data);
//var heartbeat = setInterval(hue.heartbeat, 1000); // dies with closed popup.

// if no hearbeat, then activate the fail button.
/*if ($('#linkButton').length === 0) {
    $('#connectStatus') // Replace this selector with one suitable for you
        .append('<input type="button" id="linkButton" value="Push link button">') // Create the element
        .click(function(){ 
            addUser();
    }); // Add a click handler
}*/

$('#cmn-toggle-1').click(function(e){
    var turnOn = $('#cmn-toggle-1').is(':checked');
    if (turnOn) {
        window.hue.turnOnAll();
    } else {
        window.hue.turnOffAll();
    }
    trackButton(e);
});

$("#solid-palette div ").each(function(name, colorsElement) {
  colorsElement = $(colorsElement);
  var paletteName = colorsElement.data("palette");
  if (Palettes[paletteName] != null) {
    colorsElement.addClass("palette");
    colorsElement.append($('<div class="colors"> \
                    </div> \
                    <div class="colors-name"></div>  \
                </div>'));
    $('.colors-name', colorsElement).text(paletteName);
    Palettes[paletteName].forEach(function(co) {
        var ec = $('<a href="" class="color"></a>');

        var color = typeof co == "string" ? co : co.color;
        
        $(ec).attr('href', color);  
        $(ec).attr('title', typeof co.name == 'undefined' ? color : co.name);
        $(ec).css({backgroundColor: color});
        $(ec).click(executeCommand);
    
        $('.colors', colorsElement).append(ec);
    });
  }
});

$('.scene').each(function (index, sceneElement){
  sceneElement = $(sceneElement);
  var sceneName = sceneElement.data("scene");
  if(scenes[sceneName] != undefined) {
    
    var colorsElement = $('<div class="colors"></div>');
    var colors = scenes[sceneName].Palette;
    colors.forEach(function(co) {
        var ec = $('<div class="color"></div>');
        var color = typeof co == "string" ? co : co.color;
        $(ec).css({backgroundColor: color});
        colorsElement.append(ec);
    });
    sceneElement.append(colorsElement);

    var e = $('<div class="scene-name"></div>');
    e.text(sceneName);
    sceneElement.append(e);
    
  } 
});

$('.scene').click(function(element){
   window.hueCommander.command('scene:' + $(this).data('scene'));
   return false;
});


function executeCommand() {
    var command = $(this).attr("href");
    window.hueCommander.command(command);
    return false; 
}

$('.command').click(executeCommand); // buttons
//$('a.color').click(executeCommand);


//Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-55863666-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function trackButton(e) {
    _gaq.push(['_trackEvent', e.target.id, 'clicked']);
  };

