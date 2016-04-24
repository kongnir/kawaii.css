/*!
 * Kawaii-css's Gruntfile
 * https://github.com/kongnir/kawaii.css
 * See LICENSE.md
 */

/*global module:false*/
module.exports = function (grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-contrib-compass');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: { // Task
			dist: { // Target
				options: { // Target options
					sassDir: 'sass',
					cssDir: 'css',
					environment: 'production'
				}
			}
		}
	});

	grunt.registerTask('default', ['compass:dist']);
};