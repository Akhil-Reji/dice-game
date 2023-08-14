var imageArray = [
    "./images/dice1.png","./images/dice2.png","./images/dice3.png","./images/dice4.png","./images/dice5.png","./images/dice6.png"
]

function rollDice(){
    var randomNumber1 = Math.floor(Math.random()*6);
    var randomNumber2 = Math.floor(Math.random()*6);

    var randomImage1 = imageArray[randomNumber1];
    var randomImage2 = imageArray[randomNumber2];

    document.querySelectorAll("img")[0].src = randomImage1;
    document.querySelectorAll("img")[1].src = randomImage2; 

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = 'Player 1 wins';
        document.querySelectorAll("p")[0].innerHTML = 'Player 1👑'
        document.querySelectorAll("p")[1].innerHTML = 'Player 2'
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = 'Player 2 wins';
        document.querySelectorAll("p")[0].innerHTML = 'Player 1'
        document.querySelectorAll("p")[1].innerHTML = 'Player 2👑'
    }
    else if (randomNumber1 === randomNumber2){
        document.querySelector("h1").innerHTML = 'Draw !';
        document.querySelectorAll("p")[0].innerHTML = 'Player 1'
        document.querySelectorAll("p")[1].innerHTML = 'Player 2'
    }
}

var rollButton = document.querySelector("button");
rollButton.addEventListener("click", rollDice);