function Fire(x, y) {
    var self = this;
    self.x = x;
    self.y = y;

    self.display = function () {
        self.y -= 5;
        fill(200, 10, 10);
        ellipse(self.x, self.y, 5, 5);
    }
}
