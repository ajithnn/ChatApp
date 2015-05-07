var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var io = require('socket.io')(http);
var userdata = [];

app.use('/static',express.static(__dirname + '/client'));


app.get('*',function(req,res){
    res.sendFile(__dirname + '/client/Templates/index.html')
})

io.on('connection', function (socket) {
    // ----- Chat Message Event -------------      
    socket.on('chat message', function (msg) {
        socket.broadcast.emit('chat message', msg);
    });
    // ----- Disconnect Message Event -------------
    socket.on('disconnect', function () {
        for (var i = 0; i < userdata.length; i++) {
            if (userdata[i].id == socket.id) {
                var name = userdata[i].user;
                userdata.splice(i, 1);
                io.emit('User Disconnected', name + " disconnected", userdata);
            }
            console.log(socket.id + " is disconnected");
        }
    });
    // ----- User Joined Event -------------    
    socket.on('User Joined', function (username) {
        userdata.push({
            user: username,
            id: socket.id
        });
        console.log("Welcome "+ username);
        io.emit('New User', username, userdata)
    });

});
console.log("Listening....");
http.listen(process.env.PORT || 3000)
