//array of words

const wordList = ["omelette", "bacon", "pancakes", "happiness", "mimosa", "scramble", "biscuit"];
const imgList = ["assets/images/omelette.jpg", "assets/images/bacon.jpg", "assets/images/pancakes.jpg", "assets/images/happiness.jpg", "assets/images/mimosa.jpg", "assets/images/scramble.jpg", "assets/images/biscuit.jpeg"]
var image = document.getElementById("win-img");

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
var guessedLetterString = "";
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
    for (j=0; j<word.length; j++) {
    blankArray.push("_");
    }
    display = blankArray.join(" ");
    document.getElementById("display").innerHTML = display;
}

//when a key is pressed...
document.onkeyup = function(event) {
    results = "";
    //the key pressed is set as the guess and converted to lowercase
    var guess = event.key.toLowerCase();
    //the rest of the game only works if that key was a letter
    if (alphabet.includes(guess)) {        
        
        //if the guess is wrong, remaining guesses goes down and the guess is displayed in guessedLetters.
        //repeated wrong guesses do not re-enter the guessedLetters array
        if (!guessedLetters.includes(guess) && !word.includes(guess)){
            guessedLetters.push(guess);
            remainingGuesses--;
            console.log("guessed wrong letters: " + guessedLetters);  
        }
        guessedLetterString = guessedLetters.join("  ").toUpperCase();
        
        for (var k = 0; k < word.length; k++) {
            if (guess.includes(word.charAt(k) ) ) {
            blankArray[k] = guess;
            } 
        }; 
        display = blankArray.join(" ");
    
        if(!display.includes("_") && remainingGuesses > 0) {
            results = "You win! The word was " + word.toUpperCase();
            wins++;
            for (m = 0; m < wordList.length; m ++) {
                if (word === wordList[m]) {
                image.src = imgList[m];
                }
            };
            startGame();

        } else if (remainingGuesses===0){
            results = "You lost! The word was " + word.toUpperCase();
            losses++;
            startGame();
        }; 
        document.getElementById("instructions").innerHTML = "";
        document.getElementById("display").innerHTML = display;
        document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
        document.getElementById("guessed-letters").innerHTML = guessedLetterString;
        document.getElementById("results").innerHTML = results;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
    } //closes if alphabet conditional
}; //closes document.onkeyup
