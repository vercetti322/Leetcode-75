const nums = [1,2,3,4];
const k = 5;

var maxOperations = function(nums, k) {
    let i = 0, j = nums.length - 1, counter = 0;
    nums.sort((a, b) => a - b);
    while (i < j) {
        if (nums[i] + nums[j] === k) {
            counter++;
            i++;
            j--;
        } else if (nums[i] + nums[j] > k) {
            j--;
        } else {
            i++;
        }
    }
    
    return counter;
};

console.log(maxOperations(nums, k));