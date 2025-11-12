// 🧩 Task 1: Sum of Array Elements
// Description:
//  Write a program to calculate the sum of all numbers in an array.
// Sample Input:

// let nums = [5, 10, 15, 20];
// let sum =0
// for(let i=0;i<nums.length;i++){
// sum+=nums[i]
// }
// console.log(sum);

// 🧩 Task 2: Find Maximum and Minimum
// Description:
//  Find the largest and smallest numbers in an array without using Math.max() or Math.min().
// Sample Input:

// let arr = [12, 7, 45, 22, 9];
// let min = arr[0];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   } else if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log("min:",min);
// console.log("max:",max);

// 🧩 Task 3: Reverse an Array (without using reverse())
// Description:
//  Reverse the array elements manually using a loop.
// Sample Input:

let arr = [1, 2, 3, 4, 5];
let rev=[]

for (i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
  rev.push(arr[i])
}
console.log(rev);


