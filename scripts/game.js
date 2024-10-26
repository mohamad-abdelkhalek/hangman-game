var words = ["JAVASCRIPT", "HTML", "CSS", "PYTHON", "HANG", "GAME", "PROGRAMMER", "DEVELOPER"];
var bodyParts = ["head", "body", "left-hand", "right-hand", "left-leg", "right-leg"];

var wordSelected = words[Math.floor(Math.random() * words.length)];

var answerSection = document.getElementById("answer-section")
var letters = document.querySelectorAll(".letter");

var guessedLetters = [];

var wrongAttempts = 0;
var maxWrongAttempts = bodyParts.length;


function displayDashes() {
  answerSection.innerHTML = wordSelected.split("").map(function() {
    return "<span>_</span>";
  }).join(" ");
}

var letters = document.querySelectorAll(".letter");
letters.forEach(function(letterDiv) {
  letterDiv.addEventListener("click", function() {
    var letter = this.textContent;
    handleGuess(letter);
    this.classList.add("pressed"); // Optional: Add class to show that letter was pressed
  });
});

document.addEventListener("keydown", function(c) {
  var letter = c.key.toUpperCase();
  if (/^[A-Z]$/.test(letter)) {
    handleGuess(letter);
    var letterDiv = Array.from(letters).find(div => div.textContent === letter);
    if (letterDiv && !letterDiv.classList.contains("pressed")) {
      letterDiv.classList.add("pressed");
    }
  }
});

function updateWordDisplay() {
  answerSection.innerHTML = wordSelected.split("").map(function(letter) {
    return guessedLetters.includes(letter) ? letter : "_";
  }).join(" ");
}

function displayHangmanPart() {
  var partToShow = bodyParts[wrongAttempts - 1];
  if (partToShow) {
    var partElement = document.createElement("img");
    partElement.src = `./assets/${partToShow}.svg`;
    partElement.classList.add(partToShow);
    document.getElementById("hang").appendChild(partElement);
  }
}

function checkWin() {
  var currentAnswer = answerSection.innerText.replace(/\s+/g, "");
  if (currentAnswer === wordSelected) {
    setTimeout(function() { alert("You Win!"); }, 100);
  }
}

function checkLoss() {
  if (wrongAttempts >= maxWrongAttempts) {
    setTimeout(function() { alert("Game Over! The word was: " + wordSelected); }, 100);
  }
}


function startGame(){
  displayDashes();
}

startGame();