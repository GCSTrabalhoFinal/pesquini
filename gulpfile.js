var gulp = require('gulp'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync').create(),
  del = require('del'),
  gulpcssnano = require('gulp-cssnano'),
  gulpuseref = require('gulp-useref'),
  runsequence = require('run-sequence'),
  concat = require('gulp-concat'),
  minify = require('gulp-minify-css');

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});

gulp.task('watch', ['browserSync', 'views', 'sass'], function () {
  gulp.watch('app/assets/stylesheets/*.scss', ['sass']);
  gulp.watch('app/views/*.html', ['views']);
  gulp.watch('app/assets/stylesheets/*.scss', browserSync.reload);
  gulp.watch('app/views/*.html', browserSync.reload);
  gulp.watch('app/assets/javascripts/*.js', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src("app/assets/stylesheets/*.scss")
    .pipe(sass())
    .pipe(minify('main.min.css'))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('views', function () {
  return gulp.src('app/views/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('js', function () {
  return gulp.src('app/assets/javascrpts/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function () {
  gulp.src('app/images')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('clean', function () {
  return gulp.src(['dist/', 'dist/css', 'dist/js', 'dist/images',], { read: false })
    .pipe(clean());
});

gulp.task('build', function () {
  runsequence('clean', ['copy', 'sass', 'js']);
});

gulp.task('default', function (callback) {
  runsequence(['sass', 'browserSync', 'watch']);
});
