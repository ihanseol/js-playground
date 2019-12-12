// alert(' test 123 ....');
// Chalange 1 : Your age in days ...


function ageInDays() {

    var birthYear = prompt(' what year were you born  ... Good Friend .... ');
    var ageInDays1 = (2019 - birthYear) * 365;

    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('you are ' + ageInDays1 + ' days old ');

    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);

    
}


function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen')

    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
}


function rpsGame(yourChoice) {
   var huChoice, botChoice;
   var results; 

    //debugger; 
    console.log(yourChoice);
    console.log(arguments.length);
    huChoice = yourChoice.id;
    botChoice = numberToChoice(rpsToInt());

    console.log('human : ' , huChoice, ' botChoice :', botChoice);
    results = decideWinner(huChoice, botChoice);
    console.log(results);
    
    message = finalResult(results); // { 'message' : 'You Won', 'color' : 'green'}
    console.log(message);
    rpsFronEnd(huChoice, botChoice, message);
}

function rpsToInt() {

    return Math.floor(Math.random()*3);
}


function numberToChoice(number) {

    return ['rock', 'paper', 'scissors'][number];

}


function decideWinner(yourChoice, computerChoice) {
    var rpsDataBase = 
    {
        'rock' : {'paper' : 0, 'rock':0.5, 'scissors': 1},
        'paper' : {'scissors' : 0, 'paper':0.5, 'rock' : 1},
        'scissors' : { 'rock': 0, 'scissors':0.5, 'paper' : 1}        
    };

    var yourScore = rpsDataBase[yourChoice][computerChoice];
    var computerScore = rpsDataBase[computerChoice][yourChoice];

    return [yourScore, computerScore];

}

function finalResult([yourScore, botScore])  {

    if (yourScore == 1) {
        return { 'message' : 'You Won!', 'color' : 'green'};
    } else if (yourScore == 0.5) {
        return {'message' : ' Draw' , 'color' : 'yellow'};
    }
    else {
        return {'message' : 'You Loose!', 'color':'red'};
    }

}

function rpsFronEnd(yourChoice, botChoice, message) {
    var imageDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissors' : document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    console.log(imageDatabase['rock']);
    console.log(message['message']);

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[yourChoice] + "' width=150 height=150 style='box-shadow: 0px 10px 50px rgba(37,50, 233, 1);'>";
    messageDiv.innerHTML = "<h2>" + message['message'] + "</h2>";
    botDiv.innerHTML = "<img src='" + imageDatabase[botChoice] + "' width=150 height=150 style='box-shadow: 0px 10px 50px rgba(37,50, 233, 1);'>";


    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}