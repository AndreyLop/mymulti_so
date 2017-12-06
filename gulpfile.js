var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync').create();
    
    
    
var jsFiles = {
    src:    'src/js/**/*.js',
    dist:   'dist/js' 
};

var cssFiles = {
    src:    'src/scss/**/*.scss',
    dist:   'dist/css'
};

var imgFiles = {
    src:    'src/img/*',
    dist: 'dist/img'
};

//Common start
gulp.task('img', function() {
    return gulp.src(imgFiles.src)
        .pipe(imagemin())
        .pipe(gulp.dest(imgFiles.dist));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch(cssFiles.src, ['cssProd']);
    gulp.watch(jsFiles.src, ['jsProd']);
    gulp.watch("./dist/*.html").on('change', browserSync.reload);
});
//Common end

//Production start 

//Combine, minify, convert to ES5 js, reload browser
gulp.task('jsProd', function() {
    return gulp.src(jsFiles.src)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsFiles.dist))
        .pipe(browserSync.reload({stream:true}));
    });

//Convert to css, combine, compress, autoprefix css, reload browser
gulp.task('cssProd', function() {
    return gulp.src(cssFiles.src)
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename('styles.css'))
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.write('../maps'))        
        .pipe(gulp.dest(cssFiles.dist))
        .pipe(browserSync.reload({stream:true}));
});
//Production end

gulp.task('serve', ['img', 'cssProd', 'jsProd', 'browser-sync']);

//Development start
// gulp.task('jsDev', function() {
//     return gulp.src(jsFiles.src)
//         .pipe(concat('scripts.js'))
//         .pipe(gulp.dest(jsFiles.dist))
//         .pipe(browserSync.reload({stream:true}));    
//     });

//Uncomment this toask to create unminified css with comments showing from where which style came
// gulp.task('cssDev', function() {
//     return gulp.src(cssFiles.src)
//         .pipe(sass({
//             sourceComments: 'map',
//             sourceMap: 'sass',
//             outputStyle: 'nested'}
//         ).on('error', sass.logError))
//            .pipe(autoprefixer({
//                browsers: ['last 15 versions'],
//                cascade: false
//           }))
//         .pipe(gulp.dest(cssFiles.dist))
//         .pipe(browserSync.reload({stream:true}));
//     });
//Development end
