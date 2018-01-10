var bg;
var c1 = new DraggableCircle(50, 50, 50);
var c2 = new DraggableCircle(200, 50, 50);

function setup() {
    createCanvas(800, 600);
    bg = color(200);
    DraggableCircle.numObs = 0;
}

function draw() {
    background(bg);
    c1.display();
    c2.display();
}

// A class called DraggableCircle
function DraggableCircle(x, y, r) {
    //Explicit reference to self
    var self = this;

    DraggableCircle.numObs++;

    //Public on the class
    self.x = x;
    self.y = y;
    self.r = r;

    // Private stuff
    var dragging = false;

    self.display = function () {

        // We need to drag when mouse is down
        //if (DraggableCircle == 1) {
        if (mouseIsPressed) {
            if (Math.pow(Math.pow((self.x - mouseX), 2) + Math.pow((self.y - mouseY), 2), 1 / 2) <= self.r) {
                fill(0, 0, 255);
                dragging = true;
            }

            if (dragging) {
                self.x = mouseX;
                self.y = mouseY;
            }
        } else {
            fill(0, 255, 0);
            dragging = false;
        }
        /*} else {
            if (Math.pow(Math.pow((self.x - mouseX), 2) + Math.pow((self.y - mouseY), 2), 1 / 2) <= self.r && mouseIsPressed) {
                fill(0, 0, 255);
                dragging = true;
            } else {
                fill(0, 255, 0);
                dragging = false;
            }

            if (dragging) {
                self.x = mouseX;
                self.y = mouseY;
            }
        }*/
        ellipse(self.x, self.y, self.r, self.r);
    }
}
