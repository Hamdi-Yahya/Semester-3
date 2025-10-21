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

    clear() {
        this.items = [];
    }
}

function membalikKata() {
    const kata = prompt("Masukkan kata: ");
    const stack = new Stack();
    for (let char of kata) stack.push(char);
    let hasil = "";
    while (!stack.isEmpty()) hasil += stack.pop();
    console.log("Hasil dibalik:", hasil);
}

function pengecekanKurung() {
    const ekspresi = prompt("Masukkan ekspresi: ");
    const stack = new Stack();
    let valid = true;
    for (let char of ekspresi) {
        if (char === "(") stack.push(char);
        else if (char === ")") {
            if (stack.isEmpty()) {
                valid = false;
                break;
            }
            stack.pop();
        }
    }
    if (valid && stack.isEmpty()) console.log("Kurung seimbang");
    else console.log("Kurung tidak seimbang");
}

function konversiDesimalKeBiner() {
    let desimal = parseInt(prompt("Masukkan bilangan desimal: "));
    const stack = new Stack();
    while (desimal > 0) {
        stack.push(desimal % 2);
        desimal = Math.floor(desimal / 2);
    }
    let biner = "";
    while (!stack.isEmpty()) biner += stack.pop();
    console.log("Hasil biner:", biner);
}

while (true) {
    console.log("\n=== Menu Praktikum Stack ===");
    console.log("1. Membalik Kata");
    console.log("2. Pengecekan Kurung");
    console.log("3. Konversi Desimal ke Biner");
    console.log("4. Keluar");

    const pilihan = prompt("Pilih menu (1-4): ");

    if (pilihan === "1") membalikKata();
    else if (pilihan === "2") pengecekanKurung();
    else if (pilihan === "3") konversiDesimalKeBiner();
    else if (pilihan === "4") {
        console.log("Terima kasih, program selesai.");
        break;
    } else {
        console.log("Pilihan tidak valid!");
    }
}