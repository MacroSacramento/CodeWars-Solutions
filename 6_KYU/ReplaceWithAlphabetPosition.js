/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.
*/
function alphabetPosition(text) {
    text = text.toUpperCase();
    var results = "";
    for (var i = 0; i < text.length; i++) {
        textChar = text.charCodeAt(i) - 64;
        if (textChar > 0 && textChar < 27) {
            results += textChar + " ";
        }
    }
    return results.slice(0, results.length - 1);
}