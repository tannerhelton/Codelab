var _bg;
var player = new Ship($(document).width() / 2, $(document).height() - 90, 30);
var spawner = new SpawnEnemy(0, 90);
var _sprites = [];
Ship.canFire = true;

function setup() {
    createCanvas($(document).width() - 40, $(document).height() - 60);
    _bg = color(25, 25, 25);
    _sprites.push(new RainDropEnemy(200, 50, 1))
}

function draw() {
    background(_bg);
    player.display();
    player.move();
    player.shoot();
    spawner.run();

    for (var i = 0; i < _sprites.length; i++) {
        _sprites[i].control();
        for (var p = 0; p < _sprites.length; p++) {
            if (_sprites[i] && _sprites[p]) {
                checkCollision(_sprites[i], _sprites[p]);
            }
        }
    }
}

function checkCollision(a, b) {
    if (a.isColliding(b) && a.team !== b.team) {
        a.handleCollision();
        b.handleCollision();
    }
}
