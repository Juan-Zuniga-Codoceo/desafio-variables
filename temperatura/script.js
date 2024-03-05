function convertirTemperatura() {

    var celsiusInput = document.getElementById("celsius");
    var celsius = parseFloat(celsiusInput.value);


    var kelvin = celsius + 273.15;
    var fahrenheit = (celsius * 9/5) + 32;


    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = "La temperatura en grados Kelvin es: " + kelvin.toFixed(2) + " K<br>" +
                              "La temperatura en grados Fahrenheit es: " + fahrenheit.toFixed(2) + " °F";
}
