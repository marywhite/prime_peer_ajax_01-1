var username = null;
var userPage = null;
var userDescription = null;
var userImage = null;
var query = null;
var ourData = null;

$(document).ready(function(){

    $('.searchBtn').on('click', function(){
        query = $('.searchField').val();

        $.ajax({
            type: 'GET',
            url: 'https://api.github.com/users/' + encodeURI(query) + '?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
            crossDomain: true,
            dataType: 'json',
            success: function (data) {
                console.log(data);
                ourData = data;
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
