var _bg;
var player = new Ship($(document).width() / 2, $(document).height() - 90, 30);
var shots = [];
Ship.canFire = true;
var enemies = [];
var t = 0;

function setup() {
    createCanvas($(document).width() - 40, $(document).height() - 60);
    _bg = color(25, 25, 25);
}

function draw() {
    background(_bg);
    player.display();
    player.move();
    player.shoot();

    //    if (start) {
    //        for (var i = 0; i < 9; i++) {
    //            enemies.push(new Opp((i + 1) * (width / 10), 30));
    //        }
    //        start = false;
    //    }

    for (var i = 0; i < shots.length; i++) {
        if (shots[i]) {
            shots[i].display();
            if (shots[i].y < 0) {
                shots.splice(i, 1);
            }
        }
    }
    for (var x = 0; x < enemies.length; x++) {
        if (enemies[x]) {
            enemies[x].display();
        }
        for (var i = 0; i < shots.length; i++) {
            if (enemies[x] && Math.pow(Math.pow(shots[i].x - enemies[x].x, 2) + Math.pow(shots[i].y - enemies[x].y, 2), 1 / 2) < 40) {
                enemies.splice(x, 1);
            }
        }
    }
    t += 1;
}
