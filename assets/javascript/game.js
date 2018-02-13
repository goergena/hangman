//array of words

const wordList = ["buzz", "fizzy", "guevara", "pipboy", "bobmarley", "pirate"];

//alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//chooses word from word list
var word = wordList[Math.floor(Math.random() * wordList.length)];

//create array to hold guessed incorrect letters. 
var guessedLetters = [];
    
//create variable for guesses remaining 
var remainingGuesses = 13;
//create variables for scores 
var wins = 0;
var losses = 0;
var results = "";

var blankArray = [];
var display = "";
for (i=0; i<word.length; i++) {
  blankArray.push("_");
}
display = blankArray.join(" ");
document.getElementById("display").innerHTML = display;  

function startGame() {
    word = wordList[Math.floor(Math.random() * wordList.length)];
    guessedLetters = [];
    remainingGuesses = 13;
    blankArray = [];
    display = "";
    for (i=0; i<word.length; i++) {
    blankArray.push("_");
    }
    display = blankArray.join(" ");
    document.getElementById("display").innerHTML = display;
}

//when a key is pressed...
document.onkeyup = function(event) {
    results = "";
    //if the key pressed is in the alphabet,
    if (alphabet.includes(event.key)) {
        // the key is set as the user's guess...
        var guess = event.key;

        //if the guess is wrong, remaining guesses goes down and the guess is displayed in guessedLetters
        if (!guessedLetters.includes(guess) && !word.includes(guess)){
            guessedLetters.push(guess);
            remainingGuesses--;
            console.log("guessed wrong letters: " + guessedLetters);  
        }
        
        for (var k = 0; k < word.length; k++) {
            if (guess.includes(word.charAt(k) ) ) {
            blankArray[k] = guess;
            } 
        }; 
        display = blankArray.join(" ");
    
        if(!display.includes("_") && remainingGuesses > 0) {
            results = "you win! the word was " + word;
            wins++;
            startGame();
        } else if (remainingGuesses===0){
            results = "you lost! the word was " + word;
            losses++;
            startGame();
        }; 
        document.getElementById("instructions").innerHTML = "";
        document.getElementById("display").innerHTML = display;
        document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
        document.getElementById("guessed-letters").innerHTML = guessedLetters;
        document.getElementById("results").innerHTML = results;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
    } //closes if alphabet conditional
}; //closes document.onkeyup