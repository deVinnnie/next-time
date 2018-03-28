module.exports = function(grunt) {
    
    var generatedFiles = grunt.file.expand({filter: "isFile"},
                                  [ "**/*.html", 
                                    "!index.html", 
                                    "!node_modules/**"
                                  ]
    );

    // Project configuration.
    grunt.initConfig({
        pug: {
            children: {
                options: {
                    data: {
                        debug: false
                    }
                },
                files: [ {
                    src: ["*/index.pug"],
                    dest: "./",
                    expand: true,
                    ext: ".html"
                } ]
            },
            index: {
                options: {
                    data: {
                        debug: false,
                        files: generatedFiles
                    }
                },
                files: {
                    'index.html' : 'index.pug'
                }
            }
        },

        less: {
            all:{
                files: {
                    "css/main-2015-11.css": "less/main-2015-11.less",
                    "css/main-2015-09.css": "less/main-2015-09.less",
                    "css/main-2018-04.css": "less/main-2018-04.less"
                }
            }
        },
        connect : {
            uses_defaults: {}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', 'pug:index', 'pug:children');
    
    // Default task(s).
    grunt.registerTask('serve', 'connect:uses_defaults:keepalive');
};
