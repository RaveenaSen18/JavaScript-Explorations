
// alert("welcome");
// alert(4+5);
// console.log("hello");
// --variable--
// var
// let
// const
// --data types--
// primitive type        reference types
//     String                 Object
//     integer/Number         Array
//     Boolean                function
//     undefined
//     null
// var name1="keerthana";
// name1="keerthi";
// console.log(name1);
// var a=2;

// let msg="welcome to " + name1 + "  java script!!";
// alert(msg);
// console.log(msg);

// object
// let person={
//     name:"keerthana",
//     age:23,
//     address:"bhavani",
//     sibling:{
//         brother:"angu",
//         sister:"dhivya"
//     }
// }

// person.age=25
// console.log(person);

// dot notation
// console.log(person.name);

// bracket notation
// console.log(person['name']);
// console.log(name1);


// {}--object
// []--array

// ----array---
// let color=["red", "white", "black" ]
// color[5]="green"
// console.log(color);


// --function---

// function user1(){
//     let name="keerthana";
//     let msg="hello " + name + " i'm learning java script !";
//     alert("Hi!!!");
//     console.log(msg);
// }

// user()


// function user(firstName, lastName){
   
//     let msg="hello " + firstName + " " + lastName + " i'm learning java script !";
//     console.log(msg);
// }

// user("keerthana", "mani")
// user("saranya", "samy")

// function add(num1, num2){
//     console.log(num1+num2)
// }
// add(10,20)


// --ternary operator--
// --syntax--
// condition ? 'value1' : 'value2'

// let age=19;
// let type= age >18 ? "adult ticket" : "child ticket"

// console.log(type);


// --logical operator---

// let highIncome= true;
// let CIBILScore= true;

// let eligibileperson= highIncome && CIBILScore
// let applicationstatus= !eligibileperson
// console.log(highIncome || CIBILScore);

// console.log("loan ststus:" + eligibileperson);
// console.log("application ststus:" + applicationstatus);




// --operator precedence--
let x = (2+5) * 10;
console.log(x);


let a=10;
let b=20;
let c=a+b;
// console.log(c);

// ---if else --

let weather = "cold";

if(weather === "hot"){

console.log("Weather is Hot!");
// console.log("Weather is coll!");
}
else
console.log("Weather is Cold!");

// let hrs = new Date(); 
// console.log(hrs);
// console.log(hrs.getHours());

//--for--

// const person = { name: 'Anu', age: 21};
// for(let key in person){
// 	console.log("Key: ",person[key]);
// } 

// let colors = ['red','blue','green'];

// for (let color of colors){
// console.log("Color: ",+ color);
// console.log(color);
// }

// --object to function-- oops
// let person={
//         name:"keerthana",
//         age:23,
//         address:"bhavani",
//         sibling:{
//             brother:"angu",
//             sister:"dhivya"
//         },
//         greeting:function(){
//             let msg= "welcome to " +this. name + "  java script!!";
//             console.log(msg);
//         }
//     }
    // console.log(person.greeting());
    // person.greeting();  

// const person = { name: 'Anu', age: 21};
// for(let key in person){
// 	console.key("Key: ",key);
// }  



// function add(a, b) {
//     return a + b;
// }

// let sum = add;

// function average(a, b, fn) {
//     return fn(a, b) / 2;
// }

// let result = add(10, 20, sum);
// let result1 = average(10, 20, sum);

// console.log(result);
// console.log(result1);

// --factory function--

// function createPerson(name){ //camelcase :myFirstName varible, factoory fun
//     return{
//         name:name, //name,
//         greeting:function(){
//              let msg= "welcome to " +this. name + "  java script!!";
//              console.log(msg);
//         }
//     };
// }
// let sample=createperson("keerthi");
// sample.greeting();
        

//constructor function  //pascase--MyFirstName   class, constructor fun
// function Person(name){
//     this.name = name;
//     this.greeting=function(){
//         console.log("my name is "+ this.name );
//     }
// }

// let person1=new Person("kavi");
// person1.greeting();

//function declaration

// function addNo(){
//     console.log('hello');
// }

//function expression

// let addexpresion=function(){
//     console.log('hello');
// }
// addNo();
// addexpresion();


// function compareBy(propertyName) {
//     return function (a, b) {
//       let x = a[propertyName],
//         y = b[propertyName];
  
//       if (x > y) {
//         return 1;
//       } else if (x < y) {
//         return -1;
//       } else {
//         return 0;
//       }
//     };
//   }

//   console.log(compareBy);

// let products = [
//     { name: 'iPhone', price: 900 },
//     { name: 'Samsung Galaxy', price: 850 },
//     { name: 'Sony Xperia', price: 700 },
//   ];
  
//   sort products by name
  // console.log('Products sorted by name:');
  // products.sort(compareBy('name'));
  // console.log(compareBy('name'));
  
  // console.log(products);


  // sort products by price
// console.log('Products sorted by price:');
// products.sort(compareBy('price'));
// console.table(products);

// function cmToIn(length) {
//     return length / 2.54;
//   }
  
//   function inToCm(length) {
//     return length * 2.54;
//   }
  
//   function convert(fn, length) {
//     return fn(length);
//   }
  
//   let inches = convert(cmToIn, 10);
//   console.log(inches);
  
//   let cm = convert(inToCm, 10);
//   console.log(cm);

//   function square(x) {
//     x = x * x;
//     return x;
// }

// let x = 10;
// let result = square(x);

// console.log(result); // 100 
// console.log(square.x); 


// let person = {
//     name: 'John',
//     age: 25,
//   };
  
//   function increaseAge(obj) {
//     obj.age += 1;
//   }
  
//   increaseAge(person);
  
//   console.log(person);

//   let person = {
//     name: 'John',
//     age: 25,
//   };
  
//   function increaseAge(obj) {
//     obj.age += 1;
  
    // reference another object
//     obj = { name: 'Jane', age: 22 };
//   }
  
//   increaseAge(person);
  
//   console.log(person);
  
  