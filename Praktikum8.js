let nama = "Alul";
console.log ("String;", nama)


let umur  = 20 ;
console.log ("Number;", umur)

let isActive = true ;
console.log ("Boolean;", isActive)

let kosong = null ;
console.log ("Null;", kosong)

let belumDiisi;
console.log ("Undefined;", belumDiisi)

let id = Symbol("id");
console.log ("Symbol;", id)

let bigNumber = 1234567890123456789012345678901234567890n ;
console.log ("BigInt;", bigNumber)

// ==========================
// LATIHAN TIPE DATA NON-PRIMITIVE
// ==========================

let mahasiswa = {
    nama : "Budi",
    umur: 21,
    jurusan : "Informatika"
};
console.log("Object;", mahasiswa)

let angka = [1,2,3,4,5];
console.log("Array;", angka)

function sapa (nama){
    return "Halo, " + nama + "!";
}
console.log("Function;", sapa("Ilham"))

let sekarang = new Date();
console.log("Date;", sekarang)

let  map = new Map();
map.set("nama", "dika");
map.set("umur", 22);
console.log("Map;", map)

let set = new Set([1, 2,3,4,5]);
console.log("Set;", set)