// 10 --> 5 --> 16

type LinkedListNode = {
    value: any, 
    next: any
}

class LinkedList {

    private head: LinkedListNode;
    private tail: LinkedListNode;
    public length: number = 0;

    constructor(value: any){
        this.head = {
            value: value,
            next: null
        };
        this.tail = this.head;
        this.length++;
    }

    public append(value: any){

        const node: LinkedListNode = {
            value: value,
            next: null
        }

        this.tail.next = node;
        this.tail = node;
        this.length++;
    }

    public prepend(value: any){

        const node: LinkedListNode = {
            value,
            next: null
        }
        
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    public printList(){
        let currentNode = this.head;
        let arr: any[] = [];
        while(currentNode != null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(arr.join(" --> "));
        return arr.join(" --> ");
    }

    public insert(index: number, value: any){
        if(index == 0){
            this.prepend(value);
            return this.printList();
        }

        if(index >= this.length){
            this.append(value);
            return this.printList();
        }

        const newNode: LinkedListNode = {
            value: value,
            next: null
        }

        let i = 0;
        let currentNode = this.head;
        while(i != index-1){
            currentNode = currentNode.next;
            i++;
        }

        let nextNode = currentNode.next;
        currentNode.next = newNode;
        newNode.next = nextNode;
        this.length++;

    }

    public remove(index: number){
        if(index < 0){
            throw new Error("index cannot be less than 0.");
        }

        if(index > this.length){
            throw new Error("Index cannot be greate than LinkedList length");
            
        }
        
        let i=0;
        let node = this.head;        
        
        while(i != index-1){
            node = node.next;
            i++;
        }

        let nodeToRemove: LinkedListNode = node.next;
        node.next = nodeToRemove.next;
        this.length--;

    }

    public lookup(value: any){

        let i = 0;
        let node = this.head;

        while(i != this.length){
            if(node.value == value){
                return node.value
            }
            node = node.next;
        }

        return "No value found";

    }

}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(9);
myLinkedList.insert(2, 6);
myLinkedList.insert(99, 100);
myLinkedList.printList();
console.log(myLinkedList.lookup(100));
// console.log(myLinkedList)