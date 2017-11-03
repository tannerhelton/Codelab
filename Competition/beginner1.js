var scan = require('readline-sync');
var readLine = scan.question;
var readInt = scan.questionInt;
var readFloat = scan.questionFloat;

var phrase = readLine("Enter the phrase: ");

console.log(phrase.replace("hte", "the"));
