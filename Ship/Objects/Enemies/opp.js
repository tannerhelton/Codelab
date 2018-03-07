function Opp(x, y, team) {
    Sprite.call(this, x, y, team);
}

Opp.prototype = Object.create(Sprite.prototype);
Opp.prototype.constructor = Opp;
Opp.prototype.r = 40;

Opp.prototype.move = function () {
    var vector = createVector(0, -2 * this.speed);
    this.canFire = false;
    _sprites.push(new Bullet(this.x, this.y, this.team, vector));
    setTimeout(function () {
        this.canFire = true;
    }, 1000);
}

Opp.prototype.display = function () {
    fill(200, 0, 0);
    ellipse(this.x, this.y, this.r, this.r);
}
