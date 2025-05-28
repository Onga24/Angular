// TypeScript code example demonstrating various features
let num:number = 42;
let str:string = "Hello, TypeScript!";

// interface for user details 
interface userdetails {
    name: string;
    age: number;
    isGraduate: boolean;
    }

// Function to clculate the sum of two numbers
 const mycalcfunc = (a:number,b:number)=>{
    console.log(a+b);
 }
 mycalcfunc(1,2);

// Function to print a greeting message for a user
 const printname =  (name:string):string=>{
    return `Hello, ${name}!`;
 }
 console.log(printname("John"));

// interface for a product
interface product {
    name: string;
    price: number;
}

// Function to print product details
 function printproduct(p:product):string{
   return `Product Name: ${p.name}, Price: ${p.price}`;
 }

 console.log(printproduct({name: "Laptop", price: 1000}));
// Union types
 let userid:number | string | number[] ;
 userid = [12345, 67890];
 console.log(userid);

// Optional properties in an interface uisng ?: 
 interface User {
    age?: number;
    name: string;
}

// Example of using the User interface
const user: User = {name: "Alice", age: 30};
const users: User = {name: "John"};
console.log(users.name);
console.log(user);

//  Function with optional parameter
function printname2(name?:string | number)
{
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log("Hello, Guest!");
    }
}
printname2();   

// interfacewith name property and a function to print the name
interface product2 {
    name: string
    }
function printname3(p:product2){
    console.log(`Product Name: ${p.name}`);
}
printname3({name: "Old Product"});

// enum to represent directions
enum dircation {
    right = "right",
    left = "left", 
    up = "up",
    down = "down"
}
// Function to print direction
function printdirection(direction: dircation) {
    console.log(`Direction: ${direction}`);
}
printdirection(dircation.right);

// enum to represent user roles
enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest" 
}
// Function to print user role
function printRole(role: Role) {
    console.log(`User Role: ${role}`);
}
printRole(Role.Admin);

// Enum to represent user levels
enum level {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced"
}
// Interface for a guest user with a level property
interface Guest {
    name: string;
    level: level;
}
const guest: Guest = {  
    name: "Bob",
    level: level.Intermediate
};
// Function to print guest details
function printGuestDetails(guest: Guest) {
    console.log(`Guest Name: ${guest.name}, Level: ${guest.level}`);
}
printGuestDetails(guest);

console.log(`user name: ${guest.level}`);

// Function to value with generics 
function PrintValue<T>(params:T)
{
    console.log(`Value: ${params}`);
}
PrintValue<string>("Hello, Generics!");
PrintValue<number>(100);

// Function to first item in an array using generics
function GetFirstItem<G>(arr: G[]): G {
    return arr[0];
}
console.log(GetFirstItem<number>([11,3]));

// Function to get the last item in an array using generics that accepts two types
function GetSecondItem<a,b>(arr:[a, b]): a | b {
    return arr[0]
}
console.log(GetSecondItem(["Hello", 42]));
