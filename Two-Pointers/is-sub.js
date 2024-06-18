const s = 'adb';
const t = 'ahbgdc';

var isSubsequence = function (s, t) {
    let i = 0, j = 0, counter = 0;
    while (i < s.length && j < t.length) {
        if (counter === s.length) {
            return true;
        }
        
        if (s[i] != t[j]) {
            j++;
        } else {
            counter++;
            i++;
            j++;
        }
    }

    if (counter === s.length) {
        return true;
    } else {
        return false;
    }
};

console.log(isSubsequence(s, t));