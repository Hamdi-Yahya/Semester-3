class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  remove(value) {
    if (!this.head) return;

    let current = this.head;
    if (current.value === value) {
      this.head = current.next;
      if (this.head) this.head.prev = null;
      else this.tail = null;
      this.length--;
      return;
    }

    while (current && current.value !== value) {
      current = current.next;
    }

    if (current) {
      if (current.next) current.next.prev = current.prev;
      if (current.prev) current.prev.next = current.next;
      if (current === this.tail) this.tail = current.prev;
      this.length--;
    }
  }

  search(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.next;
      index++;
    }
    return -1;
  }

  toString() {
    if (!this.head) return "List kosong";
    let result = "";
    let current = this.head;
    while (current) {
      result += current.value + (current.next ? " <-> " : "");
      current = current.next;
    }
    return result;
  }
}

// Program Utama
let daftarMahasiswa = new DoubleLinkedList();

while (true) {
  let menu = prompt(
    "=== MENU MAHASISWA (DOUBLE LINKED LIST) ===\n" +
    "1. Tambah Data\n" +
    "2. Hapus Data\n" +
    "3. Cari Data\n" +
    "4. Tampilkan Semua\n" +
    "5. Keluar\n\n" +
    "Pilih menu:"
  );

  if (menu === "1") {
    let nama = prompt("Masukkan nama mahasiswa:");
    daftarMahasiswa.append(nama);
    alert("Data berhasil ditambahkan.");
  } 
  else if (menu === "2") {
    let nama = prompt("Masukkan nama yang akan dihapus:");
    daftarMahasiswa.remove(nama);
    alert("Jika ada, data sudah dihapus.");
  } 
  else if (menu === "3") {
    let nama = prompt("Masukkan nama yang dicari:");
    let pos = daftarMahasiswa.search(nama);
    if (pos !== -1) {
      alert(nama + " ditemukan di posisi ke-" + pos);
    } else {
      alert(nama + " tidak ditemukan.");
    }
  } 
  else if (menu === "4") {
    alert("Daftar Mahasiswa:\n" + daftarMahasiswa.toString());
  } 
  else if (menu === "5" || menu === null) {
    alert("Program selesai.");
    break;
  } 
  else {
    alert("Pilihan tidak valid, coba lagi.");
  }
}
