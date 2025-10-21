let namaMahasiswa = ["Andi", "Budi", "Citra", "Dewi", "Budi", "Eka"];

let cariNama = "Budi";

let indexPertama = namaMahasiswa.indexOf(cariNama);
console.log("Index pertama", cariNama, ":", indexPertama);

let indexTerakhir = namaMahasiswa.lastIndexOf(cariNama);
console.log("Index terakhir", cariNama, ":", indexTerakhir);

let adaNama = namaMahasiswa.includes(cariNama);
console.log("Apakah ada", cariNama, "di array?", adaNama);

let cekNama = "Fajar";
console.log("Apakah ada", cekNama, "di array?", namaMahasiswa.includes(cekNama));