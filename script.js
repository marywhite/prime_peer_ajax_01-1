var username = null;
var userPage = null;
var userDescription = null;
var userImage = null;
var query = null;

$(document).ready(function(){

    $('.searchBtn').on('click', function(){
        query = $('.searchField').val();
        console.log(query);

        $.ajax({
            type: 'GET',
            url: 'https://api.github.com/users/' + encodeURI(query) + ' -u mliq:hotdogyay1',
            crossDomain: true,
            dataType: 'text',
            success: function (data) {
                console.log(data);

                username = data.login;
                userPage = data.html_url;
                userDescription = data.location;
                userImage = data.avatar_url;

                $('.username').text(username);
                $('.userLinkUrl').attr('src',userPage);
                $('.userLinkText').text(userPage);
                $('.kittenDescription').text(userDescription);
                $('.kittenImg').attr('src', userImage);
            },
            error: function (xhr, status) {
                alert('Error: ' + status);
            }
        });

    });


});
