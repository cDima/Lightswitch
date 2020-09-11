/**
 *  Copyright 2015 Dmitry Sadakov. All rights reserved.
 */

'use strict';

// This gulpfile makes use of new JavaScript features.
// Babel handles this without us having to do anything. It just works.
// You can read more about the new JavaScript features here:
// https://babeljs.io/docs/learn-es2015/

import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import zip from 'gulp-zip';
import gulpLoadPlugins from 'gulp-load-plugins';

import rename from 'gulp-rename';
import yargs from 'yargs';
import gulpif from 'gulp-if';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;


// Concatenate and minify JavaScript.

var libs = [
  './app/scripts/libs/babel-polyfill.min.js',
  './app/scripts/libs/jquery-1.11.1.min.js',
  './app/scripts/libs/bootstrap.min.js',
  './app/scripts/libs/moment.min.js',
  './app/scripts/libs/materialize.min.js',
];
var popupScr = [
  './app/scripts/libs/bootstrap-slider.min.js',
  './app/scripts/libs/color-thief.min.js',
  './app/scripts/libs/extensions.js',
  './app/scripts/ajaxlite.js',
  './app/scripts/config.js',
  './app/scripts/config.features.js',
  './app/scripts/libs/ga.js',
  './app/scripts/libs/storage.js',
  './app/scripts/libs/uservoice.js',
  './app/scripts/libs/colors.js',
  './app/scripts/libs/palettes.js',
  './app/scripts/libs/sequence.js',
  './app/scripts/libs/ambient.js',
  './app/scripts/libs/scenes.js',
  './app/scripts/libs/sceneCommander.js',
  //'./app/scripts/libs/testData.js',
  './app/scripts/libs/hueTime.js',
  './app/scripts/libs/hueDiscover.js',
  './app/scripts/libs/hue.js',
  './app/scripts/libs/colorUtil.js',
  './app/scripts/libs/hueCommander.js',
  './app/scripts/libs/voice.js', 
  './app/scripts/libs/hueProxy.js',
  './app/scripts/popup.js',

];

var backgroundScr = [
  //'./app/scripts/libs/babel-polyfill.min.js',
  './app/scripts/libs/jquery-1.11.1.min.js',
  './app/scripts/libs/extensions.js',
  './app/scripts/ajaxlite.js',
  './app/scripts/config.js',
  './app/scripts/config.features.js',
  './app/scripts/libs/ga.js',
  './app/scripts/libs/color-thief.min.js',
  './app/scripts/libs/storage.js',
  './app/scripts/libs/colors.js',
  './app/scripts/libs/palettes.js',
  './app/scripts/libs/sequence.js',
  './app/scripts/libs/ambient.js',
  './app/scripts/libs/scenes.js',
  './app/scripts/libs/sceneCommander.js',
  //'./app/scripts/libs/testData.js',
  './app/scripts/libs/hueDiscover.js',
  './app/scripts/libs/hue.js',

  './app/scripts/libs/colorUtil.js',
  './app/scripts/libs/hueCommander.js',

  './app/scripts/libs/voice.js',
  './app/scripts/libs/colorUtil.js',
  './app/scripts/libs/hueCommander.js',
  './app/scripts/background.js',
];
var tvosScr = [
  './app/scripts/libs/browser-polyfill.min.js',
  './app/scripts/libs/extensions.js',
  './app/scripts/ajaxlite.js',
  './app/scripts/libs/storage.js',
  './app/scripts/libs/hueDiscover.js',
  //'./app/scripts/libs/colors.js',
  //'./app/scripts/libs/palettes.js',
  //'./app/scripts/libs/sequence.js',
  //'./app/scripts/libs/scenes.js',
  //'./app/scripts/libs/sceneCommander.js',
  './app/scripts/libs/hue.js',
  './app/scripts/libs/colorUtil.js',
  './app/scripts/libs/hueCommander.js',
  './app/scripts/libs/hueProxy.js',
  //'./app/scripts/popup.js'
  './app/scripts/tvos/Presenter.js',
  './app/scripts/tvos/ResourceLoader.js',
  './app/scripts/tvos/application.js'
];

// Lint JavaScript
gulp.task('lint', () =>
  gulp.src([
    'app/scripts/**/*.js',
   '!app/scripts/**/*.min.js'
   ])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failOnError()))
);

gulp.task('zip', function () {
    return gulp.src('dist/**')
        .pipe(zip('dist.zip'))
        .pipe(gulp.dest('./'));
});
// Optimize images
gulp.task('images', () =>
  gulp.src('app/images/**/*')
    .pipe(gulp.dest('dist/images'))
    .pipe($.size({title: 'images'}))
);

// Copy all files at the root level (app)
gulp.task('copy', () =>
  gulp.src([
    'app/*',
    '!app/*.html',
    'node_modules/apache-server-configs/dist/.htaccess',
    '!app/bower_components/**'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'))
    .pipe($.size({title: 'copy'}))
);

// Copy web fonts to dist
gulp.task('fonts', () =>
  gulp.src(['app/fonts/**'])
    .pipe(gulp.dest('dist/fonts'))
    .pipe($.size({title: 'fonts'}))
);

// Compile and automatically prefix stylesheets
gulp.task('styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    'app/styles/**/*.scss',
    'app/styles/**/*.css'
  ])
    .pipe($.newer('.tmp/styles'))
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    // Concatenate and minify styles
    //.pipe($.if('*.css', $.minifyCss()))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/styles'))
    .pipe($.size({title: 'styles'}));
});

