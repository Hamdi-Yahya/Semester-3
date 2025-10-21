var angkaAcak = [35, 20, 15, 40, 50];

console.log("Sebelum sort:", angkaAcak);

angkaAcak.sort ((a,b) => a-b);
console.log("Setelah sort ascending:", angkaAcak);

angkaAcak.sort ((a,b) => b-a);
console.log("Setelah sort Descending:", angkaAcak);