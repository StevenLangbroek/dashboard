module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    coffee: {
      compile: {
        files: [{
          expand: true,
          cwd: 'assets/coffee',
          src: ['**/*.coffee'],
          dest: 'assets/js',
          ext: '.js'
        }]
      }
    },

    connect: {
      server: {
        options: {
          port: 9000,
          base: ''
        }
      }
    },

    sass: {
      dist: {
        options: {
          outputStyle: 'nested',
          includePaths: ['bower_components/bourbon/app/assets/stylesheets']
        },
        files: {
          'assets/css/app.css': 'assets/scss/app.scss'
        }        
      }
    },

    watch: {
      sass: {
        files: ['assets/scss/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: false
        }
      },
      coffee: {
        files: 'assets/coffee/**/*.coffee',
        tasks: ['coffee'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['assets/css/app.css'],
        tasks: [],
        options: {
          livereload: true
        }
      },
      grunt: { files: ['Gruntfile.js'] },
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  
  

  grunt.registerTask('build', ['sass','coffee']);
  grunt.registerTask('default', ['connect','watch']);
}