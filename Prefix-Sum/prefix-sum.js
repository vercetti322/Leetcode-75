const nums = [1,7,3,6,5,6];

var pivotIndex = function(nums) {
    const arr = [0];
    for (let i = 1; i < nums.length; i++) {
        arr[i] = arr[i - 1] + nums[i - 1];
    }

    const brr = [];
    let sum = 0;
    for (let i = 1; i < nums.length; i++) {
        sum += nums[i];
    }

    brr[0] = sum;
    for (let i = nums.length - 1; i > 0; i--) {
        brr[nums.length - i] = brr[nums.length - i - 1] - nums[nums.length - i];
    }

    for (let i = 0; i < nums.length; i++) {
        if (arr[i] === brr[i]) {
            return i;
        }
    }

    return -1;
};

console.log(pivotIndex(nums));