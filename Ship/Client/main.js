if (!singleplayer) {
    var socket = io();
    var user;

    socket.on('connect', function () {
        $('#error').hide();
        $('#error').html('');
        $('#noerror').show();

        // In case the server is coming back online for an active user
        if (user) {
            socket.emit('user', name);
        }
    });
}

var start = true;
var docWidth = $(document).width();
var docHeight = $(document).height();
var bg;
var ship1 = new Ship(docWidth / 2, docHeight - 60, 30);
var shots = [];
Ship.canFire = true;
var enemies = [];
var t = 0;

function setup() {
    createCanvas(docWidth - 40, docHeight - 40);
    bg = color(255);
}

function draw() {
    cursor(CROSS);
    background(bg);
    ship1.display();
    if (t > 10) {
        t = 0;
        Ship.canFire = true;
    }
    if (start) {
        for (var i = 0; i < 10; i++) {
            enemies.push(new Opp((i + 1) * (width / 10), 30));
        }
        start = false;
    }
    if (keyIsDown(LEFT_ARROW) && ship1.x >= 25) {
        ship1.x -= 5;
    } else if (keyIsDown(RIGHT_ARROW) && ship1.x <= width - 25) {
        ship1.x += 5;
    } else if (keyIsDown(UP_ARROW) && ship1.y <= 25) {
        ship1.y -= 5;
    } else if (keyIsDown(DOWN_ARROW) && ship1.y <= height - 25) {
        ship1.y += 5;
    }
    if (keyIsDown(32) && Ship.canFire) {
        shots.push(new Fire(ship1.x, ship1.y - 10));
        Ship.canFire = false;
    }
    for (var x = 0; x < enemies.length; x++) {
        for (var i = 0; i < shots.length; i++) {
            if (shots[i]) {
                shots[i].display();
                if (shots[i].y < 0) {
                    shots.splice(i, 1);
                }
            }
            if (enemies[x] && shots[i]) {
                if (Math.pow(Math.pow(shots[i].x - enemies[x].x, 2) + Math.pow(shots[i].y - enemies[x].y, 2), 1 / 2) < enemies[x].r) {
                    enemies.splice(x, 1);
                    shots.splice(i, 1);
                }
            }
        }
        enemies[x].display();
    }
    t += 1;
}
