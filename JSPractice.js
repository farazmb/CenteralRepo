let nums = [1, 2, 3, 4, 5, 6];
// nums.forEach(n => console.log(n));


//let doubled = nums.map(n => n * 2);
//doubled.forEach(n => console.log(n));


//-----------------------Destructuring Arrays------------------------


//Basic Destructuring
// let array = [22, 33, 44, 55, 66];
// let [a, b, c, d, e] = array;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);   



//skipping items
// let [a, , , , b] = [1, 2, 3, 4, 5];
// console.log(a, b);



//Default Values
// let [x = 1, y = 2, z = 3] = [10];
// console.log(x, z); 



//Swapping Variables
// let m = 5 , n = 10;
// [m, n] = [n, m];
// console.log(m, n);



//Find Index of Array
// console.log(nums.indexOf(4));



//-----------------------Reducing and Checking Elements in Array------------------------



// let sum = nums.reduce((acc, n) => acc + n, 0);
// console.log(sum);



//atleast one match
//console.log(nums.some(n => n > 5));



//all must match
//console.log(nums.every(n => n > 5));



//-----------------------Sorting & Changing Elements in Array------------------------



//Sorting Array


// Example with [3, 1, 2]
// Compare (3, 1) → 3 - 1 = 2 (positive) → so 1 comes before 3
// Compare (3, 2) → 3 - 2 = 1 (positive) → so 2 comes before 3
// Compare (1, 2) → 1 - 2 = -1 (negative) → so 1 stays before 2
// Final sorted array: [1, 2, 3]
//a-b for ascending order

//console.log(nums.sort((a, b) => a - b));


//-----------------------Destructuring with Functions------------------------


//returning multiple values from a function
// function Multple(){
//     return[100, 200, 300];
// }

// let [value1, value2, value3] = Multple();
// console.log(value1, value2, value3);



//destructuring in parameters
// function display([value1, value2, value3])
// {
//     console.log(value1, value2, value3);
// }
// display
//  ([1000, 2000, 3000]);


//  function numbers([faraz, ahmed, asad]){
//     console.log(faraz, ahmed, asad);
//  }
//  numbers([310, 320, 300]);


//-----------------------Advance Array Destructuring------------------------



//Nested Array Destructuring
//let NestedArray = [a, [b,c], d, [e, f]] = [1, [2, 3], 4, [5, 6]];
//console.log(a, b, c, d, e, f);



//Rest Pattern
 let [x, y, z, ...i] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
 console.log(x); 
console.log(y); 
console.log(z);
console.log(i); 
