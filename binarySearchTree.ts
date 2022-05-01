class bfsNode {
    left: any;
    right: any;
    value: any;
    constructor(value: any) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    public root: any;
    constructor() {
        this.root = null;
    }
    insert(value: any) {
        const newNode = new bfsNode(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    //Left
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    //Right
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    lookup(value: any) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                return currentNode;
            }
        }
        return null
    }
    remove(value: any) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else if (currentNode.value === value) {
                //We have a match, get to work!

                //Option 1: No right child: 
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {

                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                            //if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                    //Option 2: Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {

                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }

                    //Option 3: Right child that has a left child
                } else {

                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }
    breadthFirstSearch() {

        let currentNode = this.root;
        let queue: any[] = [];
        let listToReturn: any[] = [];
        queue.push(currentNode);

        while(queue.length > 0){
            currentNode = queue.shift();
            listToReturn.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left);
            }
            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }

        return listToReturn;

    }

    breadthFirstSearchR(queue: any[], list: any[]): any[]{

        if(queue.length === 0){
            return list;
        }
        let currentNode = queue.shift();
        list.push(currentNode.value);
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }

        return this.breadthFirstSearchR(queue, list);

    }

    depthFirstSearchInOrder(){
        return traverseInOrder(this.root, []);
    }

    depthFirstSearchPreOrder(){
        return traversePreOrder(this.root, []);
    }

    depthFirstSearchPostOrder(){
        return traversePostOrder(this.root, []);
    }

}

const bfsTree = new BinarySearchTree();
bfsTree.insert(9)
bfsTree.insert(4)
bfsTree.insert(6)
bfsTree.insert(20)
bfsTree.insert(170)
bfsTree.insert(15)
bfsTree.insert(1)
//JSON.stringify(traverse(bfsTree.root))
// console.log(bfsTree.breadthFirstSearchR([bfsTree.root], []));
console.log(bfsTree.depthFirstSearchInOrder());
console.log(bfsTree.depthFirstSearchPreOrder());
console.log(bfsTree.depthFirstSearchPostOrder());
//     9
//  4     20
//1  6  15  170

function traverse(node: any) {
    const tree: any = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
}

function traverseInOrder(node: any, list: any[]) {
    if(node.left){
        traverseInOrder(node.left, list);
    }
    list.push(node.value);

    if(node.right){
        traverseInOrder(node.right, list);
    }

    return list;
}


function traversePreOrder(node: any, list: any[]) {
    list.push(node.value);
    if(node.left){
        traversePreOrder(node.left, list);
    }

    if(node.right){
        traversePreOrder(node.right, list);
    }

    return list;
}


function traversePostOrder(node: any, list: any[]) {
    if(node.left){
        traversePostOrder(node.left, list);
    }
    
    if(node.right){
        traversePostOrder(node.right, list);
    }
    
    list.push(node.value);
    return list;
}

