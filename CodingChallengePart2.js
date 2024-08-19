/*Coding Challenge #2*/

console.log("Coding Challenge #2");
//1 
var compareBMI = function (markBMI, johnBMI) {
    if (markBMI > johnBMI) {
        return console.log("Mark's BMI (" + markBMI + ") is higher than John's (" + johnBMI + ")");
        ;
    } else {
        return console.log("John's BMI (" + johnBMI + ") is higher than Mark's (" + markBMI + ")");
    }
}

compareBMI(markBMI, johnBMI);
