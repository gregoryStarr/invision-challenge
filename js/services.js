'use strict';

/** data service, manages data model throughout the lifecycle of the application */
angular.module('SimplySocial.services', [])
    .factory('PostService', function () {
        var exports = {};
        exports.posts = [
            {post:getPost('JAMES', "male","")},
            {post:getPost('Name', "female","")},
            {post:getPost('JENNIE', "female","")},
            {post:getPost('Name', "female","")},
            {post:getPost('JACK', "male","")},
            {post:getPost('Name', "male","")},
            {post:getPost('JIMMY', "male","")},
            {post:getPost('Name', "male","")},
            {post:getPost('MALCOMN', "male","")},
            {post:getPost('Name', "male","")},
            {post:getPost('Name', "female","")},
            {post:getPost('MATHEW', "male","")},
            {post:getPost('Name', "female","")},
            {post:getPost('Name', "female","")},
            {post:getPost('MAYBELLE', "female","")},
            {post:getPost('Name', "female","")},
            {post:getPost('Name', "male","")},
            {post:getPost('MAX', "male","")},
            {post:getPost('Name', "male","")}
        ];
        return exports;
    })

    .factory('PhotoService', function () {
        var exports = {};
        exports.posts=[
            {post:getPost('JAMES', "male","")},
            {post:getPost('Name', "female","")},
            {post:getPost('JENNIE', "female","")},
            {post:getPost('Name', "female","")},
            {post:getPost('JACK', "male","")},
            {post:getPost('Name', "male","")},
            {post:getPost('JIMMY', "male","")},
            {post:getPost('Name', "female","")},
            {post:getPost('Name', "male","")},
            {post:getPost('JANICE', "female","")},
            {post:getPost('Name', "female","")},
            {post:getPost('Name', "female","")}
        ];

        return exports;
    })


    .factory('VideoService', function () {
        var exports = {};
        exports.posts=[
            {post:getPost('mANE', "male","")},
            {post:getPost('MARY', "female","")},
            {post:getPost('Name', "female","")},
            {post:getPost('MADISON', "female","")},
            {post:getPost('Name', "male","")},
            {post:getPost('MALCOMN', "male","")},
            {post:getPost('Name', "male","")},
            {post:getPost('Name', "female","")},
            {post:getPost('MATHEW', "male","")},
            {post:getPost('Name', "female","")},
            {post:getPost('Name', "female","")},
            {post:getPost('MAYBELLE', "female","")},
            {post:getPost('Name', "female","")},
            {post:getPost('Name', "male","")},
            {post:getPost('MAX', "male","")},
            {post:getPost('Name', "male","")}
        ];

        return exports;
    })


    .factory('SettingService', function () {
        var settings = {
            name:"Gregory Starr",
            email:"gstarr@invisionapp.com",
            password:"justapassword",
            phone:"justapassword",
            avatarLarge:"myAvartar-large.png",
            avatarMed:"myAvartar-med.png",
            avatarSm:"myAvartar-sm.png"
        };


        return settings;
    });


var   post ={};
var getPost = function (name,gender,cnt){
    post.name=name;
    post.avatar="avatar."+gender+".png";
    post.summary="Simple Summary ...";
    post.title=getName();
    post.description=li();
    post.comments=[{title:"titile", comments:"this is a comment"},
        {title:"titile", comments:"this is a comment"},
        {title:"titile", comments:"this is a comment"},
        {title:"titile", comments:"this is a comment"}]
    post.photoMedia="photoPlaceHolder.png";
    post.videoMedia="videoSrcPlaceHolder.png";

    return post;
}

var cnt = 0;
var getName = function(type){

    return cnt++;
}

var li =function(){
    return "Lorem ipsum dolor sit amet, dolorum adipisci mediocrem mei in, ex pro tation legere ornatus. Cu augue viderer veritus mel, ea has ocurreret disputationi. Te sea prompta laoreet epicuri. Sea no munere gubergren consetetur, est solet nusquam ad, ex verear latine his. Et quo quando laoreet gubergren, cum ex civibus lobortis.";
}