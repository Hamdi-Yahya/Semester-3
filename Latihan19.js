const prompt = require("prompt-sync")();

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(nama, prioritas) {
        const pelanggan = { nama, prioritas };
        let masuk = false;

        for (let i = 0; i < this.items.length; i++) {
            if (prioritas < this.items[i].prioritas) {
                this.items.splice(i, 0, pelanggan);
                masuk = true;
                break;
            }
        }

        if (!masuk) this.items.push(pelanggan);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printQueue() {
        if (this.isEmpty()) {
            console.log("\nAntrian kosong.\n");
            return;
        }
        console.log("\n=== DAFTAR ANTRIAN PELANGGAN ===");
        this.items.forEach((p, i) => {
            console.log(`${i + 1}. ${p.nama} (Prioritas ${p.prioritas})`);
        });
    }
}

const queue = new Queue();

while (true) {
    console.log("\n=== SISTEM ANTRIAN CUSTOMER SERVICE ===");
    console.log("1. Tambah Pelanggan ke Antrian");
    console.log("2. Layani Pelanggan Prioritas Tertinggi");
    console.log("3. Lihat Daftar Antrian");
    console.log("4. Keluar");

    const pilih = prompt("Pilih menu (1-4): ");
    if (pilih === "1") {
        const nama = prompt("Masukkan nama pelanggan: ");
        console.log("\nTingkat Prioritas:");
        console.log("1 = Error sistem / Pembayaran gagal");
        console.log("2 = Produk rusak");
        console.log("3 = Pertanyaan umum");
        const prioritas = parseInt(prompt("Masukkan prioritas (1-3): "));

        if (prioritas >= 1 && prioritas <= 3) {
            queue.enqueue(nama, prioritas);
            console.log(`${nama} telah masuk ke antrian.`);
            queue.printQueue();
        } else {
            console.log("Prioritas tidak valid!");
        }
    }
    else if (pilih === "2") {
        const pelanggan = queue.dequeue();
        if (pelanggan) {
            console.log(`\nSedang melayani: ${pelanggan.nama} (Prioritas ${pelanggan.prioritas})`);
            console.log("Pemeriksaan selesai!\n");
            queue.printQueue();
        } else {
            console.log("\nTidak ada pelanggan dalam antrian.\n");
        }
    }
    else if (pilih === "3") {
        queue.printQueue();
    }
    else if (pilih === "4") {
        console.log("\nTerima kasih, layanan Customer Service ditutup.\n");
        break;
    }
    else {
        console.log("Pilihan tidak valid!");
    }
}