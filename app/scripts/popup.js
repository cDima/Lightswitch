/**
 * Dmitry Sadakov"s Philips Hue api wrapper popup page
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved.
 */

'use strict';
/*jshint multistr: true */

/*globals $:false, 
          chrome:false, 
          hueCommander:false, 
          hue:false, 
          sceneCommander:false, 
          Palettes:false, 
          scenes:false, 
          trackEvent:false,
          colorUtil:false,
          ga:false
          Ambient:false,
		      config:false
*/

$('body').addClass(config.app);
 //config.ambieye
$('.config-moods').toggle(config.scenes);
$('.config-colors').toggle(config.scenes);
$('.config-search').toggle(config.search);
$('.config-ambieye').toggle(config.ambieye);
$('.config-feedback').toggle(config.feedback);

if(config.app !== 'app') {
  /* jshint ignore:start */
  // Set colors
  UserVoice.push(['set', {
    target : '#uservoice',
    accent_color: '#448dd6',
    trigger_color: 'white',
    trigger_background_color: 'rgba(46, 49, 51, 0.6)',
    strings: {
      post_suggestion_body: ''
      //post_suggestion_title: '',
      //post_suggestion_details_title: ''

    }
  }]);
  /* jshint ignore:end */
}

var sceneCmd = null;
var ambieye = null;
var heartbeatInterval = 2000;

if (typeof(chrome) !== 'undefined'  && chrome.extension !== undefined) {
    log('loading as chrome extention popup');
    var background = chrome.extension.getBackgroundPage();
    window.hue = background.hue;
    sceneCmd = background.sceneCmd;
    ambieye = background.Ambient;

    /*
    manifest: 
      "optional_permissions": [ 
        "activeTab",
        "<all_urls>"
      ],
    */

    background.hasAllUrlAccess(function(granted){
      $('#ambieyepermissions').toggle(!granted);
      if (granted) {
        tryEnableEye();
      } 
    });

    $('#ambieyepermissions').click(function(){
      background.requestAmbientPermission(function(granted) {
        if (granted) {
          tryEnableEye();
        } 
      });
    });


} else {
    log('loading as no chrome, running standalone');
    window.hue = hue(window.jQuery, window.colors);
    window.hue.findBridge();
    sceneCmd = sceneCommander(window.jQuery, window.hue);
    ambieye = window.Ambient;
}

ambieye.onUpdate(updatePreviewColors);
window.hueCommander = hueCommander(window.jQuery, window.hue, colorUtil(), sceneCmd);

log('client: binding to status change.');

window.hue.onStatusChange(onStatus);
window.hueCommander.setLogger(log);

// copyright
$('footer time').text(new Date().getFullYear());

var hubStartTime = new Date().getTime();


//$('#brightness-control').rangepicker().on('slideStop', function(slideEvt){
$('#brightness-control').slider().on('slideStop', function(slideEvt){
  var val = slideEvt.value;
  log('new brightness: ' + val);
  window.hueCommander.command('bri:' + val);
});

function disableBrightness(on){
    $('#toggle-ambientweb').attr('disabled', on);
}

$('.switch').hide();
$('#controls').hide();
$('.successsubscribe').hide();

if (config.app === 'web') {
  // do nothing
} else if (config.app === 'app') {
  setHeight(130, 0);
} else {
  setHeight(150, 0);
}

/* email subscribe form */
$('.subscribe-form').submit(function(e) {
  var $this = $(this);
  $.ajax({
      type: 'POST', // GET & url for json slightly different
      url: 'https://APIStarter.us9.list-manage.com/subscribe/post-json?u=83c6f205a4379f5136e187d52&amp;id=cad0da3b8a&c=?',
      data: $this.serialize(),
      dataType: 'jsonp',
      contentType: 'application/json; charset=utf-8',
      error: function(){
        errorShake('.subscribe-form');
      },
      success: function(data) {
          if (data.result !== 'success') {
              errorShake('.subscribe-form');
          } else {
              // It worked, so hide form and display thank-you message.
              $('.subscribe-form').removeClass('error'); 
              $('.subscribe-form').addClass('ok'); 
              $('.successsubscribe').show(); 
              $('.subscribe-form').hide();               
          }
      }
  });
  return false;
});

