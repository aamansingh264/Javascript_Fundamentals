// const formdata = {
//     name : "Ram",
//     email : "ram@gmail.com",
//     age: 25
// };

// const googleData = {
//     email: "sai@gmail.com",
//     profilepic: "",
//     googleId: "123456"
// };

// const googleData1 = {
//     name: "Ganesha",
//     age: 13
// };

// const completeUserProfile = Object.assign(googleData1, googleData,formdata);

// console.log(completeUserProfile);

const formdata = {
    name : "Ram",
    email : "ram@gmail.com",
    age: 25
};

const googleData = {
    email: "sai@gmail.com",
    profilepic: "",
    googleId: "123456"
};

const googleData1 = {
    name: "Ganesha",
    age: 13
};

// const completeUserProfile = {...googleData1,...googleData,...formdata};  //spread operator
// console.log(completeUserProfile);

const{name,email,age} = formdata      //destructure of object created above

console.log(age);
console.log(name);
console.log(email);

const fruits = ["apple","banana","apple","orange","banana"];

const count =fruits.reduce ((acc, fruit) => {
    acc[fruits] = (acc[fruit] || 0) + 1;
    console.log(acc);
    return acc;    
},{});

console.log(count);

const num =[10,20,30,40,50];

const add = num.reduce((acc,nu)=>(acc+=nu),0);

console.log(add)












