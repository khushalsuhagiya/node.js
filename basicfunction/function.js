// function constructor
// let product = new Function("a", "b", "return a*b")
// console.log(product(12,5));


// function Product(a,b){
//     return a *b;
// }
// console.log(12*5);

// Arrow Function
// let x = (a,b) => {
//     let sum = a +b;
//     return sum;
// }
// let x = (a,b) => a*b;
// console.log(x(15,20));


// IIFE
// (function(){
//     console.log("Hello Wolrd.....");
// })();
// ((a,b)=>{

//     console.log("Product is: ", a*b);
// })(45,6);



// function Objects
// function SumAll(){
//     return arguments.length;
// }
// let text = SumAll(1,2,3,4,5);      
// console.log(text);


// function SumAll(){
//     let s = 0;
//     for(let i = 0; i<arguments.length; i++){
//         s += arguments[i];
//     }
//     return s;  
// }
// let text = SumAll(1,2);     
// console.log(text);


// // this keyword
// let person = {
//     firstName: "Skill",
//     lastname: "Qode",
//     age: 11,
//     Fullname: function(){
//         return this.firstName + " " + this.lastname;
//     }
// }

// // console.log(person.age);//11
// console.log(person.Fullname());


// Callback function
// function hello(){
//     console.log("Hello Wolrd");
// }

// function skill(s, callback){
//     console.log("Hi....",s);
//     callback();     // hello()
// }

// skill("Peter", hello);