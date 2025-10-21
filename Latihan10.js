var mahasiswa = {
    nama : "rijali rijali",
    npm : "1122333",
    jurusan : "pelayaran",
    angkatan : 2023,
    alamat : "jl. merdeka no. 45",
    hp : "081234567890"
};

console.log ("nama : " + mahasiswa.nama);
console.log ("npm : " + mahasiswa.npm);
console.log ("jurusan : " + mahasiswa.jurusan);
console.log ("angkatan : " + mahasiswa.angkatan);
console.log ("alamat : " + mahasiswa.alamat);
console.log ("hp : " + mahasiswa.hp);

console.log ("Nama : " + mahasiswa.nama);
console.log ("Alamat : " + mahasiswa.alamat);

mahasiswa.email = "rijalganteng25@gmail.com";

mahasiswa.angkatan = 2025;

delete mahasiswa.jurusan;

console.log (mahasiswa);