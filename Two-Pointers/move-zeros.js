const nums = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];

var moveZeroes = function(nums) {
    let zeros = nums.filter(num => num === 0);
    let nonZeros = nums.filter(num => num != 0);
    nums.length = 0;
    nums = nonZeros.concat(zeros);
    return nums;
};

console.log(moveZeroes(nums));