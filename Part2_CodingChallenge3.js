// Coding Challenge #3

/* BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter) */

//1 


const mark = {
    name: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
    }
}
const john = {
    name: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
    }
}

mark.calcBMI();
john.calcBMI();

console.log(mark.BMI, john.BMI);

if (mark.BMI > john.BMI) {
    console.log(`${mark.name}'s BMI (${mark.BMI}) is higher than ${john.name}'s BMI (${john.BMI})`);
}
