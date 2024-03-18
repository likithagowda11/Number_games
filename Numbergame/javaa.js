function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function flipCoin() {
    var min = 1;
    var max = 2;
    var a = getRandomInt(min, max);
    var resultElement = document.getElementById("result");
    if (a === 1) {
        alert("Head")
    } else {
        alert("Tail");
    }
}

document.getElementById("flipButton").addEventListener("click", flipCoin);
