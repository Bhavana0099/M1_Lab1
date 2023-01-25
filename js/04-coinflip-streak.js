/* eslint-env browser */

var coinFlip;
window.document.write("Please open the console to view the result (Press ctrl + shift + J for Windows)...");

do {
    coinFlip = Math.round(Math.random());
    window.console.log((coinFlip === 0) ? "Heads" : "Tails");
} while (coinFlip != 1);