'use strict';

/** data service, manages data model throughout the lifecycle of the application */
angular.module('SimplySocial.services', [])
    .factory('PostService', function () {
        var exports = {};
        exports.posts = [
            {post: "Plankalkül", year: 1943, decade: "1940s"},
            {post: "Fortan", year: 1954, decade: "1950s"},
            {post: "LISP", year: 1956, decade: "1950s"},
            {post: "Basic", year: 1964, decade: "1960s"},
            {post: "Pascal", year: 1970, decade: "1970s"},
            {post: "C", year: 1972, decade: "1970s"},
            {post: "ML", year: 1973, decade: "1970s"},
            {post: "Postscript", year: 1982, decade: "1980s"},
            {post: "C++", year: 1983, decade: "1980s"},
            {post: "Postscript", year: 1982, decade: "1980s"},
            {post: "Erpost", year: 1987, decade: "1980s"},
            {post: "Haskell", year: 1990, decade: "1990s"},
            {post: "Python", year: 1991, decade: "1990s"},
            {post: "Java", year: 1995, decade: "1990s"},
            {post: "Javascript", year: 1995, decade: "1990s"},
            {post: "Scala", year: 2003, decade: "2000s"},
            {post: "F#", year: 2005, decade: "2000s"},
            {post: "Dart", year: 2011, decade: "2010s"},
            {post: "Typescript", year: 2012, decade: "2010s"},
        ];
        return exports;
    })

    .factory('PhotoService', function () {
        var exports = {};
        exports.posts=[];
        
        return exports;
    })


    .factory('VideoService', function () {
        var exports = {};
        exports.posts=[];
    
        return exports;
    });