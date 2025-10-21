class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack kosong!";
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return "Stack kosong!";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log("Isi Stack:", this.items.join(" -> "));
    }
}

const stack = new Stack();

stack.push("Kursi");
stack.push("Meja");
stack.push("AC");
stack.push("Laptop");
stack.push("Server");

console.log("=== Setelah push ===");
stack.print();

console.log("\nPop:", stack.pop());
console.log("Elemen teratas (peek):", stack.peek());

console.log("\n=== Sisa isi stack ===");
stack.print();

console.log("Ukuran stack:", stack.size());