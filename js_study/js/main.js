function addNums(num1 = 1, num2 = 2) {
    console.log(num1 + num2);
}

function lesson7() {

    addNums(5,5);

}


function lesson6() {
    const x = '10';

    if (x==10) {
        console.log('x is 10');
    }

    if (x===10) {
        console.log('x is 10');
    }

    if (x>10 && x< 10) {}


    const color = x > 10 ? 'red' : 'blue';

    console.log(color);

    switch(color) {

        case 'red':
            console.log('color is red');
            break;

        case 'blue':
            console.log('color is blue');
            break;
        default:
            console.log('color is not red and blue ...');
            break;
    }

}


function lesson5() {

    const todos = [
    {
        id: 1,
        text: ' Take Out Trash',
        isCompleted: true

    },
    {
        id: 2,
        text: ' Take in Trash',
        isCompleted: true

    },
    {
        id: 3,
        text: ' go Out Trash',
        isCompleted: true

    }
    ];

    console.log(todos);
    console.log(todos[0].id)  ;   

    const todoJSON = JSON.stringify(todos);
    console.log(todoJSON);

    //for loop

    for(let i=0; i<10; i++) {
        console.log(i);
        console.log(`For loop number : ${i}`);
    }

    let i =0;

    while(i < 10) {
        console.log(`while loop number : ${i}`);
    }

    for (let i =0 ; i < todos[i].length; i++ ) {
        console.log(todo.id)
    }

    for (let todo of todos) {
        console.log(todo.id);
    }

    //forEach, map, filter
    //high order array method

    todos.forEach(function(todo) {
        console.log(todo.text);
    });

    const todoText = todos.map(function(todo) {
        return todo.text;
    });

    console.log(todoText);
   
    const todoCompleted = todos.filter(function(todo) {

        return todo.isCompleted == true;
    });

     const todoCompleted = todos.filter(function(todo) {
        return todo.isCompleted == true;
    }).map(function(todo) {
        return todo.text;
    });

    console.log(todoCompleted);

}




function lesson4() {

    const person = {
        firstName : 'John',
        lastName: 'Doe',
        age : 30,
        hobbies : ['music', 'movies','sports'],
        address : {
            street : '50 main st',
            city : 'Boston',
            state : 'MA'
        }
    }


    const { firstName, lastName, address: {city}} = person;

    console.log(firstName);
    console.log(ciry);

    person.email = 'john@gmail.com';
}






function lesson3() {
    //arrays - variables that hold multiple values

    const numbers=new Array(1, 2, 3, 4, 5);
    const fruits = ['apples', 'oranges', 'pears', 10, true, false];
    //javascritp a lot of freedom

    console.log(fruits);

    fruits[3] = 'grapes';
    // error occurred cause const ....

    console.log(fruits);

    var fruits1 = [] ;

    fruits1.push('mango');
    fruits1.pop();

    console.log(Array.isArray(fruits));

    console.log(Array.isArray('hello'));


    console.log(fruits.indexOf('oranges'));


}



function lesson2() {

    const s = 'Hello World!';
    console.log(s.length);
    console.log(s.toUpperCase());
    console.log(s.substring(0, 5).toUpperCase());

    console.log(s.split('')); //array of string

    const s1 = 'technology, computer, it, code';
    console.log(s1.split(', '));

}

  function lesson1() {
    
    const name = 'John';
    const age = 30;

    //concatenation
    console.log('My name is ' + name + ' and i am ' + age);

    //Template String
    console.log(`My name is ${name} and I am ${age}`);

  }
  
