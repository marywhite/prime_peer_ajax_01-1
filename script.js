var username = null;
var userPage = null;
var userDescription = null;
var userImage = null;
var query = null;
var ourData = null;

$(document).ready(function(){

    $('.octocat').on('click', function() {
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
                $('.info').addClass('user');
                $('.username').text(username);
                $('.userLinkUrl').attr('src', userPage);
                $('.userLinkText').text(userPage);
                $('.kittenDescription').text(userDescription);
                $('.kittenImg').attr('src', userImage);
            },
            error: function (xhr, status) {
                alert('Error: ' + status);
            }

        });

        $.ajax({
            type: 'GET',
            url: 'https://api.github.com/users/' + query + '/repos?client_id=f8a4b95805c9804c9eb7&client_secret=4b1bff35a5b8b802fe4bb4e1204afd2f56fc8d8d',
            crossDomain: true,
            dataType: 'json',
            success: function (data) {
                var repo;
                var name;
                var description;
                var url;
                var cell;
                $('.repos').append('<div class="row"></div>');
                for (var i=0; i < data.length; i++) {
                    repo = data[i];
                    name = '<p class="lead text-center">' + repo.name + '</p>';
                    description = '<p>' + repo.description + '</p>';
                    url = '<p><a class="url" href="' + repo.url + '">' + repo.url + '</a></p>';
                    cell = '<div class="col-md-3 col-xs-12">' + name  + description + url + '</div>';
                    if ((i % 4) == 0) {
                        $(".repos").append('<div class="row"></div>');
                    }
                    $('.row').last().append(cell);

                }

                //html_url & name

            },
            error: function (xhr, status) {
                alert('Error: ' + status);
            }
        });

    });

});
