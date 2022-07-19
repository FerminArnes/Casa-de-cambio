function convertir() {
    var valore = parseInt(document.getElementById("valor").value);
    var resultado = 0;
    var dollar = 301;
    var euro = 310;
    var real = 57;
    var libra = 275.45;
    if (document.getElementById("uno").checked) {
        resultado = valore / dollar;
        alert("El cambio de Pesos a Dolares es: $" + resultado.toFixed(0));
    }
    else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        alert("El cambio de Pesos a Euro es: €" + resultado.toFixed(0));
    }
    else if (document.getElementById("tres").checked) {
        resultado = valore / real;
        alert("El cambio de Pesos a Real es: R$" + resultado.toFixed(0));
    }
    else if (document.getElementById("cuatro").checked) {
        resultado = valore / libra;
        alert("El cambio de Pesos a Libra Esterlina es: £" + resultado.toFixed(0));
    }
    else {
        alert("Tienes que completar todos los requerimientos")
    }
}