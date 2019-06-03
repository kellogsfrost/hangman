

var randomWord = ["globe","lamp","crab","coast","tree","monkey","purple"];
var word = randomWord[Math.floor(Math.random()*randomWord.length)];
var puzzleArray = [];
var guessRemain = 6;
var lettersRemain = randomWord.length;
var guessedLetters = []
for(i = 0; i < word.length; i++){
    puzzleArray[i] = "_";
};
var guessedOnce = 0;
var answerToDisplay = puzzleArray.join(" ");
document.getElementsByClassName('answer')[0].innerHTML = answerToDisplay;

function contains(thing, array){
    if(array.indexOf(thing) > -1){
        return true;
    }
    else{
        return false;
    }
};
function reset(){
    word = randomWord[Math.floor(Math.random()* randomWord.length)];
    puzzleArray = [];
    guessRemain = 6;
    lettersRemain = randomWord.length;
    guessedLetters= []
    for(i = 0; i < word.length; i++){
        puzzleArray[i] = "_";
    };
    guessedOnce = 0;
    answerToDisplay = puzzleArray.join(" ");
    document.getElementsByClassName("answer")[0].innerHTML = answerToDisplay;
}
function guess(){
    var userInput = document.getElementById("user-input").value;
    guessedOnce = contains(userInput,guessedLetters);
    if(guessedOnce === true){
        document.getElementsByClassName('instructions')[0].innerHTML = "You have guessed this before silly! " + userInput.toUpperCase();
    // }
    // else if(lettersRemain === 0){
    //     document.getElementsByClassName("instructions")[0].innerHTML = "You have escaped the hangman!";
    }
    else if(isNaN(userInput) && userInput.length === 1){
        guessedLetters.push(userInput);
        document.getElementsByClassName("instructions")[0].innerHTML = "NOPE! " + userInput.toUpperCase() + " is not one of the letters!";
        for(j = 0; j < word.length; j++){
            if(word[j] === userInput){
                puzzleArray[j] === userInput;
                lettersRemain--;
                answerToDisplay = puzzleArray.join(" ");
                document.getElementsByClassName("answer")[0].innerHTML = answerToDisplay;
                document.getElementsByClassName("instructions")[0].innerHTML = "You live for now!";
                if(lettersRemain === 0){
                    document.getElementsByClassName("instructions")[0].innerHTML = "You have escaped the hangman!";
                }
            }
        }
    }
    else{
        document.getElementsByClassName("instructions")[0].innerHTML = "Please guess a single letter.";
}
var user = document.getElementById("user-input").value = "";
    }







// HTML elemeent references



// Create all event listeners



// Any additional functions



