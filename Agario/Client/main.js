var mainUser = '';
var users = [];
var socketServer = 'http://localhost:3000/';
var socket = io.connect(socketServer);
var user;


var x = 0;
var y = 0;

function setup() {

    socket.on('connect', function () {
        $('#error').hide();
        $('#error').html('');
        $('#noerror').show();
    });

    socket.io.on('connect_error', function (err) {
        $('#error').html(err + '<br>Chat server offline');
        $('#error').show();
        $('#noerror').hide();
    });

    socket.on('welcome', function (data) {
        printOut(data.text);
    });

    socket.on('otherUserConnect', function (data) {
        printOut(data + ' connected');
    });

    socket.on('otherUserDisconnect', function (data) {
        printOut(data);
    });

    socket.on('connectUser', function (data) {
        mainUser = data.text;
    });

    $('#user-save').click(function () {
        var username = $('#user-name');
        var txt = username.val().trim();
        if (txt.length > 0) {
            name = txt;
            username.prop('disabled', true);
            $(this).hide();
            $('#controls').show();
            $('#message').prop('disabled', false);
            $('#restart').prop('disabled', false);
            user = name;
            socket.emit('user', user);
            users.push({
                x: 0,
                y: 0,
                name: user
            });
        }
    });


    $('#restart').click(function () {
        location.reload();
    });

    function printOut(msg) {
        $('<div/>').text(msg).appendTo('#log');
    }

    socket.on('update', function (stuff) {
        var p = 0;
        for (var i = 0; i < users.length; i++) {
            if (users[i].name == stuff.name) {
                users[i].x = stuff.x;
                users[i].y = stuff.y;
            } else {
                if (p >= users.length) {
                    users.push({
                        x: stuff.x,
                        y: stuff.y,
                        name: stuff.name
                    });
                } else {
                    p += 1;
                }
            }
        }
    });
    createCanvas($(window).width() - 50, $(window).height() / 1.5);
}

function draw() {
    background(200);
    x = mouseX;
    y = mouseY;
    socket.emit('data', {
        x: mouseX,
        y: mouseY,
        name: mainUser
    });
    noStroke();
    fill('black');
    textSize(32);
    if (users.length >= 1) {
        for (var i = 0; i < users.length; i++) {
            text(users[i].name, users[i].x, users[i].y - 25);
            ellipse(users[i].x, users[i].y, 15, 15);
        }
    }
}
