const prompt = require("prompt-sync")();

class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
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

while (true) {
    console.log("\n=== PROGRAM LATIHAN 16 - STACK ===");
    console.log("1. Informasi Program");
    console.log("2. Tambah Data ke Stack");
    console.log("3. Hapus Data dari Stack");
    console.log("4. Lihat Data Teratas");
    console.log("5. Lihat Semua Data");
    console.log("6. Keluar");

    const pilih = prompt("Pilih menu (1-6): ");

    if (pilih === "1") {
        console.log("\nProgram ini menggunakan struktur data STACK.");
        console.log("Algoritma: Menambah dan menghapus data menggunakan prinsip LIFO (Last In, First Out).");
    }
    else if (pilih === "2") {
        const data = prompt("Masukkan data yang ingin ditambah: ");
        stack.push(data);
        console.log("Data berhasil ditambahkan!");
    }
    else if (pilih === "3") {
        const hapus = stack.pop();
        if (hapus) console.log("Data terhapus:", hapus);
        else console.log("Stack kosong!");
    }
    else if (pilih === "4") {
        const atas = stack.peek();
        if (atas) console.log("Data teratas:", atas);
        else console.log("Stack kosong!");
    }
    else if (pilih === "5") {
        if (stack.isEmpty()) console.log("Stack kosong!");
        else stack.print();
    }
    else if (pilih === "6") {
        console.log("Terima kasih, program selesai.");
        break;
    }
    else {
        console.log("Pilihan tidak valid!");
    }
}