//simple calculator
// let a = prompt("input");
// let b = prompt("input");
// add = a+b;
// sub = a-b;
// mul = a*b;
// div = a/b;
// console.log(`add ${add},sub ${sub},mul ${mul},div ${div}`);

// EMC-CLSS

// var fruitname = "apple"
// var count = 10;
// var price = 20;
// var total = price*count;
// console.log(total);
// OP = 200

// increment (x++) and degreement (x--)
//(inc)
// var a=10
// a++
// console.log(a)
// OP=11

//(deg)
// var a=10
// a--
// console.log(a)
// OP=9

// then js function syntax

// function abc ()
// {
//     console.log("function is working")
// }

// abc ()
// function is working

// calling function
//  function samgung ()
//  {
// console.log("This is samgung")
//  }
//  function iphone ()
//  {
// console.log("This is ipohon")
//  }
// function redmi ()
// {
// console.log("This is redmi")
// }
//  samgung()
//  iphone()
//  redmi()

//  op= This is samgung
//      This is ipohon
//      This is redmi

// var a=10
// var b=20
// function add()
// {
//     console.log(a+b)
// }
// add()
//  OP=30

// var fActor="kamal"
// var fplayer="sivaji"
// var fmovie="anmbeshivam"

// function favourite()
// {
//     console.log("favouriteactor:"+fActor)
//     console.log("favouriteactor:"+fplayer)
//     console.log("favouriteactor:"+fmovie)
// }
// favourite()
// OP= favouriteactor:kamal
//     favouriteactor:sivaji
//     favouriteactor:anmbeshivam

//parameter function
//  function add(a,b)
//  {
//     console.log(a+b)
//  }
//  add( 10,30) // a=10, b=30
//  OP=40

//  function add(l,b)
//  {
//     var a=l*b
//     console.log("aera is :"+a)
//  }
//  var length=10
//  var breath=30

//   add( 10,30) // a=10, b=30
//  OP=aera is :300
//  function add(a,b)
//  {
//     return(a+b)
//  }

//  var total=add(20,30)
//  console.log(total)
//  OP=50

// if else
// if(true)
// {
//     console.log("Its true")
// }
//  else(false)
// {
//     console.log("Its false")
// }

// OP= Its true
//     Its false

//    // if else
//     var homework=false
//     if(homework)
//     {
//         console.log("good jop")
//     }
//      else
//     {
//         console.log("first finisl after younplay")
//     }

//     OP=first finisl after younplay

// for (let i=1;i<=3;i++)
// for (let j=1;j<=3;j++)
// {
//     console.log(i,j)
// }

// OP=1 1
// 1 2
// 1 3
// 2 1
// 2 2
// 2 3
// 3 1
// 3 2
// 3 3

//normalnested loop
// for (let i=1;i<=3;i++){
// for (let j=1;j<=3;j++){
//     if(i===2&&j===2){
//         break;
//     }
//     console.log(i,j);
// }
// }
// outerloop:
// for (let i=0;i<3;i++){
//   for (let j=0;j<3;j++){
//     if(i===1 && j===1) break outerloop;
//     console.log(i,j);
// }
// }

// outerloop:
// for (let i=0;i<3;i++){
//   for (let j=0;j<3;j++){
//     if(i===1 && j===1) continue outerloop;
//     console.log(i,j,k);
// }
// }

// outer:for (let i=1;i<=3;i++){
//   for (let j=1;j<=3;j++){
//     if(j===2) {continue outer;
//     }
//     console.log(i,j);
//   }
// }

// if else

// let age = 18
//     if(age>=18)
//     {
//         console.log("votting")
//     }
//      else
//     {
//         console.log("not votting")
//     }

// EX if else
//  var color="green"
//   if(color=="red")
//   {
//     console.log("stop")
//   }
//   if(color=="yellow")
//   {
//     console.log("get ready")
//   }
//   if(color=="green")
//   {
//     console.log("go")
//   }

