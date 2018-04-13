var a = 0;
var socket = io.connect();

function setup() {
    createCanvas(1000, 500, WEBGL);
    rectMode(CENTER);
}

socket.on('update', function (data) {
    a = parseInt(data.range);
});

function draw() {
    background(255);
    var x = mouseX;
    var y = mouseY;


    push();
    translate(x - width / 2, y - height / 2);
    noStroke();
    fill('pink');
    rect(0, 0, 50, 150);
    fill('lightblue');
    ellipse(0, -75, 65, 70);
    fill("white");
    ellipse(-10, -90, 15, 15);
    ellipse(10, -90, 15, 15);
    fill("black");
    ellipse(-10, -92, 5, 5);
    ellipse(10, -87, 5, 5);
    fill('red');
    ellipse(0, -75, 9, 9);
    ellipse(0, -75 + a, 9, 9);
    console.log(a);
    fill('purple');
    triangle(-25, 75, -10, 75, -35, 110);
    triangle(25, 75, 10, 75, 35, 110);
    pop();

    noStroke();
    donut(x, y);
}

function donut(xL, yL) {
    push();
    fill('black');
    translate(xL - width / 2, yL - height / 2);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(150, 10);
    pop();
}
