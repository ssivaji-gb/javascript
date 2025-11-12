// 1. Greeting Function------------------
// Write a function greet(name) that takes a name and prints:
//  Hello, <name>! Welcome to JavaScript.

// function greet(name="geust"){
//    console.log( `Hello, ${name}!`)
//    console.log(" Welcome to JavaScript.")
// }
//greet()
//greet("sivaji")
// refered----------------- own coded

// 2. Sum of Two Numbers----------------------
// Write a function add(a, b) that returns the sum of two numbers.

// function add(a, b) {
//   return a + b;
// }
// let result = add(5, 7);
// console.log(result);
// refered----------------- own coded

// 3. Default Parameters
// Create a function multiply(a, b = 2) that multiplies two numbers.
//  If b is not passed, it should use the default value 2.

// function mul(a,b=2){
//     return a*b
// }
// console.log(mul(3,5));
// refered----------------- own coded

// 4. Find Maximum of Three Numbers
// Write a function findMax(a, b, c) that returns the largest of three numbers.

// function Maximum(a,b,c){

//     let largest = 0

//         if(a>b && a>c){
//             largest = a
//         }

//         else if(b>c){
//             largest = b
//         }

//         else{
//             largest = c
//         }

//     return "this is largest number :" + largest
// }

// console.log(Maximum(22,23,25));
// refered----------------- own coded

// 5. Count Words in a Sentence
// Write a function countWords(sentence) that returns how many words are in a sentence.

// function countWords(sentence) {
//   cw = sentence.split(" ");
//   a = cw.length;
//   console.log(a);
//   return a;
// }
// console.log(countWords("JavaScript is fun to learn"));
// refered----------------- own coded

// 6. Check Even or Odd
// Write an arrow function isEven(num) that returns true if a number is even, otherwise false.

// let num = (n) => {
//   if (n % 2 == 0) {
//     return `isEven : ${true}`;
//   } else {
//     return `isEven : ${false}`;
//   }
// };
// console.log(num(68));
// refered----------------- own coded

// 7. Calculate Factorial
// Write a function factorial(n) that returns the factorial of a number.

// function factorial(n) {
//   let su = 1;
//   for (i = 1; i<=n; i++) {
//     su *=i
//   }
//   return su;
// }
// console.log(factorial(5));
// refered----------------- own coded

// 8. Count Vowels in a String
// Write a function countVowels(str) that counts how many vowels (a, e, i, o, u) are in a string.

// function countVowels(words) {
//   let cv = 0;
//   let ch = ["a", "e", "i", "o", "u","A","E","I","O","U"];
//   for (let i = 0; i < words.length; i++) {
//     if (ch.includes(words[i])) {
//       cv += 1;
//     }
//   }
//   return cv;
// }
// console.log(countVowels("sathirabathisivajie"));
// refered----------------- own coded

// 9. Create a function to check prime number
// Write a function isPrime(num) that returns true if the number is prime, otherwise false.

// function isPrime(num){
//     let x=false
//        for(i=2;i<num;i++){
//         if(num%i==0){
//             x=true
//             break;
//         }else{
//             x=false
//         }
//        }
// if(x==true){
//     return "isnot prime"+num

// }else{
//     return "prime"+num

// }
// }
// console.log(isPrime(20));
// console.log(isPrime(2));
// console.log(isPrime(12));
// refered----------------- own coded

// 10. Closure Counter
// Write a function createCounter() that returns another function.
//  Every time the inner function is called, it should return the next count (1, 2, 3...).

// function createCounter(){
// let count=0
// return function(){
//     count++
//     return count
// }

// }
// let counter1=createCounter()
// let counter2=createCounter()
// console.log(counter1())
// console.log(counter1())
// console.log(counter1())
// console.log(counter2())
// console.log(counter2())
// refered----------------- own coded

// 🎯 Mini Project 1 – Simple Calculator
// Concepts Covered:
// Functions, parameters, return values, conditionals, switch-case.
// Objective:
// Build a calculator that performs addition, subtraction, multiplication, and division using functions.
// Requirements:
// Create a function calculate(num1, num2, operator)
// Use switch or if-else to perform the selected operation.
// Print the result in the console or webpage.

// function calculate(num1, num2, operator){
//    switch(operator){
//     case "+":
//     console.log(num1+num2);
//     break;
//     case "-":
//     console.log(num1-num2);
//     break;
//     case "*":
//     console.log(num1*num2);
//     break;
//     case "/":
//     console.log(num1/num2);
//     break;
//     case "%":
//     console.log(num1%num2);
//     break;
//     default:
//         console.log("invalid number");

//    }

// }
// calculate(10,100,"+");

// refered----------------- own coded

// 🎯 Mini Project 2 – Student Grade Evaluator
// Concepts Covered:
// Function declaration, return values, conditional statements, arrow functions.
// Objective:
// Create a function that takes marks and returns the student’s grade.
// Requirements:
// Function getGrade(marks) returns a grade based on score.
// Logic:
// >=90: A
// >=80: B
// >=70: C
// >=60: D
// Else: Fail

// function getgrade(marks) {
//   if (marks >= 90) {
//     console.log("A grade :" + marks);
//   } else if (marks >= 80) {
//     console.log("B grade :" + marks);
//   } else if (marks >= 70) {
//     console.log("C grade :" + marks);
//   } else if (marks >= 60) {
//     console.log("E grade :" + marks);
//   } else {
//     console.log("fail :" + marks);
//   }
// }
// getgrade(59);

// refered----------------- own coded

// 🎯 Mini Project 3 – Random Quote Generator
// Concepts Covered:
// Arrow functions, arrays, random number generation, callback functions.
// Objective:
// Display a random motivational quote each time the user clicks a button.
// Requirements:
// Store 5–10 quotes in an array.


// Create a function getRandomQuote() that returns a random quote.


// Display the result on the page (in console or innerHTML).

// refered----------------- own coded


// 🎯 Mini Project 4 – Temperature Converter
// Concepts Covered:
// Functions, parameters, return values, conditionals, arrow functions (optional)
// Objective:
// Build a temperature converter that converts between Celsius and Fahrenheit.
// Requirements:
// Create a function convertTemperature(value, scale)
// If scale is "C", convert to Fahrenheit → (value * 9/5) + 32
// If scale is "F", convert to Celsius → (value - 32) * 5/9
// Return the converted value.

// function convertTemperature(value, scale) {
//   if (scale === "C") {
//     console.log("Temperature in Fahrenheit:", (value * 9) / 5 + 32, "℉");
//   } else if (scale === "F") {
//     console.log("Temperature in Celsius:",(value - 32) * (5 / 9), "℃");
//   } else {
//     console.log("involid number");
//   }
// }
// convertTemperature(100, "F");

// refered----------------- own coded


