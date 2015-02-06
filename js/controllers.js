'use strict';
angular.module('SimplySocial.controllers', [])
    .controller('AllPostsCtrl', ['$scope', 'PostService', function ($scope, PostService) {
        console.log('AllPostsCtrl Instantiated');
        $scope.posts = PostService.posts;
    }])


    .controller('AllPhotosCtrl', ['$scope', 'PhotoService', function ($scope, PhotoService) {
        console.log('AllPhotosCtrl Instantiated');
        $scope.posts = PhotoService.posts;
    }])


    .controller('AllVideosCtrl', ['$scope', 'VideoService', function ($scope, VideoService) {
        console.log('AllVideosCtrl Instantiated');
        $scope.posts = VideoService.posts;
    }]);




