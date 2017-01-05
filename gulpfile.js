"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');          // Runs a local dev server
var open = require('gulp-open');                // Open a URL in a web browser
var browserify = require('browserify');         // Bundles JS
var reactify = require('reactify');             // Transforms React JSX to JS
var source = require('vinyl-source-stream');    // Use conventional text streams with Gulp
var concat = require('gulp-concat');            // Concatenates files
var lint = require('gulp-eslint');              // Lint JS/JSX Files

var config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        dist: './dist',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
        ],
        mainJs: './src/main.js',
    }
}

//Start a local dev server
gulp.task('connect', function() { 
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
})

//Open started dev server in new browser tab
gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
    .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

//
gulp.task('html', function() { 
    gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

//Bundles js to one file
gulp.task('js',function() {
    browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

//Bundles ES6 js to one file  (remember to switch between es6js and js in defaults list)
gulp.task('es6js',function() {
    browserify(config.paths.mainJs)
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload());
});

//Bundles css to one file
gulp.task('css', function() {
    gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'));
});

//Eslint
gulp.task('lint', function() {
	return gulp.src(config.paths.js)
		.pipe(lint({config: 'eslint.config.json'}))
		.pipe(lint.format());
});

// 
gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js,['js']);
});

//Run all default tasks for development purposes
gulp.task('default', ['html', 'js', 'css', 'lint', 'connect', 'watch']);