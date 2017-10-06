// --- Tanner Helton 2017 ---

var readlineSync = require('readline-sync');
var readInt = readlineSync.questionInt;
var readFloat = readlineSync.questionFloat;
var readLine = readlineSync.question;

var width = readFloat("What is the width? ");
var length = readFloat("What is the length? ");

var a = 0;
var b = 0;
var c = 0;

var radius = 0;
var area = length * width;

if (width > length) {
    a = (((3.14159 * length * length) / 4) * 2) / area * 100;
    b = (Math.pow(length / 2, 2) * 3.14159) / area * 100;
    c = ((Math.pow(width / 4, 2) * 3.14159) * 2) / area * 100;
} else if (length > width) {
    a = (((3.14159 * width * width) / 4) * 2) / area * 100;
    b = (Math.pow(width / 2, 2) * 3.14159) / area * 100;
    c = ((Math.pow(length / 4, 2) * 3.14159) * 2) / area * 100;
} else if (width == length) {
    a = (((3.14159 * length * length) / 4) * 2) / area / 2 * 100;
    b = (Math.pow(width / 2, 2) * 3.14159) / area * 100;
    c = ((Math.pow(length / 4, 2) * 3.14159) * 2) / area * 100;
}

if (a > b && a > c) {
    if (a != b || a != c) {
        console.log("A best");
    }
} else if (b > a && b > c) {
    if (b != a || b != c) {
        console.log("B best");
    }
} else if (c > a && c > b) {
    if (c != a || c != b) {
        console.log("C best");
    }
} else {
    if (a == b) {
        console.log("A best");
    } else if (b == c) {
        console.log("B best");
    } else if (a == c) {
        console.log("A best");
    }
}

console.log('A: ' + a);

console.log('B: ' + b);

console.log('C: ' + c);
