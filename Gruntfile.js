module.exports = function(grunt) {
    
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
                        files: grunt.file.expand(
                          {filter: "isFile"},
                          [ "**/*.html", 
                            "!index.html", 
                            "!node_modules/**"
                          ]
                        )
                    }
                },
                files: {
                    'index.html' : 'index.pug'
                }
            }
        },

        connect : {
            uses_defaults: {}
        }
    });

    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // Default task(s).
    grunt.registerTask('default', ['pug:children']);

    // Default task(s).
    grunt.registerTask('serve', ['connect:uses_defaults:keepalive']);
};
