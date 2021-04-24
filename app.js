// var a = "Waqas"
// var b = "Altaf"
// alert(a + " " + b)

// var a = "Waqas"
// var a = "Hassan"
// var b = "Altaf"
// alert(a + " " + b)

// let a = "Waqas"
// a = "Hassan"
// let b = "Altaf"
// alert(a + " " + b)

// let a = "Waqas"
// let a = "Hassan"
// let b = "Altaf"
// console.log(a)
// alert(a + " " + b)

// const a = "Waqas"
// a = "Hassan"
// const b = "Altaf"
// alert(a + " " + b)
// console.log(a)


//Pass by Value

// let c = "Waqas"
// let d = c 
// d = "Hamza"
// console.log(c)
// console.log(d)


//Pass by Reference

// let a = [1,2,3,4]
// let b = a 
// b.push(5)
// console.log(a)
// console.log(b)

// let a = [1,2,3,4]
// let b = [].concat(a) 
// b.push(5)
// console.log(a)
// console.log(b)


//Rest Operator and Destructuring

// let a, b;
// [a, b] = [4, 5]
// console.log(a, b)

// let a, b;
// [a, ...b] = [1,2,3,4,5,6]
// console.log(a,b)

// let food = ["Zinger", "Broast", "Roll"]
// let a,b,c;
// // [a, b, c] = food;
// [a, ...b] = food;
// // console.log(a ,b , c)
// console.log(a ,b)


//Spread Operator

// let array1 = ['h', 'e', 'y'];
// let array2 = [...array1];
// array2.push("w")
// console.log(array1);
// console.log(array2);


//Template Literals 

// let a = "waqas Rizwi"
// // console.log("My name is " + a)
// console.log(`My name is ${a}`)


//Object Literal Shorthand

// const a = 'foo';
// const b = 42;
// const c = {
//     a: "w",
//     b: "a"
// };
// const object1 = {
//     a: a,
//     b: b,
//     c: c
// };
// console.log(object1);

// const object2 = {
//     a,
//     b,
//     c
// };
// console.log(object2);


//Try & Catch

// try{
//     aler("Waqas")
// } catch(error){
//     console.log(`This is ${error}`)
// }


// let a = [1,2,3,4,5]
// // JSON.stringify(a)
// let b = [...a]
// b.push(6)
// console.log(a,b)

// let obj1 = {
//     FirstName: "Muhammad"
// }
// let obj2 = {
//     LastName: "Waqas"
// }
// let newobj = Object.assign({}, obj1, obj2)
// newobj.LastName = "Hassan"
// console.log(newobj)

// let gender = "Male"
// gender === "Male" ? console.log("Write") : console.log("Wrong")

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// };
// for (d in obj) {
//     console.log(`${d}: ${obj[d]}`)
// }

// let students1 = ["Waqas", "Hamza", "Saad"]
// let students2;
// for (students2 of students1) {
//     console.log(`${students2}`)
// }

// const arr = [1,40,2,10,10,40,2,2,5,3,54,2,42,5,5,5].sort(function(a, b){return a-b})
// const newset = new Set(arr)
// console.log(newset)

// let arr = [1,123,1234,12345]
// for (let i of arr) {
//     console.log(i)
// }

// const num = [12345]
// for (let i of num){
//     console.log(i)
// }

// let num1 = 12345
// let a = 2
// let b = num1%a
// console.log(num1,a,b)
// let c = 17%3
// console.log(c)
// // for (){

// }

/*4- Find the third highest number in array using Set, sort and reverse
const arr = [1,210,5,7,65,5,20,8,210,65];*/

// const arr = [1,210,5,7,65,5,20,8,210,65].sort(function(a, b){return a-b})
// // const arrreverse = [1,210,5,7,65,5,20,8,210,65].reverse(function(a, b){return a-b})
// let newset = new Set(arr)
// let largest = arr[5]
// console.log(newset, largest, arr) 

//==================== ES6 Final Practice ================

//Arrow Functions

// function sum(a, b){
//     return a + b
// }

// console.log(sum(2, 3))

// let arrowsum = (a, b) => a + b

// console.log(arrowsum(2, 3))

//Default Values

// function name(name = "Waqas"){
//     let msg = `Welcome ${name}`
//     console.log(msg)
// }
// name("Hamza")
// name()

// function obj({name = "Waqas", rollnum = "25", ...rest} = {}){
//     console.log(name, rollnum, rest)
// }
// obj()
// obj({name: "Hamza", rollnum: "20", value: "15", value2: "30"})

// function obj1({name, rollnum} = {}){
//     console.log(name, rollnum)
// }
// obj1()

//Map and Filter

// let arr = [1,2,3,4,5]
// let multiply = arr.map((val) => val * val)
// console.log(arr, multiply)

// let arr = [true, "", "Waqas", false, 2, 0]
// let filter = arr.filter((val) => !val)
// console.log(filter)

//Object Dot Assign

