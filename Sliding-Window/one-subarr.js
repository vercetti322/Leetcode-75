const nums = [1,1,0,1];

var longestSubarray = function(nums) {
    let maxlen = 0, zeros = 0;
    let i = 0, j = 0; 
    const k = 1;
    
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

    return maxlen - 1;
};

console.log(longestSubarray(nums));