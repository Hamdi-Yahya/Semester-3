var  nums = [1,2,3,7,8,9];
nums.splice(3,0,5,6);
console.log(nums);

var warna = ["merah", "kuning", "hijau"];
warna.splice(1,1,"biru");
console.log(warna);

var itDiv = ["HTML", "CSS", "JavaScript", "PHP", "Python"];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;
console.log(dmpDept);
console.log(cisDept);
