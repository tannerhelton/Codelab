function SpawnEnemy(x, y) {
    var self = this;
    self.x = x;
    self.y = y;

    self.run = function () {
        if (round(random(self.x, self.y)) == (self.y - self.x) / 2 + self.x) {
            _sprites.push(new Opp(0, 0));
        }
    }
}
