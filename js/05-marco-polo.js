/*eslint-env browser*/

var number = 1;
for (number = 1; number <= 100; number+= 1) {
 if (number % 3 === 0) {
 document.write("Marco!" + "<br>");
} if (number % 5 === 0) {
    document.write("Polo!" + "<br>");
} else {
    document.write(number + "<br>");
}
}
