// =======================
// LATIHAN 5: TIPE DATA
// =======================

// 1. String
let namaLengkap = "Budi Santoso";
console.log("String:", namaLengkap); 
// String digunakan untuk menyimpan data berupa teks atau kalimat.
// Di sini, variabel namaLengkap berisi teks "Budi Santoso".

// 2. Number
let umur = 21;
console.log("Number:", umur); 
// Number untuk menyimpan bilangan bulat atau desimal.
// Variabel umur berisi angka 21 yang dapat dipakai untuk operasi matematika.

// 3. Boolean
let sudahLogin = true;
console.log("Boolean:", sudahLogin); 
// Boolean adalah tipe data logika dengan nilai true atau false.
// Cocok digunakan untuk kondisi, misal apakah user sudah login.

// 4. Null
let pacar = null;
console.log("Null:", pacar); 
// Null berarti variabel sengaja diisi nilai kosong.
// Variabel pacar sudah ada, tapi nilainya "kosong".

// 5. Undefined
let alamat;
console.log("Undefined:", alamat); 
// Undefined muncul jika variabel dideklarasikan tetapi belum diisi nilai.

// 6. Symbol
let id = Symbol("id");
console.log("Symbol:", id); 
// Symbol digunakan untuk membuat identifier unik.
// Walaupun teks yang diberikan sama, Symbol selalu unik dan tidak dapat disamakan.

// 7. BigInt
let angkaBesar = 123456789012345678901234567890n;
console.log("BigInt:", angkaBesar); 
// BigInt untuk angka yang sangat besar melebihi batas tipe Number biasa.
// Angka diakhiri dengan huruf 'n' untuk menandakan BigInt.

// 8. Object
let mahasiswa = {
  nama: "Andi",
  umur: 20,
  jurusan: "Informatika"
};
console.log("Object:", mahasiswa); 
// Object menyimpan data dalam bentuk pasangan key-value.
// Di sini mahasiswa punya properti nama, umur, dan jurusan.

// 9. Array
let hobi = ["Membaca", "Olahraga", "Coding"];
console.log("Array:", hobi); 
// Array digunakan untuk menyimpan banyak nilai dalam satu variabel.
// Setiap nilai memiliki index mulai dari 0 (hobi[0] = Membaca).

// 10. Function
function sapa(nama) {
  return "Halo, " + nama + "!";
}
console.log("Function:", sapa("Citra"));
// Function berisi blok kode yang dapat dijalankan berulang.
// Fungsi sapa mengembalikan teks "Halo, <nama>!".

// 11. Date
let sekarang = new Date();
console.log("Date:", sekarang); 
// Date digunakan untuk membuat objek tanggal dan waktu.
// Default-nya akan menampilkan waktu saat ini.

// 12. Map
let map = new Map();
map.set("Nama", "Dewi");
map.set("Umur", 22);
console.log("Map:", map);
// Map menyimpan data seperti object, tetapi key bisa tipe apa saja.
// Kita menambahkan dua key: "Nama" dan "Umur".

// 13. Set
let set = new Set([1, 2, 3, 3, 4]);
console.log("Set:", set); 
// Set digunakan untuk menyimpan nilai unik (tidak ada duplikat).
// Meskipun angka 3 dimasukkan dua kali, di Set hanya muncul sekali.
