//////////////------------Q1--------------////////////////////
//1. What’s the result of executing this code and why.
/*
function test() {
  let a;
  console.log(a);
  console.log(foo());

  a = 1;
  function foo() {
    return 2;
  }
}

test();

//return undefined and 2

//undefined is from console.log(a) as a is logged before initializing the value.

//////////////------------Q2--------------////////////////////

//Q2. is from console.log(foo()) which returns the value 2

//2.What’s the result of executing this code and why.
console.log("------------------------");
let a = 1;

function someFunction(number) {
  function otherFunction(input) {
    return a;
  }

  a = 5;

  return otherFunction;
}

const firstResult = someFunction(9);
const result = firstResult(2);
console.log(result);

//result is 5 as due to lexical scoping otherFunction will look up for a and nearest a is in its parent function (a = 5). hence 5 is returned.
//here parameters added to someFunction or firstResult doesnt play any role. value a=5 is always returned.
// if a = 5  is deleted then a = 1 is returned;

//////////////------------Q3--------------////////////////////

let fullname = "John Doe";
const obj = {
  fullname: "Colin Ihrig",
  prop: {
    fullname: "Aurelio De Rosa",
    getFullname: function () {
      return this.fullname;
    },
  },
};

console.log(obj.prop.getFullname());
// returns fullname as Aurelio De Rosa as thats the closest in the variable scope.it doesnt need to look up in parent functions.
const test4 = obj.prop.fullname;
console.log(test4); // same result AS above
// returns fullname as Aurelio De Rosa as thats the closest in the variable scope.it doesnt need to look up in parent functions.

const test3 = obj.prop.getFullname; // getfullname is a function which needs to be called!!
console.log(test3); // returns a [function :getFullname]
console.log(test3()); // returns undefined value is called and not the function !!

//////////////------------Q4--------------////////////////////
*/
let a = 1; //global scope

function b() {
  a = 10;
  return;
  function a() {}
}

console.log(`-------------------`);
b(); //returns nothing
//console.log(b()); //undefined  as return terminates the function and nothing to console.log
console.log(a); //retuns a = 1; console.log is written outside the function hence a = 1 here.
