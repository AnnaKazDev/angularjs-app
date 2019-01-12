module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			compile: {
				files: {
					'src/styles/css/main.css': 'src/styles/less/main.less'
				}
			}
		},
		concat: {
			js: {
				src: ['src/app.js', 'src/server.js'],
				dest: 'build/js/scripts.js'

			},
			css: {
				src: ['src/styles/css/*.css'],
				dest: 'build/css/styles.css'
			}
		},
		watch: {
			js: {
				files: ['*.js'],
				tasks: ['concat:js'],
				options: {
					spawn: false,
					livereload: true
				}
			},
			css: {
				files: ['src/styles/css/*.css'],
				tasks: ['concat:css'],
				options: {
					spawn: false,
					livereload: true
				}
			}
		}
	});


	grunt.registerTask('speak', function () {
		console.log('speak')
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-less');
	// grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['less', 'concat', 'watch']);
};