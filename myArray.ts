class MyArray {

    public length: number;
    private data: any;

    constructor(){
        this.length = 0;
        this.data = {};
    }

    public get(index: number){
        return this.data[index];
    }

    public push(item: any){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    public pop(){
        if(this.length > 0){
            this.data[this.length] = undefined;
            this.length--;
            return this.length;
        }else{
            throw new Error("Array is empty");
        }
    }

    public delete(index: number){
        if(this.data[index]){
            delete this.data[index];
            this.length--;
            return this.length;
        } else {
            throw new Error("Index out of bounds");
        }
    }



}


const myArray = new MyArray();
myArray.push(6);
myArray.push(4);
myArray.push(1);
myArray.delete(8);
console.log(myArray)