class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;   
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

append(value) {
    let newNode = new Node(value);

    if(!this.head) {
        this.head = newNode;
        this.tail = newNode;
    } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    this.length++;
}

printForward() {
    let current = this.head;
    let result = "";
    while(current) {
        result += current.value + " <-> " ;
        current = current.next;
    }
    console.log(result + "null");
}

printBackward() {
    let current = this.tail;
    let result = "";
    while(current) {
        result += current.value + " <-> ";
        current = current.prev;
    }
    console.log(result + "null");
}
}

let dll = new DoubleLinkedList();
dll.append("Sintha");
dll.append("Rijali");
dll.append("Aji");
dll.append("Dani");

console.log("Cetak Maju:");
dll.printForward();

console.log("Cetak Mundur:");
dll.printBackward();

