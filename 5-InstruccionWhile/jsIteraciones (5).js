function mostrar() {
    var sexo = prompt("Ingrese f ó m .");
    while (!(sexo == "f" || sexo == "m")) {
        sexo = prompt("No es sexo. Ingrese f ó m .");
    }
    document.getElementById("Sexo").value = sexo;
}//FIN DE LA FUNCIÓN