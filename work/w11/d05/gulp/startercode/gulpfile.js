var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');

gulp.task('default', ['scripts', 'styles']);
gulp.task('scripts', function() {
  return gulp.src([
      'libs/**/*.js',
      'src/js/hello-module.js',
      'src/**/*.js'
    ])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'));
})

gulp.task('styles', ['scripts'], function() {
  return gulp.src([
      'libs/**/*.css',
      'src/**/*.css'
    ])
    .pipe(concat('all.css'))
    .pipe(csso())
    .pipe(gulp.dest('public/css'));
})

gulp.watch(['src/**/*.js', 'src/**/*.css'], ['default'])
