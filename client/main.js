chat.controller('chatboxController', ['$scope',
    function ($scope) {

        $scope.SocketActions = function () {
            socket.on('chat message', function (msg) {
                $('#messages').append($('<li>').text(msg));
            });
            socket.on('User Disconnected', function (m, list) {
                $(".menu ul").empty();
                for (i = 0; i < list.length; i++) {
                    $(".menu ul").append($('<li id="' + list[i].user + '">').text(list[i].user));
                }
                $(".showmenu ul").empty();
                for (i = 0; i < list.length; i++) {
                    $(".showmenu ul").append($('<li id="' + list[i].user + '">').text(list[i].user));
                }                
            });
            socket.on('New User', function (m, list) {
                $(".menu ul").empty();
                for (i = 0; i < list.length; i++) {
                    $(".menu ul").append($('<li id="' + list[i].user + '">').text(list[i].user));
                }
                $(".showmenu ul").empty();
                for (i = 0; i < list.length; i++) {
                    $(".showmenu ul").append($('<li id="' + list[i].user + '">').text(list[i].user));
                }
            });
            socket.on('reconnect', function () {
                socket.emit('User Joined', $("#nm").val());
            });
        }

        $scope.triggerMessage = function (event) {
            if (event.which == 13) {
                EmitMessage();
            }
        }
        $scope.triggerMsg = function () {
            EmitMessage();
        }
        $scope.showUsers = function () {
            $(".showmenu").toggle();
        }

        function EmitMessage() {
            socket.emit('chat message', usrname + ": " + $('#chatbox').val());
            $('#messages').append($('<li id="mine">').text("You" + ": " + $('#chatbox').val()));
            $('#chatbox').val('');
            $('#chatbox').focus();
            $('#messages').scrollTop($("#messages").prop("scrollHeight"));
        }
        $scope.SocketActions();
}]);