function errorShake(id){
  $(id).addClass('error'); 
  $(id).addClass('shake');
  $(id).bind('oanimationend animationend webkitAnimationEnd', function() { 
     $(id).removeClass('shake');
  });
}
 
/* search */
var clPalettes = null;
var skip = 0;

$('#colorsearch').keyup(function(e){
    if(e.keyCode === 13) {
      skip = 0;
      initSearch('top');
    }
});

$('button#search').click(function() {
  skip = 0;
  initSearch('top');
});

$('a[href="#search?top"]').click(function(){
  initSearch('top');
});

$('a[href$="#search?new"]').click(function(){
  initSearch('new');
});

$('a[href$="#search?random"]').click(function(){
  initSearch('random');
});


function initSearch(type){
    $('#search-loading').show();
    $.getJSON('https://colorlovers.herokuapp.com/api/palettes/' + type + '?jsonCallback=?', {
          keywords: $('#colorsearch').val(),
          resultOffset: skip,
          numResults: 7
    }, function(allPalettes) {
        $('#search-loading').hide();
        clPalettes = allPalettes;
        showPalettes(clPalettes);
        $('a[href$="#search?back"]').off('click');
        $('a[href$="#search?back"]').click(function(){
          skip -= 7;
          initSearch('new', skip);
        });
        $('a[href$="#search?next"]').off('click');
        $('a[href$="#search?next"]').click(function(){
          skip += 7;
          initSearch('new', skip);
        });
    });
}

function showPalettes(palettes){

  var results = $('.search-results');
  results.empty();
  $.each(palettes, function(k, v) {
    var result = $('<div class="palette"> \
                      <div class="colors"></div> \
                      <div class="palette-name"></div>  \
                    </div>');

    v.colors.forEach(function(co) {
        $('.colors', result).append($('<a></a>')
        .addClass('color')
        .attr('href', '#' + co)
        .css({backgroundColor: '#' + co})
        .click(executeCommand));
    });

    $('.palette-name', result).text(v.title);

    $(result).click(function(){
      scenes.RelaxedRandom.Palette = v.colors.map(function(n) { return '#' + n; });
      hueCommander.command('scene:RelaxedRandom');
      activatedScene('RelaxedRandom');
    });

    results.append(result);
  });  
}


function log(text) {
    console.log(text);
}

            

/* bridge ip */

$('#manualbridgeip .input').keyup(function(e){
    if(e.keyCode === 13) {
      tryBridge();
    }
});

$('#manualbridgeip button').click(tryBridge);

function tryBridge(){
  var ip = $('#manualbridgeip input').val();
  tryIP(ip,function() {
    $('#manualbridgeip')
      .addClass('shake')
      .bind('oanimationend animationend webkitAnimationEnd', function() { 
       $('#manualbridgeip').removeClass('shake');
    });
  });
}

function bruteForseIPs(){
  // try default ips for win and mac
  var ips = [];
  for(var i = 0; i < 21; i++) {
    ips.push('10.0.1.' + i); // mac: 10.0.1.1-20
    ips.push('192.168.0.' + i); // win: 192.168.0.1-20
    ips.push('192.168.1.' + i); // win: 192.168.1.1-20
    ips.push('192.168.0.' + (100+i)); // win: 192.168.1.100-120
  }
  for (var index = 0; index < ips.length; index++) {
    tryIP(ips[index], function() { /* nothing */ });
  }
}

