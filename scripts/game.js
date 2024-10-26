var words = ["JAVASCRIPT", "HTML", "CSS", "PYTHON", "HANG", "GAME", "PROGRAMMER", "DEVELOPER"];
var bodyParts = ["head", "body", "left-hand", "right-hand", "left-leg", "right-leg"];

var wordSelected = words[Math.floor(Math.random() * words.length)];

var answerSection = document.getElementById("answer-section")
var letters = document.querySelectorAll(".letter");

var guessedLetters = [];


function displayDashes() {
  answerSection.innerHTML = wordSelected.split("").map(function() {
    return "<span>_</span>";
  }).join(" ");
}
