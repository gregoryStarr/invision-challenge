'use strict';

var SimplySocial = angular.module('SimplySocial', [
    'ui.router',
    'SimplySocial.controllers',
    'SimplySocial.filters',
    'SimplySocial.services'
])

    .run(
    [          '$rootScope', '$state', '$stateParams',
        function ($rootScope,   $state,   $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
            $rootScope.showModal=false;
            $rootScope.showHero=true;
            $rootScope.displayGrid=true;
            $rootScope.listDisplayType= "main-container";
            $rootScope.cardType= "";

        }
    ]
)

    .config(
    [          '$stateProvider', '$urlRouterProvider',
        function ($stateProvider,   $urlRouterProvider) {
                 $urlRouterProvider
                .when('/c?id', '/views/:id')
                .when('/user/:id', '/views/:id')
                .otherwise('/');


            $stateProvider

                // Allposts || Home State
                // ######################

                .state("allPosts", {

                    // Use a url of "/" to set a state as the "index".
                    url: "/",
                    templateUrl: 'views/allPosts.html',
                    controller: 'AllPostsCtrl'
                })

                // AllPhotos State
                // ######################

                .state('allPhotos', {
                    url: '/allPhotos',
                    templateUrl: 'views/allPhotos.html',
                    controller: 'AllPhotosCtrl'
                })

                // AllVideos State
                // ######################
                .state('allVideos', {
                    url: '/allVideos',
                    templateUrl: 'views/allVideos.html',
                    controller: 'AllVideosCtrl'
                })

                // Sttings State
                // ######################
                .state('settings', {
                    url: '/settings',
                    templateUrl: 'views/settings.html',
                    controller: 'SettingsCtrl'
                })
        }
    ]


);
