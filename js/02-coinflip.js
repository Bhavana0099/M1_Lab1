/* eslint-env browser */

var coinFlip = Math.floor(Math.random() * 10);
var choice = window.prompt("Select either Heads or Tails (Heads/Tails):");
var choice = choice.toLowerCase();
var  result = (coinFlip > 5) ? 'heads' : 'tails';

if (choice === result) {
    window.alert("The flip was " + result + " and you chose " + choice + " ...you win!");
} else {
    window.alert("The flip was " + result + " and you chose " + choice + " ...you lose!");
}
