function pedirNumeros() {
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2 = parseFloat(prompt("Ingrese el segundo número:"));

    var suma = num1 + num2;
    var resta = num1 - num2;
    var division = num1 / num2;
    var multiplicacion = num1 * num2;
    var modulo = num1 % num2;

    var resultadosHTML = "<p>La suma es: " + suma + "</p>" +
                         "<p>La resta es: " + resta + "</p>" +
                         "<p>La división es: " + division + "</p>" +
                         "<p>La multiplicación es: " + multiplicacion + "</p>" +
                         "<p>El módulo es: " + modulo + "</p>";

    document.getElementById("resultados").innerHTML = resultadosHTML;
}
