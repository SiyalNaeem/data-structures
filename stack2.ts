class Stack2 {
    top: any;
    bottom: any;
    length: number;

    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value: any) {

        let node = {
            value,
            next: null
        }

        if(this.length == 0){

            this.top = node;
            this.bottom = node;

        } else {

            node.next = this.top;
            this.top = node;
        }
        this.length++;

    }

    pop() {
        if(this.length === 0){
            return null;
        }

        if(this.top == this.bottom){
            this.bottom = null;
        }

        this.top = this.top.next;
        this.length--;

    }
    
    public isEmpty() {
        return this.length == 0;
    }
}

const stackDS = new Stack2();
console.log(stackDS.peek())
console.log(stackDS.isEmpty())
stackDS.push(6)
stackDS.push("asd")
stackDS.push("dsafsaf")
stackDS.push("dssadafsaf")
stackDS.pop()
stackDS.pop()
stackDS.pop()
console.log(stackDS.peek())