const word1 = 'a';
const word2 = 'aa';

var closeStrings = function (word1, word2) {
    const map1 = new Map();
    const map2 = new Map();

    const mapsAreIdentical = function (map1, map2) {
        const keys1 = Array.from(map1.keys()).sort();
        const keys2 = Array.from(map2.keys()).sort();
        const values1 = Array.from(map1.values()).sort();
        const values2 = Array.from(map2.values()).sort();
    
        if (keys1.length !== keys2.length || values1.length !== values2.length) {
            return false;
        }
    
        for (let i = 0; i < keys1.length; i++) {
            if (keys1[i] !== keys2[i] || values1[i] !== values2[i]) {
                return false;
            }
        }
    
        return true;
    }

    Array(...word1).forEach(element => {
        if (!map1.has(element)) {
            map1.set(element, 1);
        } else {
            map1.set(element, map1.get(element) + 1);
        }
    });

    Array(...word2).forEach(element => {
        if (!map2.has(element)) {
            map2.set(element, 1);
        } else {
            map2.set(element, map2.get(element) + 1);
        }
    });

    return mapsAreIdentical(map1, map2);
};

console.log(closeStrings(word1, word2));