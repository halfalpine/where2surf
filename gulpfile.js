var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    }
  });
});

gulp.task('sass', function() {
  return gulp.src('app/sass/**/*.sass')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }));
});

gulp.task('watch', function() {
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('default', function(callback) {
  runSequence(['sass', 'browserSync'], 'watch',
    callback
  );
});
