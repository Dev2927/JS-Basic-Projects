let guessField;
let guessesRemaining = 10;
let randomNumber = Math.floor(Math.random() * 100) + 1;

document.getElementById("guessField").addEventListener("input", function (e) {
  guessField = parseInt(e.target.value);
});

document.getElementById("subt").addEventListener("click", function (e) {
  e.preventDefault();

  if (guessesRemaining <= 0) {
    document.getElementById("guesses").innerHTML = "Out of guesses! Game over.";
    return;
  }

  if (guessField === randomNumber) {
    document.getElementById("guesses").innerHTML = "Hurray! You won!";
  } else if (guessField < randomNumber) {
    document.getElementById(
      "guesses"
    ).innerHTML = `Your Number ${guessField} is Greater than the Random Number`;
  } else if (guessField > randomNumber) {
    document.getElementById(
      "guesses"
    ).innerHTML = `Your Number ${guessField} is Smaller than the Random Number`;
  }

  guessesRemaining--;
  document.getElementById("lastResult").innerHTML = guessesRemaining;

  if (guessesRemaining === 0) {
    document.getElementById("guesses").innerHTML = "Out of guesses! Game over.";
  }
});
