const s = 'the sky is blue';

var reverseWords = function (s) {
    const strArray = s.split(' ').filter((word) => word != '');
    strArray.reverse();
    return strArray.join(' ');
};

console.log(reverseWords(s));