function tryIP(ip, error){
  try{
    $.ajax({
        dataType: 'json',
        url: 'http://' + ip + '/api/123-bogus',
        success: function(){
          hue.setIp(ip);
          hue.heartbeat();
        },
        error: error,
        timeout: 2000
      });
  } 
  catch(err) {
    // do nothing.
  }
}

$('#manualbridgeip').hide();

var manualIpInputAnimation = null;

function stopHeartbeat(){
  if (heartbeat !== null) {
    log('Clearing heartbeat');
    clearInterval(heartbeat);
  }
}

function startHeartbeat() {
  log('Starting heartbeat');
  heartbeat = setInterval(window.hue.heartbeat, heartbeatInterval);
}

function onStatus(status) {
    console.log('client: status changed - ' + status.status);
    
    if (status.status === 'BridgeNotFound') {
      $('#connectStatus').html('<div class="intro-text"><a href="http://bit.ly/lightswitchhue" target="_blank">Philip Hue bridge</a> not found.</div>');
      bruteForseIPs();
      manualIpInputAnimation = setTimeout(function(){
        $('#manualbridgeip').addClass('fade3').show();
        if (config.app === 'web') {
          // do nothing
        } else if (config.app === 'light') {
          setHeight(170, 400);
        } else {
          setHeight(160, 400);
        }
        $('.switch').fadeOut(600);
        hideControls();
      }, 2000);
      stopHeartbeat();
      
      return;
    } 
    if (manualIpInputAnimation !== null) {
      clearInterval(manualIpInputAnimation);
      manualIpInputAnimation = null;
    }

    if (status.status === 'OK') {
        $('#connectStatus').html('<div class="intro-text">' + status.text + '</div>');
        $('#manualbridgeip').hide();
        $('#lightswitch').prop('disabled', false);

        // time to screen
        var hubEndTime = new Date().getTime();
        var timeSpent = hubEndTime - hubStartTime;

        log('Tracking event OK');
        ga('send', 'timing', 'status-ok', 'Ping hub', timeSpent, 'Philips Hue Hub');

        $('#connectStatus').fadeOut(600, function() {
          if (config.tabs === true) {
            if (config.app === 'web') {
              // do nothing
            } else {
              setHeight(400, 400);
            }
          }
          $('.switch').fadeIn(600, showControls);
            
          //$('body').addClass('on');
          fillSettings();
        });
        $('#lightswitch').prop('checked', status.data);

        stopHeartbeat();
        startHeartbeat();
    } else {
        stopHeartbeat();
        
        log('Hiding elements, bridge not found');
        $('#connectStatus').html('<div class="intro-text">' + status.text + '</div>');
        $('#lightswitch').prop('disabled', true);
        $('#lightswitch').prop('checked', false);

        //$('body').removeClass('on');
        $('#controls').fadeOut(600);
        $('.tab-content').hide();
        if (config.app === 'web') {
          // do nothing
        } else if (config.app === 'app') {
          setHeight(130, 0);
        } else {
          setHeight(150, 0);
        }

        $('.switch').fadeOut(600, function() {
            $('#connectStatus').fadeIn(600);
        });
    }

    //updateStatus('BridgeNotFount', 'Philip Hue lights not found.');
}

function setHeight(height, transitionTime) {
  //height = $('wrapper').height();
  $('html').animate({height: height}, transitionTime);
  $('body').animate({height: height}, transitionTime);
  if (typeof(chrome) !== 'undefined' && chrome.app.window !== undefined) {
    setTimeout(function(){
      var wind = chrome.app.window.current();
      wind.innerBounds.height = height;
      wind.innerBounds.width = 320;
    }, 500); // wait until animations are done.
  }
}

function updateUIForActors(){
  var actors = window.hueCommander.getActorStates();
  var actorKey = window.hueCommander.getActor();
 
  var on = false;
  var bri = 0;
  
  $('button').removeClass('active');
  $('button[id=' + actorKey + ']').addClass('active');
  
  $.each(actors, function(key, lamp){
    on = on || lamp.state.on;
    if (lamp.state.bri > bri) {
      bri = lamp.state.bri;
    }
  });
 
  $('#lightswitch').prop('checked', on);
  $('#brightness-control').val(bri);
  $('#brightness-control').change(); // update ui
  disableBrightness(on);
}


