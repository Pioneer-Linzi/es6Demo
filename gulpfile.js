/*
 * gulpfile.js
 * Copyright (C) 2018 zhaolinlin <zhaolinlin@zhaolinlindeMacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */
let gulp = require('gulp');
let child_process= require('child_process');
var fileName='';

gulp.task('default',()=>{
	console.log('default');
});

gulp.task('build',function(cb){
		console.log('----------------------------------------------------start build------------------------------------------------------');
	child_process.exec('npm run build ',{shell:'/bin/sh'},function(error,stdout,stderr){
		  if (error) {
			      console.error(`exec error: ${error}`);
			      return;
			    }
		  console.log(`stdout: ${stdout}`);
		  console.log(`stderr: ${stderr}`);
		console.log('----------------------------------------------------end build------------------------------------------------------');
		cb();
	})
});


gulp.task('run',['build'],function(cb){
		console.log('----------------------------------------------------run result------------------------------------------------------');
	child_process.exec('node '+fileName,{shell:'/bin/sh'},function(error,stdout,stderr){
		  if (error) {
			      console.error(`exec error: ${error}`);
			      return;
			    }
		  console.log(`stdout: ${stdout}`);
		  console.log(`stderr: ${stderr}`);
		console.log('----------------------------------------------------run result------------------------------------------------------');
		cb()
	});
});

gulp.task('watch',function(){
	gulp.watch('./src/**/*.js',function(event){
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
		fileName = event.path;
		gulp.start('run');

	})
})

