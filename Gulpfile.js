var gulp = require('gulp')
var less = require('gulp-less')
var path = require('path')
var rename = require('gulp-rename')
var browserify = require('browserify')
var babel = require('babelify')
var source = require('vinyl-source-stream')
var preset = require('babel-preset-es2015')

gulp.task('styles', function () {
  gulp
    .src('index.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
     }))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'))
})

gulp.task('assets', function () {
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'))
})

gulp.task('scripts', function () {
  browserify('./src/index.js')
    .transform(babel, {presets: ["es2015"]})
    .bundle()
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('public'))
})

gulp.task('default', ['styles', 'assets', 'scripts'])