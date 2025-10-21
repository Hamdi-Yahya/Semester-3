let angka1 = 10;
let angka2 = 4;

console.log("Penjumlahan:", angka1 + angka2);
console.log("Pengurangan:", angka1 - angka2);
console.log("Perkalian:", angka1 * angka2);
console.log("Pembagian:", angka1 / angka2);
console.log("Sisa Bagi:", angka1 % angka2);

let hasil = 10;
hasil += angka1; 
console.log("Hasil setelah += angka1:", hasil);

hasil -= angka2; 
console.log("Hasil setelah -= angka2:", hasil);

hasil *= 2; 
console.log("Hasil setelah *= 2:", hasil);

hasil /= 2; 
console.log("Hasil setelah /= 2:", hasil);

console.log("Apakah angka1 == angka2?", angka1 == angka2);
console.log("Apakah angka1 > angka2?", angka1 > angka2);
console.log("Apakah angka1 < angka2?", angka1 < angka2);

let benar = true;
let salah = false;

console.log("benar && salah:", benar && salah);
console.log("benar || salah:", benar || salah);
console.log("!benar:", !benar);
console.log("!salah:", !salah);
