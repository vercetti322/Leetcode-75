const candies = [4, 2, 1, 1, 2];
const extraCandies = 1;

var kidsWithCandies = function(candies, extraCandies) {
    const ans = [];
    const max = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
        candies[i] += extraCandies;
        if (candies[i] >= max) {
            ans.push(true);
        } else {
            ans.push(false);
        }

        candies[i] -= extraCandies;
    }

    return ans;
};

console.log(kidsWithCandies(candies, extraCandies));