//  var season="fall"
//   if(season=="spring")
//   {
//     console.log("enjoy the blooming flowers")
//   }
//   if(season=="summer")
//   {
//     console.log("have fun in the sun")
//   }
//   if(season=="autumn"||"fall")
//   {
//     console.log("admire the clorfull leaves")
//   }
//   if(season=="winter")
//   {
//     console.log("bundle up and stay warm")
//   }

// var score="93"
// if(score<=50)
// {
//     console.log("you need to improve")
// }
// else if(score>50 && score<70)
// {
//     console.log("good jop")
// }
// else if(score>=71)
// {
//     console.log("excellent performance")
// }

//for loop
// for (sivaji=1;sivaji<=3;sivaji=sivaji+1)
//     for (sivajir=1;sivajir<=3;sivajir=sivajir+1)

//         {
//             console.log(sivaji,sivajir)
//         }
// op=

//ithu vanthu +2 pota ena varum nu pathan
//   for (sivajir=1;sivajir<=10;sivajir=sivajir+2)

//         {
//             console.log(sivajir)
//         }
// op=1,3,5,7,9

//number revers la pottan for loop la
//   for (sivajir=10;sivajir>=1;sivajir=sivajir-1)

//         {
//             console.log(sivajir)
//         }

// for(let i=1;i<=30;i++)
// {
//     console.log(i+"*2="+i*2+(30))
// }

// 1. print all number 1-50,but skip multiples of 5

// for (let i = 0; i < 5; i++) {
//   if (i === 3) continue;
//   i + "<br>";
// }

//print all numbers 1-5,but skip multiples of 5.
// for(i=1;i<=50;i++)
// {
// if(i%5==0) continue;
// console.log(i)
// }

//
// for(let i=1;i<=10;i++)
// {
//     console.log(i+"*2="+i*7)
// }

// let i=1;
// let sum=0;
// while (i <= 20) {
//   if (i % 2 !== 0) {
//     sum = i;
//     console.log(i);
//   }
//   i++;
// }
// console.log("Sum of odd numbers:");

// let age = prompt("enter age");

// ternery
// let age =1;
// console.log ((age>=18)? "ok":"not");

// elseif

// let a=""
// for(i=1;i<=150;i++){
//     if(i===5) {continue;}
//     a+=i+"<br>";
//     }

// let text = "";

// for (let i = 1; i <= 50; i++) {
//   if ((i % 5 == 0)) {
//     continue;
//   }
//   console.log(i);
// }
// let a= Number(prompt("En"));

//2=Q
// let a=7
// for(i=1;i<=20;i++)
// {
//     console.log(i,"*",a,"=", i*a)
// }

// let sum =0
// for(i=1;i<=100;i++){
//     if(i%2==0){
//         sum+=i
//         console.log(i)
//     }
// }
// console.log(sum)

// //for..of
// let str="sivaji"
// for(dei of str)
// console.log(dei)

// let num=Number(prompt("enter the number 1 to 12"))
// switch(num){
// case 1:
// console.log("⃣ January")
// break;
// case 2:
// console.log("February ")
// break;
// case 3:
// console.log("March")
// break;
// case 4:
// console.log("April")
// break;
// case 5:
// console.log("May ")
// break;
// case 6:
// console.log("June")
// break;
// case 7:
// console.log("July ")
// break;
// case 8:
// console.log("August ")
// break;
// case 9:
// console.log("September ")
// break;
// case 10:
// console.log("October")
// break;
// case 11:
// console.log("November")
// break;
// case 12:
// console.log("December")
// break;
// default:
// console.log("invalid number");
// break;
// }
// -----------------------------------bala train---------------------------------------------------------//
// let a= [1,2,3,4,5,6,7,8]

// for(let i = 0;i<a.length;i++){
//     console.log(a[i])
// }

// array methods

//1.length//

