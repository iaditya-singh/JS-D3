// different between let, var and const

// var num = 34;
// num = 56;
// console.log(num)

// var will update the value if the value is reassign


// let num = 43;
// num = 56;
// console.log(num)

//let will update the value if the value is reassign

// const num = 34;
// num = 55;
// console.log(num)

//const will show error




// redeclaration

// var num = 78;
// var num = 87;

// console.log(num)

// var will redeclare the value

// let num = 100;
// let num = 110;

// console.log(num)

// let will show error identifier num has already been declared

// const num = 110;
// const num = 122;

// console.log(num)

// const will also show error identifier num has alreay been declared


//Scope ( function(global scope), local(block scope) )

// var = global scope (function scope)
// let = local scope
// const = local scope

// let a = 23;
// function print() {

//     console.log(a)
//     //  area of block scope or local scope
// }
// print()

//if we declare any variable in local scope it can't be globally accessable

// hoisting

// console.log(a)
// var a = 45;

//variable cannot be hoist it goes top to bottom



// print()

// function print() {
//     console.log("hello")
// }

// function is hoist

// console.log(k)
// let k = 89;

// it shows error cannot access before initialization


// (reference error) let and const go in temperal dead zone and provide erroe that cannot access before initialization


// hoisting means kisi bhi function ka top of the body pohoch jana means behaving like a global

// operators(arithmatic, logical and comparission operators)

// arithmetic operators (+ , - , * , / , % )

let num1 = 23;
let num2 = 33;

let result = num1 + num2;
console.log(result)
console.log(num2 - num1)
console.log(num2 / num1)
console.log(num1 % num2)
console.log(num1 * num2)