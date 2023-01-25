/* eslint-env browser */

//Gloabl Variables
var num1;
var num2;

//Prompt the user to enter number1 and number2
num1 = parseInt(window.prompt("Enter the first number:"));
num2 = parseInt(window.prompt("Enter the second number:"));

//Add conditions to find which is the largest number
if (num1 == num2) {
    window.document.write("Both the numbers are equal");
} else if (num1 > num2) {
    window.document.write("Largest number is: " + String(num1));
} else if (num2 > num1) {
    window.document.write("Largest number is: " + String(num2));
} else {
    window.document.write("Please enter a valid number");
}
