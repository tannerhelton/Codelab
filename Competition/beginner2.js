var scan = require('readline-sync');
var readLine = scan.question;
var readInt = scan.questionInt;
var readFloat = scan.questionFloat;

var start = readLine("Enter start: ");

var cal = [
    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    ['*******************************'],
    ['', '', '', '', '', '', ''],
    ['*******************************'],
    ['', '', '', '', '', '', ''],
    ['*******************************'],
    ['', '', '', '', '', '', ''],
    ['*******************************'],
    ['', '', '', '', '', '', ''],
    ['*******************************'],
    ['', '', '', '', '', '', ''],
    ['*******************************']
];

for (var i = 2; i < cal.length; i += 2) {
    for (var x = 0; x < cal[i].length; x++) {
        if (start == "U" && x == 0 && i == 2) {
            cal[i][x] = 1;
        } else if (start == "M" && x == 1 && i == 2) {
            cal[i][x] = 1;

        } else if (start == "T" && x == 2 && i == 2) {
            cal[i][x] = 1;

        } else if (start == "W" && x == 3 && i == 2) {
            cal[i][x] = 1;

        } else if (start == "R" && x == 4 && i == 2) {
            cal[i][x] = 1;

        } else if (start == "F" && x == 5 && i == 2) {
            cal[i][x] = 1;

        } else if (start == "S" && x == 6 && i == 2) {
            cal[i][x] = 1;

        } else {
            if (x > 0 && cal[i][x - 1] != '' && i >= 2 && cal[i][x - 1] <= 29) {
                cal[i][x] = cal[i][x - 1] + 1;
            } else if (x == 0 && i > 2 && cal[i - 2][x + 6] <= 29) {
                cal[i][x] = cal[i - 2][x + 6] + 1;
            }

        }
    }
}

if (start == "S") {
    cal.push(['30', '', '', '', '', '', '']);
    cal.push(['*******************************']);
}

console.log(cal);
