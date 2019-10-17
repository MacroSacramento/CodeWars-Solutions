/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. 
Ignore letter case.
*/
function isIsogram(str) {
    letterArr = [];
    str = str.toUpperCase();

    for (var i = 0; i < str.length; i++) {
        if (letterArr == []) {
            letterArr.push(str.charAt(i));
        } else {
            for (var j = 0; j < letterArr.length; j++) {
                if (str.charAt(i) == letterArr[j]) {
                    return false;
                }
            }
            letterArr.push(str.charAt(i));
        }
    }
    return true;
}