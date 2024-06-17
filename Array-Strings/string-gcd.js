const str1 = 'ABCABC';
const str2 = 'ABC';

var gcdOfStrings = function (str1, str2) {
    var gcd = function (x, y) {
        if (y == 0) {
            return x;
        } else {
            return gcd(y, x % y);
        }
    }

    const x = gcd(str1.length, str2.length);
    const str = str1.slice(0, x);
    if (str1.length % x == 0 && str2.length % x == 0 
        && str.repeat(str1.length / x) == str1 
        && str.repeat(str2.length / x) == str2) {
        return str;
    } else {
        return "";
    }
}

console.log(gcdOfStrings(str1, str2));