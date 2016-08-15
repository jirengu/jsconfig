var gulp = require('gulp');

// 引入组件
var minifycss = require('gulp-minify-css'), // CSS压缩
    uglify = require('gulp-uglify'), // js压缩
    concat = require('gulp-concat'), // 合并文件
    rename = require('gulp-rename'), // 重命名
    clean = require('gulp-clean'), //清空文件夹
    minhtml = require('gulp-htmlmin') ,
    fs = require('fs'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssnano = require('cssnano');





gulp.task('autoprefixer', function() {
    var processors = [
        autoprefixer({
            browsers: ['> 2%']
        }),
        cssnano()
    ];

    return gulp.src('src/**/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('dist/css'));
});



gulp.task('css', function() {
    gulp.src('src/**/*.css')
        .pipe(concat('merge.css'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist/css/'));
});



var jsFiles = [
    'src/js/jquery.js',
    'src/js/a.js',
    'src/js/b.js'
];


gulp.task('js', function() {
    gulp.src(jsFiles)
        .pipe(concat('merge.js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});


var index = 'src/index.html';
gulp.task('html', function() {
    gulp.src(index)
        .pipe(minhtml())
        .pipe(gulp.dest('dist/'));
});



gulp.task('default', ['js', 'css', 'html']);







var shell = require('gulp-shell');

var GulpSSH = require('gulp-ssh');
var fs = require('fs');

var config = {
    host: '127.0.0.1', //远程机器 ip
    port: 22,
    username: 'root',
    privateKey: fs.readFileSync('.ssh/id_rsa') //密钥
};


var gulpSSH = new GulpSSH({
    ignoreErrors: false,
    sshConfig: config
});



gulp.task('ssh-dev', function() {
    return gulpSSH
        .shell(['cd /var/www/mysite', 'npm run update']);
});




