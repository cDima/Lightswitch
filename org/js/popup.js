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

            
$('#manualbridgeip').hide();
/* bridge ip */

$('#manualbridgeip .input').keyup(function(e){
    if(e.keyCode == 13) tryBridge();
});

$("#manualbridgeip button").click(tryBridge);

function tryBridge(){
  var ip = $('#manualbridgeip input').val();
  tryIP(ip,function() {
    $('#manualbridgeip')
      .addClass('shake')
      .bind('oanimationend animationend webkitAnimationEnd', function() { 
       $('#manualbridgeip').removeClass("shake");
    });
  });
}

function bruteForseIPs(){
  // try default ips for win and mac
  var ips = [];
  for(var i = 0; i < 21; i++) {
    ips.push("10.0.1." + i); // mac: 10.0.1.1-20
    ips.push("192.168.0." + i); // win: 192.168.0.1-20
    ips.push("192.168.1." + i); // win: 192.168.1.1-20
    ips.push("192.168.0." + (100+i)); // win: 192.168.1.100-120
  }
  for (var index = 0; index < ips.length; index++) {
    tryIP(ips[index], function() { /* nothing */ });
  }
}

function tryIP(ip, error){
  $.ajax({
        dataType: "json",
        url: 'http://' + ip + '/api/123-bogus',
        success: function(){
          hue.setIp(ip);
          hue.heartbeat();
        },
        error: error,
      timeout: 2000
    });
}

function onStatus(status) {
    console.log("client: status changed - " + status.status);
    
    if (status.status == "BridgeNotFound") {
      $('#manualbridgeip').show();
      $('#connectStatus').html("<div class='intro-text'><a href='http://bit.ly/lightswitchhue' target='_blank'>Philip Hue bridge</a> not found.</div>");
      $('html').animate({height: "160"}, 0);
      bruteForseIPs();
    } 

    if (status.status == "OK") {
        $('#connectStatus').html("<div class='intro-text'>" + status.text + "</div>");
        $('#manualbridgeip').hide();
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
        $('#connectStatus').html("<div class='intro-text'>" + status.text + "</div>");
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

            if (value.name.endsWith(" on 0"))
            {
              normalName = value.name.substring(0,value.name.length - " on 0".length);
              if ($("#scenes button:contains('" + normalName + "')").length == 0) {
                var btn = $('<button type="button" class="savedscene"></button>').text(normalName).attr('id', key);
                btn.click(function(){
                  hueCommander.command('scene:' + key);
                });
                $("#scenes").append(btn);
              }
            } 
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

if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
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
_gaq.push(['_setAccount', 'UA-55863666-2']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = 'https://ssl.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

function trackButton(e) {
    _gaq.push(['_trackEvent', e.target.id, 'clicked']);
  };

// color wheel:


// create canvas and context objects
function placeImage(picker, imgsrc){
  var canvas = document.getElementById(picker);
  var ctx = canvas.getContext('2d');

  // drawing active image
  var image = new Image();
  // select desired colorwheel
  image.src=imgsrc;
  image.onload = function () {
      ctx.drawImage(image, 0, 0, image.width, image.height); // draw the image on the canvas
  }
}

placeImage("picker", "img/colorbox-100.png");
placeImage("picker2", "img/colorwheel-100.png");
//placeImage("#picker", "img/colorwhell2.png");

//$('#picker').click(function(e) { // click event handler
$('#picker, #picker2, #picker3').mousemove(getColor);
$('#picker, #picker2, #picker3').click(function(e, ev){
  var hex = getColor(e);
  window.hueCommander.command(hex); 
});

function getColor(e){
    // get coordinates of current position
    var canvasOffset = $(e.target).offset();
    var canvasX = Math.floor(e.pageX - canvasOffset.left);
    var canvasY = Math.floor(e.pageY - canvasOffset.top);

    // get current pixel
    var ctx = document.getElementById(e.target.id).getContext('2d');
    var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
    var pixel = imageData.data;

    // update preview color
    var pixelColor = "rgb("+pixel[0]+", "+pixel[1]+", "+pixel[2]+")";
    $('.preview').css('backgroundColor', pixelColor);

    // update controls
    //$('#rVal').val(pixel[0]);
    //$('#gVal').val(pixel[1]);
    //$('#bVal').val(pixel[2]);
    //$('#rgbVal').text(pixel[0]+','+pixel[1]+','+pixel[2]);

    var dColor = pixel[2] + 256 * pixel[1] + 65536 * pixel[0];
    var hex = '#' + ('0000' + dColor.toString(16)).substr(-6);
    //$('#hexVal').val();
    $('#rgbVal').css({backgroundColor: hex});
    return hex;
}
