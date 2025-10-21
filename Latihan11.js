class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  remove(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.length--;
      return;
    }

    let current = this.head;
    let prev = null;

    while (current && current.value !== value) {
      prev = current;
      current = current.next;
    }

    if (current) {
      prev.next = current.next;
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
    let result = "";
    let current = this.head;
    while (current) {
      result += current.value + (current.next ? " -> " : "");
      current = current.next;
    }
    return result || "List kosong";
  }

  print() {
    alert(this.toString());
  }
}

let daftarMahasiswa = new LinkedList();

while (true) {
  let menu = prompt(
    "=== MENU MAHASISWA (LINKED LIST) ===\n" +
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
    daftarMahasiswa.print();
  } 
  else if (menu === "5" || menu === null) {
    alert("Program selesai.");
    break;
  } 
  else {
    alert("Pilihan tidak valid, coba lagi.");
  }
}
