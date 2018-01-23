var docWidth = $(document).width();
var docHeight = $(document).height();
var bg;
DraggableCircle.lock = false;
var c1 = new DraggableCircle(50, 50, 50);
var c2 = new DraggableCircle(200, 50, 50);
var ship1 = new Ship(docWidth / 2, docHeight - 60);
var shots = [];
Ship.canFire = true;
var t = 0;

function setup() {
    rectMode(CENTER);
    createCanvas(docWidth - 40, docHeight - 40);
    bg = color(255);
}

function draw() {
    cursor(CROSS);
    background(bg);
    c1.display();
    c2.display();
    ship1.display();

    if (t > 20) {
        t = 0;
        Ship.canFire = true;
    }
    if (keyIsPressed) {
        if (keyIsDown(LEFT_ARROW)) {
            ship1.x -= 5;
        } else if (keyIsDown(RIGHT_ARROW)) {
            ship1.x += 5;
        }
        if (keyIsDown(32) && Ship.canFire) {
            shots.push(new Fire(ship1.x, ship1.y));
            Ship.canFire = false;
        }
    }
    for (var i = 0; i < shots.length; i++) {
        if (shots[i].y < 0) {
            shots.splice(i, 1);
        } else {
            shots[i].display();
        }
    }
    t += 1;
}

function Ship(x, y) {
    var self = this;

    self.x = x;
    self.y = y;

    self.display = function () {
        rect(self.x, self.y, 30, 15);
    };
}

function Fire(x, y) {
    var self = this;
    self.x = x;
    self.y = y;

    self.display = function () {
        self.y -= 5;
        ellipse(self.x, self.y, 5, 5);
    }
}

// A class called DraggableCircle
function DraggableCircle(x, y, r) {
    //Explicit reference to self
    var self = this;
    var c;

    //Public on the class
    self.x = x;
    self.y = y;
    self.r = r;
    self.col1 = {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
    };
    self.col2 = {
        r: Math.floor(Math.random() * 255),
        g: Math.floor(Math.random() * 255),
        b: Math.floor(Math.random() * 255)
    };

    // Private stuff
    self.dragging = false;

    self.display = function () {

        // We need to drag when mouse is down
        if (mouseIsPressed) {
            if (Math.pow(Math.pow((self.x - mouseX), 2) + Math.pow((self.y - mouseY), 2), 1 / 2) <= self.r && DraggableCircle.lock == false) {
                c = color(self.col1.r, self.col1.g, self.col1.b);
                self.dragging = true;
                DraggableCircle.lock = true;
            }
            if (self.dragging) {
                self.x = mouseX;
                self.y = mouseY;
            }
        } else {
            DraggableCircle.lock = false;
            c = color(self.col2.r, self.col2.g, self.col2.b);
            self.dragging = false;
        }
        fill(c);
        ellipse(self.x, self.y, self.r, self.r);
    }
}
