function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateNumber() {
    var min = 1;
    var max = 6;
    var resultElement = document.getElementById("result");
    var randomNumber = getRandomInt(min, max);
    alert("The number on the dice is " +randomNumber)
}

document.getElementById("generateButton").addEventListener("click", generateNumber);
