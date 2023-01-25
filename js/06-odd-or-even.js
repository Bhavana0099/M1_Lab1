/* eslint-env browser */

window.document.write("Please open the console to view the result (Press ctrl + shift + J for Windows)...");

for (var i = 0; i <= 15; i++) {
    if (i % 2 == 0) {
        window.console.log(i + " is even");
    } else {
        window.console.log(i + " is odd");
    }
}