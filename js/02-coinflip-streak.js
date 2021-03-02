/*eslint-env browser*/
var coinFlip;
 do {
    coinFlip = Math.floor(Math.random() * 2);
    if (coinFlip === 0) {
        document.write("Heads" + "<br>");
 
    } if (coinFlip === 1) {
        document.write("Tails" + "<br>");
 }
} while (coinFlip === 1);



/*var coinFlip = Math.round(Math.random()) +1;*/