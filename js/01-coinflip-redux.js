/*eslint-env browser*/
var coinFlip;
var i;
var choice = prompt ("Enter number of flipping");
for (i =  1; i <= choice; i+= 1) {
    var coinFlip = Math.floor(Math.random() * 2);
    if (coinFlip === 0) {
        document.write("Heads");
 
    } if (coinFlip === 1) {
        document.write("Tails");
}
}