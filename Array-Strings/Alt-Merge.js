const str1 = 'abcd';
const str2 = 'pq';

function merge(str1, str2) {
    let arr = [];
    const x = Math.max(str1.length, str2.length);
    for (let i = 0; i < x; i++) {
        arr.push(str1[i], str2[i]);
    }
    
    return arr.join('');
}

console.log(merge(str1, str2));