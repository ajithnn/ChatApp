chat.service('socketService',['$rootScope',function($rootScope){
    
    this.setupSocketEvents = function(){
        socket.on('chat message', function (msg) {
            console.log("Chat Message");
            $rootScope.$broadcast('chat msg',msg);
        });
        socket.on('User Disconnected', function (m, list) {
            $rootScope.$broadcast('Usr Disc',list);
        });
        socket.on('New User', function (m, list) {
            console.log("New User");
            $rootScope.$broadcast('Nw Usr',list);
        });
    }
    
    this.EmitSocketEvents = function(event,data){
        socket.emit(event,data);
    }
}]);