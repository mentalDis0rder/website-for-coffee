var gulp        = require("gulp");
var livereload = require("gulp-livereload")

gulp.task("livereload", function (){

    gulp.scr("./css/*.css")
        .pipe(livereload())
});

gulp.task('default', function (){
    livereload.listen();
    gulp.watch("./css/*.css", ['livereload']);
});