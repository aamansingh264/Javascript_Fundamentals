// console.log('start');
// setTimeout(() => {
//     console.log('Timers');
// }, 7000)

// console.log('end');



// setInterval(()=> {
//     console.log("Rohit Gurunath Sharma");
//     console.log("Rohit Gurunath ");

// },2000)

// let count = 0;
// const timer = setInterval(() => {
//                 console.log(`count:${count}`);
//                 count++;
//                 if(count > 45) {
//                     clearInterval(timer);
//                   }
//                 },2000);


// function greet(callback) {
//     console.log('Hello World !');
//     callback();
// }

// function sayBye() {
//     console.log('Goodbye!');
// }

// greet(sayBye);

function greet(callback){
    console.log("aaja bhaii");
    callback();
}
function sayBye(){
    console.log("chal nikal");

}
greet(sayBye);





