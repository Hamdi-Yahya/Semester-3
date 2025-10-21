let nilai = [60, 75, 55, 90, 80];

let nilaiPlus10 = nilai.map (n => n + 10);
console.log("Nilai setelah ditambah 10:", nilaiPlus10);

let nilaiKelulusan = nilai.filter (n => n >= 70);
console.log("Nilai yang lulus: ", nilaiKelulusan);

let total = nilai.reduce ((acc, n) => acc + n, 0);
console.log("Total nilai:", total);
