module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sprite:{
      all: {
        src: './public/imgs/indexp*.png',
        dest: './build/imgs/spritesheet.png',
        destCss: './build/css/sprites.css'
      }
    },
    htmlmin: {
     target: {
        files: [{
          expand: true,
          cwd: './public/',
          src: ['*.html'],
          dest: './build/',
          ext: '.html'
        }]
      }
    },
    less: {
      main: {
          expand: true,
          src: ['./public/css/*.less'],
          dest: './',//css同路径下
          ext: '.css'
      },
      dev: {
          options: {
              compress: true,
              yuicompress:false
          }
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: './public/css/',
          src: ['*.css', '!*.min.css'],
          dest: './build/css/',
          ext: '.min.css'
        }]
      }
    },
    jshint: {
      src:["./public/js/*.js",'!./public/js/jquery-3.2.1.js']
    },
    uglify: {
      my_target: {
        files: [{
          expand: true,
          cwd: './public/js/',
          src: ['*.js', '!*.min.js','!jquery-3.2.1.js'],
          dest: './build/js/',
          ext: '.min.js'
        }]
      }
    },
    concat: {
      dist: {
        src: ['./public/js/*.js'],
        dest: './public/global.js',
      },
    },
    watch: {
      scripts: {        
        files: ['*.js', '!*.min.js','!jquery-3.2.1.js'],
        tasks: ['jshint']
      },
      less: {
        files: ['./css/*.less'],
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('min',['cssmin','uglify']);//grunt min
  grunt.registerTask('default');

};