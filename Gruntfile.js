module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
	    eslint: {
	    	options: {
				config: 'eslint.json',
				reset: true
			},
	        target: ['demo.js']
	    }
	});
	 
	grunt.registerTask('default', ['eslint']);
};