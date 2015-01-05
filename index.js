var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http,{pingInterval:5000,pingTimeout:10000});
var userdata = []; 

app.get('/', function(req, res){
  res.sendFile('/Users/z085331/chatExample/index.html');
});

io.on('connection', function(socket){
// ----- Chat Message Event -------------      
  socket.on('chat message', function(msg){
    socket.broadcast.emit('chat message', msg);
  });
// ----- Disconnect Message Event -------------
  socket.on('disconnect', function(){
	for(var i=0;i<userdata.length;i++){
	if(userdata[i].id == socket.id)
	{
    var name = userdata[i].user;
	userdata.splice(i,1);
    io.emit('User Disconnected', name + " disconnected",userdata);
	}
    console.log(socket.id + " is disconnected");
}
});
// ----- User Joined Event -------------    
socket.on('User Joined', function(username){
	userdata.push({user:username,id:socket.id});
	io.emit('New User',username, userdata)
});
    
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
