module.exports = function(grunt){
	
	require('matchdep').filterDev('grunt-*', './package.json').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),

	    // Grunt Watch
	    watch: {
	        options: {
	            reload: true,
	            atBegin: true,
	            livereload: 999999
	        },
	        js: {
	            files: [
        			'Scripts/*.js'
	            ],
	            tasks: ['copy:main', 'uglify:main']
	        }
	    },
      
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
		    },
		    main: {
		        files: {
		            'js/main.min.js': ['js/main.min.js']
		        },
		        options: {
		            preserveComments: false
		        }
		    }
		},
	    // Task - Copy over Custom Scripts
	    copy: {
	        main: {
	            src: 'Scripts/main.js',
	            dest: 'js/main.min.js'
	        }			
	    }
    });

    grunt.registerTask('default', []);    
    grunt.registerTask('init', ['concat', 'uglify']);    
};