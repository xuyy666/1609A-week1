/*
 * @Author: 徐园园 
 * @Date: 2018-12-03 08:57:31 
 * @Last Modified by: 徐园园
 * @Last Modified time: 2018-12-03 09:42:05
 */

var gulp = require('gulp');
var server = require('gulp-webserver');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify'); //压缩js
var mincss = require('gulp-clean-css'); //压缩css
var url = require('url');
var path = require('path');
var fs = require('fs');
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: 9090
                // middleware: function(req, res, next) {
                //     if (req.url === '/favicon.ico') {
                //         res.end('');
                //         return false;
                //     }
                //     var pathname = url.parse(req.url).pathname;
                //     if () {

            //     }
            // }
        }))
});


gulp.task('sass', function() {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
})
gulp.task('watch', function() {
    return gulp.watch('./src/scss/*.scss', gulp.series('sass'))
})
gulp.task('default', gulp.series('sass', 'server', 'watch'));


//线上环境
gulp.task('bUglify', function() {
    return gulp.src('./src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/js'))
});
gulp.task('mincss', function() {
    return gulp.src('./src/css/*.css')
        .pipe(mincss({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./build/css'))
})