class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class CircularDoublyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
      newNode.prev = this.head;
    } else {
      let tail = this.head.prev;
      tail.next = newNode;
      newNode.prev = tail;
      newNode.next = this.head;
      this.head.prev = newNode;
    }
    this.length++;
  }

  remove(value) {
    if (!this.head) return;

    let current = this.head;
    let found = false;

    do {
      if (current.value === value) {
        found = true;
        break;
      }
      current = current.next;
    } while (current !== this.head);

    if (!found) return;

    if (this.length === 1) {
      this.head = null;
    } else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
      if (current === this.head) {
        this.head = current.next;
      }
    }
    this.length--;
  }

  search(value) {
    if (!this.head) return -1;

    let current = this.head;
    let index = 0;

    do {
      if (current.value === value) return index;
      current = current.next;
      index++;
    } while (current !== this.head);

    return -1;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  toString() {
    if (!this.head) return "List kosong";

    let result = "";
    let current = this.head;
    do {
      result += current.value + (current.next !== this.head ? " <-> " : " -> kembali ke " + this.head.value);
      current = current.next;
    } while (current !== this.head);

    return result;
  }

  print() {
    console.log(this.toString());
  }
}

function simulasiAntrian(namaMahasiswa) {
  let antrian = new CircularDoublyLinkedList();
  namaMahasiswa.forEach(nama => antrian.append(nama));

  console.log("Antrian Mahasiswa:");
  antrian.print();
}

function simulasiGameOperBenda(players, hitungan) {
  let cdll = new CircularDoublyLinkedList();
  players.forEach(p => cdll.append(p));

  let current = cdll.head;

  while (cdll.size() > 1) {
    for (let i = 1; i < hitungan; i++) {
      current = current.next;
    }
    console.log(current.value, "keluar dari permainan!");
    let keluar = current;
    current = current.next;
    cdll.remove(keluar.value);
  }

  console.log("Pemenang adalah:", cdll.head.value);
}

let cdll = new CircularDoublyLinkedList();

cdll.append("Andi");
cdll.append("Budi");
cdll.append("Citra");
cdll.append("Dewi");

console.log("Daftar Mahasiswa Awal:");
cdll.print();

console.log("Index 'Citra':", cdll.search("Citra"));

cdll.remove("Budi");
console.log("Setelah hapus 'Budi':");
cdll.print();

console.log("Ukuran list:", cdll.size());
console.log("Apakah kosong?", cdll.isEmpty());

simulasiAntrian(["Eka", "Fajar", "Gina", "Hani"]);

console.log("\n=== Simulasi Game Oper Benda ===");
simulasiGameOperBenda(["Andi", "Budi", "Citra", "Dewi", "Eka"], 3);
