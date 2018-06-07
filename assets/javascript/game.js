

$(document).ready(function() {


var computerChoices = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
//array for computer random choice options a-z


var wins = 0; 
var losses = 0;
var numGuesses = 9;
var guessChoices = [];

//variable for wins starting at 0
//variable for losses
//variable for number of guesses equaling 9
//variable array for your guess choices

document.onkeyup = function(event){
    //on key up function


    var userGuess = event.key;
    //variable for user guess equaling the function
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]; 
    //variable for random comp guess, includes computerChoices variable
    
    var userOptions = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
    //array for user options a-z

    var win = ""; 
    var lose = "";
    var guessNum = "";
    var guessesYour = "";

    //strings to append variables to

    if (userOptions.indexOf(userGuess) > -1) { 
        
        if (userGuess === computerGuess){

            wins++;
            numGuesses = 9;
            guessChoices = [];

            win = win + wins;
        //if statement for if userGuess equals computerGuess
        //wins increase 1
        //number of guesses remaining back to 9
        //guess choices array blank
        //add win number to win string
    }
            
            
            
            else{
        
        if (userGuess != computerGuess){

            numGuesses--;
            (guessChoices).push(userGuess);

            guessNum = guessNum + numGuesses;
            guessesYour = guessesYour + userGuess;
        
    }

        //if statement for if userGuess does not equal computerGuess
        //number of guesses decreases by 1
        //users guess gets pushed to guess choices array
        //add number of guesses to guessNum string
        //add guess choices to guessesYour string
    }
        
        if(numGuesses === 0){

        losses++;
        guessChoices = [];

        lose = lose + losses;

        //notify you lose
        //restart game

        //if statement for if number of guesses equals zero
        //losses increases by 1
        //guess choices array blank
        //add losses number to lose string
        }
    }


        $("#winning").append(win);
        $("#losing").append(lose);
        $("#guesses-left").append(guessNum);
        $("#your-guess").append(guessesYour);
       
        
       

        //append string values to ids in html
        

    }
 
});

 
    
