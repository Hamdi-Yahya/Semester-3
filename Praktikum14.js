var buah = ["Apel", "Mangga", "Pisang", "Jeruk" ];

console.log("Index pisang:", buah.indexOf("Pisang"));
console.log("Apakah ada Mangga?", buah.includes("Mangga"));

var  names = ["Andi", "Budi", "Caca", "Deni", "Eka", "Fani", "Gina", "Hani"];
var search = "Deni";
var firstPos = names.indexOf(search);
console.log("First found " + search + " at position " + firstPos);
var lastPos = names.lastIndexOf(search);
console.log("Last found " + search + " at position " + lastPos);