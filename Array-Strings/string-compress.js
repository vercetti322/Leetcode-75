const chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"];

var compress = function (chars) {
    let i = 0, res = 0;
    while (i < chars.length) {
        let grp = 1;
        while (i + grp < chars.length && chars[i + grp] === chars[i]) {
            grp++;
        }

        chars[res++] = chars[i];
        if (grp > 1) {
            for (let c of String(grp)) {
                chars[res++] = c;
            }
        }

        i += grp;
    }

    return res;
};

console.log(compress(chars));