/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
// free Coke
let burgerPrice = 600;

if (burgerPrice > 500) {
    console.log("You can take a free Coke");
} else {
    console.log("You have to buy a Coke by 30tk");
}

// 30tk
let bP = 400;

if (bP > 500) {
    console.log("You can take a free Coke");
} else {
    console.log("You have to buy a Coke by 30tk");
}



/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
let weight = 70;  
let height = 1.75; 

let bmi = weight / (height * height);
console.log("Your BMI is: " + bmi.toFixed(2));

if (bmi < 18.5) {
    console.log("You are underweight.");
} else {
    if (bmi <= 24.9) {
        console.log("You are normal.");
    } else {
        if (bmi <= 29.9) {
            console.log("You are overweight.");
        } else {
            console.log("You are obese.");
        }
    }
}
