/***** VARIABLES AND DATATYPES *****/

// Variable as types
var x = 1;
var y = "2";

console.log(x+y);

// We can redifined a variable
var x = "abc";

console.log(x);

let r = "hello";

// Cannot redifine variables with let
//var r = 3;

// You can still change type of the variable
r = 12;
console.log(r);

const f = "abc";

// can not change constants
//f = 2;

// empty array
let myArray = [];

// array with multiple types
myArray = ["abc", 2, true];

console.log(myArray);

const constArray = ["abc", "rrr"];

// cannot redifine const array
// constArray = [""];

// Arrays ara mutable
constArray.push("fff");
console.log(constArray);

const myObject = {};

// myObject is constant
//myObject = {"hello":"world"}

// objects are mutable
myObject["hello"] = "world";

console.log(myObject);
FU
/***** ARROW FUNCTIONS *****/

function helloworld() {
    return "helloworld";
};

console.log(helloworld());

const helloworldarrow1 = () => "helloworld";

console.log(helloworldarrow1());

const helloworldarrow2 = () => { return "helloworld"};

console.log(helloworldarrow2());

/***** OPERATOR *****/

const u = ["abc", "rrr", "fff"];
const a = u;

// Should be true
console.log(a==u);

const h = [...u];

// Should be false
console.log(h==u);

const o1 = {
    "abc":"bcs"
};

console.log(o1);

const o2 = {...o1};

// clone the object
console.log(o2);

// Create object from variables
const p1 = "a";
const p2 = "b";
const p3 = "c";

const o3 = {
    p1,
    p2,
    p3
};

console.log(o3);

const o4 = {
    "pa1":"a",
    "pa2":"b",
    "pa3":"c"
}

// extract from object
const {pa1,pa2,pa3} = o4;

console.log("values", pa1, pa2, pa3);


/***** PROMISES *****/

// Creating a promise
 const pro1 = new Promise(
    function(resolve, reject) {
        console.log("start promisse...");
        console.log("this promisse will end in five seconds...");
         window.setTimeout(() => {
             resolve("helloworld");
         }, 5000)n
    });

 pro1.then(function (value) {
    console.log(value);
    console.log("Promise end...")
 });
 console.log("Defining the promise callback");


 // Handle reject and resolve
 const pro2 = (value) => {
     return new Promise(
         (resolve, reject) => {
             console.log("start promisse...");
             console.log("this promisse will end in five seconds...");
             window.setTimeout(() => {
                 if(value == "hello"){
                     resolve("accept world");
                 }else{
                     reject("reject world");
                 }
             }, 5000)
         });
 };

  pro2("hello").then((value)=>{
      console.log(value)
  }).catch((value)=>{
      console.log(value)
  });

  pro2("goobye").then((value)=>{
      console.log(value)
  }).catch((value)=>{
      console.log(value)
  });
