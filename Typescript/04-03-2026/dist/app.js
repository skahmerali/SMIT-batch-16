"use strict";
// Type Alias 
Object.defineProperty(exports, "__esModule", { value: true });
// type Author = {
//     firstName: string;
//     lastName: string;
// };
// type Book = {
//     author: Author;
//     name: string;
// };
// interface Author {
//     firstName: string;
//     lastName: string;
// };
// interface Book {
//     author: Author
//     name: string
// }
// const myBook: Book = {
//     author: {
//         firstName: "Zia",
//         lastName: "Khan"
//     },
//     name: "My Best Book"
// }
// interface IManagemnet {
//     staffId: number | string,
//     staffName: string
// }
// interface IStudent {
//     studentId?: number | string,
//     studentName?: string
// }
// type intersectedType = IManagemnet & IStudent
// let campusData: intersectedType = {
//     staffId: 10101,
//     staffName: "Shehriyar",
//     studentId: 1,
//     studentName: "Abdullah"
// }
// let campusData1: intersectedType = {
//     staffId: 10101,
//     staffName: "Shehriyar",
// }
//! ANY 
// let myval: any = "any"; 
// myval = true; // OK
// myval = 42; // OK
// myval = "hey!"; // OK
// myval = []; // OK
// myval = {}; // OK
// myval = Math.random; // OK
// myval = null; // OK
// myval = undefined; // OK
// myval = () => { console.log('Hey again!'); }; // OK
// UNKNOWN 
var x = "Ahmer";
if (typeof x === "string") {
    console.log(x.toUpperCase());
}
