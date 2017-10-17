var scan = require('readline-sync');
var readLine = scan.question;
var readInt = scan.questionInt;
var readFloat = scan.questionFloat;

var phrase = readLine("What's the phrase? ");

console.log("**" + phrase.replace(/./g, '*') + "**");
console.log("* " + phrase.replace(/./g, ' ') + " *");
console.log("* " + phrase + " *");
console.log("* " + phrase.replace(/./g, ' ') + " *");
console.log("**" + phrase.replace(/./g, '*') + "**");
