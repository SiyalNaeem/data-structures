class MyArray {

    private data: any = {};
    private length: number = 0;

    constructor(){}

    public push(value: any){
        this.data[this.length] = value;
        this.length++;
    }

    public get(index: number){
        return this.data[index];
    }

    public pop(){
        this.data[this.length - 1];
    }
    
    public delete(index: number){
        delete this.data[index];
        this.swapIndexes(index);
    }

    private swapIndexes(index: number){
        for(let i = index; i < this.data.length; i++){
            this.data[i] = this.data[i+1];
        }
        
        delete this.data[this.length - 1];
        this.length--;
    }

}


let myArray = new MyArray();
myArray.push(5);
myArray.push(8);
// console.log(myArray.get(1));
myArray.delete(1);
console.log(myArray)