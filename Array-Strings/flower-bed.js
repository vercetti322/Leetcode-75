const flowerbed = [1,0,0,0,1,0,0];
const n = 2;


var canPlaceFlowers = function(flowerbed, n) {
    let i = 0;
    while (i < flowerbed.length - 2) {
        if (flowerbed[i] === 0 && flowerbed[i + 2] === 0) {
            if (flowerbed[i + 1] === 1) {
                flowerbed[i + 1] = 1;
                n--;
            }
        }

        i++;
    }
};

console.log(canPlaceFlowers(flowerbed, n));