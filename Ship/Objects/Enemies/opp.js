function Opp(x, y) {
    var self = this;
    self.x = x;
    self.y = y;

    self.display = function () {
        fill(200, 0, 0);
        ellipse(self.x, self.y, 40, 40);
    }
    self.move = function () {
        self.x += 5;
        if (self.x > width) {
            var index = enemies.indexOf(self);
            enemies.splice(index, 1);
        }
    }
}
