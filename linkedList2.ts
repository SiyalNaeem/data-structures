import { LinkedListNode } from "./linkedListstypes";

class LinkedList {

    private head: LinkedListNode;
    private tail: LinkedListNode;
    private length: number = 0;

    constructor(value: any){
        this.head = {
            value,
            next: null
        };
        this.tail = this.head;
        this.length++;
    }

    public append(value: any){

        let newNode: LinkedListNode = {
            value,
            next: null
        }
        
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    public prepend(value: any){
        let newNode: LinkedListNode = {
            value,
            next: null
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;

    }

    public insertAt(idx: number, value: any){

        if(idx == 0){
            this.prepend(value);
            return;
        }

        if(idx >= this.length){
            this.append(value);
            return;
        }

        let currentNode: LinkedListNode = this.head;
        let counter = 0;
        while(counter !== idx - 1){
            currentNode = currentNode.next;
            counter++;
        }

        let newNode: LinkedListNode = {
            value,
            next: null
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length++;

    }

    public removeAt(idx: number){

        if(idx < 0){
            throw new Error("index cannot be less than 0.");
        }

        if(idx > this.length){
            throw new Error("Index cannot be greate than LinkedList length");
            
        }
        
        let counter = 0;
        let currentNode = this.head;
        while(counter !== idx - 1){
            currentNode = currentNode.next;
            counter++;
        }

        let nodeToRemove: LinkedListNode = currentNode.next;
        currentNode.next = nodeToRemove.next;
        this.length--;

    }

    public printList(){

        let array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(array.join(" --> "))

    }

    public reverse(){

        let first = this.head;
        this.tail = this.head;
        let second = first.next;

        while(second){
            let temp = second.next;
            second.next = first;
            first = second;
            second = temp;
        }
        this.head.next = null;
        this.head = first;
    }
}

const linkedList = new LinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);
linkedList.insertAt(2, 99);
linkedList.removeAt(2)
linkedList.reverse()
linkedList.printList()