gulp.task('scriptsPopup', () => {
    return gulp.src(popupScr)
    //.pipe($.newer('.tmp/scripts'))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe($.concat('main.min.20160220.js'))
    
    // Usage: gulp pro --prod // this will uglify.
    .pipe(gulpif(yargs.argv.prod,$.uglify({preserveComments: 'some'})))    
    //.pipe($.uglify({preserveComments: 'some'}))
    // Output files
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe($.size({title: 'scriptsPopup'}))
});

gulp.task('scripts-compile', () => {
  return gulp.src(libs)
    .pipe($.concat('libs.min.20160220.js'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe($.size({title: 'scripts-libs'}));

});
gulp.task('scripts-background', () => {

  return gulp.src(backgroundScr)
  //.pipe($.newer('.tmp/scripts'))
  .pipe($.sourcemaps.init())
  .pipe($.babel())
  .pipe($.sourcemaps.write())
  .pipe(gulp.dest('.tmp/scripts'))
  .pipe($.concat('background.min.js'))
  // Output files
  .pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest('dist/scripts'))
  .pipe(gulp.dest('.tmp/scripts'))
  .pipe($.size({title: 'scripts-bk'}));

});
gulp.task('scripts', gulp.series(
    'scripts-compile',
    'scriptsPopup',
    'scripts-background'
  )
);

gulp.task('scripts-tvos', () => {
  //return;
  gulp.src(tvosScr)
    .pipe($.newer('.tmp/scripts'))
    //.pipe($.sourcemaps.init())
    .pipe($.babel())
    //.pipe($.sourcemaps.write())
    .pipe($.concat('tvos.min.js'))
    // Usage: gulp pro --prod // this will uglify.
    //.pipe(gulpif(yargs.argv.prod,$.uglify({preserveComments: 'some'})))    
    //.pipe($.uglify({preserveComments: 'some'}))
    // Output files
    //.pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe($.size({title: 'scripts-tvos'}))
  }
);

// Scan your HTML for assets & optimize them
gulp.task('html', () => {
  const assets = $.useref.assets({searchPath: '{.tmp,app}'});

  return gulp.src([
    'app/**/*.html',
    '!app/bower_components/**'
    ])
    .pipe(assets)
    // Remove any unused CSS
    // Note: If not using the Style Guide, you can delete it from
    //       the next line to only include styles your project uses.
    /*
    Note: not used since dynamic css styles are stripped but used from JS.
    .pipe($.if('*.css', $.uncss({
      html: [
        'app/index.html'
      ],
      // CSS Selectors for UnCSS to ignore
      ignore: [
        /.navdrawer-container.open/,
        /.app-bar.open/
      ]
    })))
    */
    // Concatenate and minify styles
    // In case you are still using useref build blocks
    .pipe($.if('*.css', $.minifyCss()))
    .pipe(assets.restore())
    .pipe($.useref())

    // Minify any HTML
    .pipe($.if('*.html', $.minifyHtml()))
    // Output files
    .pipe(gulp.dest('dist'))
    .pipe($.size({title: 'html'}));
});

// Clean output directory
gulp.task('clean', cb => del(['.tmp', 'dist/**/*', 'dist.zip', '!dist/.git'], {dot: true},
  cb));

gulp.task('browser-sync', () => {
  browserSync.init({
    notify: false,
    // Customize the Browsersync console logging prefix
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['.tmp', 'app'],
    port: 3000
  });

  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/styles/**/*.{scss,css}'], gulp.series('styles', reload));
  gulp.watch(['app/scripts/**/*.js'], gulp.series('scriptsPopup', reload));
  gulp.watch(['app/images/**/*'], reload);

  });

// Watch files for changes & reload
gulp.task('serve', gulp.series(
  gulp.parallel(
    'scripts',
    'styles'), 
    'browser-sync'));

function replaceConfigAndManifest(projectName) {
	var config = 'app/scripts/config.' + projectName + '.js';
	console.log('Using config: ' + config);
	gulp.src(config)
    .pipe(rename('config.js'))
  	.pipe(gulp.dest('app/scripts'));
   gulp.src('app/manifests/manifest.' + projectName + '.json')
    .pipe(rename('manifest.json'))
  	.pipe(gulp.dest('app'));
   runSequence('serve:dist');
}
// Build and serve the output from the dist build
gulp.task('app', function() {
   replaceConfigAndManifest('app');
});
gulp.task('eye', function() {
   replaceConfigAndManifest('eye');
});
gulp.task('light', function() {
   replaceConfigAndManifest('light');
});
gulp.task('pro', function() {
   replaceConfigAndManifest('pro');
});
gulp.task('web', function() {
   replaceConfigAndManifest('web');
});
gulp.task('win', function() {
   replaceConfigAndManifest('win');
});

// Build production files, the default task
gulp.task('default', 
  gulp.series(
    'clean',
    'styles',
    gulp.parallel(
      //'lint', 
      'html', 
      'scripts', 
      'images', 
      'fonts',
      'copy'),
  'zip')
);


// Build and serve the output from the dist build
gulp.task('serve:dist', gulp.parallel('default'), () =>
  browserSync({
    notify: false,
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: 'dist',
    port: 3001
  })
);
