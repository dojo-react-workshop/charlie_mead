//Given a string, return an array where each element is a string representing a
//different anagram (a different sequence of the letters in that string).  Example:
//if given "tar", return ["art", "atr", "rat", "rta", "tar", "tra"].


// 1. BAR, '' 
//     1. AR, B
//         1. R, BA X
//             1. '', BAR X
//         2. A, BR
//             1. '', BRA X
//     2. BR, A
// 1. R, AB
// 1. ABR X 
// 2. B, AR
// 1. ARB
//     3. BA, R

function strAnagram(string, inProgressAnagram = '', results = []) {
    if (string.length < 1) {
        results.push(inProgressAnagram);
        return results;
    }

    for (let i = 0; i < string.length; i += 1) {
        const grabbedChar = string[i];
        const precedingChars = string.slice(0, i);
        const remainingChars = string.slice(i + 1);

        strAnagram(precedingChars + remainingChars, inProgressAnagram + grabbedChar, results);

    }

    return results;
}