/*
 * gulpfile.js
 * Copyright (C) 2018 zhaolinlin <zhaolinlin@zhaolinlindeMacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */
let gulp = require('gulp');
let child_process = require('child_process');
var fileName = '';
var libPath = '';

gulp.task('default', () => {
	console.log('default');
});

gulp.task('build', function (cb) {
	console.log('----------------------------------------------------start build------------------------------------------------------');
	try {
		child_process.exec('babel ' + fileName + ' -o ' + libPath, { shell: '/bin/sh' }, function (error, stdout, stderr) {
			if (error) {
				console.error(`exec error: ${error}`);
				return;
			}
			console.log(`stdout: ${stdout}`);
			console.log(`stderr: ${stderr}`);
		})
	} catch (e) {
		console.log(e);
	} finally {
		console.log('----------------------------------------------------end build------------------------------------------------------');

		cb();
	}


});


gulp.task('run', ['build'], function (cb) {
	console.log('----------------------------------------------------run result------------------------------------------------------');
	try {
		child_process.execFile('node lib/index.js', { shell: '/bin/sh' }, function (error, stdout, stderr) {
			if (error) {
				console.error(`exec error: ${error}`);
			}
			console.log(`stdout:\n${stdout}`);
			console.log(`stderr: ${stderr}`);
		});
	} catch (e) {
		console.log(e);
	} finally {
		console.log('----------------------------------------------------run result------------------------------------------------------');
		cb();
	}

});

gulp.task('buildAll', (cb) => {
	child_process.execFile('babel src -d lib', { shell: '/bin/sh' }, function (error, stdout, stderr) {
		if (error) {
			console.error(`exec error: ${error}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		console.log(`stderr: ${stderr}`);
		cb();
	})
});

gulp.task('watch', ['buildAll'], function () {
	gulp.watch('./src/**/*.js', function (event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		fileName = event.path;
		libPath = fileName.replace('src', 'lib');
		console.log(event);
		gulp.start('run');

	})
})

