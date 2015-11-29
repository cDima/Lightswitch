/**
 * Dmitry Sadakov"s Philips Hue api wrapper popup page
 * Copyright (c) 2014 Dmitry Sadakov, All rights reserved.
 */

'use strict';
/*jshint multistr: true */

/*globals $:false, 
          chrome:false, 
          hueCommander:true, 
          hue:false, 
          sceneCommander:false, 
          Palettes:false, 
          scenes:false, 
          trackEvent:false,
          trackState,
          colorUtil:false,
          ga:false
          Ambient:false,
		      config:false,
          voice: true, 
          huevoice: true,
          findActors,
          activatedScene,
          voiceCommander,
          hueProxy
          
*/

/* exported voiceCmdFunc */

var heartbeat = null;// setInterval(hue.heartbeat, 1000); // dies with closed popup.

var sceneCmd = null;
var ambieye = null;
var heartbeatInterval = 10000;

var hubStartTime = new Date().getTime();


/* search */
var clPalettes = null;
var skip = 0;

var manualIpInputAnimation = null;

var gravity = {
  active: false,
  a: 0,
  b: 0,
  g: 0,
  x: 0,
  y: 0,
  z: 0,
  hue: 0,
  bri: 0, 
  sat: 255,
  north: 0,
  northhue: false,
  timer: null,
  delaySend: null
};


var hideCircleTimer = null;

var delayedSend = null;

var circle = $('#picker-circle');

$(document).ready(function(){

    initGlobals();


    // copyright
    $('footer time').text(new Date().getFullYear());


    initSlider();
    initSubscribe();
    initSearch();
    initManualBridge();
    initGroupCreation();
    initSceneCreation();

    // todo: safe to remove?
    if (window.hue.status === 'OK') {
      $('#lightswitch').prop('checked', window.hue.status.data);
    }

    $('.voice-control').hide();

    initLightswitch();
    initPalettes();
    initPickers();
    initGravity();

    initAmbientEye();
    initCloseMinimize();

    //$('footer a').click(handleSystemLink);
    $('.nativeclick').click(handleSystemLink);

});

// Wait for device API libraries to load
document.addEventListener('deviceready', onDeviceReady, false);
var isDevice = false;
// device APIs are available
//
function onDeviceReady() {
  //var ref = window.open('http://apache.org', '_blank', 'location=yes');
  // onclick="window.open('http://bit.ly/lightpro','_blank');"
  isDevice = true;
}


function handleSystemLink(a) {  
  /*jshint validthis:true */
  
  var url =  $(this).attr('href');
  //var url = a.target.href;
  //if (a.target.href === undefined) {
  //  url = $(a.target).attr('href');
  //}

  // windows 7 app defines winapp:
  if (window.winapp !== undefined){
    window.winapp.handleUrl(url);
    return false;
  }

  if (typeof navigator.app !== 'undefined' && navigator.app.loadUrl != undefined) {
    navigator.app.loadUrl(url, { openExternal:true });
  } else if (isDevice) { 
    window.open(url, '_system', 'location=yes');
  } else {
    window.open(url, '_blank', 'location=yes');
  }

  return false;
}

function amExtension(){
  return typeof (chrome) !== 'undefined'  && chrome.extension !== undefined;
}

function initGlobals(){


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
      /*
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
    */
      /* jshint ignore:end */
    }

    var background = null;
    if (window.externalBackground !== undefined) {
      log('loading as page with external background reference');
      background = window.externalhuebk;
    } else if (amExtension()) {
      log('loading as chrome extention popup');
      background = chrome.extension.getBackgroundPage();
    }

    $('#https-proxy').hide();

    if (location.protocol === 'https:') {
      /* todo: disfunctional probably */
      // page is secure, hue commander needs to use proxy to LPS.
      window.hueProxy = hueProxy();

      $('#https-proxy').show();

      ambieye = window.Ambient;
      window.hue = hue(window.jQuery, window.colors);
      sceneCmd = sceneCommander(window.jQuery, window.hue);
      window.hueCommander = hueCommander(window.jQuery, window.hue, colorUtil(), sceneCmd);
        
    } else if (background !== null) {
      window.hue = background.hue;
      sceneCmd = background.sceneCmd;
      ambieye = background.Ambient;
      huevoice = background.voice();
      hueCommander = background.hueCommander;
      window.hueProxy = hueProxy(window.hueCommander);
      tryEnableEye();
      ambieye.onUpdate(updatePreviewColors);
      $('#ambieyepermissions').click(initRequestEye);

    } else {
        log('loading as no chrome, running standalone');
        // same as in background.js:
        window.hue = hue(window.jQuery, window.colors);
        sceneCmd = sceneCommander(window.jQuery, window.hue);
        ambieye = window.Ambient;
        window.hueCommander = hueCommander(window.jQuery, window.hue, colorUtil(), sceneCmd);
        window.hueProxy = hueProxy(window.hueCommander);
        ambieye.onUpdate(updatePreviewColors);

        hueProxy.cmd('discover');
    }

    log('client: binding to status change.');

    requestStatus();

    $('.switch').hide();
    $('#controls').hide();
    $('.successsubscribe').hide();

    setInitialHeight();
}
 
