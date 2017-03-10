var gulp = require('gulp')
var less = require('gulp-less')
var path = require('path')
var rename = require('gulp-rename')

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

gulp.task('default', ['styles', 'assets'])