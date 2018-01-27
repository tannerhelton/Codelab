function Ship(x, y, r) {
    var self = this;

    self.x = x;
    self.y = y;
    self.r = r;

    self.display = function () {
        fill(0);
        ellipse(self.x, self.y, self.r, self.r);
    };
}
