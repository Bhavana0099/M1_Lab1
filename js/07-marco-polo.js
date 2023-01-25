/* eslint-env browser */

var result;
for (var i = 0; i <= 100; i++) {
    result = ' ' + i;
    if ((i % 3 === 0) && (i % 5 === 0)) {
        result = 'Marco!Polo!';
    } else if (i % 5 === 0) {
        result = 'Polo!';
    } else if (i % 3 === 0) {
        result = 'Marco!';
    }
    document.write(result + '<br>');
}
