// var num =10;
// num =30;
// console.log("before block scope",num);

// {
//     var num =20;
//     console.log("after block scope",num);

// }
//  console.log("after block scope",num);

// let num =10;

// console.log("before block scope",num);

// {
//     let num =20;
//     console.log("after block scope",num);

// }
//  console.log("after block scope",num);



// let num = 999999999999;
// console.log(num)
// console.log(typeof num)

// console.log(Number.MAX_SAFE_INTEGER);

// let num =9999999999999;
// console.log(num)

//  num = BigInt("77777777777777777");
//  console.log(num);
//  console.log(typeof num)

// const user ={
//     username : "rohit sharma",
//     age : 39,
//     isloggedin: true
// }

// console.log(user)

// let acTemp =null;
// console.log(acTemp);

// console.log(typeof acTemp)


// console.log(1+"2"+2)

// console.log("")
// console.log(0 ==false)
// console.log(0 ===false)
// console.log(null == undefined);
// console.log(null === undefined);

// let marks = 101;
// if(marks>=90 && marks<=100){
//     console.log("Grade A");
// } 
// else if(marks>=75){
//    console.log("Grade B")
// }
// else {
//     console.log("Grade C");
// }

// let day = 3;
// switch (day) {
//     case 1:
//         console.log(" Monday");
//         break;
//     case 2:
//         console.log(" Tuesday");
//         break;
//     case 3:
//         console.log(" Wednesday");
//         break;
//     case 4:
//         console.log(" Thursday");
//         break;
//     case 5:
//         console.log(" Friday");
//         break;
//     case 6:
//         console.log(" Saturday");
//         break;
//     case 7:
//         console.log(" Sunday");
//         break;                    
//     default:
//         console.log("no days found");
// }

// for(let i = 0; i < 1000; i++) {
//     console.log("hello world");
// }

// for(let i=0; i<=10;i+=2){
//     console.log(i)
// }

// function printgreeting(name){
//     console.log(`hello how are u ${name}`);

// }
// console.log(printgreeting("rohit"));
// printgreeting("kolhi");
// printgreeting("aman");
// printgreeting("sachin");

// function addNum(num1, num2) {
//     return num1 + num2;                     //return statement
//     console.log("I am here");
// } 

// console.log(addNum(10, 20));            //function call

// function addNum(num1, num2) {
//    let Num2=Number(num2);          //type conversion
//    let Num1=Number(num1);          //type conversion
//     return Num1 + Num2;                     //return statement
   
// } 

// console.log(addNum(10, "20"));

// function addNum(num1, num2) {
//    let Num2=Number(num2);          //type conversion
//    let Num1=Number(num1);   
   
//    if(isNaN(Num1) || isNaN(Num2)) {  //check if either Num1 or Num2 is NaN
//        return ("Enter proper number");        //return statement    
//    return Num1 + Num2;      
//    }               //return statement   
// } 

// console.log(addNum(10, "20abc"));         //NaN -> Not a Number

// let Num = 13;
// console.log(isNaN(Num));  

// let n1 = "123";
// console.log(isNaN(n1));

let userName ="rohit";
let userName1 =new String("sharma");
let user = "  Rohit Sharma  ";

console.log(typeof(userName))
console.log(typeof(userName1))
console.log(user.length)
console.log(user.toUpperCase())
console.log(user.toLowerCase())
console.log(user.charAt(5));
console.log(user.indexOf('Sharma'));
console.log(user.indexOf('t'));
let user1 = "RohitSharma"
console.log(user1.substring(2,5));
console.log(user1.slice(2,5));
console.log("")
console.log(user1.substring(-4,5));
console.log(user1.slice(-4,5)); 

