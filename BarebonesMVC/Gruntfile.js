module.exports = function(grunt){
	
	require('matchdep').filterDev('grunt-*', './package.json').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
      
        // Task - Merge Scripts
        concat: {
	        vendor: {
				src: [
					'bower_components/jquery/dist/jquery.js', 
					'bower_components/jquery-validation/dist/jquery.validate.js',
					'bower_components/jquery-validation-unobtrusive/jquery.validate.unobtrusive.js'
					
				],
	            dest: 'js/barebones-vendor.js',
	            nonull: true
	        }
		},
		// Task - Minify JS
		uglify: {
		    vendor: {
		        files: {
		            'js/barebones-vendor.js': ['js/barebones-vendor.js'],		            
		        },
		        options: {
		            preserveComments: false
		        }
		    }
		}
    });

    grunt.registerTask('default', []);    
    grunt.registerTask('init', ['concat', 'uglify']);    
};