// let arr = [2,4,5,6,7,8,9,0,2,3,4,5,6,7,8,9,6,5,4,4,4]

// for(let i=0;i<arr.length;i++){
//     if(arr[i] == 9){
//         console.log(`The number is ${arr[i]}`)
//     }
// }

//push()

// let  arr = [1,2,3,4,5,6,7,8,9,undefined,null,true,false,'balalal','guna']
// arr.pop()
// arr.unshift(57,89)
// console.log(arr)

// arr.splice(1,3)

// let art = arr.slice(1)

// console.log(art)
// console.log(arr)

// for(let i=1;i<=inp;i++){
//     if(i == 10){
//         arr.push(12)
//     }
// }

// console.log(arr)

//string loop
//1. Count Characters:
// Write a loop to count how many characters are in the string "hello world" without using .length.

// j=0
// for(let y of "hello world"){
//   j+=1
// }
// console.log(j)

// let str="programming is fun";
// for(i=0;i<str.length;i++){
//     sum
// console.log(i)
// }

// let str="programming is fun";
// let vowels='aeiou'
// let sum=0
// for(i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//       sum+=1
//     }
// }
// console.log(sum)

// 🧩 STRING LOOP PRACTICE

// Count Characters:
// Write a loop to count how many characters are in the string "hello world" without using .length.

// Reverse a String:
// Use a loop to reverse the string "javascript" and store the result in a new string.

// Count Vowels:
// Count how many vowels (a, e, i, o, u) appear in the string "programming is fun".

// Uppercase Each Character:
// Loop through the string "loop" and create a new string with all letters in uppercase (without using .toUpperCase() directly on the whole string).

// Find the First Repeated Character:
// Write a loop that returns the first repeated character in "abacddbec".
// unga group la share pannidu da

// -------------------------------------------------------------------------------------------

// 📦 ARRAY LOOP PRACTICE

// Sum of Elements:
// Use a loop to calculate the sum of all numbers in the array [1, 2, 3, 4, 5].

// Find the Maximum Value:
// Loop through [10, 3, 7, 20, 15] and find the largest number.

// Double Each Number:
// Create a new array where each element in [2, 4, 6, 8] is doubled.

// Count Even Numbers:
// Count how many even numbers are in [1, 2, 3, 4, 5, 6].

// Concatenate Array Elements into a String:Loop through ["I", "love", "JS"] and combine them into one string: "I love JS".

// Reverse Words:
// Given "hello world", use loops to reverse each word individually → "olleh dlrow".

// Find Longest Word:
// Loop through ["apple", "banana", "kiwi", "watermelon"] and find the longest word.

//mythily========================================================

// let fruit = ["kiwi", "mango", "grapes", "pineapple"];

// fruit[1]=' '

// console.log(fruit)

// for (let i = fruit.length - 1; i >= 0; i--) {
//   console.log(fruit[i]);

//   if (fruit[i].length>= 5) {
//     for (let j = fruit[i].length - 1; j >= 0; j--) {
//       console.log(fruit[i][j]);
//     }
//   }
// }

// let sub = ["mat", "science", "eng", "social", "tamil"];

// for (i = 0; i < sub.length; i++) {
//   if (sub[i].length <= 3) {
//     sub[i] = "lowindex";
//     console.log(sub);
//   }
// }

// for (let i = sub.length -1; i >=0; i--) {

//   if (sub[i].length <= 3) {
//    let word = ''
//     for(let j=sub[i].length-1;j>=0;j--){
//       word+=sub[i][j]
//     }
//     console.log(word);

//   }

// }

// 🧩 STRING LOOP PRACTICE

// Count Characters:============
// Write a loop to count how many characters are in the string "hello world" without using .length.

// let str="hello world"
// let count=0;
// for(let word of str){
//      count++
// }
// console.log(count);

// Reverse a String:===========
// Use a loop to reverse the string "javascript" and store the result in a new string.
// let str = "javascript";

