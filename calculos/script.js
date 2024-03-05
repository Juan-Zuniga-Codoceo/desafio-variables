function calcular() {
    
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    var num4 = parseFloat(document.getElementById("num4").value);
    var num5 = parseFloat(document.getElementById("num5").value);


    var suma = num1 + num2 + num3 + num4 + num5;

    var promedio = suma / 5;


    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "La suma de los números es: " + suma + ". El promedio de los números es: " + promedio + ".";
}
