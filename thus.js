//substring vs slice

// let user = "Aman";
// console.log(user.substring(4, 2)); 
// console.log(user.slice(4,2));

//substring() does not allow negative indices, it treats them as 0
//slice() allows negative indices, it counts from the end of the string 
//substring() swaps the indices if the first index is greater than the second
//slice() does not swap the indices

// let user1 = "Rohit";
// for(let i=0;i<user1.length;i++) {
//     console.log(user1[i]); //prints each character of the string
// }

// for(const element of user1){
//     console.log(element);

// }
// let usern ="ganesha";
// for(let i=0;i<user1.length;i++) {
//     console.log(element);
// }

// for (const element of user1) {
//     console.log(element);

// }

// console.log()


// for(const element of user1) {
//     console.log(element.toUpperCase())
// };

