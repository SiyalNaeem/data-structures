import { LinkedListNode } from "./linkedListstypes";

// class CustomNode {

//     public value: any;
//     public next: any;
    
//     constructor(value: any) {
//         this.value = value;
//         this.next = null;
//     }
// }

class Stack {
    top: LinkedListNode;
    bottom: LinkedListNode;
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
        let node: LinkedListNode = {
            value,
            next: null
        };
        
        if (this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.length++;
        return this;
    }
    pop() {
        if (this.length === 0) {
            return null;
        }

        if(this.top == this.bottom){
            this.bottom = null;
        }

        let node = this.top;
        this.top = this.top.next;
        this.length--;
        return node;
    }
    
    
    public isEmpty() {
        return this.length === 0;
    }
}

const stack = new Stack();
console.log(stack.peek())
console.log(stack.isEmpty())
stack.push(6)
stack.push("asd")
stack.push("dsafsaf")
stack.pop()
stack.pop()
stack.pop()
console.log(stack.peek())