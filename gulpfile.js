var gulp = require('gulp'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-tinypng');

gulp.task('pug', function () {
    return gulp.src('src/pug/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('build'));
});

gulp.task('sass', function () {
    return gulp.src('./src/static/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('build/css'));
 });

 gulp.task('tinypng', function () {
     return gulp.src('src/static/img/*')
     .pipe(imagemin('0WqvRbFmqJHNq6Dz91HjxYPtyyWZpLgR'))
     .pipe(gulp.dest('build/img'));
 })

 gulp.task('watch', function () {
    gulp.watch('src/pug/**/*.pug', gulp.series('pug'))
    gulp.watch('src/static/sass/**/*.scss', gulp.series('sass'));
 });

 gulp.task('default', gulp.series(
     gulp.parallel('pug','sass'),
     gulp.parallel('watch')
     ));