var hueStatusRequestInterval = null;

function requestStatus(){
  window.hueProxy.cmd('getStatus', onHueStatusUpdate);
  if (!hueStatusRequestInterval) {
    hueStatusRequestInterval = setInterval(requestStatus, 500); 
  }
}

function onHueStatusUpdate(status) {
  if (status) {
    onStatus(status);
  }
}

function initRequestEye(){
  requestAmbientPermissionOnClient(function(granted) {
    if (granted) {
      tryEnableEye();
    } 
  });
}

function setInitialHeight() {

    if (config.app === 'web') {
      // do nothing
    } else if (config.app === 'app') {
      setHeight(160, 0);
    } else {
      setHeight(150, 0);
    }  
}

function initSlider(){

    //$('#brightness-control').rangepicker().on('slideStop', function(slideEvt){
    $('#brightness-control').slider().on('slideStop', function(slideEvt){
      var val = slideEvt.value;
      log('new brightness: ' + val);
      hueProxy.cmd('command', 'bri:' + val);
    });

}

function enableBrightness(on){
    //$('#toggle-ambientweb').attr('disabled', !on);
    //eyeEnabled(on);
}

function initSubscribe(){
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
}

function errorShake(id){
  $(id).addClass('error'); 
  $(id).addClass('shake');
  $(id).bind('oanimationend animationend webkitAnimationEnd', function() { 
     $(id).removeClass('shake');
  });
}
 
/* search */
function initSearch() {
    $('#colorsearch').keyup(function(e){
        if(e.keyCode === 13) {
          skip = 0;
          doSearch('top');
        }
    });

    $('button#search').click(function() {
      skip = 0;
      doSearch('top');
    });

    $('a[href="#search?top"]').click(function(){
      doSearch('top');
    });

    $('a[href$="#search?new"]').click(function(){
      doSearch('new');
    });

    $('a[href$="#search?random"]').click(function(){
      doSearch('random');
    });
}

function doSearch(type){
    $('#search-loading').show();
    if (type === 'random') {
      skip = 0;
    }
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
          doSearch(type, skip);
        });
        $('a[href$="#search?next"]').off('click');
        $('a[href$="#search?next"]').click(function(){
          skip += 7;
          doSearch(type, skip);
        });
    });
}


function executeHrefCommand() {
  /*jshint validthis:true */
  var command = $(this).attr('href');
  window.hueProxy.cmd('command', command);
  return false;
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
        .click(executeHrefCommand));
    });

    $('.palette-name', result).text(v.title);

    $(result).click(function(){
      scenes.RelaxedRandom.Palette = v.colors.map(function(n) { return '#' + n; });
      hueProxy.cmd('palette', scenes.RelaxedRandom.Palette);
      hueProxy.cmd('command', 'scene:RelaxedRandom');
      activatedScene('RelaxedRandom');
    });

    results.append(result);
  });  
}


function log(text) {
    console.log(text);
}

            

/* bridge ip */
function initManualBridge(){
    $('#manualbridgeip .input').keyup(function(e){
        if(e.keyCode === 13) {
          tryBridge();
        }
    });

    $('#manualbridgeip button').click(tryBridge);

    $('#manualbridgeip').hide();

}



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

function tryIP(ip, error){
  try{
    $.ajax({
        dataType: 'json',
        url: 'http://' + ip + '/api/123-bogus',
        success: function(){
          hueProxy.cmd('discover', ip);
        },
        error: error,
        timeout: 2000
      });
  } 
  catch(err) {
    // do nothing.
  }
}


function showManualBridge(){
  if (!$('#manualbridgeip').hasClass('fade3')) {
    $('#manualbridgeip').addClass('fade3').show();
    if (config.app === 'web') {
      // do nothing
    } else if (config.app === 'light' || config.app === 'app') {
      setHeight(170, 400);
    } else {
      setHeight(160, 400);
    }
    $('.switch').fadeOut(600, function() {
        $('#connectStatus').fadeIn(600);
    });
    hideControls();
  }

  setTimeout(function(){
    hueProxy.cmd('discover');
  }, 2000);
}

