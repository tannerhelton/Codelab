function Opp(x, y, team) {
    Sprite.call(this, x, y, team);
}

Opp.prototype = Object.create(Sprite.prototype);
Opp.prototype.constructor = Opp;
Opp.prototype.r = 40;

Opp.prototype.move = function () {}

Opp.prototype.display = function () {
    fill(200, 0, 0);
    ellipse(this.x, this.y, this.r, this.r);
}
