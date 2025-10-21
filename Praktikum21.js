function DoublyLinkedList() {
    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    };

    let length = 0;
    let head = null;
    let tail = null;

    this.insert = function(position, element) {
        if(position >= 0 && position <= length) {
            let node = new Node(element),
            current = head,
            previous,
            index = 0;

            if (position === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    head = node;
                }
            } else if (position === length) {
                current = tail;
                current.next = node;
                node.prev = current;
                tail = node;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                node.prev = previous;
                previous.next = node;
                current.prev = node;
            }
            length++;
            return true;
        } else {
            return false;  
        }
    };

    this.removeAt = function(position) {
        if(position > -1 && position < length) {
            let current = head;
            let previous;
            let index = 0;

            if(position === 0) {
                head = current.next;
                if(length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if(position === length - 1) {
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
                current.next.prev = previous;
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    };

//Cetak Maju
this.printForward = function() {
    let current = head;
    let result = "";
    while(current) {
        result += current.element + " <-> ";
        current = current.next;
    }
    console.log(result + "null");
};

//Cetak Mundur
this.printBackward = function() {
    let current = tail;
    let result = "";
    while(current) {
        result += current.element + " <-> ";
        current = current.prev;
    }
    console.log(result + "null");
};

//Info Tambahan
this.size = function() {
    return length;
};

this.isEmpty = function() {
    return length === 0;
};
}

//Uji  Coba
let dll = new DoublyLinkedList();
dll.insert(0, "Rijali");
dll.insert(1, "kurniawan");
dll.insert(2, "putra");
dll.insert(1, "yasmin");

console.log("Cetak maju:");
dll.printForward();
console.log("Cetak mundur:");
dll.printBackward();

console.log("Hapus posisi 2:", dll.removeAt(2));
console.log("Cetak maju setelah penghapusan:");
dll.printForward();