var cachedStatus = null;
function onStatus(status) {
    if (JSON.stringify(status) !== JSON.stringify(cachedStatus) ) {
        cachedStatus = status;
    } else {
      // same status, ignore onStatus call.
      return;
    }
    console.log('client: status changed - ' + status.status);
    
    if (status.status === 'BridgeNotFound') {
      onBridgeNotFound();
      
      return;
    } 
    if (manualIpInputAnimation !== null) {
      clearInterval(manualIpInputAnimation);
      manualIpInputAnimation = null;
    }

    if (status.status === 'OK') {
        onBridgeConnected(status);
    } else if (status.status === 'init' || status.status === 'Authenticating') {
      onBridgeInit(status);
    } else {
      onBridgeDisconnected(status);
    }
}

function stopHeartbeat(){
  if (heartbeat !== null) {
    log('Clearing heartbeat');
    clearInterval(heartbeat);
  }
}

function startHeartbeat() {
  log('Starting heartbeat');
  heartbeat = setInterval(hueHeartbeat, heartbeatInterval);
}

function hueHeartbeat() {
  hueProxy.cmd('heartbeat');
}

function onBridgeNotFound(status) {
  $('#connectStatus').html('<div class="intro-text"><a class="amazonlink nativeclick" href="http://bit.ly/lightswitchhue" target="_blank">Philips Hue bridge</a> not found.</div>');
  manualIpInputAnimation = setTimeout(showManualBridge, 2000);
  stopHeartbeat();
}

function onBridgeConnected(status){

  $('#connectStatus').html('<div class="intro-text">' + status.text + '</div>');
  $('#manualbridgeip').hide();
  $('#https-proxy').hide();

  $('#lightswitch').prop('disabled', false);

  // time to screen
  var hubEndTime = new Date().getTime();
  var timeSpent = hubEndTime - hubStartTime;

  log('Tracking event OK');
  ga('send', 'timing', 'status-ok', 'Ping hub', timeSpent, 'Philips Hue Hub');

  $('#connectStatus').fadeOut(600, onSuccessfulInit);
  $('#lightswitch').prop('checked', status.data);

  stopHeartbeat();
  startHeartbeat();
}

function onBridgeInit(status) {
  $('#connectStatus').html('<div class="intro-text">' + status.text + '</div>');
}

function onBridgeDisconnected(status){
  stopHeartbeat();
        
  log('Hiding elements, bridge not found');
  $('#connectStatus').html('<div class="intro-text">' + status.text + '</div>');
  $('#lightswitch').prop('disabled', true);
  $('#lightswitch').prop('checked', false);

  //$('body').removeClass('on');
  $('#controls').fadeOut(600);
  $('.tab-content').hide();
  setInitialHeight();

  $('.switch').fadeOut(600, function() {
      $('#connectStatus').fadeIn(600);
  });
}

function onSuccessfulInit(){
  if (config.tabs === true) {
    if (config.app === 'web') {
      // do nothing
    } if (config.app === 'app') {
      setHeight(445, 400);
    } else {
      setHeight(435, 400);
    }
  }
  $('.switch').fadeIn(600, showControls);
    
  //$('body').addClass('on');
  requestSettings();

  // successfully started, unless All group was not set correctly, then no actors are set.
  //var autostartScene = $.QueryString.autostartscene;

  var lochash    = location.hash.substr(1),
      autostartScene = lochash.substr(lochash.indexOf('autostartscene='))
                    .split('&')[0]
                    .split('=')[1];
  if (autostartScene && scenes[autostartScene] !== undefined) {
    $('.nav-tabs a[href="#moods"]').tab('show');
    activateSceneByKey(autostartScene);
  }
}

function setHeight(height, transitionTime) {
  //height = $('wrapper').height();
  $('html').animate({height: height}, transitionTime);
  $('body').animate({height: height}, transitionTime);
  if (typeof chrome !== 'undefined' && chrome.app && chrome.app.window) {
    setTimeout(function(){
      if (chrome.app.window !== undefined) {
        var wind = chrome.app.window.current();
        wind.innerBounds.height = height;
        wind.innerBounds.width = 320;
      }
    }, 500); // wait until animations are done.
  }
}

function updateActorUI(actorId) {
  
  $('button').removeClass('active');
  $('button[id=' + actorId + ']').addClass('active');

  hueProxy.cmd('getActorStates', updateActorControls);
}

