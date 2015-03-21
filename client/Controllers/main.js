chat.controller('chatboxController', ['$scope','$timeout','socketService',
    function ($scope,$timeout,sockserv) {
        $scope.Messages = [];
        $scope.Online = [];
        $scope.showMobileMenu = false;
        $scope.Playaudio = '';
        sockserv.setupSocketEvents();

        $scope.$on('chat msg', function (event,msg) {
            $scope.Messages.push({
                id: "recv",
                msg: msg
            });
            $scope.Playaudio = 'Yes';
            $timeout(function(){ $scope.Playaudio = '';},1000);            
            $scope.$apply();
        });
        
        $scope.$on('Usr Disc', function (event,list) {
            $scope.Online = [];
            for (i = 0; i < list.length; i++) {
                $scope.Online.push({
                    id: list[i].user,
                    msg: list[i].user
                });
            }
            $scope.$apply();
        });
        
        $scope.$on('Nw Usr', function (event,list) {
            console.log(list);
            $scope.Online = [];
            for (i = 0; i < list.length; i++) {
                $scope.Online.push({
                    id: list[i].user,
                    msg: list[i].user
                });
            }
            $scope.$apply();
        });

        $scope.triggerMessage = function (event) {
            if (event.which == 13) {
                EmitMessage();                
            }
        }
        $scope.triggerMsg = function () {
            EmitMessage();
        }
        $scope.showUsers = function () {
            $scope.showMobileMenu = !$scope.showMobileMenu;
        }

        function EmitMessage() {
            sockserv.EmitSocketEvents('chat message', usrname + ": " + $scope.MessageData);
            $scope.Messages.push({
                id: "mine",
                msg: "You" + ": " + $scope.MessageData
            });
            $scope.MessageData = '';
        }

}]);