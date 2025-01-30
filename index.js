let maxNum = 100;
let minNum = 1;
let number;
let guess;
let guessCount = 0;
let running = true;


document.getElementById("guessCount").textContent = `Number of Guesses: ${guessCount}`
number = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


document.getElementById("submitButton").onclick = function () {
    guess = Number (document.getElementById("userGuess").value);
    console.log(number);
    console.log(guess, typeof guess);
    
    if (running){
        if (guess < minNum || guess > maxNum){
            guessCount++;
            document.getElementById("guessCount").textContent = `Number of Guesses: ${guessCount}`
            document.getElementById("returnComment").textContent = "enter a number between 1 and 100";
            // console.log("enter a number from 0 to 100")
        } else if (guess < number){
            guessCount++;
            document.getElementById("guessCount").textContent = `Number of Guesses: ${guessCount}`
            document.getElementById("returnComment").textContent= "Too low, Try again!";
            // console.log("Too low, Try again")
        } else if (guess > number){
            guessCount++;
            document.getElementById("guessCount").textContent = `Number of Guesses: ${guessCount}`
            document.getElementById("returnComment").textContent= "Too High, Try again!";
            // console.log("Too high, Try again")
        } else {
            guessCount++;
            document.getElementById("guessCount").textContent = `Number of Guesses: ${guessCount}`
            document.getElementById("returnComment").textContent= `Correct! I was thinking of ${number}`;
            document.getElementById("submitButton").onclick = function () {
                document.getElementById("returnComment").textContent= "Reload Page to Start New Game"
            }
            // console.log("Correct");
        }
        return;
    }
}
