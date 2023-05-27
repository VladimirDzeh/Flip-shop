
const { src, dest, watch, parallel, series } = require('gulp');

const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const csso = require('gulp-csso');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
const include = require('gulp-include');

function styles() {
    return src(['app/css/**/*.css', '!app/css/style.min.css'])
        .pipe(autoprefixer({ overrideBrowserslist: ['last 10 version'] }))
        .pipe(concat('style.min.css'))
        .pipe(csso())
        .pipe(dest('app/css'))
        .pipe(browserSync.stream());
}

function scripts() {
    return src(['app/js/**/*.js', '!app/js/main.min.js'])
        .pipe(concat('main.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
        .pipe(browserSync.stream());
}

function images() {
    return src(['app/images/src/**/*.*', '!app/images/src/*.svg'])
        .pipe(newer('app/images'))
        .pipe(webp())

        .pipe(src('app/images/src/*.*'))
        .pipe(newer('app/images'))
        .pipe(imagemin())

        .pipe(dest('app/images'))
        .pipe(browserSync.stream());
}

function fonts() {
    return src('app/fonts/src/*.*')
        .pipe(fonter({
            formats: ['woff', 'ttf']
        }))
        .pipe(src('app/fonts/*.ttf'))
        .pipe(ttf2woff2())
        .pipe(dest('app/fonts'))
        .pipe(browserSync.stream());
}

function pages() {
    return src('app/pages/*.html')
        .pipe(include({
            includePaths: 'app/components'
        }))
        .pipe(dest('app'))
        .pipe(browserSync.stream());
}

function watching() {
    browserSync.init({
        server: {
            baseDir: 'app/'
        }
    });
    watch(['app/css/**/*.css', '!app/css/style.min.css'], styles)
    watch(['app/images/src/**/*'], images)
    watch(['app/components/*', 'app/pages/*'], pages)
    watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
    watch(['app/*.html']).on('change', browserSync.reload);
}

function cleanDist() {
    return src('dist')
        .pipe(clean());
}

function building() {
    return src([
        'app/css/style.min.css',
        'app/images/*.+(svg|webp)',
        'app/images/long/*.*',
        'app/images/skate/*.*',
        'app/images/penny/*.*',
        'app/images/finger/*.*',
        'app/fonts/*.*',
        'app/js/main.min.js',
        'app/*.html'
    ], { base: 'app' })
        .pipe(dest('dist'));
}

exports.styles = styles;
exports.images = images;
exports.fonts = fonts;
exports.pages = pages;
exports.scripts = scripts;
exports.watching = watching;
exports.building = building;

exports.build = series(cleanDist, building);
exports.default = parallel(styles, images, scripts, pages, watching);