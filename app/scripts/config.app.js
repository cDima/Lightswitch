/* (C) 2014 Dmitry Sadakov */

'use strict';

/*exported config */

 var config = {
  //app: 'light' // light, ambieye, pro, web
  //app: 'ambieye',
  app: 'pro',
  //app: 'app',
  //app: 'web',
 };


config.ambieye = true;
config.scenes = true;
config.search = true;
config.tabs = true;
config.feedback = true;

switch(config.app) {
  case 'light':
      config.ambieye = false;
      config.scenes = false;
      config.search = false;
      config.tabs = false;
      break;
  case 'pro':
      config.ambieye = true;
      config.scenes = true;
      config.search = true;
      config.tabs = true;
      break;
  case 'app':
      config.ambieye = false;
      config.scenes = true;
      config.search = false;
      config.tabs = true;
      config.feedback = false;
      break;
  case 'ambieye':
      config.ambieye = true;
      config.scenes = false;
      config.search = false;
      config.tabs = true;
      break;
 }
