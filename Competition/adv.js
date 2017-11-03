var scan = require('readline-sync');
var readLine = scan.question;
var readInt = scan.questionInt;
var readFloat = scan.questionFloat;

var row1 = readLine("What's the firstrow? ");
var row2 = readLine("What's the secondrow? ");
var row3 = readLine("What's the thirdrow? ");
var result = "Niether one";

for (var i = 0; i < row1.length; i++) {
    if (row1[i] == "X" && row2[i] == "X" && row3[i] == "X") {
        result = "X wins";
    } else if (row1[i] == "O" && row2[i] == "O" && row3[i] == "O") {
        result = "O wins";
    } else if (row1[0] == "X" && row1[1] == "X" && row1[2] == "X") {
        result = "X wins";
    } else if (row2[0] == "X" && row2[1] == "X" && row2[2] == "X") {
        result = "X wins";
    } else if (row3[0] == "X" && row3[1] == "X" && row3[2] == "X") {
        result = "X wins";
    } else if (row1[0] == "O" && row1[1] == "O" && row1[2] == "O") {
        result = "X wins";
    } else if (row2[0] == "O" && row2[1] == "O" && row2[2] == "O") {
        result = "X wins";
    } else if (row3[0] == "O" && row3[1] == "O" && row3[2] == "O") {
        result = "X wins";
    } else if (row1[0] == "X" && row2[1] == "X" && row3[2] == "X") {
        result = "X wins";
    } else if (row1[2] == "X" && row2[1] == "X" && row3[0] == "X") {
        result = "X wins";
    } else if (row1[0] == "O" && row2[1] == "O" && row3[2] == "O") {
        result = "O wins";
    } else if (row1[2] == "O" && row2[1] == "O" && row3[0] == "O") {
        result = "O wins";
    }
}



console.log(result);
