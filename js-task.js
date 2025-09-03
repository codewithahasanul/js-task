// **Task-1
// You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

let totalTaka = 1000;
let orangePrice = 350; // Price/kg
let applePrice = 350; // Price/kg

let totalCost = orangePrice + applePrice;
let changeMoney = totalTaka - totalCost;
console.log("Shopkeeper will return:", changeMoney); // Output is here


//**Task-2
//Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.
//Input:
//The first line of the input is the marks of the five subjects mentioned above, respectively.
//Output:
//Print the result in 2 decimal places.

// number of five subjects
let math = 80;
let biology = 75;
let chemistry = 85;
let physics = 90;
let bangla = 70;

let average = (math + biology + chemistry + physics + bangla) / 5; // average
console.log(average.toFixed(2)); // result in 2 decimal places



// **Task-3
//You task is to divide the given number by 5 and show the remainder as the output.
//Input:The first line of the input contains the number.
//Output: Print the remainder.
let number = 17; // input number
let remainder = number % 5;// divide number by 5
console.log(remainder); // output print

/**Task-4
What will be the result of the following codes:
var a = isNaN(‘11’);
var a = isNaN(2-10);
Explain your answers.
 */

var a = isNaN('11');
/**
 * '11' is a string.
 * isNaN() checks if a value is NaN (Not-a-Number).
 * JavaScript tries to convert '11' to a number → 11 (a valid number).
 * Since 11 is a number, it is not NaN.
 * So, a = false
 */


var a = isNaN(2-10);
/**
 * 2 - 10 = -8 (a number).
 * -8 is a valid number, not NaN.
 *  So, a = false
 */
