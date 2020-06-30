/**
 * Remember to have installed gulp globally with
 * npm i gulp -g
 * 
 * Also install gulp and gulp-sass locally with
 * npm i gulp --save-dev
 * npm i gulp-sass --save-dev
 */

//------------------------------
//MUST CONFIGURE THESE VARIABLES
//------------------------------


//Rellative or absolute path to sass file
const srcSass = "./assets/sass/master.sass";
const srcJs = "./server/src/**/*.js";

//Rellative or absolute path to output destination
const destCss = "./client/css";
const destJs = "./server/build";


//------------------------------
//DON'T GIVE A SHIT ABOUT ANYTHING BELLOW THIS LINE *It's magic*
//------------------------------

const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const spawn = require('child_process').spawn;
let node;

gulp.task('dev', function() {

	gulp.series['server'];

	// return gulp.series(['watchCss', 'watchJs']);
	gulp.watch(srcSass, gulp.series(['sass']));
	gulp.watch(srcJs, gulp.series(['babel', 'server']));

});

// gulp.task('watchCss', function() {
//     return gulp.watch(srcSass, ['sass']);
// });

// gulp.task('watchJs', function() {
// 	return gulp.watch(srcJs, ['babel']);
// });

gulp.task('sass', function() {

    return gulp.src(srcSass)
        .pipe(sass())
        .pipe(gulp.dest(destCss));

});

gulp.task('babel', function() {
	return gulp.src(srcJs)
		.pipe(babel())
		.pipe(gulp.dest(destJs));
});

gulp.task('server', function() {
	if(node) node.kill();

	node = spawn('node', ['./server/build/index.js'], {stdio: 'inherit'});

	node.on('close', (code) => {
		if(code === 8) {
			gulp.log('Error detected, waiting for canges');
		}
	});
});