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

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    printQueue() {
        console.log("Daftar Antrian Pasien:", this.items.join(" <- "));
    }
}

function progressBar() {
    const total = 20;
    for (let i = 0; i <= total; i++) {
        let bar = "[" + "=".repeat(i) + " ".repeat(total - i) + "]";
        process.stdout.write(`\rPemeriksaan: ${bar} ${Math.floor((i / total) * 100)}%`);
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 100); // simulasi delay
    }
    console.log("\nPemeriksaan selesai!\n");
}

console.log("=== SISTEM ANTRIAN KLINIK DOKTER ===");
const namaDokter = prompt("Masukkan nama dokter: ");
console.log(`Selamat datang di Klinik Dr. ${namaDokter}\n`);

const queue = new Queue();

while (true) {
    console.log("\n=== MENU ANTRIAN ===");
    console.log("1. Tambahkan pasien ke antrian");
    console.log("2. Panggil pasien berikutnya");
    console.log("3. Lihat daftar antrian");
    console.log("4. Jumlah pasien dalam antrian");
    console.log("5. Keluar");

    const pilihan = prompt("Pilih menu (1-5): ");

    if (pilihan === "1") {
        const nama = prompt("Masukkan nama pasien: ");
        queue.enqueue(nama);
        console.log(`${nama} telah ditambahkan ke dalam antrian.`);
    }
    else if (pilihan === "2") {
        const pasien = queue.dequeue();
        if (pasien) {
            console.log(`\nPasien ${pasien} sedang diperiksa oleh Dr. ${namaDokter}...\n`);
            progressBar();
        } else {
            console.log("Tidak ada pasien dalam antrian!");
        }
    }
    else if (pilihan === "3") {
        if (queue.isEmpty()) console.log("Belum ada pasien dalam antrian.");
        else queue.printQueue();
    }
    else if (pilihan === "4") {
        console.log(`Jumlah pasien yang menunggu: ${queue.size()}`);
    }
    else if (pilihan === "5") {
        console.log(`Terima kasih. Klinik Dr. ${namaDokter} tutup hari ini.`);
        break;
    }
    else {
        console.log("Pilihan tidak valid!");
    }
}