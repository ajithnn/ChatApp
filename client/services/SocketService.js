chat.service('socketService', ['$rootScope',
    function ($rootScope) {
        this.socket;
        this.usrname;

        this.openSocket = function () {
            this.socket = io();
        }
        this.SetUsername = function (usr) {
            this.usrname = usr;
        }
        this.setupSocketEvents = function () {
            this.socket.on('chat message', function (msg) {
                $rootScope.$broadcast('chat msg', msg);
            });
            this.socket.on('User Disconnected', function (m, list) {
                $rootScope.$broadcast('Usr Disc', list);
            });
            this.socket.on('New User', function (m, list) {
                $rootScope.$broadcast('Nw Usr', list);
            });
        }

        this.EmitSocketEvents = function (event, data) {
            this.socket.emit(event, data);
        }
}]);