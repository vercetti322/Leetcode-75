const nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
const k = 2;

var longestOnes = function (nums, k) {
    let maxlen = 0, zeros = 0;
    let i = 0, j = 0;
    
    while (j < nums.length) {
        if (nums[j] === 0) {
            zeros++;
        }

        if (zeros > k) {
            if (nums[i] === 0) {
                zeros--;
            }

            i++;
        }

        if (zeros <= k) {
            maxlen = Math.max(maxlen, (j - i + 1));
        }
        j++;
    }

    return maxlen;
};

console.log(longestOnes(nums, k));