// let rev = str.split("").reverse().join(" ");
// console.log(rev);

// let box = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   box += str[i];
// }
// console.log(box);

// Count Vowels:================
// Count how many vowels (a, e, i, o, u) appear in the string "programming is fun".

// let str="programming is fun";
// let vowels=["a","e","i","o","u","A","E","I","O","U"]

// let count=0
// for(let i=0;i<str.length;i++){
// if(vowels.includes(str[i])){
// count++
// }
// }
// console.log(count);

// 📦 ARRAY LOOP PRACTICE

////Sum of Elements:=============
// Use a loop to calculate the sum of all numbers in the array [1, 2, 3, 4, 5].

// let sum = [1, 2, 3, 4, 5, 6];
// let add = 0;
// for (let i = 0; i < sum.length; i++) {
//   add += sum[i];
// }
// console.log(add);

//// Find the Maximum Value:Loop through [10, 3, 7, 20, 15] and find the largest number.

// let sum = [10, 3, 4, 7, 20, 15];
// let largest = sum[0];
// let smallest = sum[0];
// for ( let i = 0; i < sum.length; i++) {
//   if (sum[i] > largest) {
//     largest = sum[i];
//   } else if (sum[i] < smallest) {
//     smallest = sum[i];
//   }
// }
// console.log(largest);
// console.log(smallest);

// Double Each Number:Create a new array where each element in [2, 4, 6, 8] is doubled.
// let arr=[2,4,6,8]
// sum = []
// for(let i=0;i<arr.length;i++){
// // sum+=arr[i]*2
// sum.push(arr[i]*2)
// }
// console.log(sum);

// Count Even Numbers:Count how many even numbers are in [1, 2, 3, 4, 5, 6].

// let arr = [1, 2, 3, 4, 5, 6, 8, 8, 8, 8, 8, 8, 8, 8, 8];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {

//   if (arr[i] % 2 == 0) {

//    sum++

//   }

// }
//  console.log(sum);

// Concatenate Array Elements into a String:Loop through ["I", "love", "JS"]
//  and combine them into one string: "I love JS".

// let str=["I", "love", "JS"]
// let a=str.join(" ")
// console.log(a);

// Reverse Words:
// Given "hello world", use loops to reverse each word individually → "olleh dlrow".

// let arr ="hello world"
// let rev=" "
// for (let i=arr.length-1;i>=0;i--){
// rev+=arr[i]

// }
// console.log(rev);

// Find Longest Word:
// Loop through ["apple", "banana", "kiwi", "watermelon"] and find the longest word.

// let arr=["apple","sathirabathi si", "banana", "kiwi", "watermelon"]
// let longestword="";
// for(let word of arr){
//     if(word.length>longestword.length){
//         longestword=word
//     }
// }
// console.log(longestword);

// 🧩 JavaScript Full Practice – Kellvi & Output Only
// 1️⃣ JavaScript Basics

//Q1:=======================
// Print “JavaScript is Powerful!” in console.

// let a= "JavaScript is Powerful!";
// console.log(a);

//Output:

//JavaScript is Powerful!

//// 2️⃣ Variables

// //Q2:
// //Create a variable city = "Chennai", change it to "Coimbatore" and print both.

// let city = "Chennai";
// console.log(city);
// city = "Coimbatore";
// console.log(city);

// //Output:

// //Chennai
// //Coimbatore

//// 3️⃣ Data Types

//// Q3:
// //Create variables:=============
//// name = "Sivaji", age = 22, isPass = true, skills = ["HTML","CSS","JS"], and print all.
// let names = "Sivaji"
// let age =22
// let isPass =true
// let skills =["HTML","CSS","JS"]
// console.log(names,"\n",age,"\n",isPass,"\n",skills);

// //Output:

//// Sivaji
// //22
// //true
// //["HTML","CSS","JS"]

// 4️⃣ Operators

// //Q4:=====================
// //If a = 10 and b = "10", print results of

