// function sayHello(callback) {
//   setTimeout(() => {
//     console.log("Hello");
//     callback();
//   }, 1000);
// }

// function askHowAreYou(callback) {
//   setTimeout(() => {
//     console.log("How are you?");
//     callback();
//   }, 1000);
// }

// function sayGoodbye(callback) {
//   setTimeout(() => {
//     console.log("Goodbye");
//     callback();
//   }, 1000);
// }

// // Nested callbacks — callback hell
// sayHello(() => {
//   askHowAreYou(() => {
//     sayGoodbye(() => {
//       console.log("Conversation ended.");
//     });
//   });
// });

//______________________________________________________________________________________________//

// let greet = new Promise((resolve,reject)=>{
//   console.log("ky haal chall");
//   resolve();

// });

// greet.then(()=>{
//   console.log("nikal");
// });

//________________________________________________________________________________________________//

// const LoggedInStatus = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         // let isLoggedIn = true;
//         let isLoggedIn = true;

//         if(isLoggedIn){
//             console.log("user is logged");
//             resolve({'name':'Aman'});           
//         }
//         else {
//             console.log("User is not logged");
//             reject("You are rejected");
//         }
//     },3000)
// })

// LoggedInStatus.then((user)=>{
//     console.log(user);
// }).catch((err) => {
//     console.log(err)
// });
// .catch(() => {
//     console.assert.log('error');
// }).finally(()=>{
//     console.log("All done")
// })


const promise1 = new Promise((resolve,reject)=> {
    setTimeout(()=> {
        resolve("Task 1 completed");
    },1000);
});

const promise2 = new Promise((resolve,reject)=> {
    setTimeout(()=> {
        resolve("Task 2 completed");
    },2000);
});

const promise3 = new Promise((resolve,reject)=> {
    setTimeout(()=> {
        resolve("Task 3 completed");
        // reject("error");
    },1500);
});

Promise.all([promise1,promise2,promise3])
.then((results)=> {
    console.log("All promises resolved");
    console.log(results);
})
.catch((error)=> {
    console.log("One of the promises rejected:",error);
})