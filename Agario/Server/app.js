//This is used for creating a server with express
var express = require('express');
var app = express();
var http = require('http').Server(app);

//Sets the root's directory name in the server
var webroot = __dirname + '/../client/';

//Tells the server to use the root
app.use('/', express.static(webroot));

//Creates a server on port 3000
var server = http.listen(3000, function () {
    console.log('hosting from ' + webroot);
    console.log('server listening on http://localhost:3000/');
});

//Sets up socket.io so that we can actually do things with the server
var io = require('socket.io').listen(server);

//Create an array to later store the conencted users and their data
var users = [];

io.sockets.on('connection', function (socket) {
    //Has a little welcome message so that you know you've been connnected
    socket.emit('welcome', {
        text: 'Welcome to Agario'
    });

    //everytime draw is run data is called to update a users x, y
    socket.on('data', function (someData) {
        //It sends this data back to the user's computer to update his array
        socket.broadcast.emit('update', {
            x: someData.x,
            y: someData.y,
            name: someData.name,
            id: socket.id
        });
    });

    //sets variable clientIp to their ip, not really important other than for logging
    var clientIp = socket.request.connection.remoteAddress;
    //Logs the user's IP
    console.log('socket connected from ' + clientIp);

    //Called when a new user is made from a browser
    socket.on('user', function (data) {
        console.log(data.name + ' connected');

        //Sets placeholder values to show the ellipse offscreen
        data.x = -500;
        data.y = -500;
        data.id = socket.id;
        //Adds user to the array of users
        users.push(data);

        console.log('users : ' + users.length);
        //Copies over the existing array of users to the client's computer
        socket.emit('start', users);
        //Sends a message out to all other computers saying that a new user is connected
        socket.broadcast.emit('otherUserConnect', data);
    });

    //When someone quits/closes the window
    socket.on('disconnect', function () {
        if (!socket.user) {
            return;
        }
        //If a user exists then remove him from the array
        if (users.indexOf(socket.user) > -1) {
            console.log(socket.user + ' disconnected');
            users.splice(users.indexOf(socket.user), 1);
            socket.broadcast.emit('otherUserDisconnect', {
                name: socket.user
            });
        }
    });
});
