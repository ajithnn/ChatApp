chat.controller('loginController', ['$scope', '$window', 'socketService',
function ($scope, $window, sockserv) {
        $scope.login = function () {
            socket = io();
            usrname = $scope.username;
            sockserv.EmitSocketEvents('User Joined', $scope.username);
            $window.location.href = "#/chat";
        }
  }]);