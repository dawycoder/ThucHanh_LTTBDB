/*Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
*/
/*Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.*/

console.log("Test data 1:");

//1
let markMass = 78;
let markHeight = 1.69;

let johnMass = 92;
let johnHeight = 1.95;

var calBMI = function (mass, height) {
    return mass / height * height;
}

//2
let markBMI = calBMI(markMass, markHeight);
console.log("Mark's BMI: " + markBMI);

let johnBMI = calBMI(johnMass, johnHeight);
console.log("John's BMI:" + johnBMI);

//3 
let markBMIHigher = markBMI > johnBMI;
console.log(markBMIHigher);

console.log("Test data 2:");

let markMass2 = 95;
let markHeight2 = 1.88;

let johnMass2 = 85;
let johnHeight2 = 1.76;

var calBMI = function (mass, height) {
    return mass / height * height;
}

//2
let markBMI2 = calBMI(markMass2, markHeight2);
console.log("Mark's BMI: " + markBMI2);

let johnBMI2 = calBMI(johnMass2, johnHeight2);
console.log("John's BMI:" + johnBMI2);

//3 
let markBMIHigher2 = markBMI2 > johnBMI2;
console.log(markBMIHigher2);