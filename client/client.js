$(document).ready(function () {
    $('#loginForm').submit(function () {
        socket = io();
        usrname = $("#name").val();        
        socket.emit('User Joined', $("#name").val());
        location.href = "#/chat";
    });
});
