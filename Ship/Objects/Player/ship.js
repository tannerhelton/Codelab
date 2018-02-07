function Ship(x, y, r) {
    var self = this;

    self.x = x;
    self.y = y;
    self.r = r;

    self.display = function () {
        fill(0);
        ellipse(self.x, self.y, self.r, self.r);
    };

    self.move = function () {
        if (keyIsDown(LEFT_ARROW) && self.x >= 25) {
            self.x -= 5;
        } else if (keyIsDown(RIGHT_ARROW) && self.x <= width - 25) {
            self.x += 5;
        }
        if (keyIsDown(UP_ARROW) && self.y <= 25) {
            self.y -= 5;
        } else if (keyIsDown(DOWN_ARROW) && self.y <= height - 25) {
            self.y += 5;
        }
    }

    self.shoot = function () {
        if (t > 10) {
            t = 0;
            Ship.canFire = true;
        }
        if (keyIsDown(32) && Ship.canFire) {
            shots.push(new Fire(self.x, self.y - 10));
            Ship.canFire = false;
        }
    }
}
