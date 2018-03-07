function SideEnemy(x, y, team) {
    Sprite.call(this, x, y, team);
    this.speed = 5;
}

SideEnemy.prototype = Object.create(Sprite.prototype);
SideEnemy.prototype.constructor = SideEnemy;
SideEnemy.prototype.r = 40;

SideEnemy.prototype.move = function () {
    this.x += this.speed;
    if (this.x > width) {
        this.y = random(0 + this.r, height - this.r);
        this.x = random(-250, -50);
    }
    if (this.x % 37 == 0) {
        _sprites.push(new Bullet(this.x, this.y, 1));
    }
}

SideEnemy.prototype.display = function () {
    fill(0, 255, 255);
    ellipse(this.x, this.y, this.r, this.r);
}
