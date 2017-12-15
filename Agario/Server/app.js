var express = require('express');
var app = express();
var http = require('http').Server(app);

var webroot = __dirname + '/../client/';

app.use('/', express.static(webroot));

var server = http.listen(3000, function () {
    console.log('hosting from ' + webroot);
    console.log('server listening on http://localhost:3000/');
});

var users = [];
var usr = [];

var io = require('socket.io').listen(server);

var currentConnections = {};
io.sockets.on('connection', function (socket) {
    currentConnections[socket.id] = {
        socket: socket
    };
    socket.on('data', function (someData) {
        currentConnections[socket.id].x = someData.x;
        currentConnections[socket.id].y = someData.y;
        currentConnections[socket.id].name = someData.name;
        socket.emit('update', {
            x: currentConnections[socket.id].x,
            y: currentConnections[socket.id].y,
            name: currentConnections[socket.id].name
        });
    });
    var clientIp = socket.request.connection.remoteAddress;

    console.log('socket connected from ' + clientIp);

    socket.emit('welcome', {
        text: 'Welcome to Agario'
    });

    socket.on('user', function (name) {
        console.log(name + ' connected');
        users.push(name);
        socket.user = name;
        console.log('users : ' + users.length);
        socket.broadcast.emit('otherUserConnect', name);
        socket.emit('connectUser', {
            text: name
        });

    });

    socket.on('size', function (name) {
        users.push(name);
        socket.user = name;
        console.log('users : ' + users.length);
        socket.broadcast.emit('otherUserConnect', name);
    });

    socket.on('disconnect', function () {
        if (!socket.user) {
            return;
        }
        if (users.indexOf(socket.user) > -1) {
            console.log(socket.user + ' disconnected');
            users.splice(users.indexOf(socket.user), 1);
            socket.broadcast.emit('otherUserDisconnect', socket.user);
        }
        delete currentConnections[socket.id];
    });
});
