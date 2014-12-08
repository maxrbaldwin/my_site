module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            dev: {
                files: ['keds.css'],
                tasks: ['s3:dev']
            },
            js: {
                files: ['keds.js'],
                tasks: ['uglify', 's3:dev']
            },
            html: {
                files: ['featuredModal.html'],
                tasks: ['s3:dev']
            },
            json: {
                files: ['keds.json'],
                tasks: ['s3:dev']
            }
        },
        uglify: {
            dist: {
                files: {
                    'keds.min.js': 'keds.js'
                },
                options: {
                    banner: '/*  - <%= grunt.template.today() %> - MRB */'
                }
            }
        },
        'ftp-deploy': {
            pro: {
                auth: {
                    host: 'www.maxrbaldwin.com',
                    port: 21,
                    authPath: 'ftp.json',
                    authKey: 'theKey'
                },
                src: '/site',
                dest: 'public_html/',
                exclusions: ['']
            },
            dev: {
                auth: {
                    host: 'www.maxrbaldwin.com',
                    port: 21,
                    authPath: 'ftp.json',
                    authKey: 'theKey'
                },
                src: 'site/',
                dest: 'public_html/sandbox',
                exclusions: ['README.md']
            },
            server: {
                auth: {
                    host: 'www.maxrbaldwin.com',
                    port: 21,
                    authPath: 'ftp.json',
                    authKey: 'theKey'
                },
                src: 'server/',
                dest: 'api/',
                exclusions: ['server/package.json', 'server/node_modules']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-ftp-deploy');

    grunt.registerTask('server', ['ftp-deploy:server']);
    grunt.registerTask('dev', ['ftp-deploy:dev']);
    grunt.registerTask('default', ['watch:dev']);

};
