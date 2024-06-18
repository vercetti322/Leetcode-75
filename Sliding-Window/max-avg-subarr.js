const nums = [9,7,3,5,6,2,0,8,1,9];
const k = 6;

var findMaxAverage = function(nums, k) {
    let sum = Number.MIN_SAFE_INTEGER;
    let x = 0;
    for (let i = 0; i < k; i++) {
        x += nums[i];
    }

    sum = x;

    if (nums.length === k) {
        return x / k;
    }


    for (let i = 1; i <= nums.length - k; i++) {
        x += nums[i + k - 1] - nums[i - 1];
        sum = Math.max(sum, x);
    }

    return sum / k;
};

console.log(findMaxAverage(nums, k));