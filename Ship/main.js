var _bg;
var player = new Ship($(document).width() / 2, $(document).height() - 90, 30);
var spawner = new SpawnEnemy(0, 200);
var _sprites = [];
var sprite = new Sprite(width / 2, height / 2, 0);
Ship.canFire = true;
var t = 0;

function setup() {
    createCanvas($(document).width() - 40, $(document).height() - 60);
    _bg = color(25, 25, 25);
}

function draw() {
    background(_bg);
    sprite.control();
    //    player.display();
    //    player.move();
    //    player.shoot();
    //spawner.run();

    //    for (var i = 0; i < shots.length; i++) {
    //        if (shots[i]) {
    //            shots[i].display();
    //            if (shots[i].y < 0) {
    //                shots.splice(i, 1);
    //            }
    //        }
    //    }
    //    for (var x = 0; x < enemies.length; x++) {
    //        if (enemies[x]) {
    //            enemies[x].display();
    //            enemies[x].move();
    //        }
    //        for (var i = 0; i < shots.length; i++) {
    //            if (enemies[x] && Math.pow(Math.pow(shots[i].x - enemies[x].x, 2) + Math.pow(shots[i].y - enemies[x].y, 2), 1 / 2) < 40) {
    //                enemies.splice(x, 1);
    //            }
    //        }
    //    }
    //t += 1;
}
