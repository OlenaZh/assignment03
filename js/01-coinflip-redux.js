/*eslint-env browser*/
var coinFlip;
var i;
var choice;
var coinFlip = Math.round(Math.random()) +1;
for (i =  0; i < 5; i+= 1) {
    if (coinFlip === 0) {
        document.write("Heads");
 break;
    } if (coinFlip === 1) {
        document.write("Tails");
}
}