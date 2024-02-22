// variales
let firstName: string = "Mohammed";
let lastName: string = "shaheer";
let age: number = 22;
// functions
function add(a: number, b: number) {
    return a+b;
}

// generics
function addNum <T> (a: T, b: T){
    console.log(a,b)
}
addNum(12,12);
//class
class Human {
    constructor(public firstName: string, public lastName: string, public age: number) {
        
    }
    displayPersonsDetails(){
        console.log(firstName);
        console.log(lastName);
        console.log(age);
    }
    displayPersonsName(){
        return alert(firstName);
    }
}

const person = new Human(firstName, lastName, age);
person.displayPersonsDetails();
person.displayPersonsName();

// interface

interface Person {
    fistName: string;
    lastName: string;
    age: number;
    greet: (name: string) => {
        
    };
}

class Shaheer implements Person {
    fistName: string;
    lastName: string;
    age: number;
    greet: (name: string) => {};

}