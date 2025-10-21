function Mahasiswa(nama, nim, jurusan, angkatan) {
  this.nama = nama;
  this.nim = nim;
  this.jurusan = jurusan;
  this.angkatan = angkatan;

this.tampilkanData = function() {
    console.log("Nama: " + this.nama);
    console.log("NIM: " + this.nim);
    console.log("Jurusan: " + this.jurusan);
    console.log("Angkatan: " + this.angkatan);
    console.log("--------------------");
  };

this.ubahJurusan = function(jurusanBaru) {
    this.jurusan = jurusanBaru;
    console.log("Jurusan " + this.nama + " telah diubah menjadi: " + this.jurusan);
  };

this.tampilkanAngkatan = function() {
    console.log(this.nama + " adalah angkatan " + this.angkatan);
  };
}

var mhs1 = new Mahasiswa("Andi", "123456", "Informatika", 2021);
var mhs2 = new Mahasiswa("Budi", "654321", "Sistem Informasi", 2020);
var mhs3 = new Mahasiswa("Citra", "112233", "Teknik Komputer", 2022);

mhs1.tampilkanData();
mhs2.tampilkanData();
mhs3.tampilkanData();

mhs1.ubahJurusan("Teknik Informatika");

mhs1.tampilkanAngkatan();
mhs2.tampilkanAngkatan();
mhs3.tampilkanAngkatan();
