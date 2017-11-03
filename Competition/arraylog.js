var scan = require('readline-sync');
var readLine = scan.question;
var readInt = scan.questionInt;
var readFloat = scan.questionFloat;

var a = 1;
console.log(a);

var word = "Catch the dog.";
console.log(word);

for (var i = 0; i < word.length; i++) {
    console.log(word.charAt(i));
}

for (var i = 0; i < word.length; i += 3) {
    console.log(word.charAt(i));
}

var c = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var x = 0;
var z = 0;

for (var i = 0; i < c.length; i++) {
    x += c[i];
}
console.log(x);

for (var i = 0; i < c.length; i++) {
    if (c[i] % 2 == 0) {
        z += c[i];
    }
}

console.log(z);