$('#create-group').hide();
$('#make-group').click(function(){
  $('#create-group').slideToggle();
});
$('#add-group').click(function(){
  var name = $('#group-name input').val();
  if (name === '') {
    errorShake('#group-name');
    return;
  }
  $('#group-name').removeClass('error');
  var lampIds = $('#group-add-lamps .lamp-select.active').map(function() {
        return this.id;
    }).get();
  if (lampIds.length === 0) {
    errorShake('#group-add-lamps');
    return;
  }
  $('#group-add-lamps').removeClass('error');
  // add group
  hue.createGroup(name, lampIds);
  // reset
  setTimeout(fillSettings, 2000);
});

function createActorBtn(key,name){
  var btn = $('<button type="button" class="actor"></button>').text(name).attr('id', key);
  return btn;
}

function actorClick(event){
  var key = event.target.id;
  $('button').removeClass('active');
  $('button[id=' + key + ']').addClass('active');
  hueCommander.setActor(key); 
  updateUIForActors();
}

function findGroupIdByName(groups, name) {
  for(var group in groups) {
    if (groups[group].name === name) {
      return group;
    }
  }
  return null;
}

var triedCreateGroup = false;

function fillSettings() {
    var state =window.hue.getState();

    if (state.lights !== null) {

        trackEvent('settings', 'init', 'version', state.config.swversion);
        trackEvent('settings', 'init', 'ip', state.config.ipaddress);
        trackEvent('settings', 'init', 'portal', state.config.portalconnection);
        trackEvent('settings', 'init', 'zigbeechannel', state.config.zigbeechannel);
        trackEvent('settings', 'init', 'lightcount', state.lights.length);
        trackEvent('settings', 'init', 'groupcount', state.groups.length);
        trackEvent('settings', 'init', 'scenecount', state.scenes.length);
    

        $('#lamps').empty();
        $('#group-add-lamps').empty();
        $('#groups').empty();
        $('#scenes').empty();
        $('#group-remove').empty();

        $.each(state.lights, function(key, value) {
            log('Lights: ' + key  + ', name: ' + value.name + ', reachable: ' + value.state.reachable + ', on: ' + value.state.on);
            var btn = createActorBtn(key, value.name);
            btn.click(actorClick);
            $('#lamps').append(btn);
            
            var selector = createActorBtn(key, value.name);
            selector.addClass('lamp-select');

            selector.click(function(){
              $(this).toggleClass('active');

            });
            $('#group-add-lamps').append(selector);
        });


        var allOn = false;
        var lightsReachable = [];
        $.each(state.lights, function(key, value){
            if (value.state.reachable) {
                lightsReachable.push(value);
            }
            allOn = allOn || value.state.reachable || value.state.on;
        });
        

        //if (Object.keys(state.groups).length === 0 || 
        if (findGroupIdByName(state.groups, 'All') === null) {
          if (triedCreateGroup === false) {
            triedCreateGroup = true;
            // creating default group, All
            var lampIds = $.map(state.lights, function(lamp, key) {
              return key;
            });
            hue.createGroup('All', lampIds);
            hue.heartbeat();
            setTimeout(fillSettings, 1000); // reset UI
            return;
          }
        }

        if (typeof(chrome) !== 'undefined'  && chrome.browserAction !== undefined) {
          var path = 'images/lightswitch.logo.on.128.png';
            if (allOn)  {
                if (config.app === 'ambieye') {
                  path ='images/ambieye-ico-on.png';
                } else {
                  path ='images/lightswitch.logo.on.128.png';
                }
            } else {
                if (config.app === 'ambieye') {
                  path ='images/ambieye-ico.png';
                } else {
                  path ='images/lightswitch.logo.128.png';
                }
            }
            chrome.browserAction.setIcon({path:path});
        }

        $.each(state.groups, function(key, value) {
            log('Groups: ' + key  + ', name: ' + value.name + ', # lights: ' + value.lights.length);
            var btn = createActorBtn('group-' + key, value.name);
            btn.click(actorClick);
            $('#groups').append(btn);

            var selector = createActorBtn(key + ' ', value.name);
            selector.click(function(){
              hue.removeGroup(key);
              hue.heartbeat();
              setTimeout(fillSettings, 2000);
              $(this).hide('slow');
            });
            selector.append('&nbsp;');
            if (key !== '1') {
              selector.append($('<li class="fa fa-remove"></li>'));
            }
            $('#group-remove').append(selector);

        });

        $.each(state.scenes, function(key, value) {
            log('Scenes: ' + key  + ', name: ' + value.name + ', # lights: ' + value.lights.length);

            if (value.name.endsWith(' on 0'))
            {
              var normalName = value.name.substring(0,value.name.length - ' on 0'.length);
              if ($('#scenes button:contains("' + normalName + '")').length === 0) {
                var btn = $('<button type="button" class="savedscene"></button>').text(normalName).attr('id', key);
                btn.click(function(){
                  hueCommander.command('scene:' + key);
                  // update ui
                  activatedScene(key);
                });
                $('#scenes').append(btn);
              }
            } 
        });
        log('Config: ' + state.config.name +
            ', version: ' + state.config.swversion +
            ', ip: ' + state.config.ipaddress +
            ', portal: ' + state.config.portalconnection +
            ', zigbeechannel:' + state.config.zigbeechannel);

        var groupAll = findGroupIdByName(state.groups, 'All');
        if (groupAll === null) {
          hueCommander.setActor('group-1');
        } else {
          hueCommander.setActor('group-' + groupAll);
        }
        
        updateUIForActors();
    }
}

