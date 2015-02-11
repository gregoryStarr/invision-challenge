'use strict';

/** data service, manages data model throughout the lifecycle of the application */
angular.module('SimplySocial.services', [])
    .factory('PostService', function () {
        var posts=[
            {item:getPost('mike', "male.2","")},
            {item:getPost('joe', "male","")},
            {item:getPost('dame', "female","")},
            {item:getPost('dude', "male","")},
            {item:getPost('china', "female","")}
        ];
        return posts;
    })

    .factory('PhotoService', function () {
        var posts=[
            {item:getPost('mANE', "male","")},
            {item:getPost('sdfdbsg', "male","")},
            {item:getPost('Sam', "male.2","")},
            {item:getPost('Stew', "male","")},
            {item:getPost('monica', "female.2","")},
            {item:getPost('dustin', "male","")},
            {item:getPost('mANE', "female","")}
        ];

        return posts;
    })


    .factory('VideoService', function () {

       var posts=[
           {item:getPost('Sam', "male.2","")},
           {item:getPost('Stew', "male","")},
           {item:getPost('monica', "female.2","")},
           {item:getPost('dustin', "male","")},
           {item:getPost('sheera', "female.2","")}
       ];

        return posts;
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
    })

     .factory('CardService', function () {
        return this.services;
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
    return "Lorem ipsum dolor sit amet, dolorum adipisci mediocrem mei in, ex pro tation legere ornatus.";
}