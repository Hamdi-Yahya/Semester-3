let nilaiMahasiswa = 81;
let grade;
let keterangan;

if (nilaiMahasiswa >= 90){
    grade = 'A';
    keterangan = 'Lulus dengan sangat baik';
} else if (nilaiMahasiswa >= 80){
    grade = 'B';
    keterangan = 'Lulus dengan baik';
} else if (nilaiMahasiswa >= 70){
    grade = 'C';
    keterangan = 'Lulus dengan cukup';
} else if (nilaiMahasiswa >= 60){
    grade = 'D';
    keterangan = 'Lulus dengan kurang';
} else {
    grade = 'E';
    keterangan = 'Tidak lulus';
}

console.log("Nilai Mahasiswa: " + nilaiMahasiswa);
console.log("Grade: " + grade + " -> " + keterangan);
