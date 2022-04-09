import { LinkedListNode } from "./linkedListstypes";

class DoublyLinkedList {

    private head: LinkedListNode;
    private tail: LinkedListNode;
    private length: number = 0;

    constructor(value: any){
        this.head = {
            value,
            next: null,
            prev: null
        };
        this.tail = this.head;
        this.length++;
    }

    public append(value: any){

        let newNode: LinkedListNode = {
            value,
            next: null,
            prev: null
        }
        
        newNode.prev = this.head;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    public prepend(value: any){
        let newNode: LinkedListNode = {
            value,
            next: null,
            prev: null
        }

        newNode.next = this.head;
        this.head.prev = newNode;
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
            next: null,
            prev: null
        }

        let leader = currentNode;
        let follower = leader.next;

        leader.next = newNode;
        newNode.prev = leader;
        newNode.next = follower;
        follower.prev = newNode;

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

        let leader = currentNode;
        let nodeToRemove: LinkedListNode = currentNode.next;
        let follower = nodeToRemove.next;

        leader.next = follower;
        follower.prev = leader;
        this.length--;

    }

    public printList(){

        let array = [];
        let currentNode = this.head;
        while(currentNode !== null){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(array.join(" <--> "))

    }

}

const linkedList = new DoublyLinkedList(10);
linkedList.append(5);
linkedList.append(16);
linkedList.prepend(1);
linkedList.insertAt(2, 99);
linkedList.removeAt(2)
linkedList.printList()