// let A="10";
// let B=10;
// console.log((A)==(B))
// console.log((A)===(B))

// //Output:

// //true
// //false

// 5️⃣ Conditional Statements

// //Q5:=================

// //If ≥ 90 → “A Grade”

// //Else if ≥ 75 → “B Grade”

// //Else → “C Grade”
// //Output:

// //B Grade

// let mark = 80;
// if (mark >= 90) {
//   console.log("A grade");
// } else if (mark >= 75) {
//   console.log("B grade");
// } else {
//   console.log("C grade");
// }

//// Q6:
// //Use switch —
// //If day = 3, print the day name (1 → Mon, 2 → Tue...).
// Output:

// let day = 3;
// switch (day) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thrusday");
//     break;
//   case 5:
//     console.log("friday");
//     break;

//   default:
//     console.log("invalid number");
// }

// Wednesday

// 6️⃣ Loops

// //Q7:
// //Print numbers from 1 to 5 using a for loop.
// for (let i=1;i<=5;i++){
//   console.log(i);

// }
// //Output:
////1
////2
////3
////4
////5

//// Q8:
//// Using a for...of loop, print all elements in
//// fruits = ["apple", "mango", "orange"].

// let fruits = ["apple", "mango", "orange"]
// for(let x of fruits){
//   console.log(x);

// }

//// Output:

// apple
// mango
// orange

// 7️⃣ Functions

// Q9:
// Create function add(a,b) → return sum. Call it for 5, 10.

// let a=5
// let b=10
// let c=a+b
// console.log(c);

// Output:

// 15

// Q10:
// Create arrow function multiply(a,b) → return result for 4, 3.

// let mul = (a, b) => a * b;
// let res = mul(3, 4);
// console.log(res);

// Output:

// 12

// 8️⃣ Scope & Hoisting

// Q11:
// Run:

// console.log(x);
// var x = 5;

// Output:

// undefined

// Q12:
// Run:

// {
//   let y = 10;
//   console.log(y);
// }
// console.log(y);

// Output:

// 10
// ReferenceError

// 9️⃣ Template Literals

// Q13:
// If name = "Sivaji", print:
// Hello, Sivaji! Welcome to JavaScript. using template literal.
// Output:

// Hello, Sivaji! Welcome to JavaScript.

// 🔟 Final Challenge

// Q14:
// Create:

// let student = "Sivaji";
// let mark = 85;
// let subject = "JavaScript";

// Print:
// Sivaji scored 85 in JavaScript!
// Output:

// Sivaji scored 85 in JavaScript!

// function twoSum(nums, target) {
//     let a = 0;
//     let b = 0;
//     for (i = 0; i < nums.length; i++) {
//         for (j = i; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 a += nums[i]
//                 b += nums[j]

//                 return (([nums.indexOf(a), nums.indexOf(b)]))
//             }

//         }

//     }

// }
// let s = [2, 7, 11, 15]
// let t = 9
// let sum = twoSum(s, t)
// console.log(sum)

// function twoSum(nums, target) {

//     for (i = 0; i < nums.length; i++) {
//         for (j = i+1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {

//                 return nums.indexOf([nums[i],nums[j]])
//             }
//         }
//     }
// return [ ]
// }
// let s = [3,2,4]
// let t = 6
// let sum = twoSum(s, t)
// console.log(sum)


//remove the dupilicate number 

// let a=[1,1,2,2,3,1,3,4,4,5,5,6,6,7,7,1]
// let result =[];
// let seen = {}
// for(let i=0;i<a.length;i++){
//   if(!seen[a[i]]){
//     seen[a[i]] = true
//     result.push(a[i])
//   }
// }
// console.log(result)


//   Return only the words that have more than 4 characters.
// Sample Input:

// let words = ["sun", "planet", "moon", "star", "galaxy"];
// let result = [];
// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > 4) {
//     result.push(words[i]);
//   }
// }
// console.log(result);


