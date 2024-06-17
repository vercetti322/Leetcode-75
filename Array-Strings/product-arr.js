const nums = [1, 2, 3, 4];

var productExceptSelf = function(nums) {
    const ans = new Array(nums.length).fill(0);
    let l = 1;
    nums.forEach((num, i) => {
        ans[i] = l;
        if (i != nums.length - 1) {
            l *= num;
        }
    });

    nums.reduceRight((acc, num, i) => {
        ans[i] *= acc;
        if (i != 0) {
            return acc * num;
        }

        return acc;
    }, 1);

    return ans;
};

console.log(productExceptSelf(nums));