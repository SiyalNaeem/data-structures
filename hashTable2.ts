class HashTable {
    private data: any;

    constructor(size: number) {
        this.data = new Array(size);
    }

    _hash(key: any) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    public set(key: any, value: any) {

        if (!this.data[this._hash(key)]) {
            this.data[this._hash(key)] = [];
        }
        this.data[this._hash(key)].push([key, value]);
        return this.data;
    }

    public get(key: any) {
        let bucket = this.data[this._hash(key)];
        if (bucket.length > 0) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] == key) {
                    return bucket[i][1];
                }
            }
        }
        return undefined;
    }

    public keys() {
        let keysToReturn = [];

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                if(this.data[i].length > 1){
                    for(let j=0; j < this.data[i].length; j++){
                        keysToReturn.push(this.data[i][j][0])
                    }
                }else{
                    keysToReturn.push(this.data[i][0][0])
                }
            }
        }

        return keysToReturn;

    }

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 10000)

myHashTable.set('apples', 10000)
console.log(myHashTable.keys())
// console.log(myHashTable)
//   myHashTable.get("grapes")
// console.log(myHashTable.get('grapes'))
//   myHashTable.set('apples', 9)
//   console.log(myHashTable.get('apples'))
//   console.log(myHashTable)