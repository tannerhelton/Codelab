var bg;
DraggableCircle.lock = false;
var c1 = new DraggableCircle(50, 50, 50);
var c2 = new DraggableCircle(200, 50, 50);

function setup() {
    createCanvas(800, 600);
    bg = color(200);
}

function draw() {
    background(bg);
    c1.display();
    c2.display();
}

// A class called DraggableCircle
function DraggableCircle(x, y, r, rc, ac) {
    //Explicit reference to self
    var self = this;

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
                fill(self.col1.r, self.col1.g, self.col1.b);
                self.dragging = true;
                DraggableCircle.lock = true;
            }
            if (self.dragging) {
                self.x = mouseX;
                self.y = mouseY;
            }
        } else {
            DraggableCircle.lock = false;
            fill(self.col2.r, self.col2.g, self.col2.b);
            self.dragging = false;
        }
        ellipse(self.x, self.y, self.r, self.r);
    }
}
