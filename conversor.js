function calcularCelsius() {
    let f = document.getElementById("fahrenheit").value;
    let c = 5 * ((f-32) / 9)

    document.getElementById("celsius").value = c.toFixed(2);

}

function calcularFahrenheit() {
    let c = document.getElementById("celsius").value;
    let f = (9 * (c/5)) + 32;

    document.getElementById("fahrenheit").value = f.toFixed(2);
 }