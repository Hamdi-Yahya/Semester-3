class Stack {
    constructor() {
        this.items = [];
    }
// Tambah elemen ke stack
    push(element) {
        this.items.push(element);
    }
// Hapus elemen teratas
    pop() {
        if (this.isEmpty()) {
            return "Stack kosong!";
    }
        return this.items.pop();
    }
// Lihat elemen teratas
    peek() {
        if (this.isEmpty()) {
            return "Stack kosong!";
    }
        return this.items[this.items.length - 1];
    }
// Cek apakah stack kosong
    isEmpty() {
        return this.items.length === 0;
    }
// Ukuran stack
    size() {
        return this.items.length;
    }
// Menghapus semua elemen
    clear() {
        this.items = [];
    }

    print() {
        return this.items.join(" -> ");
    }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.pop();
console.log(stack);
console.log(stack.pop());