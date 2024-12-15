// Global Scope
// Qno1
var stdName = "John Doe";
let cityName = "karachi";
const age = "25";

// Qno2
console.log(stdName);
console.log(cityName);
console.log(age);

// Yes They all are accessible globally

// Function Scope
// Qno 1
function greet1() {
    var num1 = 2 * 3;
    console.log(num1);

}

// Qno 2
function greet2() {
    let num2 = 2 * 4;
    console.log(num2);

}

// Qno 3
function greet3() {
    const num3 = 2 * 5;
    console.log(num3);

}

// Qno 4
greet1();
greet2();
greet3();

console.log(typeof num1);
console.log(typeof num2);
console.log(typeof num3);

// Qno 5
// observation:: agr function ke inside bane hue variables ko function ke outside console karein gn tw wo undefined show hoga java script
// allow nahi karta or agr function ke inside console karein tw wo output show kare ga

// Block Scope:
// Qno 1
if (true) {
    var varVariable = "I am a var variable";
    let letVariable = "I am a let variable";
    const constVariable = "I am a const variable";

    console.log(letVariable);
    console.log(constVariable);
}

console.log(varVariable);
// console.log(letVariable);
// console.log(constVariable);

// observation:: agr if ke inside let or const hoga tw usko outside console nahi kare ga qk wo blckscope hote hn if ke inside hi 
// console krna hoga or var variable outside bhi call ho sakhta hai qk wo blockscope nahi h.


// Hoisting with var:
x = 5;
var x;

var y;
y = 8

console.log(x);
console.log(y);

// Observation:: Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope chahe avalue phele assign karo ya baad mn.

// Hoisting with let and const:

// clrName = "blue";
// let clrName;

// clrName1 = "blue";
// const  clrName1; this code will not run

// console.log(clrName);

// Observation:: Variables defined with let and const are hoisted to the top of the block, but not initialized.error mn show hoga intialization phele
// hui hai or declare bad mn 

// Re-declaration 
// var// :
var myVar = "First declaration with var";
var myVar = "Second declaration with var";

console.log(myVar);
// This code will run

// let myLet = "First declaration with let";
// let myLet = "Second declaration with let"; 
// SyntaxError: Identifier 'myLet' has already been declared

// const myConst = "First declaration with const";
// const myConst = "Second declaration with const"; 
// SyntaxError: Identifier 'myConst' has already been declared


// Observation :: var se bna hua keyword allow krta hai redeclaration let and const blockscope hai isliye wo allow nahi krte

// Re-assignment:
var myVar = "Initial value";
console.log(myVar); // Outputs: "Initial value"

myVar = "Reassigned value";
console.log(myVar); // Outputs: "Reassigned value"

let myLet = "Initial value";
console.log(myLet); // Outputs: "Initial value"

myLet = "Reassigned value";
console.log(myLet); // Outputs: "Reassigned value"

const myConst = "Initial value";
console.log(myConst); // Outputs: "Initial value"

myConst = "Reassigned value"; // TypeError: Assignment to constant variable.

// Observation:: var or let allow krte hn lkn const allow nahi krta

// Temporal Dead Zone (TDZ):
{
    console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization
    let myLet = "Declared inside block";
}

{
    console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization
    const myConst = "Declared inside block";
}

// Observation::  Variables declared with let and const are hoisted to the top of their block (or scope)































