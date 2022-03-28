class HashTable {

  private data: any;
  private idx: number = 0;

  constructor(size: number){
    this.data = new Array(size);
  }

  _hash(key: any) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  public set(key: any, value: any){
    let address = this._hash(key);
    if(!this.data[address]){
      this.data[address] = []
    }
    this.data[address].push([key, value]);
  }

  public get(key: any){
    let address = this._hash(key);
    let currentBucket = this.data[address];

    if(currentBucket && currentBucket.length > 0){
      for(let i=0; i<currentBucket.length; i++){
        if(currentBucket[i][0] == key){
          return currentBucket[i][1];
        }

      }
    }

    return undefined;
  }

  public keys(){
    
    let keys: any = [];

    for(let i=0; i < this.data.length; i++){
      if(this.data[i]){
        keys.push(this.data[i][0][0]);
      }
    }
    return keys;
    
  }

}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
myHashTable.set('apples', 9)
// console.log(myHashTable.get('apples'))
console.log(myHashTable.keys())
// console.log(myHashTable)