


function Person(firstName, lastName, dob) {
    this.firstName =firstName;
    this.lastName = lastName;
    thid.dob = dob;
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }

    this.getFullName = function() {

        return `${this.firstName} ${this.lastName}`;
    }
}


const perons1 = new Person('Jon', 'Doe', '4-3-1980');
const perons2 = new Person('mim', 'kei', '3-3-1922');

console.log(person1);
console.log(person1.getBirthYear());

// ----------------------------------------------------------------------

function Person1(firstName, lastName, dob) {
    this.firstName =firstName;
    this.lastName = lastName;
    thid.dob = dob;
    
    Person1.prototype.getBirthYear = function() {
        return this.dob.getFullYear();
    }

    Person1.prototype.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}


const perons1 = new Person('Jon', 'Doe', '4-3-1980');
const perons2 = new Person('mim', 'kei', '3-3-1922');

console.log(person1);
console.log(person1.getBirthYear());


//----------------------------------------------------------------------

class Person2 {
    constructor(firstName, lastName, dob) {
       this.firstName =firstName;
       this.lastName = lastName;
       thid.dob = dob;
    }
    
    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

 
const perons1 = new Person2('Jon', 'Doe', '4-3-1980');
const perons2 = new Person2('mim', 'kei', '3-3-1922');

console.log(person1);
console.log(person1.getBirthYear());


