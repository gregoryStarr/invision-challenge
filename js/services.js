'use strict';

/** data service, manages data model throughout the lifecycle of the application */
angular.module('SimplySocial.services', [])
    .factory('PostService', function () {
        var exports = {};
        exports.posts = [
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"videoSrcPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"videoSrcPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"videoSrcPlaceHolder.png"}
        ];
        return exports;
    })

    .factory('PhotoService', function () {
        var exports = {};
        exports.posts=[
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"photoPlaceHolder.png"}
        ];

        return exports;
    })


    .factory('VideoService', function () {
        var exports = {};
        exports.posts=[
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"videoSrcPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"videoSrcPlaceHolder.png"},
            {post:{avatar:"avatar.female.png",summary:"Simple Summary ...",title:"Title "+Math.random(),description:li()},media:"videoSrcPlaceHolder.png"},
        ];

        return exports;
    })


    .factory('SettingService', function () {
        var settings = {
            name:"Gregory Starr",
            email:"gstarr@invisionapp.com",
            password:"justapassword",
            avatarLarge:"myAvartar-large.png",
            avatarMed:"myAvartar-med.png",
            avatarSm:"myAvartar-sm.png"
        };


        return settings;
    });



var li =function(){
    return "Lorem ipsum dolor sit amet, dolorum adipisci mediocrem mei in, ex pro tation legere ornatus. Cu augue viderer veritus mel, ea has ocurreret disputationi. Te sea prompta laoreet epicuri. Sea no munere gubergren consetetur, est solet nusquam ad, ex verear latine his. Et quo quando laoreet gubergren, cum ex civibus lobortis.";
}