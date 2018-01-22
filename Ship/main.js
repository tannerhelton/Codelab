var bg;
DraggableCircle.lock = false;
var c1 = new DraggableCircle(50, 50, 50);
var c2 = new DraggableCircle(200, 50, 50);
var ship1 = new Ship(200, 200);
var shots = [];

function setup() {
    createCanvas(800, 600);
    bg = color(200);
}

function draw() {
    background(bg);
    c1.display();
    c2.display();
    ship1.display();

    if (keyIsPressed) {
        if (keyCode == LEFT_ARROW) {
            ship1.x -= 5;
        } else if (keyCode == RIGHT_ARROW) {
            ship1.x += 5;
        }
        if (keyCode == 32) {
            shots.push(new Fire(ship1.x, ship1.y));
        }
    }
    for (var i = 0; i < shots.length; i++) {
        shots[i].display();
    }
}

function Fire(x, y) {
    var self = this;
    self.x = x;
    self.y = y;

    self.display = function () {
        if (self.y > 0) {
            self.y -= 5;
            ellipse(self.x, self.y, 5, 5);
        }
    }
}

function Ship(x, y) {
    var self = this;

    self.x = x;
    self.y = y;

    self.display = function () {
        rect(self.x, self.y, 30, 15);
    };
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
