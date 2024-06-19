function hashStringToInt(s, tableSize) {
    let hash = 17;
    for (let i = 0; i < s.length; i++) {
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }

    return hash;
}

class HashTable {
    table  = new Array(33);
    numItems = 0;
    resize = () => {
        const newTable = new Array(this.table.length * 2);
        this.table.forEach(item => {
            if (item) {
                item.forEach((key, value) => {
                    const idx = hashStringToInt(key, this.newTable.length);
                    if (this.table[idx]) {
                        newTable[idx].push([key, value]);
                    }
            
                    newTable[idx] = [[key, value]];
                });
            }
        });

        this.table = newTable;
    };

    getItem = (key) => {
        const idx = hashStringToInt(key, this.table.length);
        if (!this.table[idx]) {
            return null;
        }

        return this.table[idx].find(x => x[0] === key)[1];
    };

    setItem = (key, value) => {
        this.numItems++;
        const loadFactor = this.numItems / this.table.length;
        if (loadFactor > 0.8) {
            // resize
            this.resize();
        }

        const idx = hashStringToInt(key, this.table.length);
        if (this.table[idx]) {
            this.table[idx].push([key, value]);
        }

        this.table[idx] = [[key, value]];
    };  
}

const myTable = new HashTable();
myTable.setItem('firstName', 'Jatin');
myTable.setItem('lastName', 'Jindal');
myTable.setItem('age', '30');
myTable.setItem('dob', 'december');
console.log(myTable.getItem('lastName'));
console.log(myTable.getItem('age'));
console.log(myTable.getItem('dob'));
console.log(myTable.getItem('firstName'));
console.log(myTable.table.filter(x => x != undefined));
console.log(myTable.table.length);