var bg;

function setup() {
    createCanvas(800, 600);
    bg = color(200);
}

function draw() {
    background(bg);
    ellipse(mouseX, mouseY, 50, 50);
}
