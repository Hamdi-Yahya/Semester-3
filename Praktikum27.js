class Queue {
    constructor() {
        this.items = []; // Array untuk menyimpan elemen queue
    }
    // Menambahkan elemen ke antrian (enqueue)
    enqueue(element) {
        this.items.push(element);
        console.log(`${element} telah ditambahkan ke antrian.`);
    }
    // Menghapus elemen dari depan antrian (dequeue)
    dequeue() {
        if (this.isEmpty()) {
            console.log("Antrian kosong! Tidak ada elemen yang bisa dihapus.");
            return null;
        }
        const removed = this.items.shift();
        console.log(`${removed} telah dihapus dari antrian.`);
        return removed;
    }
    // Melihat elemen terdepan tanpa menghapusnya
    front() {
        if (this.isEmpty()) {
            console.log("Antrian kosong!");
            return null;
        }
        console.log(`Elemen terdepan adalah: ${this.items[0]}`);
        return this.items[0];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    // Menampilkan ukuran antrian
    size() {
        console.log(`Ukuran antrian saat ini: ${this.items.length}`);
        return this.items.length;
    }
    // Menampilkan semua elemen dalam antrian
    printQueue() {
        console.log("Isi antrian:", this.items.join(" ← "));
    }
}
// --- Uji Coba ---
const queue = new Queue();
queue.enqueue("Mahasiswa A");
queue.enqueue("Mahasiswa B");
queue.enqueue("Mahasiswa C");
queue.printQueue();
queue.front();
queue.dequeue();
queue.printQueue();
queue.size();