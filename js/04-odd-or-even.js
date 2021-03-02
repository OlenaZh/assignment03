/*eslint-env browser*/
/*var number = 0;
for (number = 0; number <= 15; number+= 1) {
 if (number % 2 === 0) {
 document.write(number + " is even" + "<br>");
} else {
    document.write(number + " is odd" + "<br>");
}
}*/

var number = 0;
do {
    if (number % 2 === 0) {
        document.write(number + " is even" + "<br>");
       } else {
           document.write(number + " is odd" + "<br>");
       }
       number+= 1;
} while (number <= 15);



 