function updateActorControls(actors) {
  var on = false;
  var bri = 0;
  var names = '';
  $.each(actors, function(key, lamp){
    on = on || (lamp && lamp.state && lamp.state.on && lamp.state.reachable);
    if (lamp && lamp.state && (lamp.state.bri > bri)) {
      bri = lamp.state.bri;
    }
    names = names + ', ' + lamp.name;
  });
 
  $('#lightswitch').prop('checked', on);
  enableBrightness(on);
  $('#brightness-control').val(bri);
  $('#brightness-control').change(); // update ui

  names = names.substring(2);
  $("#config-actor").text('Actors: ' + names);
}

function initGroupCreation() {
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
      $('#group-name input').val('');
      hueProxy.cmd('createGroup', { name: name, lampIds: lampIds });
      // reset
      delayedRefresh();
    });
}

function initSceneCreation() {
  $('#create-scene').hide();
  $('#make-scene').click(function(){
    $('#create-scene').slideToggle();
    return false;
  });


  $('#add-scene').click(function(){
    var name = $('#scene-name input').val();
    if (name === '') {
      errorShake('#scene-name');
      return;
    }
    $('#scene-name').removeClass('error');
    $('#scene-name input').val('');
    hueProxy.cmd('createScene', name);
    // reset
    delayedRefresh();
  });
}

function createActorBtn(key,name){
  var btn = $('<button type="button" class="actor"></button>').text(name).attr('id', key);
  return btn;
}

function actorClick(event){
  var key = event.target.id;
  $('button').removeClass('active');
  $('button[id=' + key + ']').addClass('active');
  setActor(key);
  return false;
}

function flashLamp(event){
  var key = event.target.id;
  hueProxy.cmd('flash', key);
  return false;
}

function setActor(key) {
  hueProxy.cmd('setActor', key, updateActorUI); 
}

function delayedRefresh(){
  setTimeout(function(){
    hueProxy.cmd('refresh');
    setTimeout(requestSettings, 2000);
  }, 2000);
}

function removeGroupClick(){
  /*jshint validthis:true */
  var key = this.id;
  hueProxy.cmd('removeGroup', key);
  delayedRefresh();
  
  $(this).hide('slow');
}

function activateSceneClick(event){
  var key = event.target.id;
  activateSceneByKey(key);
}

function activateScheduleClick(event){
  var key = event.target.id;
  activateScheduleByKey(key);
}


function activateSceneByKey(key){
  hueProxy.cmd('command', 'scene:' + key, activatedScene);
}

function activateScheduleByKey(key){
  hueProxy.cmd('command', 'schedule:' + key, activatedSchedule);
}

function toggleActiveClick(event){
  $(event.target).toggleClass('active');
}

function requestSettings(){
  hueProxy.cmd('getState', null, fillSettings); // will get previous state
}

