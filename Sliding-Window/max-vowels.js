const s = 'weallloveyou';
const k = 7;

var maxVowels = function(s, k) {
    let max = Number.MIN_SAFE_INTEGER;
    let x = 0;
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    for (let i = 0; i < k; i++) {
        if (vowels.has(s[i])) {
            x++;
        }
    }

    if (s.length === k) {
        return x;
    }

    max = x;

    for (let i = 1; i <= s.length - k; i++) {
        x += (vowels.has(s[i + k - 1]) ? 1 : 0) - (vowels.has(s[i - 1]) ? 1 : 0);
        max = Math.max(max, x);
    }

    return max;
};

console.log(maxVowels(s, k));