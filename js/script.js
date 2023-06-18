const inputfield = document.getElementById("inputField");
const hasilfield = document.getElementById("resultField");
const calc = document.getElementById("calculation");
const howtof = document.getElementById("celtofah");
const howtoc = document.getElementById("fahtocelc");
let isFahrenheit = true;

function covertFahrenheit() {
    const suhu = inputfield.value;
    const cara = calculation;
    const howto = howtof;
    const hasil = (suhu * 9/5) + 32;

    hasilfield.value = hasil;
    cara.innerHTML = "(" + suhu + " °C × 9/5) + 32 = " + hasil + " °F";
    howto.style.display = "block";
}

function covertCelcius() {
    const suhu = inputfield.value;
    const cara = calculation;
    const howto = howtoc;
    const hasil = (suhu - 32) * 5/9;

    hasilfield.value = hasil;
    cara.innerHTML = "(" + suhu + " °F − 32) × 5/9 = " + hasil + " °C";
    howto.style.display = "block";
}

function reset() {
    inputfield.value = null;
    hasilfield.value = null;
    calc.innerHTML = "";
    howtoc.style.display = "none";
    howtof.style.display = "none";
}

function reverse() {
    if (isFahrenheit) {
        isFahrenheit = false;
        reset();
        document.getElementById("input").innerHTML = "Fahrenheit (°F) :";
        document.getElementById("result").innerHTML = "Celcius (°C) :";
    } 
    else {
        isFahrenheit = true;
        reset();
        document.getElementById("input").innerHTML = "Celcius (°C) :";
        document.getElementById("result").innerHTML = "Fahrenheit (°F) :";
    }
}

function convert(){
    if (isFahrenheit) {
        covertFahrenheit();
    }
    else {
        covertCelcius();
    }
}