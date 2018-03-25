function Opp(x, y, team) {
    Sprite.call(this, x, y, team);
    this.canFire = true;
}

Opp.prototype = Object.create(Sprite.prototype);
Opp.prototype.constructor = Opp;
Opp.prototype.r = 40;

Opp.prototype.move = function () {
    var c = 12
    var C = dist(player.x, player.y, this.x, this.y)
    var B = dist(this.x, player.y, this.x, this.y)
    var A = dist(this.x, player.y, player.x, player.y)
    if (player.x <= this.x) {
        A = -A;
    }
    var a = (c * A) / C
    var b = (c * B) / C
    var vector = createVector(a, b);

    var self = this;

    if (self.canFire) {
        self.canFire = false;
        _sprites.push(new Bullet(this.x, this.y, this.team, vector));
        setTimeout(function () {
            self.canFire = true;
        }, 2000);
    }

}

Opp.prototype.display = function () {
    fill(200, 0, 0);
    ellipse(this.x, this.y, this.r, this.r);
}
