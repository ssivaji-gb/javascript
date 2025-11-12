// 1. Print all numbers 1–50, but skip multiples of 5.

// let num = 0;
// for (i = 1; i <=50; i++) {
//   if (i % 5 == 0) {
//     continue;
//   }
//   console.log(i);
// }

// 2. Print multiplication table for a given number 7.

// let a = Number(prompt("Enter any number;"))
// for(i=1;i<=20;i++)
// {
//     console.log(i,"*",a,"=",a*i)
// }

// 3. Find the sum of all odd numbers up to 100.

// let sum = 0
// for(i=1;i<=100;i++){
//     if(i%2!=0)
//     {
//         console.log(i)
//         sum+=i;
//         continue;
//     }
// }
// // console.log(i)
// console.log(sum)

// 4.Display characters of a string one by one using for...of.

// let str="sivaji"
// for(let y of str){
//     console.log(y)

// }

// 5. Use switch to print month name based on month number.
// let num=Number(prompt("enter the number 1 to 12"))
// switch(num){
// case 1:
// console.log("January")
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


// 6. Print a triangle pattern using nested loops.

// let n=5;
// let pattern = "";
// for (let i=1;i<=n;i++){
//     for(let j=i;j<=n;j++){
//         pattern+=" ";
//     }
//     for(let k=1;k<=i;k++){
//         pattern+="* "
//     }
//     pattern+="n"
// }
// console.log(pattern)

// mini project
// const num=18;
// attempt=0;
// while(true){
// attempt++
// let sum= parseInt(prompt("guess the number:"));

// if(num===sum){
//     console.log(`Your Guess is correct at your ${attempt} attempt`) 
//     break;
// }
// else if(18<sum){
//         console.log("Your Guess is high")
// }
// else{
//         console.log("Your Guess is low")
// }
// }

// bala bro task
//Get a number as input from the user. Check whether the number is odd number or even number.


// let a =prompt("Enter the number")
//  if(a%2==0)
//  {
//     console.log("its an even number")
//  }

//  else
//  {
//     console.log("its an odd number")
//  }


//Get 3 numbers from the users as num1, num2, num3. Check which one is thelargest number.

// let n1=prompt("enter number")
// let n2=prompt("enter number")
// let n3=prompt("enter number")

// if(n1>n2 && n1>n3)
// {
//     console.log("bigest number"+n1)
// }
// else if(n2>n3)
// {
//     comnsole.log("bigest number"+n2)
// }
// else
// {
//     console.log("bigest number"+n3)
// }


//Get a number from the users. Check whether the number is divisible by 8.
// let i=prompt("enter the number")
// if(i%8==0)
// {
//     console.log("its divisible by 8")
// }
// else
// {
//     console.log("its not divisible by 8")
// }

// let i= prompt("enter number")
// if(i%3==0 && i%5==0)
// {
//     console.log("Its divisible by both 3 and 5")
// }
// else if (i%5==0 && i%3!=0)
// {
//     console.log("Its divisible by 5 but not divisible by 3")
// }
// else if(i%3==0 && i%5!=0)
// {
//     console.log("Its divisible by 3 but not divisible by 5")
// }
// else if (i%3!=0 && i%5!=0)
// {
//     console.log("It is neither divisible by 3 nor divisible by 5")
// }

// let a = 10
// let b = "10"

// console.log(a==b)
// console.log(a===b)



// let a=7
// for (i=1;i<=a;i++)
//     if(i%2==0)
//     {
//         console.log("even",i)
//     }
//     else
//     {
//         console.log("odd",i)
//     }

// --------------------------------------------------------------------------

// let i=15;
// for(a=1;a<=i;a++)
// if(a%3==0 && a%5==0)
// {
//     console.log("FizzBuzz")
// }
// else if(a%3==0)
// {
//     console.log("Fizz")
// }
// else if(a%5==0)
// {
//     console.log("Buzz")
// }
// else
// {
//     console.log(a)
// }

//push--------------------- add the new element in last array---------------
// let siva=["2","2"];
// siva.push('5')
// console.log(siva)

// let car = ["BMW","Benz","TATA",]
// car.push("lesla","volvo")
// console.log(car)

// let fruit=["graps","banana"]
// let bala=["bamu","baala"]
// fruit.push("apple","soppota",bala)
// console.log(fruit)

// let names=["krish","siva","jeya"]
// names.push("soppanasunthari")
// console.log(names)


// let sum=[]
// for(i=0;i<10;i++)
// if(i%2==0){
//     sum.push(i)
// }
// console.log(sum)

//pop------------------ remove the array last element---------
// let nums=[1,1,1,2,2,23,3,34,45,5,6]
// nums.pop()
// console.log(nums)

// let names=["siva","sivaji","saba","jaya"]
// names.pop()
// console.log(names)

// let phones=["iphone","samgang","mi","poco"]
// phones.pop()
// console.log(phones)

// let bike=["royal eniled","r15","yamaha","hero"]
// bike.pop()
// console.log(bike)

// let states=["tn","py","ka","up"]
// states.pop()
// console.log(states)


//shift------------------------- remove the array first element--------

// let states=["tn","py","ka","up"]
// states.shift()
// console.log(states)

// let bike = ["royal eniled","r15","yamaha","hero"]
// bike.shift()
// console.log(bike)

// let phone=["iphone","samgang","mi","poco"]
// phone.shift()
// console.log(phone)

// let names=["sivaji","siva","nandhu","indhu"]
// names.shift()
// console.log(names)

// let contact=["1234567890","0987654321","67890765432"]
// contact.shift()
// console.log(contact);


// unshift--------------add to array in first element(for begining)

// let contact=["1234567890","098765432","67890-5432"]
// let bala="456789098765"
//  contact.unshift("2929292929292",4364674,bala)
// console.log(contact)

// let phone=["iphone","samgang","mi","poco"]
// phone.unshift("vivo","black berry")
// console.log(phone)

// let names=["sivaji","siva","nandhu","indhu"]
// names.unshift("rathinam","saba")
// console.log(names);

// let bike = ["royal eniled","r15","yamaha","hero"]
// bike.unshift("mt","honda")
// console.log(bike)

// let contact=["1234567890","0987654321","67890765432"]
// contact.unshift("93939393939393939")
// console.log(contact);f

// slice--------------remove the unnessery values

// let bike = ["royal eniled","r15","yamaha","hero"]
//  let news = bike.slice(1,3)
// console.log(news);

// let names=["sivaji","siva","nandhu","indhu"]
// gf=names.slice(2)
// console.log(gf);

// let phone=["iphone","samgang","mi","poco"]
// fp=phone.slice(0,1)
// console.log(fp);

// let states=["tn","py","ka","up"]
// fs=states.slice(0,1)
// console.log(fs);

// let  car = ["BMW","Benz","TATA",909,10,9009900909]
// console.log(fc);
 
// splice -----------------------cut and add any place 

//  let car = ["BMW","Benz","TATA","sfite",98,9989]
//  fc=car.splice(2,3)
// console.log(fc);

// let states=["tn","py","ka","up"]
// states.splice(1,0,"ap")
// console.log(states);

// let names=["sivaji","siva","nandhu","indhu","subi","divya"]
// names.splice(0,2,"all my gf")
// console.log(names);


// let bike = ["royal eniled","r15","yamaha","hero","BMW"]
// bike.splice(1,4,"fb")
// console.log(bike);

// let phone=["iphone","samgang","mi","poco"] 
// phone.splice(0,1)
// console.log(phone)
// phone.splice(0,0,"fp")
// console.log(phone);