function fillSettings(state) {
    //var state =window.hueProxy.getState();
    // safari ios compatibility issues:
    var i = 0,
        key = null, 
        value = null,
        btn = null, 
        selector = null;

    if (!state) {
      //setTimeout(requestSettings, 1000); // reset UI in a bit.
      return;
    }

    if (state.lights !== null && state.lights !== undefined) {
        trackState('config', state);        
        /*
        trackEvent('settings', 'init', 'version', state.config.swversion);
        trackEvent('settings', 'init', 'ip', state.config.ipaddress);
        trackEvent('settings', 'init', 'portal', state.config.portalconnection);
        trackEvent('settings', 'init', 'zigbeechannel', state.config.zigbeechannel);
        trackEvent('settings', 'init', 'lightcount', state.lights.length);
        trackEvent('settings', 'init', 'groupcount', state.groups.length);
        trackEvent('settings', 'init', 'scenecount', state.scenes.length);
        */

        $('#lamps').empty();
        $('#group-add-lamps').empty();
        $('#groups').empty();
        $('#scenes').empty();
        $('#schedules').empty();
        
        $('#group-remove').empty();

        //$.each(state.lights, function(key, value) {
        for(i in state.lights) {
            key = i;
            value = state.lights[i];
          
            if (value.state === undefined) {
              continue;
            }

            //log('Lights: ' + key  + ', name: ' + 
            //  value.name + ', reachable: ' + 
            //  value.state.reachable + 
            //  ', on: ' + value.state.on);
            btn = createActorBtn(key, value.name);
            btn.click(actorClick);
            btn.click(flashLamp);
            $('#lamps').append(btn);
            
            selector = createActorBtn(key, value.name);
            selector.addClass('lamp-select');
            selector.click(flashLamp);
            selector.click(toggleActiveClick);
            $('#group-add-lamps').append(selector);
        }


        var allOn = false;
        var lightsReachable = [];

        for(i in state.lights) {
            key = i;
            value = state.lights[i];
            if (value.state === undefined) {
              continue;
            }
            if (value.state.reachable) {
                lightsReachable.push(value);
            }
            allOn = allOn || value.state.reachable || value.state.on;
        }
        
        if (typeof(chrome) !== 'undefined'  && chrome.browserAction !== undefined) {
          var path = 'images/lightswitch.logo.on.128.png';
            if (allOn)  {
                if (config.app === 'eye') {
                  path ='images/ambieye-ico-on.png';
                } else {
                  path ='images/lightswitch.logo.on.128.png';
                }
            } else {
                if (config.app === 'eye') {
                  path ='images/ambieye-ico.png';
                } else {
                  path ='images/lightswitch.logo.128.png';
                }
            }
            chrome.browserAction.setIcon({path:path});
        }

        for(i in state.groups) {
          key = i;
          value = state.groups[i];
          //log('Groups: ' + key  + ', name: ' + value.name + ', # lights: ' + value.lights.length);
          displayGroup(key, value.name, key !== '0');
        }

        for(i in state.scenes) {
          key = i;
          value = state.scenes[i];
        
            //log('Scenes: ' + key  + ', name: ' + value.name + ', # lights: ' + value.lights.length);

            if (value.name.endsWith(' on 0'))
            {
              var normalName = value.name.substring(0,value.name.length - ' on 0'.length);
              if ($('#scenes button:contains("' + normalName + '")').length === 0) {
                btn = $('<button type="button" class="savedscene"></button>').text(normalName).attr('id', key);
                btn.click(activateSceneClick);
                $('#scenes').append(btn);
              }
            } 
        }


        for(i in state.schedules) {
          key = i;
          value = state.schedules[i];  

          var btn = $('<button type="button" class="schedule savedscene"></button>').text(value.description + ' (' + value.name + ')').attr('id', key);
          btn.click(activateScheduleClick);
          $('#schedules').append(btn);
        }

        

        $('#bridge #config-ip').text('IP: ' + state.config.ipaddress + ' (v' +  state.config.apiversion + ')');
        $('#bridge #config-swversion').text('Version: ' + state.config.swversion);
        $('#bridge #config-portal').text('Portal: ' + state.config.portalconnection);
        $('#bridge #config-zigbeechannel').text('Zigbee: ' + state.config.zigbeechannel);

        log('Config: ' + state.config.name +
            ', version: ' + state.config.swversion +
            ', ip: ' + state.config.ipaddress +
            ', portal: ' + state.config.portalconnection +
            ', zigbeechannel:' + state.config.zigbeechannel);

        if (state.actorId == null) {
          hueProxy.cmd('setActor', state.actorId || 'group-0', updateActorUI); 
        } else {
          updateActorUI(state.actorId);
        }
    }
}

function displayGroup(key, name, removable) {
  var btn = createActorBtn('group-' + key, name);
  btn.click(actorClick);
  $('#groups').append(btn);

  if (removable) {
    var selector = createActorBtn(key, name);
    selector.click(removeGroupClick);
    selector.append('&nbsp;');
    selector.append($('<li class="fa fa-remove"></li>'));
    $('#group-remove').append(selector);
  }
}

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
    $('#connectStatus').hide(0);
    $('.tab-content').hide(0);
    if (config.tabs === true) {
      $('#controls').fadeIn(600, showTabContent);
    }
}
function showTabContent() {
    $('.tab-content').fadeIn(600, initVoice);
}

function initLightswitch() {
    $('#lightswitch').click(function(e){
        var turnOn = $('#lightswitch').is(':checked');
        enableBrightness(turnOn);
        window.hueProxy.cmd('command', turnOn ? 'on' : 'off');
        trackEvent(e.target.id, 'clicked');
    });
}

function initPalettes() {
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
          $(ec).click(executeHrefCommand);

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
          $(ec).attr('title', typeof co.name === 'undefined' ? color : co.name);
          colorsElement.append(ec);
        });

        var e = $('<div class="scene-name"></div>');
        e.text(sceneName);

        sceneElement.append(colorsElement);    
        sceneElement.append(e);
      } 
    });

    $('.scene').click(function(element){
      var key = $(this).data('scene');
      if (!$(this).hasClass('active')) {
        hueProxy.cmd('command', 'scene:' + key, activatedScene);
      } else {
        // deactivate all
        hueProxy.cmd('command', 'scene:stop', activatedScene);
      }
      return false;
    });


    $('.command').click(executeHrefCommand); // buttons

}



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


/* gravity */
function round(n){
  var num = n.toFixed(2);
  if (n >= 0) {
    num = '+' + num;
  } 
  return num;
}

