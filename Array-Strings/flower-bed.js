const flowerbed = [1, 0, 0, 0, 1, 0, 0];
const n = 2;


var canPlaceFlowers = function (flowerbed, n) {
    if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1) {
        return true;
    }
    let count = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (i != 0 || i != (flowerbed.length - 1)) {
            if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                count++;
                flowerbed[i] = 1;
            }
        }

        if (i === 0 && flowerbed[1] === 0 && flowerbed[0] === 0) {
            count++;
            flowerbed[i] = 1;
        } 

        if (i === (flowerbed.length - 1) && flowerbed[flowerbed.length - 2] === 0 && flowerbed[flowerbed.length - 1] === 0) {
            count++;
            flowerbed[i] = 1;
        }
    }

    if (count >= n) {
        return true;
    } else {
        return false;
    }
};

console.log(canPlaceFlowers(flowerbed, n));