//array of words
const wordList = ["buzz", "fizzy", "guevara", "pipboy", "bobmarley", "pirate"];

//alphabet array
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//chooses word from word list
var word = wordList[Math.floor(Math.random() * wordList.length)];
console.log(word);

//create array to hold guessed incorrect letters. 
var guessedLetters = [];
    
//create variable for guesses remaining 
var remainingGuesses = 13;
//create variables for scores
var wins = 0;
var losses = 0;

var blankArray = [];
for (i=0; i<word.length; i++) {
    blankArray.push("_ ");
}

var display = "";

for (j=0; j<blankArray.length; j++) {
   display = display + blankArray[j];
} 

 //display = display + blankArray.charAt(j); 
 //console.log(blankArray[j]);
 //document.getElementById("show-blanks").innerHTML = showBlanks;

//var wordArray = word.split("");
var correctGuesses = [];


console.log("test log " + word.charAt(0));
//display the _ _ _ 

//when a key is pressed...
document.onkeyup = function(event) {
    //if the key pressed is in the alphabet,
    if (alphabet.includes(event.key)) {
        // the key is set as the user's guess...
        var guess = event.key;
        //and the guess is passed through the word.
            if(word.includes(guess)) {
                console.log("correct guess: " + guess);
                var placeGuess = word.indexOf(guess);
                console.log(placeGuess);
                blankArray[placeGuess] = guess;
                console.log(blankArray);
                document.getElementById("game").innerHTML = display;
            }
            else if (!guessedLetters.includes(guess) && !word.includes(guess)){
                guessedLetters.push(guess);
                remainingGuesses--;
                console.log("guessed letters: " + guessedLetters);  
            } 
    

            


                //display += word.charAt(i);
        //display.push(word.charAt(i));
            //if it is in the word,
            //if(word.includes(guess)) {
            //log the guess to the console.
               // console.log("correct guess: " + guess);
            
                    //display the letter
                    //var display = display + word.charAt(i);
                //else if it is not in the word,
                //} else {
                    //add it to the guessedLetters array
                    //guessedLetters.push(guess);
                    //log the guessed letters array to the console
                    //console.log("guessed letters: " + guessedLetters);
                    //count down guesses remaining
                    //remainingGuesses--;
                    //log remaining guesses to the console
                    //console.log("remaining guesses:" + remainingGuesses);
                //}

           document.getElementById("game").innerHTML = display;
           document.getElementById("remaining-guesses").innerHTML = remainingGuesses;
           document.getElementById("guessed-letters").innerHTML = guessedLetters;
           document.getElementById("wins").innerHTML = wins;
           document.getElementById("losses").innerHTML = losses;
        } //closes if alphabet conditional
           
    }; //closes document.onkeyup