function activatedScene(key){
  $('#scenes button').removeClass('active');
  $('.scene').removeClass('active');
  $('#scenes button[id="' + key + '"]').addClass('active');
  $('.scene[data-scene="' + key + '"]').addClass('active');
}
//function activateGroup(key){
//  $('#groups button').removeClass('active');
//  $('#lamps button').removeClass('active');
//  $('#groups button[id=' + key + ']').addClass('active');
//  hueCommander.setActor('group:' + key);
//}

if (typeof String.prototype.endsWith !== 'function') {
    String.prototype.endsWith = function(suffix) {
        return this.indexOf(suffix, this.length - suffix.length) !== -1;
    };
}

function hideControls(){
  $('.tab-content').hide(0);
  $('#controls').fadeOut(600, showTabContent);
}

function showControls(){
    $('.tab-content').hide(0);
    if (config.tabs === true) {
      $('#controls').fadeIn(600, showTabContent);
    }
}
function showTabContent() {
    $('.tab-content').fadeIn(600);
}

if (window.hue.status === 'OK') {
  $('#lightswitch').prop('checked', window.hue.status.data);
}
var heartbeat = null;// setInterval(hue.heartbeat, 1000); // dies with closed popup.

// if no hearbeat, then activate the fail button.
/*if ($('#linkButton').length === 0) {
    $('#connectStatus') // Replace this selector with one suitable for you
        .append('<input type="button" id="linkButton" value="Push link button">') // Create the element
        .click(function(){ 
            addUser();
    }); // Add a click handler
}*/

$('#lightswitch').click(function(e){
    var turnOn = $('#lightswitch').is(':checked');
    disableBrightness(turnOn);
    if (turnOn) {
      window.hueCommander.command('on');
    } else {
      window.hueCommander.command('off');
    }

    trackEvent(e.target.id, 'clicked');
});

