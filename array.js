// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array
let fruits = ["apple", "banana", "mango", "orange", "pineapple"];
console.log(fruits[3]);

fruits[2] = "jambura";
console.log(fruits);


// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output

let touristDestinations = ["Cox's Bazar", "Sundarbans", "Bandarban"];
touristDestinations.push("Sylhet");
console.log(touristDestinations);

touristDestinations.push("Saint Martin", "Rangamati");
console.log(touristDestinations);
touristDestinations.pop();
console.log(touristDestinations);

// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.

let books = ["HTML Guide", "CSS Mastery", "JavaScript Basics", "React in Action", "Python for Beginners"];
if(books.includes("JavaScript Basics")){
    console.log("Yes! The array contains a JavaScript book");
}
else{
    console.log("No! The array does not contain a JavaScript book.");
}

// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.

let fruits2 = ["apple", "banana", "mango"];
let city = "Dhaka";
let numbers = [10, 20, 30];
let age = 25;
let isStudent = true; 
console.log(Array.isArray(fruits) ? "fruits is an array" : "fruits is NOT an array");
console.log(Array.isArray(city) ? "city is an array" : "city is NOT an array");
console.log(Array.isArray(numbers) ? "numbers is an array" : "numbers is NOT an array");
console.log(Array.isArray(age) ? "age is an array" : "age is NOT an array");
console.log(Array.isArray(isStudent) ? "isStudent is an array" : "isStudent is NOT an array");


// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().

let fruits3 = ["apple", "banana", "mango"];
let vegetables = ["carrot", "potato", "tomato"];


let combinedArray = fruits3.concat(vegetables);


console.log("Fruits3 Array:", fruits3);
console.log("Vegetables Array:", vegetables);
console.log("Combined Array:", combinedArray);
