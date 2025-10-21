class Node {
    constructor(value) {
        this.value = value ;
        this.next = null;
    }
}

class LingkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

append(value) {
    const newNode = new Node(value);

    if(!this.head) {
        this.head = newNode;
    } else {
        let current = this.head;
        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    this.length++;
}

insert(position, value) {
    if(position < 0 || position > this.length) return false;
    
    const newNode = new Node(value);
    
    if(position === 0) {
        newNode.next = this.head;
        this.head = newNode;
    } else {
        let current = this.head;
        let prev = null;
        let index = 0;

        while(index < position) {
            prev = current;
            current = current.next;
            index++;
        }

        newNode.next = current;
        prev.next = newNode;
    }

    this.length++;
    return true;
}

removeAt(position) {
    if(position < 0 || position >= this.length) return null;

    let current = this.head;

    if(position === 0) {
        this.head = current.next;
    } else {
        let prev = null;
        let index = 0;

        while(index < position) {
            prev = current;
            current = current.next;
            index++;
        }

        prev.next = current.next;
    }

    this.length--;
    return current.value;
}

remove(value) {
    const index = this.indexOf(value);
    return this.removeAt(index);
}

indexOf(value) {
    let current = this.head;
    let index = 0;

    while(current) {
        if(current.value === value) return index;
        current = current.next;
        index++;
    }
    return -1;
    }

isEmpty() {
    return this.length === 0;
}

toString() {
    let current = this.head;
    let result = '';

    while(current) {
        result += current.value + (current.next ? "->"  : "");
        current = current.next;
    }
    return result;
}

print() {
    console.log(this.toString());
}
}