function initGravity() {
    $('.north-enabled').hide();
    $('.ground-enabled').hide();

    $('#toggle-gravity').click(function(e){
      var active = $('#toggle-gravity').is(':checked');
      gravity.active = active;
      $('.north-enabled').toggle(active);
      if (!active || gravity.timer !== null) {
        clearInterval(gravity.timer);
        gravity.timer = null;
      } else {    
        //gravity.timer = setInterval(gravityUpdate, 300);
        gravity.timer = setTimeout(gravityUpdate, 300);
      }
    });
    $('#toggle-north').click(function(e){
      var active = $('#toggle-north').is(':checked');
      gravity.northhue = active;
    });


    $(window).on( 'orientationchange', function(e){
      $('#orien').text(window.orientation);
      if (window.orientation === '') {
        $('#orien').text('0');
      }
      log('orientation: ' + window.orientation);
    }); 
}

function enableGravity(on) {
  if (on) {
    window.ondeviceorientation = onDeviceOrientation;
    window.ondevicemotion = onDeviceMotion;
  } else {
    window.ondeviceorientation = null;
    window.ondevicemotion = null;
  }
}

function onDeviceOrientation(e) {
  if (e.beta === null) {
    $('.north-enabled').hide();
    return; // windows has beta null.
  }
  $('#orienA').text(round(e.alpha || 0));
  $('#orienB').text(round(e.beta));
  $('#orienG').text(round(e.gamma));

  gravity.north = e.webkitCompassHeading || e.alpha || 0;
  /*if (e.webkitCompassHeading !== undefined) {
    //var n = e.webkitCompassHeading - 180;
    //if (n < 0) {
    //  n += 360;
    //}
    gravity.north = e.webkitCompassHeading; 
  } else {
    gravity.north = e.alpha || 0;
  }*/
  
  $('#north').text(gravity.north);
  gravity.a = e.alpha;
  gravity.b = e.beta;
  gravity.g = e.gamma;
  
}

function onDeviceMotion (event){
  if (event.accelerationIncludingGravity.x === null) {
    $('.ground-enabled').hide();
    return; // windows has beta null.
  } else {
    $('.ground-enabled').show();
  }

  var accelerationX = event.accelerationIncludingGravity.x;
  var accelerationY = event.accelerationIncludingGravity.y;
  var accelerationZ = event.accelerationIncludingGravity.z;
  var deg = window.orientation;
  if (deg === 90) {
    // x is -9
    var y = accelerationY;
    accelerationY = accelerationX;
    accelerationX = -y;
  } else if (deg === -90) {
    // x is +9
    var te = accelerationY;
    accelerationY = -accelerationX;
    accelerationX = te;
  }
  // y is usually -9
  $('#varx').text(round(accelerationX));
  $('#vary').text(round(accelerationY));
  $('#varz').text(round(accelerationZ));

  gravity.x = accelerationX;
  gravity.y = accelerationY;
  gravity.z = accelerationZ;

}

function gravityUpdate(){
  if (gravity.active) {
    var yCoef = null;
    var xCoef = null;
    if (gravity.a === 0) {
      // mac books?
      yCoef = Math.abs(gravity.y);
    } else {
      // iphones
      yCoef = (10 - Math.abs(gravity.y));
    }

    xCoef = gravity.x;

    if (!gravity.northhue){
      gravity.sat = Math.round((yCoef / 10) * 255);
      gravity.hue += Math.round((xCoef / 10) * 65535 * 0.05);
      gravity.bri = 255; // max 
    } else {
      gravity.sat = Math.round((yCoef / 10) * 255);
      gravity.hue = Math.round((gravity.north / 360) * 65535);
      gravity.bri = 255;//Math.round((xCoef / 10) * 255);
    }  
    while (gravity.hue < 0) {
      gravity.hue += 65535;
    }
    while (65535 < gravity.hue) {
      gravity.hue -= 65535;
    }


    var json = {
      hue: gravity.hue,
      sat:gravity.sat,
      bri: gravity.bri
    };

    $('#hue').text(round(gravity.hue));
    $('#sat').text(round(gravity.sat));
    $('#bri').text(round(gravity.bri));

    var cmd = JSON.stringify(json);
    log('Setting gravity:  ' + cmd);
    hueProxy.cmd('command', cmd);

    var color = 'hsl('+
      Math.round(360 * (json.hue / 65535)) +', '+
      Math.round(100 * json.sat / 255)+'%, '+
      Math.round(100 - (50 * json.bri / 255))+'%)';
    $('#rgbVal').css({backgroundColor: color});

    activatedScene('stop');

    setTimeout(gravityUpdate, 500);
  }
}

