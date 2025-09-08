/*let username: string = "Aymon";
console.log(username);
//objects of functions
interface User {
    name: string;
    age: number;
    isAvailable: boolean;
}
let user1: User = {
    name: "Alice",
    age: 22,
    isAvailable: true
}
//class
class Animal {
    name: string;
    constructor(name: string){
        this.name = name;
    }
     makeSound(): void {
    console.log(`${this.name} makes a sound`);
    }

}
let dog = new Animal("dog");
    dog.makeSound();

//Union Types
let id: number | string;
id = 101;
id = "Alice";*/

import { Console, error } from "console";

//let person: [string, string[]] = ["Alice", ["john", "green", "hello", "world", "how"]];
//console.log(person[0])
//console.log(person[1])
//mutable arrays

//readonlyarray
//let nums: ReadonlyArray<number> = [1,2,4];
//const fixedPerson: readonly [string, number] = ["Alice", 26];


/*values.shift();
for (let i = 0; i < values.length; i++) {
  console.log(values[i]); 
}
values.unshift(2,5);
console.log("/n");
for (let i = 0; i < values.length; i++) {
  console.log(values[i]); 
}
values.push(5);
for (let i = 0; i < values.length; i++) {
  console.log(values[i]); 
}
console.log("break");
values.pop();
for (let i = 0; i < values.length; i++) {
  console.log(values[i]); 
}*/
let values: number[] = [1, 2, 3, 4, 6]
// let longFruits = values.reduce((sum, n) => sum + n, 0);
// //console.log(longFruits);
// let val= values.sort((a, b) => a - b);
// console.log(values.reverse());
// let max = values.splice(3, 1);
// console.log(max);
// let value = values.sort((a, b) => b-a);
// console.log(value);
// let joined = values.join("-");
// console.log(joined);

// function sumAll(...nums: number[]): number {
//     return nums.reduce((acc, n) => acc+ n, 0);
// }
// console.log(sumAll(1,2,3,4));

// function Pop(nums: number[]) : number[] {
//     return nums.filter(n => n*2);
// }

// let users = [
//     {name: "Alice", age: 25},
//     {name: "BorderLand", class: 7}
// ]
// console.log(users[0].class);
// console.log(users[1].class)

//interface + objects + function

// interface User {
//     name: string;
//     age: number;
// }

// let user: User[] = [
//     {name: "Alic3e", age: 27},
//     {name: "kacy", age: 19}
// ]

// function getUser(use: User[]) : User[] {
//     return user.filter(p => p.age>20 && p.name.startsWith('A'));
// }

// console.log(JSON.stringify(getUser(user)));

//exception handling 
// class User {
//     name: string

//     constructor(Name: string){
//         this.name = Name.toLowerCase();
//     }

//     greet() : void {
//         if(this.name.startsWith('a') && this.name.endsWith('a'))
//         try {        
//         console.log("Hello" + this.name)   
//         }
//         catch(error) {
//             console.log(error)
//         }
//         finally
//         {
//             console.log("exceution done");
//         }        
//     }

// }

// class Manager extends User
// {    
//     constructor( name: string)
//     {
//         super(name);        
//     }

//     private managers: ReadonlyArray<string> = ["John", "Wick", "vicky", "Doe"]
//     function getManager<T>(managers: T): T {
//          if(this.name.startsWith('A'))
//          {
//             forea
//          }
//     }
// }


// class Manager {
//     protected managers: ReadonlyArray<string> = ["John", "Wick", "vicky", "Doe"]
//     constructor() {
//         console.log("Managers are being assogned");
//     }
// }

// class User extends Manager {
//     Name: string = '@';
//     constructor(name: string) {
//         super();
//         this.Name = name.toLowerCase();
//     }

//     managersList: ReadonlyArray<string> = this.managers
//     getManager(): void {
//         try {

//             if (this.Name.startsWith("a") && this.Name.endsWith("a")) {
//                 console.log(`${this.Name} has ${this.managersList[this.managersList.length - 1]} as last manager`);
//             } else {
//                 throw new Error(`User "${this.Name}" is invalid!`);
//             }
//         } catch (error) {
//             if (error instanceof Error) {
//                 console.error("Custom Error Caught:", error.message);
//             } else {
//                 console.error("Unknown error:", error);
//             }
//         }
//     }
// }

// const user1 = new User("Anna");
// user1.getManager();

// const user2 = new User("Bob");
// user2.getManager();


//generics
// function getFirstElement<T>(arr: T[]): void {
//     arr.forEach(element => {
//         console.log(element)
//     });;
// }

// getFirstElement<number>([1, 2, 3]);
// getFirstElement<string>(["a", "b"]);

// function identity<T>(val: T) : T{
//     return val;
// }

// function doSomething(task, callback)
// {
//     console.log("Task started: ", task);
//     callback();
// }

// function afterTask()
// {
//     console.log("Task is finished!");
// }

// doSomething("clean the room", afterTask);