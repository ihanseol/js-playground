
console.log (" hello ...");
// alert("yoo ... ");

// how to write a comment ...



var b="smoothie";



function myadd(a,b) {

    return a+b;
}




console.log(myadd(2,3));


var fruit ="banana";

console.log( fruit.indexOf("a"));
console.log(fruit.length);
console.log(fruit.charAt(0));
console.log(fruit.slice(2,4));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
var lista = fruit.split("");
console.log(lista);

var fruits = ["banna","apple", "orange", "tomato"];
var fruits1 = new Array("banna","apple", "orange", "tomato");


console.log(fruits);
console.log(fruits1);

fruits.forEach(element => { console.log(element);
    
});


console.log("-------------------");

for(let i =0 ; i < fruits.length; i++) {

    console.log(fruits[i]);
}


console.log("to string : ", fruits.toString());
console.log(" join : ", fruits.join("-"));



console.log("-----------");


console.log(fruits, fruits.pop(),fruits);

fruits.push("blackberries");


console.log(fruits);

fruits[fruits.length] = "new fruit";

console.log(fruits);

fruits.shift(); // remove first element in array

console.log(fruits);

fruits.unshift("kiwi");

console.log(fruits); // add first element in array

let vegetables = ["brocolies","tomato","asparagus","cabish"];



let combine = vegetables + fruits;

let allGloceries = fruits.concat(vegetables);


console.log(combine);

console.log(allGloceries);

console.log(allGloceries.slice(0,4));

console.log(allGloceries.reverse());
console.log(allGloceries.sort());


var numbers = [4,2,5,1,3];

numbers.sort( function(a,b) {
    return -a + b;
});

console.log(numbers);

console.log(numbers.sort( function(a,b){ return a-b}));


let emptyArray = new Array();


for(let i =0; i < 10; i++) {

    emptyArray.push(i);
}


console.log(emptyArray);



let student = {
    first : "rafish",
    last: "quazi",
    age: 20,
    height : 180 ,
    studentInfo: function() {
        return "my name is : " + this.first + " " +  this.last + "  "+ this.age + " years old and " + this.height + " cm height";
    }
    
    };


let students = `[ 
    {
        "first" : "min",
        "last" : "hwasoo",
        "age": 47,
        "height": 180
    },
    {
        "first": "min",
        "last
        "age":33,
        "height":175
    }

]`;


console.log(student.first, student.last);
console.log(student.studentInfo());


//console.log(students);
console.log(JSON.parse(students)[0]);
console.log(JSON.parse(students)[0].first);











































