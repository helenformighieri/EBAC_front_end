const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});


gulp.task('imagemin', function () {
    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});


gulp.task('uglify', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


gulp.task('watch', function () {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('src/images/**/*', gulp.series('imagemin'));
    gulp.watch('src/js/**/*.js', gulp.series('uglify'));
});

gulp.task('default', gulp.series('sass', 'imagemin', 'uglify', 'watch'));