$('#solid-palette div ').each(function(name, colorsElement) {
  colorsElement = $(colorsElement);
  var paletteName = colorsElement.data('palette');
  if (Palettes[paletteName] !== null) {
    colorsElement.addClass('palette');
    colorsElement.append($('<div class="colors"> \
                    </div> \
                    <div class="colors-name"></div>  \
                </div>'));
    $('.colors-name', colorsElement).text(paletteName);
    Palettes[paletteName].forEach(function(co) {
      var ec = $('<a href="" class="color"></a>');

      var color = typeof co === 'string' ? co : co.color;

      $(ec).attr('href', color);
      $(ec).attr('title', typeof co.name === 'undefined' ? color : co.name);
      $(ec).css({backgroundColor: color});
      $(ec).click(executeCommand);

      $('.colors', colorsElement).append(ec);
    });
  }
});

$('.scene').each(function(index, sceneElement) {
  sceneElement = $(sceneElement);
  var sceneName = sceneElement.data('scene');
  if (scenes[sceneName] !== undefined) {

    var colorsElement = $('<div class="colors"></div>');
    var colors = scenes[sceneName].Palette;
    colors.forEach(function(co) {
      var ec = $('<div class="color"></div>');
      var color = typeof co === 'string' ? co : co.color;
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
  var key = $(this).data('scene');
  if (!$(this).hasClass('active')) {
    window.hueCommander.command('scene:' + key);
    activatedScene(key);
  } else {
    // deactivate all
    window.hueCommander.command('scene:stop');
    activatedScene('stop');
  }
  return false;
});


function executeCommand() {
  /*jshint validthis:true */
  var command = $(this).attr('href');
  window.hueCommander.command(command);
  activatedScene('stop');
  return false; 
}

$('.command').click(executeCommand); // buttons
//$('a.color').click(executeCommand);


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
  };
}

placeImage('picker', 'images/colorbox-100.png');
placeImage('picker2', 'images/colorwheel-100.png');
//placeImage('#picker', 'img/colorwhell2.png');

//$('#picker').click(function(e) { // click event handler
$('#picker, #picker2, #picker3').mousemove(getColor);
$('#picker, #picker2, #picker3').click(function(e, ev){
  var hex = getColor(e);
  window.hueCommander.command(hex);
  activatedScene('stop');
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
    var pixelColor = 'rgb('+pixel[0]+', '+pixel[1]+', '+pixel[2]+')';
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

/* ambient eye tab on show */

$('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
  log('in tab: ' + e.target.hash);
  trackEvent('click', 'tab', e.target.hash);

	if (e.target.hash === '#eye')
	{
    tryEnableEye();
	} else {
		ambieye.updateImage = false;
	}

  if (e.target.hash === '#search' && clPalettes === null)
  {
    initSearch();
  }

});

function tryEnableEye(){
  // check permissions for access to <all_tabs> 
  if (typeof(chrome) !== 'undefined'  && chrome.extension !== undefined) {
    log('loading as chrome extention popup');
    var background = chrome.extension.getBackgroundPage();
    background.hasAllUrlAccess(function() {
      ambieye.updateImage = true;
      $('#toggle-ambientweb').prop('checked', ambieye.on);
      var alreadyOn = ambieye.on;
      if (!alreadyOn) {
        alreadyOn = ambieye.run();
        $('#toggle-ambientweb').attr('disabled', !alreadyOn);   
      }
    });
  }
}


function updatePreviewColors(colors, image){
  $('.preview-box').each(function(index, value) {
    $(value).css('background-color', colors[index]);
  });

  $('#ambientpreview').attr('src', image);
}

$('#toggle-ambientweb').click(function(e){
  var active = $('#toggle-ambientweb').is(':checked');
	ambieye.on = active;
  if (active) {
    window.hueCommander.command('scene:Ambient');
  } else {
    window.hueCommander.command('scene:none');
  }
});


$('#close-app').click(function(){
  window.close();
});

$('#minimize-app').click(function(){
  chrome.app.window.current().minimize();
});