function initPickers() {

    placeImage('picker', 'images/colorbox-100.png');
    placeImage('picker2', 'images/colorwheel-100.png');
    //placeImage('#picker', 'img/colorwhell2.png');

    //$('#picker').click(function(e) { // click event handler
    $('#picker, #picker2, #picker3').on({
      'touchmove': throttleCmd,
      'mousemove': touchMove,
      'mouseover': mouseStart,
      'touchstart': touchStart,
      'mouseout': touchOut
      //'touchout': touchOut
    });
    $('#picker, #picker2, #picker3').click(throttleCmd);

    circle.hide();
}

var currentHex = null;
function throttleCmd(e){ 
    currentHex = getColor(e);
    if (delayedSend !== null) {
      clearTimeout(delayedSend);
    }
    if (hideCircleTimer !== null) {
      clearTimeout(hideCircleTimer); 
    }
    delayedSend = setTimeout(onDelaySend, 500);
}

function onDelaySend(){
  hueProxy.cmd('command', currentHex);
  activatedScene('stop');
  hideCircleDelayed();
}

// hide circle delayed
function hideCircleDelayed() {  
  if (hideCircleTimer !== null) {
    clearTimeout(hideCircleTimer); 
  }
  hideCircleTimer = setTimeout(hideCircle, 1000);
}

function hideCircle() {
  circle.stop(true).fadeOut();
}

function touchOut(e){
  getColor(e);
  //hideCircleDelayed();
  hideCircleTimer = null;
  hideCircle();
  console.log('touchout');
}
function touchMove(e){
  getColor(e);
}

function mouseStart(e){
  if (!circle.is(':visible') || circle.is(':animated')) {
    circle.stop(true).show().fadeIn();
  }
}
function touchStart(e){
  mouseStart(e);
  throttleCmd(e);
}

function getColor(e){

    e.preventDefault();
    // get coordinates of current position
    var canvasOffset = $(e.target).offset();

    if (e.pageX === undefined) { 
      e = e.originalEvent; 
    }

    var touches = e.changedTouches;
    if(touches === undefined) {
      touches = e.targetTouches;
    }

    if (e.pageX === undefined) { 
      e = e.originalEvent; 
    }
    log('touch event e.pageX:' + e.pageX);
    log('touch event touches:' + touches);

    var x = e.pageX;
    var y = e.pageY;

    if (touches !== undefined && touches.length > 0) {
      x = touches[0].pageX;
      y = touches[0].pageY;
      log('touches[0]:' + touches[0]);
    }


    var canvasX = Math.floor(x - canvasOffset.left);
    var canvasY = Math.floor(y - canvasOffset.top);
    var pixel = null;
    
    var ctx = document.getElementById(e.target.id).getContext('2d');
    var imageData = ctx.getImageData(canvasX, canvasY, 1, 1);
    pixel = imageData.data;

    // show picker circle
    
    // hide on white
    if (pixel[0] === 0 && pixel[1] === 0 && pixel[2] === 0) {
      //circle.fadeOut();
      //hideCircleDelayed();
      return;
    }
    var pixelColor = 'rgb('+pixel[0]+', '+pixel[1]+', '+pixel[2]+')';
    //$('.preview').css('backgroundColor', pixelColor);

    circle.css({ 
          backgroundColor: pixelColor, 
          //top: e.pageY - 50,
          //left: e.pageX -10
          top: y - 50,
          left: x -10
        });

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

function initAmbientEye() {
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
      
      circle.hide();
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
        doSearch('new');
      }

      enableGravity(e.target.hash === '#colors');

    });

    $('#toggle-ambientweb').click(toggleAmbience);
    $('#toggle-eye-brightness').click(toggleEyeBrightness);
    $('#toggle-eye-primary').click(toggleEyePrimary);
    $('#eye-mode-group button').click(toggleEyeMode);

    $('#eye-mode-group button').removeClass('active');
    $('#eye-mode-group #' + ambieye.mode).addClass('active');
}


function toggleAmbience(e) {
  var active = $('#toggle-ambientweb').is(':checked');
  ambieye.on = active;
  if (active) {
    hueProxy.cmd('command', 'scene:Ambient', activatedScene);
  } else {
    hueProxy.cmd('command', 'scene:none', activatedScene);
  }
}

function toggleEyeBrightness(e) {
  var active = $('#toggle-eye-brightness').is(':checked');
  ambieye.changeBrightness = active;
}

