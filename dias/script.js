function convertirDias() {
    
    var diasInput = document.getElementById("dias");
    var dias = parseInt(diasInput.value);

    var años = Math.floor(dias / 365);
    var semanas = Math.floor((dias % 365) / 7);
    var diasRestantes = dias % 365 % 7;

    var resultado = "";
    if (años > 0) {
        resultado += años + " año(s), ";
    }
    if (semanas > 0) {
        resultado += semanas + " semana(s), ";
    }
    if (diasRestantes > 0) {
        resultado += diasRestantes + " día(s)";
    }

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "Equivalente: " + resultado;
}
