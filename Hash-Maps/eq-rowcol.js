const grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]];

var equalPairs = function(grid) {
    const map1 = new Map();
    const map2 = new Map();
    const grid2 = grid[0].map((_, i) => grid.map(row => row[i]));
    for (let i = 0; i < grid.length; i++) {
        let x = String(grid[i]);
        if (!map1.has(x)) {
            map1.set(x, 1);
        } else {
            map1.set(x, map1.get(x) + 1);
        }
    }

    for (let i = 0; i < grid2.length; i++) {
        let x = String(grid2[i]);
        if (!map2.has(x)) {
            map2.set(x, 1);
        } else {
            map2.set(x, map2.get(x) + 1);
        }
    }

    let sum = 0;
    for (let [k1, v1] of map1.entries()) {
        for (let [k2, v2] of map2.entries()) {
            if (k1 === k2) {
                sum += v1 * v2;
            }
        }
    }

    return sum;
};


console.log(equalPairs(grid));