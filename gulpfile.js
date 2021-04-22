'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-dyn');

bitcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
