/* eslint-env browser */

var num = parseInt(window.prompt("Enter a number:"));
if (num < 0) {
    document.write("Please enter a valid positive number.")
}
for (var i = num; i >= 0; i--) {
    document.write(i + '<br>');
}
