/*eslint-env browser*/

var result = "";
window.document.write("Please open the console to view the result (Press ctrl + shift + J for Windows)...");

for (var i = 0; i <= 6; i++) {
    for (var j = 0; j < i+1; j++) {
        result += "#";
    }
    result += "\n";
}
window.console.log(result);