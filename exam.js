// CALL,APPLY AND BIND
var student={age : 20};
var print = function (){
   return this.age;
}
console.log(print.call(student));

var objadd = print.bind(student);

console.log(objadd());

// CURRYING using bind

let add = function (a,b)
{
    console.log(a+b);
}

let addwithone = add.bind(this,1);
addwithone(2);

//CURRYING USING CLOSURE

let multiply = function(a)
{
    return function multi(b){
        return a*b;
    }
}

let op = multiply(2);
console.log(op(3));