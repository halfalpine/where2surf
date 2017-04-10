var gulp = require('gulp');
var sass = require('gulp-sass');
var ejs = require('gulp-ejs');
var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

var nodemonServerInit = function(){
        livereload.listen();
        nodemon({
            script: 'app.js',
            ext: 'js'
        }).on('restart', function(){
            gulp.src('app.js')
                .pipe(livereload())
                .pipe(notify('Reloading page, please wait...'));
        });
};

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });
});

gulp.task('ejs', function() {
  return gulp.src('views/**/*.ejs')
  .pipe(ejs({
    msg: 'Hello Gulp!'
  }))
  .pipe(gulp.dest('./public'));
});

gulp.task('sass', function() {
  return gulp.src('public/sass/**/*.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('public/css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('watch', function() {
  gulp.watch('public/sass/**/*.sass', ['sass']);
  gulp.watch('views/**/*.ejs', browserSync.reload);
});

gulp.task('default', function(cb) {
  runSequence(['nodemon', 'ejs', 'sass', 'browserSync', 'watch'],
  cb);
});
