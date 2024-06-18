const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function(height) {
    var area = (height, i, j) => {
        return Math.min(height[i], height[j]) * (Math.abs(i - j));
    }

    let i = 0, j = height.length - 1;
    let product = -1;
    while (i < j) {
        product = Math.max(product, area(height, i, j));
        if (height[i] <= height[j]) {
            i++;
        } else {
            j--;
        }
    }

    return product;
};

console.log(maxArea(height));