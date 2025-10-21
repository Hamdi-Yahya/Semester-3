class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null; 
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (!this.head) {
      console.log("Antrian kosong");
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null; 
    }
    this.length--;
    return value;
  }

  print() {
    if (!this.head) {
      console.log("Antrian kosong");
      return;
    }
    let result = "";
    let current = this.head;
    while (current) {
      result += current.value + (current.next ? " -> " : "");
      current = current.next;
    }
    console.log(result);
  }
}

let antrian = new Queue();

antrian.enqueue("Andi");
antrian.enqueue("Budi");
antrian.enqueue("Citra");

console.log("Antrian saat ini:");
antrian.print(); 

console.log("\nMahasiswa keluar dari antrian:", antrian.dequeue()); 
console.log("Antrian setelah dequeue:");
antrian.print(); 
