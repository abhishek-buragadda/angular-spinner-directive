var gulp = require('gulp');
var uglify= require("gulp-uglify");
var runSequnce = require('run-sequence');
var webserver = require('gulp-webserver');
var bower = require('gulp-bower');
var clean =require('gulp-clean');
var concat = require('gulp-concat');
var rename = require('gulp-rename')

gulp.task("bower",function(){
    return bower({
      cmd: 'install'
    });
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});


gulp.task("copy-resource",function () {
  gulp.src("src/resources/*")
    .pipe(gulp.dest("dist/res"));
});

gulp.task("minify-js",function(){
  gulp.src(["src/spinnerModule.js", "src/*.js"])
  .pipe(concat("angularSpinners.js"))
  .pipe(gulp.dest('dist'))
  .pipe(uglify())
  .pipe(rename({
    suffix : ".min"
  })).
  pipe(gulp.dest("dist/"));

});

gulp.task("copy-css",function(){
   gulp.src("src/*.css")
   .pipe(concat("angularSpinners.css"))
   .pipe(gulp.dest("dist"));
});

gulp.task("clean", function(){
  gulp.src("dist")
    .pipe(clean());
});

gulp.task("build", ["clean"],function(){
      runSequnce("copy-resource","minify-js","copy-css");
});

gulp.task('default',['build']);
