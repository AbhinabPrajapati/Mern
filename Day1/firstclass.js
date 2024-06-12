// let age= 20;
// console.log(age);

// let gender= "Male"
// console.log(gender);

// let address="Patan";
// console.log(address);

// let hobbies=["video games", "basketball", "listening music"];
// console.log(hobbies [0,1,2]);

// let fullName= "Abhinab Prajapati";
// console.log(fullName);
// console.log(typeof fullName);

// const history="History of JavaScript";
// const nan=history/2;
// console.log(nan);

// let check= typeof + 1;
// console.log(check);

// const a=10;
// console.log(typeof a);
// const conversion=String(a);
// console.log(conversion);
// console.log(typeof conversion);

// const b="10";
// console.log(typeof b);
// conversion1=Number(b);
// console.log(conversion1);
// console.log(typeof conversion1);

// const c= 10;
// console.log(typeof c);
// conversion2=String(c);
// console.log(conversion2);
// console.log(typeof conversion2);

// var a= 10;
// var b= 20;
// var sum= a+b;
// console.log(sum);

// const name= "John";
// const concat= name + b;
// console.log(concat);

// const a=2;
// const mulResult = a**2;
// console.log(mulResult);

// const a=10;
// const b=20;
// const mod= b%a;
// console.log(mod);

// let x=5;
// x++;
// console.log(x);
// x+=2;
// console.log(x);

// const x= 10;
// const y= "10";
// console.log(x==y);
// console.log(x!=y);
// console.log(x===y);
// console.log(x!==y);

// const p= true;
// const q= false;
// console.log(p&&q); 
// console.log(p||q);
// console.log(!p);
// console.log(!q);

// //Create two variables, one for your name and another for your age. Print a sentence combining those variables.
// const fullName = "Abhinab Prajapati";
// const age = 20;
// console.log(`I am ${fullName} and I am ${age} years old.`);
// //ans:I am  Abhinab Prajapati and I am 20 years old.

// //Assign the value 10 to a variable. Then multiply that variable by itself and store the result in another variable.
// // Print the final value.
// var a = 10;
// var b = a*a;
// console.log(b);//100

// //Write code to check if the character stored in a variable is uppercase or lowercase.
// // Print 'uppercase' or 'lowercase'; accordingly. (Hint: Use character codes)
// const word = "lowercase";
// const charCode = word.charCodeAt(0);

// if (charCode >= 65 && charCode <= 90) {
//     console.log('uppercase');
// } else if (charCode >= 97 && charCode <= 122) {
//     console.log('lowercase');
// } else {
//     console.log('neither uppercase nor lowercase');
// }

// //Declare two variables with numeric values. Add them together and print the sum. 
// //Then,subtract the smaller number from the larger number and store the difference in a new variable. 
// //Print the difference
// const firstNum = 1034;
// const secondNum = 423;
// const sum = firstNum + secondNum;
// console.log("The sum is ",sum);//1457
// const sub=firstNum - secondNum;
// console.log("The subtract is:", sub);//611

// //Imagine you have a variable storing a product price. Write code to apply a 10%
// //discount and print the discounted price.
// const productPrice = 3500;
// const discount=10/100;
// const discountedPrice = productPrice *discount ;
// console.log(`The discount is ${discountedPrice}`); //350
// const priceAfterDiscount = productPrice - discountedPrice;
// console.log(`The price after 10% discount of product is ${priceAfterDiscount}`);//3150

// age=18;
// if(age>=18){
//     console.log("You are eligible for voting");
// }
// else{
//     console.log("You are not eligible")
// }


// const weight= 30;
// const height= 5.4;
// bmi=weight/(height*height);
// console.log(bmi);
// if (bmi<=18.5){
//     console.log("You are underweight!");
// }
// else if(bmi>18.5 && bmi<24.9){
//     console.log("You are normal!");
// }
// else if(bmi>25 && bmi<29.9){
//     console.log("You are overweight!");
// }
// else { 
//     console.log("You are obesity");
// }

// let day=2;
// switch (day){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thrusday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Hello")
// }



// const weight= 30;
// const height= 5.4;
// bmi=weight/(height*height);
// switch(true){
//     case bmi<=18.5:
//         console.log("You are underweight!");
//         break;
    
//     case bmi>18.5 && bmi<24.9:
//         console.log("You are normal!");
//         break;
    
//     case bmi>25 && bmi<29.9:
//         console.log("You are overweight!");
//         break;
    
//     case bmi>30: 
//         console.log("You are obesity!");
//         break;
//     default:
//         console.log("Invalid data!!");
//     }
    

