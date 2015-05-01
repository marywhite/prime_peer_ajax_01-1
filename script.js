var username = null;
var userPage = null;
var userDescription = null;
var userImage = null;

$(document).ready(function(){

    $.get('https://api.github.com/users/mliq', function(data){
        username = data.login;
        userPage = data.html_url;
        userDescription = data.location;
        userImage = data.avatar_url
        console.log(userDescription,userImage,username, userPage);

        $('.username').text(username);
        $('.userLinkUrl').attr('src',userPage);
        $('.userLinkText').text(userPage);
        $('.kittenDescription').text(userDescription);
        $('.kittenImg').attr('src', userImage);
    });

});
