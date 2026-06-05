// // // const mul = function(a, b) {
// // //   return a * b;
// // // };
// // const add1 = function(a, b) {
// //   return a + b;
// // };
// // // let z = mul(4, 3);
// // // let y = mul(1,2);
// // // let z1 = add(4, 3);
// // // let y1 = add(1,2);
// // // // alert("welcome to site");
// // // console.log(z);
// // // console.log(y);

// const add = (a, b) => {
//   return a + b;
// };
// // let z1 = add(4, 3);
// // let y1 = add1(1,2);
// // console.log(z1);
// // console.log(y1);
// console.log(add(2,2));
// console.log(add);
// // console.log(add1);
// const person = {
//   name: "John",
//   greet: function() {
//     return this.name;
//   }
// };
// console.log(person.greet());
// // const person = {
// //   name: "John",
// //   greet: () => {
// //     return this.name;
// //   }
// // };
// const person = {
//   firstName: "John",
//   lastName : "Doe",
//   age      : 50,
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.fullName());
// Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Create an Array
// const myArray = Object.keys(person);
// console.log(myArray);

// // Stringify the Array
// let text = JSON.stringify(person);
// console.log(text);

// function Person(first, last, age, eyecolor) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
//   this.eyeColor = eyecolor;
//   this.nationality = "English";
// }

// const myFather = new Person("John", "Doe", 50, "blue");
// const myMother = new Person("Sally", "Rally", 48, "green");
// Person.prototype.language = "English";
// const mySister = new Person("Anna", "Rally", 18, "green");

// const mySelf = new Person("Johnny", "Rally", 22, "green");

// myFather.language = "English";

// console.log(myFather.language);
// console.log(myFather.language + " line 82");
// console.log(Person.toString());
// console.log(myFather);
// console.log(myMother);
// console.log(Person);

// const cars = ["Saab", "Volvo", "BMW"];
// console.log(cars[1]);
// console.log(cars.toString());

// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);
// console.log(citrus)

// let x = 5;

// try {
//   x = y + 1;
// } catch(err) {
//   let text = err.name;
//   console.log(text);
//   console.log(err);
// }

// try {
//   let x = y;
//   let y = 5;
//   console.log(x+y+1);
// } catch(err) {
//   let text = err.name;
//     console.log(text);
//   console.log(err);
// }

let anna = 5;
try {
  let x = y;
  let y = 5;
  throw 100;
} catch(err) {
//   let text = err.name;
//   console.log(text);
  console.log(err.message);
}

async function getData() {
  let result = await fetch("https://jsonplaceholder.typicde.com/posts");
  console.log(await result.json());
  
}
getData();