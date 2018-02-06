function Opp(x, y) {
    var self = this;
    self.x = x;
    self.y = y;

    self.display = function () {
        fill(0);
        ellipse(self.x, self.y, 40, 40);
    }
}
