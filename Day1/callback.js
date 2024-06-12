// function greet(name, callback){
//     return callback(name);
// }
// greet('John', sayName);

// function sayName(name){
//     console.log("Hello,"+ name);
// }

// function add(n1, n2){
//     console.log(`the sum is ${n1+n2}`)
// }
// function s(n1,n2){
//     console.log(`the sub is ${n1-n2}`)
// }
// function sub(n1, n2, callback, call){
//     callback(n1, n2)
//     call(n1, n2)
// }
// sub(10,5, add, s)

// const promise= new Promise((resolve, reject)=>{
//     const sum=10;
//     if(sum==10){
//         resolve("Success");
//     }else{
//         reject("Error");
//     }
// });
// promise
// .then((message)=>{
//     console.log(message);
// })
// .catch((message)=>{
//     console.log(message);
// })

// const promise= new Promise((resolve, reject)=>{
//     subtraction= 55-2;
//     if(subtraction<5){
//         resolve(`the result is ${subtraction}`);
//     }else{
//         reject("error");
//     }
// });
// promise
// .then((message)=>{
//     console.log(message);
// })
// .catch((message)=>{
//     console.log(message);
// })

// function fetchData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Data fetched!");
//         },1000);
//     });
// }
// async function getData(){
//     const data= await fetchData();
//     console.log(data); // Logs:"Data fetched!" after 1 second
// }
// getData();

// const numbers=[10,20,30,40,50]

// const getNumbers=numbers.find((num)=>{
//     return num>30
// })
// console.log(getNumbers);

// const numbers=[10,20,30,40,50]
// const num=numbers.filter(num=> num>30);
// console.log(num)


// const numbers=[10,20,30,40,50]
// const squaredNumbers= numbers.map(num=> num-2);
// console.log(squaredNumbers)

// const arr=[1,2,3,4,5];
// const first= arr[0];
// const rest = arr.slice(1);
// console.log("First element", first);
// console.log("Rest of the elements", rest);

const arr=[1,2,3,4,5,6,7,8,9,10];
const [a,...rest]=arr;
console.log(a);
console.log(rest);
