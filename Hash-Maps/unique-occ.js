const arr = [1, 2, 2, 1, 1, 3];

var uniqueOccurrences = function(arr) {
    const newMap = new Map();
    arr.forEach((num, key) => {
        if (!newMap.has(num)) {
            newMap.set(num, 1);
        } else {
            newMap.set(num, newMap.get(num) + 1);
        }
    });

    const set = new Set();
    for (const value of newMap.values()) {
        if (set.has(value)) {
            return false;
        }

        set.add(value);
    }

    return true;
};


console.log(uniqueOccurrences(arr));