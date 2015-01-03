'use strict';

module.exports = function(grunt) {

  // Grunt tasks
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // Project configuration.
  grunt.initConfig({

    config: {
      src: 'src',
      dist: 'dist',
      docs: 'docs'
    },

    watch: {
      compass: {
        files: ['<%= config.src %>/sass/{,*/}*.{scss,sass}'],
        tasks: ['compass:server', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.tmp/css/{,*/}*.css',
          '<%= config.dist %>/src/*.html'
        ]
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= config.src %>'
          ]
        }
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= config.src %>/sass',
        cssDir: '.tmp/css',
        relativeAssets: true,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {}
      },
      server: {
        options: {
          debugInfo: true
        }
      }
    },

    // Add vendor prefixed css
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/css/',
            src: '{,*/}*.css',
            dest: '.tmp/css/'
          }
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= config.src %>/index.html',
      options: {
        dest: '<%= config.dist %>'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= config.dist %>/{,*/}*.html'],
      css: ['<%= config.dist %>/css/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= config.dist %>']
      }
    },

    // The following *-min tasks produce minified files in the dist folder
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= config.docs %>',
            src: '*.html',
            dest: '<%= config.docs %>'
          }
        ]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      docs: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>',
            dest: '<%= config.docs %>',
            src: '*.html'
          },
          {
            expand: true,
            cwd: '<%= config.src %>',
            dest: '<%= config.docs %>',
            src: 'CNAME'
          },
          {
            expand: true,
            cwd: '<%= config.dist %>',
            dest: '<%= config.docs %>',
            src: '**'
          }
        ]
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              '<%= config.dist %>/*',
              '<%= config.docs %>/*',
              '!<%= config.dist %>/.git*'
            ]
          }
        ]
      },
      server: '.tmp'
    },

    // Automatically create/push gh-pages
    'gh-pages': {
      options: {
        base: '<%= config.docs %>'
      },
      src: ['**']
    }

  });

  grunt.registerTask('server', function() {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve']);
    });

  grunt.registerTask('serve', [
    'clean:server',
    'compass:server',
    'autoprefixer',
    'connect:livereload',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'compass:dist',
    'useminPrepare',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'usemin'
  ]);

  grunt.registerTask('docs', [
    'build',
    'copy:docs',
    'htmlmin'
  ]);

  grunt.registerTask('deploy-docs', [
    'docs',
    'gh-pages'
  ]);

  grunt.registerTask('default', [
    'build'
  ]);

};
