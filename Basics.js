//DataTypes in Javascript
//String 
let Nam = "Alice in the BorderLand";
console.log(Nam);
console.log(Nam.length);
console.log(Nam);
console.log(Nam.charCodeAt('A'));
console.log("Hello \br".concat(Nam));
console.log(Nam.includes("lic"));
console.log(Nam.slice(13, Nam.length));
console.log(Nam.trimStart());
console.log(Nam.padEnd(25, '-'));
console.log(Nam.match(/the/));
//Number: All floating and integer types are Part of Number Datatype
//objects
let car = {brand: "Tesla", model: 5};
console.log(car.brand + car.model);

//Functions 
//call- with a given this value plus argument 
function greet(greeting)
{
    console.log(greeting + ", " + this.name);
}
let user = { name: "Alice"};
greet.call(user, "Hello");

//apply
greet.apply(user, ["Hi"]);
greet.bind(user, "Hi");
console.log(greet.toString());