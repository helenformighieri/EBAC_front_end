module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            desenvolvimento: {
                files: {
                    'style.css': 'main.less'
                }
            },
            producao: {
                options: {
                    compress: true
                },
                files: {
                    'dist/style.css': 'main.less'
                }
            }
        },
        uglify: {
            options: {
                mangle: true, 
                compress: true
            },
            my_target: {
                files: {
                    'dist/main.min.js': ['./src/scripts/main.js']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
}