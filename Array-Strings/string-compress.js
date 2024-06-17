const chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];

var compress = function (chars) {
    const map = new Map();
    chars.forEach((value) => {
        if (!map.has(value)) {
            map.set(value, 1);
        } else {
            let count = map.get(value);
            map.set(value, count + 1);
        }
    });

    chars.length = 0;
    for (const entry of map) {
        chars.push(entry[0]);
        if (entry[1] == 1) {
            continue;
        }

        if (entry[1] < 10 && entry[1] > 1) {
            chars.push(String(entry[1]));
        } else {
            let x = entry[1];
            while (x != 0) {
                chars.push(String(parseInt(String(x / Math.pow(10, String(x).length - 1)))));
                x = Number(String(x).slice(1));
            }
        }
    }

    console.log(chars);
    return chars.length;
};

console.log(compress(chars));