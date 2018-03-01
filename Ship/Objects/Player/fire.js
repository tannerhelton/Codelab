function Bullet(x, y, team) {
    Sprite.call(this, x, y, team);
    this.speed = 10;
    this.team = team;
}
Bullet.prototype = Object.create(Sprite.prototype);
Bullet.prototype.constructor = Bullet;
Bullet.prototype.r = 10;

Bullet.prototype.move = function () {
    if (this.team == 0) {
        this.y -= this.speed;
    }
    if (this.team == 1) {
        this.y += this.speed;
    }
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
