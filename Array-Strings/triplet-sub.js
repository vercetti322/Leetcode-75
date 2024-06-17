const nums = [5, 4, 3, 2, 1];

var increasingTriplet = function (nums) {
    if (nums.length < 3) {
        return false;
    }

    let first = Number.MAX_SAFE_INTEGER, second = Number.MAX_SAFE_INTEGER;
    for (let num of nums) {
        if (num <= first) {
            first = num;
        }

        else if (num <= second && num > first) {
            second = num;
        }

        else {
            return true;
        }
    }

    return false;
};

console.log(increasingTriplet(nums));