const prompt = require("prompt-sync")();

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    front() {
        if (this.isEmpty()) return null;
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log("Antrian Mahasiswa:", this.items.join(" <- "));
    }
}

const queue = new Queue();

while (true) {
    console.log("\n=== PROGRAM LATIHAN 17 ===");
    console.log("1. Tambah Mahasiswa ke Antrian");
    console.log("2. Panggil Mahasiswa");
    console.log("3. Lihat Mahasiswa yang Akan Maju Berikutnya");
    console.log("4. Lihat Jumlah Mahasiswa yang Masih Menunggu");
    console.log("5. Lihat Semua Antrian");
    console.log("6. Keluar");

    const pilih = prompt("Pilih menu (1-6): ");

    if (pilih === "1") {
        const nama = prompt("Masukkan nama mahasiswa: ");
        queue.enqueue(nama);
        console.log(`${nama} telah masuk ke dalam antrian.`);
    }
    else if (pilih === "2") {
        const keluar = queue.dequeue();
        if (keluar) console.log(`${keluar} maju untuk ujian.`);
        else console.log("Antrian kosong, tidak ada mahasiswa yang maju.");
    }
    else if (pilih === "3") {
        const depan = queue.front();
        if (depan) console.log(`Mahasiswa berikutnya: ${depan}`);
        else console.log("Belum ada mahasiswa dalam antrian.");
    }
    else if (pilih === "4") {
        console.log(`Jumlah mahasiswa yang masih menunggu: ${queue.size()}`);
    }
    else if (pilih === "5") {
        if (queue.isEmpty()) console.log("Antrian kosong.");
        else queue.print();
    }
    else if (pilih === "6") {
        console.log("Terima kasih, program selesai.");
        break;
    }
    else {
        console.log("Pilihan tidak valid!");
    }
}