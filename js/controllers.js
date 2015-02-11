'use strict';
angular.module('SimplySocial.controllers', [])
    .controller('AppCtrl', ['$scope', function ($scope) {
        console.log('App Instantiated');
        $scope.cardType=""
        $scope.listDisplayType="main-container"
        $scope.displayGrid=false;
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
                $scope.listDisplayType="grid"
                $scope.displayGrid=true;
            }else{
                $scope.cardType=""
                $scope.listDisplayType="main-container"
                $scope.displayGrid=false;
            }
        }
    }])

    .controller('AllPostsCtrl', ['$scope', 'PostService', function ($scope, PostService) {
        $scope.posts={};
        console.log('AllPostsCtrl Instantiated');
        var showHero=true;
        $scope.showHero=showHero;
        $scope.posts = PostService;
    }])


    .controller('AllPhotosCtrl', ['$scope', 'PhotoService', function ($scope, PhotoService) {
        $scope.posts={};
        console.log('AllPhotosCtrl Instantiated');
        var showHero=true;
        $scope.showHero=showHero;
        $scope.posts = PhotoService;
    }])


    .controller('AllVideosCtrl', ['$scope', 'VideoService', function ($scope, VideoService) {
        $scope.posts={};
        console.log('AllVideosCtrl Instantiated');
        var showHero=true;
        $scope.showHero=showHero;
        $scope.posts = VideoService;
    }])

    .controller('SettingsCtrl', ['$scope', 'SettingService', function ($scope, SettingService) {
        console.log('SettingsCtrl Instantiated');
        var showHero=false;
        $scope.showHero=showHero;
        //$scope.settings = SettingService.settings;
        $rootScope.settings=SettingService;
    }])

    .controller('CardCtrl',  ['$scope', 'CardService', function ($scope, CardService) {
        console.log('CardCtrl Instantiated');
        var showCommenta=false;
        var dataProvider = '';
        var service = '';
    }]);




