/**
 * Created by joakimdurehed on 2014-08-05.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');


// Compile sass and store it in public/css folder
gulp.task('css', function() {
   gulp.src('app/assets/sass/main.scss')
       .pipe(sass())
       .pipe(autoprefixer('last 10 versions'))
       .pipe(gulp.dest('public/css'));
});

// Watch for changes
gulp.task('watch', function() {
    gulp.watch('app/assets/sass/**/*.scss', ['css']);
});

// Default task
gulp.task('default', ['watch']);