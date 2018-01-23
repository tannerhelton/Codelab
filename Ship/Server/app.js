var express = require('express');
var app = express();
var http = require('http').Server(app);

var webroot = __dirname + '/../Client/';

app.use('/', express.static(webroot));

var server = http.listen(3000, function () {});

var users = [];

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    var clientIp = socket.request.connection.remoteAddress;

    socket.on('disconnect', function () {
        if (!socket.user) {
            return;
        }
        if (users.indexOf(socket.user) > -1) {
            console.log(socket.user + ' disconnected');
            users.splice(users.indexOf(socket.user), 1);
            socket.broadcast.emit('otherUserDisconnect', socket.user);
        }
    });
});
