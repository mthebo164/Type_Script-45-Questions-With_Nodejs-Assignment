// Define Variables
let apple = "apple";
let uppercaseApple = "Apple"
let ten = 10;
let twenty = 20;
let cars = ["Bmw", "Mercedes", "Audi", "Dodge", "Ferrari", "Lamborgini"];

// Test for Equality & Inequality with Strings

console.log ("Is an apple is  equal to an apple?");
console.log (apple == "apple");

console.log ("\n is an apple is not equal to an apple?");
console.log (apple != "apple");

// Tests using lowercase function

console.log ("\n Is an Apple is equal to an apple after converting to lowercase?");
console.log (uppercaseApple.toLowerCase() == "apple");

console.log ("\n is an Apple is not equal to an apple after converting to lowercase?");
console.log (uppercaseApple.toLowerCase() != "apple");

// Numerical Test

console.log ("\n is ten is equal to twenty?");
console.log (ten == twenty);

console.log ( "\n is ten is not equal to twenty?");
console.log (ten != twenty);

// Greater then

console.log ("\n is ten is greater then zero?");
console.log (ten > 0);

// Less then

console.log ("\n is twenty is less then ten?");
console.log (twenty < 10);

//Greater then or Equal to

console.log ("\n is ten is greater then or equal to 5?");
console.log (ten >= 5);


// Less then or Equal to

console.log ("\n is twenty is less then or equal to 10?");
console.log (twenty <= 10);

// Testing using "And" & "Or" operators

console.log ("\n twenty is not equal to ten  and twenty is greater then ten ?");
console.log (twenty != 10 && twenty > 10);

// Using "Or"

console.log ("\n twenty is greater then 50 or twenty is equal to 20 ?");
console.log (20 > 50 || 20 == 20);

// Test whether an item is included in Array

console.log ("\n Is Audi is include in my Cars Array");
console.log (cars. includes ("Audi"));