// num1=20;
// if (num1>0){
//     console.log("The number is positive");
// }
// else if(num1<0){
//     console.log("The number is negative");
// }
// else{
//     console.log("Invalid");
// }

// let num1=10;
// switch(true){
//     case num1>0:
//         console.log("positive");
//         break;
//     case num1<0:
//         console.log("negative");
//         break;
//     default:
//         console.log("invalid");

// }

// const a= "helloworld";
// if (a.length>=10){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// //password strength checker
// const pass="helloworld123";
// if(pass.length>12){
//     console.log("strong passsword");
// }
// else if(pass.length>8 && pass.length<12){
//     console.log("medium password");
// }
// else if(pass.length<8){
//     console.log("weak password");
// }
// else{
//     console.log("use symbols too");
// }

// //vowel or consonant
// let character = 'B';
// let lowerChar = character.toLowerCase();
// if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
//     console.log("Vowel");
// } else {
//     console.log("Consonant");
// }

// //Number Guessing Game
// let secretNumber = Math.floor(Math.random() * 10) + 1;
// let guess = 5;  // Example guess
// if (guess === secretNumber) {
//     console.log("Correct!");
// } else if (guess < secretNumber) {
//     console.log("Guess higher");
// } else {
//     console.log("Guess lower");
// }

// //Calculate Price with Tax
// let productPrice = 100;
// let taxRate = 0.08;
// let finalPrice = productPrice + (productPrice * taxRate);
// console.log("Final price with tax: " + finalPrice);

// //Simple Calculator
// let number1 = 10;
// let number2 = 5;
// let operator = "+";
// let result;

// if (operator === "+") {
//     result = number1 + number2;
// } else if (operator === "-") {
//     result = number1 - number2;
// } else if (operator === "*") {
//     result = number1 * number2;
// } else if (operator === "/") {
//     result = number1 / number2;
// } else {
//     console.log("Invalid operator");
// }

// console.log("Result: " + result);

// //Movie Rating Recommendation
// let age = 20;
// let recommendation;

// switch (true) {
//     case (age <= 12):
//         recommendation = "Watch animation movies";
//         break;
//     case (age <= 17):
//         recommendation = "Watch action movies";
//         break;
//     case (age >= 18):
//         recommendation = "Watch drama movies";
//         break;
//     default:
//         recommendation = "Age not valid";
// }

// console.log(recommendation);

// //Weekend or Weekday Checker
// let givenDate = new Date('2024-05-23');
// let dayOfWeek = givenDate.getDay();

// if (dayOfWeek === 0 || dayOfWeek === 6) {
//     console.log("Weekend");
// } else {
//     console.log("Weekday");
// }

// // Positive, Zero, or Negative
// let number = -3;
// if (number > 0) {
//     console.log("Positive");
// } else if (number === 0) {
//     console.log("Zero");
// } else {
//     console.log("Negative");
// }

// //Multiple of 3 or 5
// let value = 15;
// if (value % 3 === 0 && value % 5 === 0) {
//     console.log("Divisible by both 3 and 5");
// } else if (value % 3 === 0) {
//     console.log("Divisible by 3");
// } else if (value % 5 === 0) {
//     console.log("Divisible by 5");
// } else {
//     console.log("Not divisible by 3 or 5");
// }

// //Even or Odd Sum
// let firstNumber = 8;
// let secondNumber = 3;
// let sum = firstNumber + secondNumber;

// if (sum % 2 === 0) {
//     console.log("Even sum");
// } else {
//     console.log("Odd sum");
// }

// for(let i=1; i<=10; i++){
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }

// for(let i=1; i<=10; i++){
//     if(i==5 || i==6 || i==7){
//         continue;
//     }
// //     console.log(i);
// // }

// let i= 1;
// while(i<=10){
//     if(i==5){
//         i++;
//         continue;
//     }
//     console.log(i);
//     i++
// }

// let i=1;
// do{
//     console.log(i);
//     i++;
//     }while(i<=10);

// let i=2;
// while(i<=10){
//     if(i%2==0){
//         console.log(i);
//     }
//     i++;
// }

// let sum=0;
// for(let i=1; i<=10; i++){
//     sum+=i;
    
// }
// console.log(sum);

// let num=5;
// let factorial=1;

// while(num>0){
//     factorial*=num;
//     num--;
// }
// console.log(factorial);

// let i=1;
// for(i=1; i<=5; i++){
//     let answer=i**2;
//     console.log(answer);
// }

let names=["Kyrie", "Curry", "Kevin", "Devin", "Lebron"];
for(i=0; i<names.length; i++){
    console.log(names[i]);
}
