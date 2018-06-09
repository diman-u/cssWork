
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
});

gulp.task('detPage', function() {
    return gulp.src('template/detPage/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('template/detPage/'))
});

gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "app/"
    });
    gulp.watch("app/scss/**/*.scss").on('change', browserSync.reload);
    //gulp.watch("*.html").on('change', browserSync.reload);
});