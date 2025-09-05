//ARRAY FUNCTIONS and EXCEPTION HANDLING



// let age: number = 9;

// if(age < 18){
//     age = age +10;
// }
// console.log("The age is: " + age);

//Unshift adds element at the start of array
let Names: string[] = ["Faraz", "Ali", "Ahmed", "Hassan", "Hussain"];
// Names.unshift("Ahmad");
// console.log(Names);

//Shift removes element from start of array
Names.shift();
//console.log(Names);

//find gets the first matching element
let numberArray: number[] = [12, 20, 18, 9, 25, 30, 23, 31, 35];
// let found = numberArray.find((num) => num >= 18 && num <= 25);
// console.log(found);

//includes checks if an element is present in array or not
// let isPresent = numberArray.includes(33);
// console.log(isPresent);


//some checks if at least one element matches the condition
// let isPresent = numberArray.some(num =>  num > 33); 
// console.log(isPresent);


//find and filter differs in the way that find gets the first matching element
//whereasas filter gets all the matching elements


//filter gets all the matching elements
// let filtered = numberArray.filter((num) => num >= 18 && num <= 25);
// console.log(filtered);
//map transforms each element in the array and returns a new array


// let mapped = numberArray.map(num => (num / 50) * 100);
// mapped.forEach(n => console.log(n + "%"));



// function identity<T>(value: T): T{
//     return value;
// }

// console.log(identity(10))
// console.log(identity<string>("Hello"))
// console.log(identity<boolean>(true))
// console.log(identity<number[]>([1,2,3,4,5]))

// function testing<T>(name: T): T{
//     return name;
// }

// function arrayLength<T>(arr: T[]): void{
//     console.log(arr.length);
// }

//arrayLength<string>(["Faraz", "Ali", "Ahmed", "Hassan", "Hussain"]);


// function Power2Array<T>(array: number[]): number[]{
//     const result = array.map(element => ( element* element)); 
//     console.log(result);
//     return result;  
//     }

// Power2Array<number>([1,2,3,4,5]);


// function Power2Array(array: number[]): number[]{
//     try{
//         if(!array.every(element =>typeof element === 'number')){
//             throw new Error("Array contains non-numeric elements");
//         }
//         const result =array.map(element => (element * element));
//         console.log("Squared Array: ", result );
//         return result;
//     }
//     catch(error)
//     {
//         console.error("Error: ",  (error as Error).message);
//         return [];
//     }finally{
//         console.log("Execution completed.");
//     }
// }

// Power2Array([1,2,3,4,5]);
// Power2Array([1,2,'6'as any,4,5]); // Intentionally passing a mixed array to demonstrate error handling
