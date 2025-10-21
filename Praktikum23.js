class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

append(value) {
    const newNode = new Node(value);

    if(!this.head) {
        this.head = newNode;
        newNode.next = this.head;
    } else {
        let current = this.head;
        while(current.next !== this.head) {
            current = current.next;
        }
        current.next = newNode;
        newNode.next = this.head;
    }
    this.length++;
}

insert(position, value) {
    if(position < 0 || position > this.length) return false;
    const newNode = new Node(value);

    if(position === 0) {
        if(!this.head) {    
            this.head = newNode;    
            newNode.next = this.head;
        } else {
            newNode.next = this.head;
            let current = this.head;
            while(current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            this.head = newNode;    
        }
    } else {
        let index = 0;
        let current = this.head;
        let previous = null;
        while(index++ < position) {
            previous = current;
            current = current.next;

        }
        previous.next = newNode;
        newNode.next = current;
    }
    this.length++;  
    return true;    
}   

removeAt(position) {
    if(position < 0 || position >= this.length) return null;
    let current = this.head;
    let removedValue ;

    if(position === 0) {
        removedValue = current.value;
        if(this.length === 1) {
            this.head = null;
        } else {    
            let last = this.head;
            while(last.next !== this.head) {
                last = last.next;
            }
            this.head = current.next;
            last.next = this.head;
        }
    } else {
        let index = 0;
        let previous = null;
        while(index++ < position) {
            previous = current;
            current = current.next;
        }   
        removedValue = current.value;
        previous.next = current.next;
    }
    this.length--;  
    return removedValue;    
}

search(value) {
    if(!this.head) return -1;
    let current = this.head;
    let index = 0;
    do {
        if(current.value === value) return index;
        current = current.next;
        index++;
    } while(current !== this.head);
    return -1;
}

isEmpty() {
    return this.length === 0;
}

size() {
    return this.length;
}

print() {
    if(!this.head) {
        console.log("List is empty");   
        return;
    }
    let result = "";
    let current = this.head;
    do {
        result += current.value + " -> ";
        current = current.next;
    } while(current !== this.head);
    console.log(result + "(back to head)");
}
}

//Uji coba
let cll = new CircularLinkedList();

console.log("Tambah pemain ke lingkaran");
cll.append("Rijali");
cll.append("Aji");
cll.append("Dani");
cll.append("Sintha");
cll.print();

console.log("Sisipkan pemain di posisi 2");
cll.insert(2, "Kurniawan");
cll.print();

console.log("Hapus pemain di posisi 3: " + cll.removeAt(3));
console.log("Terhapus", cll.removeAt(3));
cll.print();