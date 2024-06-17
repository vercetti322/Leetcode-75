const s = 'aA';

var reverseVowels = function (s) {
    const charArray = s.split('');
    const buff = [];
    const newArr = charArray
        .map((char) => {
            if (['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'].includes(char)) {
                buff.push(char);
                return undefined;
            } else {
                return char;
            }
        });

    buff.reverse();
    let k = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === undefined) {
            newArr[i] = buff[k];
            k++;
        }
    }

    return newArr.join('');
};

console.log(reverseVowels(s));