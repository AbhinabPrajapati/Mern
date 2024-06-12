// arrayy = [3,4,5,6,7,8]
// let b=0

// function arr(){
//       for(i=0; i<arrayy.length; i++){
//             b = b+arrayy[i]
//       }
//       b /arrayy.length
// }
// avg = arr()
// console.log(avg)



// array=[10,11,12,13,14,15,16,17]
// a=0

// function ary(){
//       for(i=0; i<array.length; i++){
//             a=a+array[i]
//       }
//       return a/array.length
// }
// avg=ary()
// console.log(avg)

// function oddOrEven(num){
//       if(num%2==0){
//             console.log ('even');
//       }
//       else{
//             console.log ('odd');
//       }
// }
// oddOrEven(5)
// oddOrEven(10)

// let oOrEven=(num)=>{
//       if(num%2==0){
//             return('even');
//       }
//       else{
//             return('odd');
//       }
// }
// a=oOrEven(11)
// console.log(a)



// name = 'charlsleclare'
// count = name.length;


// rev=()=>{
//       for(let i=count-1;i>=0;i--){
//             console.log(name.charAt(i))
//       }
// }
// rev()


// country= 'Nepal'
// count= country.length
// let a=()=>{
//       for(i=/count-1; i>=0; i--){
//             console.log(country.charAt(i))
//       }
// }
// a()

// arr=[100,200,500,300,4000]
// high = 0
// highest=()=>{
//       for(i=0; i<arr.length; i++){
//             if (high<arr[i]){
//                   high = arr[i]
//             }
//       }
//       return high
// }
// highestNumber = highest() 
// console.log(highestNumber)


// let conversion=(cel)=>{
//       fer=(cel*9/5)+32;
//       return fer;
// }
// result= conversion(25);
// console.log(result);


// let gen=(a,b)=>{
//       return Math.floor(Math.random() * (b - a + 1)) + a;
// }
// res=(gen(5,90))
// console.log(res)

// function pali(str) {
//     var len = str.length;
//     for (var i = 0; i < len / 2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//         return false;
//       }
//     }
//     return true;
//   }
//   result=pali("level")
//   console.log(result)

// function factorial(num) {
//     var result = 1;
//     for (var i = 1; i <= num; i++) {
//       result *= i;
//     }
//     return result;
//   }
// result=factorial(5)
// console.log(result)  

// function leapYear(year) {
//     if (year % 4 !== 0) {
//         return false;
//       } 
//       else if (year % 100 !== 0) {
//         return true;
//       }
//       else if (year % 400 === 0) {
//         return true;
//       }
//       else {
//         return false;
//       }
//   }
//   result=leapYear(2004)
//   console.log(result)


// function removeFalsyValues(array) {
//     var result = [];
//     for (var i = 0; i < array.length; i++) {
//       if (array[i]) {
//         result.push(array[i]);
//       }
//     }
//     return result;
//   }
//   arrayWithFalsyValues = [0, 1, false, 2, '', 3, 'a', 'e', null, 'i', undefined, 'o', 'u'];
//   result = removeFalsyValues(arrayWithFalsyValues);
//   console.log(result); 

// function Person(name, age){
//     this.name= name;
//     this.age= age;
// }
// let john= new Person("John", 25);
// console.log(john.name)


function sub(...numbers){
    return numbers.reduce((diff, num)=> diff-num )

  }
  console.log(sub(9,5,2))
  
  