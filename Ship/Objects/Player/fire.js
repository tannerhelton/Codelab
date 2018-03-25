function Bullet(x, y, team, vector) {
    Sprite.call(this, x, y, team);
    this.speed = 10;
    this.team = team;
    this.vector = vector;
}
Bullet.prototype = Object.create(Sprite.prototype);
Bullet.prototype.constructor = Bullet;
Bullet.prototype.r = 10;

Bullet.prototype.move = function () {
    this.y += this.vector.y;
    this.x += this.vector.x;

    if (this.y < -10 || this.y > height + 10) {
        var index = _sprites.indexOf(this);
        if (index != -1) {
            _sprites.splice(index, 1);
        }
    }
}

Bullet.prototype.display = function () {
    fill(0, 255, 255);
    ellipse(this.x, this.y, this.r, this.r);
}
