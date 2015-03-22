chat.controller('loginController', ['$scope', '$window', 'socketService',
function ($scope, $window, sockserv) {
        $scope.login = function () {
            sockserv.openSocket();
            sockserv.SetUsername($scope.username);
            sockserv.EmitSocketEvents('User Joined', sockserv.usrname);
            $window.location.href = "#/chat";
        }
  }]);