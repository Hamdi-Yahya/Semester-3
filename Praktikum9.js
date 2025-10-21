var buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
console.log("Daftar Buah:", buah)

var angka = new Array (10, 20, 30, 40, 50);
console.log("Daftar Angka:", angka)

var sentence = "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i) {
    console.log("word " + i + " : " + words[i]);
}