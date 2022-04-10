class Queue<T> {
    private first: T[];
    private last: T[];

    constructor() {
        this.first = [];
        this.last = [];
    }

    enqueue(value: T) {
        for(let i=0; i < this.first.length; i++){
            this.last.push(this.first.pop());
        }

        this.last.push(value);

    }

    dequeue() {
        for (let i = 0; i < this.last.length; i++) {
            this.first.push(this.last.pop());
        }
        this.last.pop();
        return this;
    }
    peek() {
        if (this.last.length > 0) {
            return this.last[0];
        }
        return this.first[this.first.length - 1];
    }

    // public isEmpty(){
    //     return this.stack.length == 0;
    // }

}

const queueUsingStack = new Queue<number>();
// console.log(queueUsingStack.peek());
queueUsingStack.enqueue(6);
queueUsingStack.enqueue(2);
queueUsingStack.enqueue(4);
queueUsingStack.dequeue();
console.log(queueUsingStack);
// console.log(queueUsingStack.peek());

