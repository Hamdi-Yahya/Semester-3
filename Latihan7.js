let mahasiswa = ["Andi", "Budi", "Citra", "Dewi", "Eka"];

console.log("Data awal:", mahasiswa);

mahasiswa.push("Kelas TI-1A");
console.log("Setelah push (tambah nama kelas):", mahasiswa);

mahasiswa.unshift("Angkatan 2025");
console.log("Setelah unshift (tambah 'Angkatan'):", mahasiswa);

mahasiswa.pop();
console.log("Setelah pop (hapus terakhir):", mahasiswa);

mahasiswa.shift();
console.log("Setelah shift (hapus pertama):", mahasiswa);

mahasiswa.splice(1, 1);
console.log("Setelah splice (hapus indeks 1):", mahasiswa);
