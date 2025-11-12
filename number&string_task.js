// Task 1: Round a Decimal Number=====================
// Problem:
//  Given a decimal number, display its rounded value using JavaScript’s Math methods.

// let rou=Number(prompt("Enter your num:"))
// let b=Math.round(rou)
// console.log(b);

// Task 2: Generate a Random Number between Two Values================
// Problem:
//  Write a program that generates a random integer between two given numbers (inclusive).

// let max=Number(prompt("Enter your num:"))
// let min=Number(prompt("Enter your num:"))
// let value=Math.floor(Math.random()*(max-min)+min)
// console.log(value);

// Task 3: Sum of Digits of a Number=======================
// Problem:
//  Write a JavaScript program to find the sum of all digits in a given number.
//  The number may be positive or negative.

// let num =Number(prompt("Enter your num:"))
// let sum = 0;
// let pos = Math.abs(num);
// let convert = pos.toString();
// let str = convert.split("");
// for (let i = 0; i <= str.length; i++) {
//   sum += i;
// }
// console.log(sum);

// Task 4: Format a Number as Currency==================
// Problem:
//  Write a JavaScript program that takes a number and formats it as currency (for example, in Indian Rupees).
// Sample Input:

// let amount = 1234567.89;
// let formattedAmount = amount.toLocaleString("en-IN");

// console.log("Formatted amount:", formattedAmount);

// Task 5: Calculate Compound Interest==============

// let P = 10000; 
// let r = 8;     
// let t = 2;    
// let A = P * Math.pow((1 + r / 100), t);
// let CI = A - P;

// console.log("Compound Interest:", CI.toFixed(2));

// Task 6: Convert Case and Reverse a String====================
// Problem:
//  Write a program that converts all
// letters in a string to uppercase and also prints the reversed version of the string.

// let word =prompt("enter the word")
// let cap=word.toUpperCase()
// console.log(cap)
// let con=word.toString()
// let str=con.split("")
// let rev=str.reverse().join("")
// console.log(rev)

//  Task 7: Check for PalindromeProblem:======================
//  Write a program that checks whether a given string reads the same backward and forward (ignoring case and spaces).

// let input = "Race car"
// let change = input.toLowerCase().replace(/\s+/g, "");

// let reverse = change.split("").reverse().join("");

// if (change == reverse){
//   console.log(true)
// }

// else {
//   console.log(false)
// }

// Task 8: Count the Occurrences of a WordProblem:====================
//  Write a JavaScript program to count how many times a specific word appears in a sentence.
// let sentence = "JavaScript is fun. I love JavaScript programming.";
// let c = sentence.toLocaleLowerCase().split(" ");
// let word = "javascript"
// let d = word.toLocaleLowerCase();
// let count=0;

// for(let i=0;i<c.length;i++){
//   if(c[i] == d){
//     count++;
//   }
// };

//     console.log(`${word} repeat ${count} times`)

// Task 9: Capitalize the First Letter of Each Word Problem:====================
//  Write a JavaScript program that capitalizes the first letter of every word in a given sentence.
// let sentence = "welcome to javascript programming";

// function capitalizeWords(str) {
//   return str
//     .split(" ")
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// let result = capitalizeWords(sentence);
// console.log(result);

// Task : 10. Remove Duplicate Characters Problem:=================
//  Write a JavaScript program that removes duplicate characters from a string.

// let text = "programming";

// let uniqueText = [...new Set(text)].join("");

// console.log("After removing duplicates:", uniqueText);
