let teman = ["Surya", "Ilham", "Dika", "Sintha", "Rama"];
console.log("Data awal:", teman);

teman.push("Andi", "Budi");
console.log("Setelah tambah 2 nama di akhir:", teman);

teman.unshift("Citra");
console.log("Setelah tambah 1 nama di awal:", teman);

teman.pop();
console.log("Setelah hapus nama terakhir:", teman);

console.log("Daftar nama teman:");
for (let nama of teman) {
  console.log(nama);
}

let cari = "Dika";
let indexDika = teman.indexOf(cari);
console.log("Index nama", cari, ":", indexDika);

teman.sort();
console.log("Nama teman setelah diurutkan:", teman);
