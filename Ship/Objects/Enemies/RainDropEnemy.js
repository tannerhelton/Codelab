function RainDropEnemy(x, y, team) {
    Sprite.call(this, x, y, team);
    this.speed = 2.5;
}

RainDropEnemy.prototype = Object.create(Sprite.prototype);
RainDropEnemy.prototype.constructor = RainDropEnemy;
RainDropEnemy.prototype.r = 40;

RainDropEnemy.prototype.move = function () {
    this.y += this.speed;
    if (this.y > height) {
        this.x = random(0 + this.r, width - this.r);
        this.y = random(-250, -50);
    }
}

RainDropEnemy.prototype.display = function () {
    fill(0, 255, 255);
    ellipse(this.x, this.y, this.r, this.r);
}
