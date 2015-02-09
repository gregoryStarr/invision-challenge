'use strict';
angular.module('SimplySocial.controllers', [])
    .controller('AppCtrl', ['$scope', function ($scope) {
        console.log('App Instantiated');
        $scope.showProfileMenu=false;
        $scope.hoverIn = function(){
            this.showProfileMenu = true;
            console.log("show profile menu")
        };

        $scope.hoverOut = function(){
            this.showProfileMenu = false;
            console.log("hide profile menu")
        };


        $scope.switchListType = function (type){
            console.log("LISTTYPE: "+type);
            if(type == 'grid'){
                $scope.cardType="gridCard"
                $scope.listDisplayType="wide"
            }else{
                $scope.cardType=""
                $scope.listDisplayType="main-container"
            }
        }
    }])

    .controller('AllPostsCtrl', ['$scope', 'PostService', function ($scope, PostService) {
        console.log('AllPostsCtrl Instantiated');
        var showHero=true;
        $scope.showHero=showHero;
        $scope.posts = PostService.posts;
    }])


    .controller('AllPhotosCtrl', ['$scope', 'PhotoService', function ($scope, PhotoService) {
        console.log('AllPhotosCtrl Instantiated');
        var showHero=true;
        $scope.showHero=showHero;
        $scope.posts = PhotoService.posts;
    }])


    .controller('AllVideosCtrl', ['$scope', 'VideoService', function ($scope, VideoService) {
        console.log('AllVideosCtrl Instantiated');
        var showHero=true;
        $scope.showHero=showHero;
        $scope.posts = VideoService.posts;
    }])

    .controller('SettingsCtrl', ['$scope', 'SettingService', function ($scope, SettingService) {
        console.log('SettingsCtrl Instantiated');
        var showHero=false;
        $scope.showHero=showHero;
        $scope.settings = SettingService.settings;

    }]);




