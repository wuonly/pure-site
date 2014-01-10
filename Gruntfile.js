'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        clean: {
            build: ['build/']
        },

        copy : {
            pub: {
                src    : 'public/**',
                dest   : 'build/',
                expand : true

            }
        },

        grid_units: {
            dest : 'build/public/css/main-grid.css',
            options: {
                mediaQueries: {
                    med : 'screen and (min-width: 48em)', // 768px
                    lrg : 'screen and (min-width: 75em)'  // 1200px
                }
            }
        },

        stripmq: {
            all: {
                files: {
                    'build/public/css/main-grid-old-ie.css': ['build/public/css/main-grid.css'],
                    'build/public/css/main-old-ie.css'     : ['build/public/css/main.css'],

                    // Layout Files
                    'build/public/css/layouts/blog-old-ie.css': ['build/public/css/layouts/blog.css']
                }
            }
        }
    });

    // npm tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-stripmq');

    // Local tasks.
    grunt.loadTasks('lib/tasks/');

    grunt.registerTask('default', ['clean', 'copy', 'grid_units', 'stripmq']);
};
