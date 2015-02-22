/* (C) 2014 Dmitry Sadakov */

'use strict';

/*global config:true */

config.ambieye = true;
config.scenes = true;
config.search = true;
config.tabs = true;
config.feedback = true;
config.voice = true;

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
  case 'web':
      config.ambieye = false;
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
  case 'eye':
      config.ambieye = true;
      config.scenes = false;
      config.search = false;
      config.tabs = true;
      break;
  case 'win':
      config.ambieye = false;
      config.scenes = true;
      config.search = true;
      config.tabs = true;
      config.voice = false;
      break;
 }

