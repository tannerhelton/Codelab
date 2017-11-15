function setup() {
    createCanvas(640, 480);
}

function draw() {
    background('#FFFAED');
    var x = mouseX;
    var y = mouseY;

    /*
    //Face
    noStroke();
    fill('#52C5DC');
    ellipse(x, y, 200, 200);

    //Nose
    fill('#EFB8D2');
    ellipse(x, y + 30, 64, 64);

    //Left Eye and pupil
    eye('#FFFFFF', 42, -26, '#7FC35E');

    //Right Eye and pupil
    eye('#FFFFFF', -42, -26, '#7FC35E');

    //Left Ear
    ear('#52C5DC', -100, -80, -1);

    //Left Ear
    ear('#52C5DC', 100, -80, 1);

    //Tounge
    fill('#EE3E36');
    arc(x - 20, y + 80, 40, 70, 0, PI + QUARTER_PI, CHORD);
*/
    //Face
    noStroke();
    fill('white');
    ellipse(x, y, 200, 200);

    //Nose
    fill('black');
    ellipse(x, y + 30, 64, 64);

    //Left Eye and pupil
    eye('black', 42, -26, 'white');

    //Right Eye and pupil
    eye('white', -42, -26, 'black');

    //Left Ear
    ear('black', -30, -100, -1);

    //Right Ear
    ear('white', 30, -100, 1);

    //Tounge
    fill('black');
    arc(x - 20, y + 80, 40, 70, 0, PI + QUARTER_PI, CHORD);
}

function eye(cL, xL, yL, pL) {
    fill(cL);
    ellipse(mouseX + xL, mouseY + yL, 64, 64);
    fill(pL);
    ellipse(mouseX + xL, mouseY + yL, 40, 40);
}

function ear(cL, xL, yL, sL) {
    fill(cL);
    push();
    translate(mouseX + xL, mouseY + yL);
    rotate(sL * Math.PI / 4);
    ellipse(0, 0, 52, 92);
    pop();
}
