//Mengambil data jika di submit
var submitInput = document.getElementById("submitInput");
//Mengambil Data setelah di Klil
submitInput.addEventListener("click", function(event){
    event.preventDefault();
    var usiaValue = document.getElementById("usiaInput").value;
    var beratBadanValue = document.getElementById("beratBadanInput").value;
    var tinggiBadanValue = document.getElementById("tinggiBadanInput").value;
    hitungBmi(beratBadanValue, tinggiBadanValue);
})

var hasilAkhir = ""
//Menghitung BMI
function hitungBmi(beratBadanValue, tinggiBadanValue){
    var tb2 = eval(tinggiBadanValue / 100)
    var tbHasil = tb2 * tb2
    var hasil = eval(beratBadanValue / tbHasil)
    if (hasil >= 30.0) {
        hasilAkhir =  hasil.toFixed(2) +"\n"+ "Hasil perhitungan BMI anda Termasuk Kegemukan (Obesitas)"
        updateUi(hasilAkhir)
    }
    else if(hasil >= 25.0){

        hasilAkhir = hasil.toFixed(2) + "\nHasil perhitungan BMI anda Termasuk Kelebihan Berat Badan"
        updateUi(hasilAkhir)
    }
    else if(hasil >= 18.5){
        hasilAkhir = hasil.toFixed(2) +"\nHasil perhitungan BMI anda Termasuk Normal"
        updateUi(hasilAkhir)
    }
    else{
        hasilAkhir = hasil.toFixed(2) + "\nHasil perhitungan BMI anda Termasuk Kekurangan Berat Badan"
        updateUi(hasilAkhir)
    }
}
//Menampilkan Di halaman
function updateUi(hasilAkhir){
    var hasilOutput = document.getElementById("hasil1")
    hasilOutput.textContent = hasilAkhir
}
//Fungsi Reset
function formReset() {
    document.getElementById("form1").reset()
}