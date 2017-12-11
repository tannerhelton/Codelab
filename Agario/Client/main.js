var mainUser = '';
$(document).ready(function () {
    var socketServer = 'http://localhost:3000/';
    var socket = io.connect(socketServer);
    var user;

    socket.on('connect', function () {
        $('#error').hide();
        $('#error').html('');
        $('#noerror').show();

        // in case the server is coming back online for an active user
        /* if (user) {
             socket.emit('user', name);
         }*/
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

    socket.on('message', function (data) {
        printOut(data.user + ': ' + data.message);
    })

    socket.on('connectUser', function (data) {
        console.log(data.text);
        mainUser = data.text;
    })

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
        }
    });

    $('#message').keypress(function (event) {
        if (event.keyCode == 13 || event.which == 13) {
            var input = $('#message');
            var text = input.val().trim();
            if (text.length > 0) {
                socket.emit('message', text);
            }
            input.val('');
        }
    });

    $('#restart').click(function () {
        location.reload();
    });

    socket.emit('data', {
        x: mouseX,
        y: mouseY
    });

});

function printOut(msg) {
    $('<div/>').text(msg).appendTo('#log');
}

function setup() {
    createCanvas($(window).width() - 50, $(window).height() / 1.5);
    rectMode(CENTER);
}

function draw() {
    background(200);
    var x = mouseX;
    var y = mouseY;

    push();
    translate(x, y);
    noStroke();
    fill('black');
    textSize(32);
    text(mainUser, 0, -25);
    ellipse(0, 0, 15, 15);
    pop();
}
