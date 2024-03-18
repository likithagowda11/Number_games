document.getElementById("startButton").addEventListener("click", startGame);

function startGame() {
    const min = parseInt(prompt("Enter the minimum number:"));
    const max = parseInt(prompt("Enter the maximum number:"));
    
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const rn = randomNumber(min, max);
    let guess = parseInt(prompt("Guess the number:"));
    while (guess !== rn) {
        if (guess > rn) {
            alert("Ohhh! you have entered a greater number");
        } else if (guess < rn) { 
            alert("Ohhh! you have entered a Smaller number");
        }
        guess = parseInt(prompt("Guess the number:"));
    }
    alert("Great! You Won.......");
}
