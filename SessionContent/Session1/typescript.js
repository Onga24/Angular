// TypeScript code example demonstrating various features
var num = 42;
var str = "Hello, TypeScript!";
// Function to clculate the sum of two numbers
var mycalcfunc = function (a, b) {
    console.log(a + b);
};
mycalcfunc(1, 2);
// Function to print a greeting message for a user
var printname = function (name) {
    return "Hello, ".concat(name, "!");
};
console.log(printname("John"));
// Function to print product details
function printproduct(p) {
    return "Product Name: ".concat(p.name, ", Price: ").concat(p.price);
}
console.log(printproduct({ name: "Laptop", price: 1000 }));
// Union types
var userid;
userid = [12345, 67890];
console.log(userid);
// Example of using the User interface
var user = { name: "Alice", age: 30 };
var users = { name: "John" };
console.log(users.name);
console.log(user);
//  Function with optional parameter
function printname2(name) {
    if (name) {
        console.log("Hello, ".concat(name, "!"));
    }
    else {
        console.log("Hello, Guest!");
    }
}
printname2();
function printname3(p) {
    console.log("Product Name: ".concat(p.name));
}
printname3({ name: "Old Product" });
// enum to represent directions
var dircation;
(function (dircation) {
    dircation["right"] = "right";
    dircation["left"] = "left";
    dircation["up"] = "up";
    dircation["down"] = "down";
})(dircation || (dircation = {}));
// Function to print direction
function printdirection(direction) {
    console.log("Direction: ".concat(direction));
}
printdirection(dircation.right);
// enum to represent user roles
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["User"] = "User";
    Role["Guest"] = "Guest";
})(Role || (Role = {}));
// Function to print user role
function printRole(role) {
    console.log("User Role: ".concat(role));
}
printRole(Role.Admin);
// Enum to represent user levels
var level;
(function (level) {
    level["Beginner"] = "Beginner";
    level["Intermediate"] = "Intermediate";
    level["Advanced"] = "Advanced";
})(level || (level = {}));
var guest = {
    name: "Bob",
    level: level.Intermediate
};
// Function to print guest details
function printGuestDetails(guest) {
    console.log("Guest Name: ".concat(guest.name, ", Level: ").concat(guest.level));
}
printGuestDetails(guest);
console.log("user name: ".concat(guest.level));
// Function to value with generics 
function PrintValue(params) {
    console.log("Value: ".concat(params));
}
PrintValue("Hello, Generics!");
PrintValue(100);
// Function to first item in an array using generics
function GetFirstItem(arr) {
    return arr[0];
}
console.log(GetFirstItem([11, 3]));
// Function to get the last item in an array using generics that accepts two types
function GetSecondItem(arr) {
    return arr[0];
}
console.log(GetSecondItem(["Hello", 42]));