function toggleEyePrimary(e) {
  var active = $('#toggle-eye-primary').is(':checked');
  ambieye.enablePrimary = active;
}

function toggleEyeMode(e) {
  ambieye.mode = e.currentTarget.id;
  $('#eye-mode-group button').removeClass('active');
  $('#eye-mode-group #' + ambieye.mode).addClass('active');
}

function tryEnableEye(){
  // check permissions for access to <all_tabs> 
  if (amExtension()) {
    log('loading as chrome extention popup');
    hasAllUrlAccess(function(granted) {
      ambieye.updateImage = granted;
      $('#ambieyepermissions').toggle(!granted);
      $('#toggle-ambientweb').prop('checked', ambieye.on);
      eyeEnabled(granted);
      var alreadyOn = ambieye.on;
      if (!alreadyOn) {
        alreadyOn = ambieye.run();
      }
    });
  } else {
    $('#' + ambieye.mode).button('toggle');
    eyeEnabled(false);
  }
}

function eyeEnabled(granted){
  $('#toggle-ambientweb').attr('disabled', !granted);
  $('#toggle-eye-brightness').attr('disabled', !granted);
  $('#toggle-eye-primary').attr('disabled', !granted);
  $('#eye-mode-group button').removeClass('active');
  $('#eye-mode-group #' + ambieye.mode).addClass('active');
  $('#toggle-eye-brightness').prop('checked', ambieye.changeBrightness);
  $('#toggle-eye-primary').prop('checked', ambieye.enablePrimary);
}

function hasAllUrlAccess(success, mayRequest){
  chrome.permissions.contains({
        permissions: ['tabs'],
        origins: ['<all_urls>']
      }, function(granted) {
        success(granted);
      });
}

function requestAmbientPermissionOnClient(callback){
    // Permissions must be requested from inside a user gesture, like a button's click handler.
    chrome.permissions.request({
      permissions: ['tabs'],
      origins: ['<all_urls>']
    }, function(granted){
      if (granted) {
        callback(granted);
      } else {
        callback(granted);
      }

    });
}

function updatePreviewColors(colors, image){
  $('.preview-box').each(function(index, value) {
    if (colors[index]) {
      $(value).css('background-color', colors[index].color);
    }
  });

  $('#ambientpreview').attr('src', image);
}

function initCloseMinimize() {
    $('#close-app').click(function(){
      window.close();
    });

    $('#minimize-app').click(function(){
      chrome.app.window.current().minimize();
    });
}


function initVoice() {
  if (huevoice === null) {
    huevoice = voice(hue);
  }
  if (huevoice.notAvailable() || config.voice === false) {
    $('.voice-control').hide();
  } else {
    $('.voice-control').fadeIn();
  }

  $('#voice-mic').click(toggleVoice);
}


function toggleVoiceOnWebpage() {
  var mic = $('#voice-mic');
  mic.toggleClass('active');
  var parser = voiceCommander(voiceCmdFunc);
  if (mic.hasClass('active')) {
    if (huevoice.recognize(parser.react, voiceError, voiceEnd)) {
      huevoice.speak('Enabling voice commands');
      huevoice.start();
    }
  } else {
    huevoice.speak('Voice commands disabled');
    huevoice.stop();
  }
}

function voiceError(err){
  var mic = $('#voice-mic');
  mic.removeClass('active');
  console.error(err);
  //sendToMothership({voiceErr: err});
}

function voiceEnd(){
  var mic = $('#voice-mic');
  mic.removeClass('active');
  console.log('voice end');
  //sendToMothership({voiceEnd: true});
}

function toggleVoice() {
  if (amExtension()) {
      //launch window if not launched
    chrome.tabs.create({
      url: 'https://ambieye.com/voice.html'
    }, function (tab){
      // tab id
    });
    return false;
  } else {
    // from page, same page.
    toggleVoiceOnWebpage();
  }
  return false;
}
    
function voiceCmdFunc(text, match, action, actor) {
  try {
    $('#voice-feedback').html('');
    $('#voice-feedback').html('<i class="voice-fade ">' + text + '</i>');
    //voiceFeedback(text,match, action, actor);

    if (actor !== undefined) {
      var actorId = findActors(actor);
      if(actorId !== null) {
        setActor('group-' + actorId);
      } else {
        huevoice.speak('Cannot find the ' + actor + ' lights');
        return;
      } 
    }
    // canExecute(action)
    if ($.inArray(action, ['on','off','dim','dim down','up','brighten','lighten','down','light up']) >= 0 || action.match('^scene:')) {
      window.hueProxy.cmd('command', action);
    }
  } catch (err){
    console.log(err);
    // nothing
  }
}


