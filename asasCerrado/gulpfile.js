var imageCopyOptimize = require('ionic-gulp-image-task');
var gulp = require('gulp');
gulp.task('image', imageCopyOptimize);

gulp.task('image', function() {
    return imageCopyOptimize({ dest: 'www/my-custom-build-dir' });
});