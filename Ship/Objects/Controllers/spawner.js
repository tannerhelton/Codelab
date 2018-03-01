function SpawnEnemy(x, y) {
    var self = this;
    self.x = x;
    self.y = y;

    self.run = function () {
        var p = round(random(5));
        if (round(random(self.x, self.y)) == (self.y - self.x) / 2 + self.x) {
            if (p == 1) {
                _sprites.push(new Opp(random(width), 30, 1));
                console.log('opp');
            } else if (p == 2) {
                _sprites.push(new RainDropEnemy(0, 0, 1));
                console.log('rain');
            } else if (p == 3) {
                _sprites.push(new SideEnemy(0, 0, 1));
                console.log('side');
            }
        }
    }
}
