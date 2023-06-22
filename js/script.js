const inputfield = document.getElementById("inputField");
const hasilfield = document.getElementById("resultField");
const calc = document.getElementById("calculation");
const howtof = document.getElementById("celtofah");
const howtoc = document.getElementById("fahtocelc");
let isFahrenheit = true;

// membuat validasi agar inputan hanya bisa di isi angka
inputfield.addEventListener("input", function () {
  var inputValue = inputfield.value;
  var numericRegex = /^[0-9]+$/;

  if (!numericRegex.test(inputValue)) {
    inputfield.value = "";
  }
});

// fungsi untuk konversi celcius ke fahrenheit
function covertFahrenheit() {
  const suhu = inputfield.value;
  const cara = calculation;
  const howto = howtof;
  const hasil = (suhu * 9) / 5 + 32;

  hasilfield.value = hasil;
  cara.innerHTML = "(" + suhu + " °C × 9/5) + 32 = " + hasil + " °F";
  howto.style.display = "block";
}

// fungsi untuk konversi fahrenheit ke celcius
function covertCelcius() {
  const suhu = inputfield.value;
  const cara = calculation;
  const howto = howtoc;
  const hasil = ((suhu - 32) * 5) / 9;

  hasilfield.value = hasil;
  cara.innerHTML = "(" + suhu + " °F − 32) × 5/9 = " + hasil + " °C";
  howto.style.display = "block";
}

// fungsi untuk menghapus semua isi dari element yang sudah kita munculkan setelah proses konversi
function reset() {
  inputfield.value = null;
  hasilfield.value = null;
  calc.innerHTML = "";
  howtoc.style.display = "none";
  howtof.style.display = "none";
}

// fungsi yang mengubah nilai isFahrenheit menjadi false ketika kita click tombol reverse dan membalik proses konversi
function reverse() {
  if (isFahrenheit) {
    isFahrenheit = false;
    reset();
    document.getElementById("input").innerHTML = "Fahrenheit (°F) :";
    document.getElementById("result").innerHTML = "Celcius (°C) :";
  } else {
    isFahrenheit = true;
    reset();
    document.getElementById("input").innerHTML = "Celcius (°C) :";
    document.getElementById("result").innerHTML = "Fahrenheit (°F) :";
  }
}

// fungsi yang di panggil ketika kita klik tombol convert
function convert() {
  if (inputfield.value == "") {
    // menghindari input kosong
    reset();
    hasilfield.value = "Invalid input value";
  } else {
    if (isFahrenheit) {
      covertFahrenheit();
    } else {
      covertCelcius();
    }
  }
}
