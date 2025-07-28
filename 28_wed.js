// const arr =[10,30,40,20,50];
// console.log("og array",arr);

//________________________________________________________________________


// const newArr =arr.slice(1);
// console.log("newarr",newArr);

//________________________________________________________________________

// console.log("after slice",arr)

// const Arr =arr.slice(1,4)
// console.log("Arr:",Arr)

//________________________________________________________________________

// const revindex =arr.slice(4,1)
// console.log(revindex)

//________________________________________________________________________

// const negindex =arr.slice(-3)
// console.log(negindex)

//________________________________________________________________________

// const arr3 = [10,20,30,40,50];
// const splice3 =arr3.splice(40,20,60)

//________________________________________________________________________

// console.log("splice2",splice3)

// console.log("new arr",arr3)

// function addNum(num1,num2){
// console.log(num1+num2)
// }
// addNum(10,20);

//________________________________________________________________________


// function addNum(num1,num2){
// return (num1+num2)
// }
// addNum(10,20);

// const person = {
//     name:"aman",
//     age: 18,
//     greet: function greeting() {
//         console.log(this);

//         return(`hello,my name is ${this.name}.`);

//     }    }
// console.log(person.greet());

//________________________________________________________________________

//ARROWS FUNCTION ARE A SHORTER SYNTEX FOR WRITTING FUNCATIONN IN JAVASCRIPT//
                             //IMPORTANT SYNTAX//

                                //() => (  );
                                //() => {  };
                                //() -> EXPRESSION;
                                //SINGLEPARAMETER -> EXPRESSION
// ARROW FUNCTION 
//SYNTAX FOR SINGLE LINE WRITTEN STATEMENT USING ARROW FUNCAION

//________________________________________________________________________
// const greet = () => ("hellooo")

// console.log(greet())

// CONST ADD = (NUM1,NUM2) ==> (NUM1+NUM2)


// function addNum(num1, num2){
//     let result = num1 + num2;
//     return result;

// }

// console.log(addNum(10,20));
//__________________________________________________________________________

                          //SYNTAX OF VARATION

//param =>{
//     statements
// }

// (param,paramN) => {
//     statements
// }

//_________________________________________________________________

// function showArgs() {
//     console.log(arguments);

// }
// showArgs(10,20,30)

//_________________________________________________________________//


// const showArgs = () => (arguments)
// console.log(showArgs(10,20,30));

//ARROW FUNCATION DONT HAVE THEIR OWN ARGUMENT OBJECT//
//__________________________________________________________________________
// const arr=[1,2,3,4,5,6,7,8,9];
// let newArr =[]
// for (const num of arr){
//     if(num >4){
//         newArr.push(num);

        
//     }
// }
// console.log(newArr)

//___________________________________________________________________________
                            //USING FILTER


// let arr = [1,2,3,4,10,20,5,50];
// let newArr = arr.filter((val) => val > 4)

// console.log(newArr);

//__________________________________________________________________________

// let stringarr = ["sai", "ram", "shyam", "ishwar"];

// let newArr = stringarr.filter((str) => str.length > 6);

// console.log(newArr);

//__________________________________________________________________________


// const arr = [1,2,3,4,5,6];

// const Arr = [10,20,30,40,50,60];
// newArr = []
// for(const num of arr) {
//     newArr.push(num*10);
// }

// console.log(newArr)
// const newArr = Arr.filter((num) => num*10);

// console.log(newArr);

// const arr1=[1,2,3,4,5,6];
// const newArr=arr.map((val)=>(val*10));
// console.log(newArr);

                               //MAP//
                      //TRANSFORM EACH ELEMENT//
                          //RETURN NEW ARRAY//
                    //DOES NOT MUTATE ORIGINAL ARRAY//

//________________________________________________________________________

// const stringArr = ["aman", "rohit", "virat", "surya"];
// const result = stringArr.map(str => str.toUpperCase());
// console.log(result); [ 'AMAN', 'ROHIT', 'VIRAT', 'SURYA' ]*** OUTPUT***

//_____________________________________________________________________

const studentInfo ={
    username:"aman",
    age: 18,
    isloggedIn: true
}
console.log(typeof studentInfo);
console.log(typeof {});
   // object
    //object

console.log(Object.keys(studentInfo))
console.log(Object.values(studentInfo))
          
                            //output
                 // [ 'username', 'age', 'isloggedIn' ]
                      // [ 'aman', 18, true ]

console.log(studentInfo.username ="Rohit");
console.log(studentInfo.age =17);
console.log(studentInfo.email="aman@gmail.com")
console.log(studentInfo.hasOwnProperty("phone"));
                            
                       //OUTPUT
                       //Rohit
                         //17
                    //aman@gmail.com
                        //false


console.log(Object.entries("age"));


//_____________________________________________________________________________
