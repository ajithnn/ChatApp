chat.controller('chatboxController', ['$scope',
    function ($scope) {

        $scope.SocketActions = function () {
            socket.on('chat message', function (msg) {
                $('#messages').append($('<li>').text(msg));
            });
            socket.on('User Disconnected', function (m, list) {
                $("#usr").append($('<li>').text(m));
                $("#btm").empty();
                $("#btm").append($('<li>').text("Users Online"));
                for (var i = 0; i < list.length; i++) {
                    $("#btm").append($('<li>').text(list[i].user));
                }
            });
            /*socket.on('New User', function (m, list) {
            $("#usr").append($('<li>').text(m + " Joined"));
            $("#btm").empty();
            $("#btm").append($('<li>').text("Users Online"));
            for (var i = 0; i < list.length; i++) {
                $("#btm").append($('<li>').text(list[i].user));
            }
        });*/
            socket.on('reconnect', function () {
                alert("Connected");
                socket.emit('User Joined', $("#nm").val());
                $("#btm").empty();
                $("#btm").append($('<li>').text("Users Online"));
                $("#btm").append($('<li>').text(usrname));
                $("#nick").hide();
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
        function EmitMessage() {
            socket.emit('chat message', usrname + ": " + $('#chatbox').val());
            $('#messages').append($('<li>').text("You" + ": " + $('#chatbox').val()));
            $('#chatbox').val('');
            $('#chatbox').focus();
        }
        $scope.SocketActions();
}]);