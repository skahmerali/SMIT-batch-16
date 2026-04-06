// const firstName: string = "Ahmer"
// console.log(firstName)

//! Type Inference

// let fullName;

// // fullName = 0;

// fullName = "Ali"

// console.log(fullName)


// STRONG TYPING 

// let country: string = "Pakistan" 

// console.log(country)

// UNION LITERALS 

// let id: string | number  = 12

// console.log(id)

// let age: string | number;

// age = true

// type RawData = boolean | number | string | null | undefined;

// let name : RawData
// let id :  RawData
// name = "Ali"

// Objects

type IPerson = {
    id: number,
    name: string,
    age: number,
    cnic: number,
    isStudent?: boolean
}

let person: IPerson = {
    id: 1,
    name: 'Ali',
    age: 24,
    cnic: 123456789,
    isStudent: true,
}

console.log(person)


let person1: IPerson = {
    id: 2,
    name: 'Waqar',
    age: 35,
    cnic: 1233456789,
    isStudent: true,

}