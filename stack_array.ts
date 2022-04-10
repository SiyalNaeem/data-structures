class Stack {
    public stack: any[];

    constructor(){
        this.stack = [];
    }

    public peek() {
        return this.stack[this.stack.length - 1];
    }

    public push(value: any) {
        this.stack.push(value);
    }

    public pop() {
        this.stack.pop();
    }

    public isEmpty() {
        return this.stack.length == 0;
    }

}

const stack = new Stack();
stack.peek();
stack.push(6);
stack.push("asd");
stack.pop();
stack.pop();
console.log(stack.isEmpty());
console.log(stack.peek());