var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function() {
    return gulp.src('src/scss/*.scss') //获取该任务需要的文件
    .pipe(sass())     //该任务调用的模块
    .pipe(gulp.dest('src/css'));    //将在 src/css 文件夹中生产test.css(路径)
}); 

// 默认任务
gulp.task('default',['sass','watch1']);
//监听文件
gulp.task('watch1',function(){
    return gulp.watch('src/scss/*.scss',['sass']); 
    //监听 src/css/.scss 文件，修改时自动执行 sass 任务。

})//监听/