function mostrar() {
    /*
        var nota;
        var sexo;
        var contador = 0;
        var acumulador = 0;
        var promedio = 0;
    
        nota = parseInt(prompt("Ingrese una nota entre 0 y 10."));
        while (!(nota >= 0 && nota <= 10)) {
            nota = parseInt(prompt("Número incorrecto. Ingrese un número entre 0 y 10."));
        }
    
        sexo = prompt("Ingrese f ó m .");
        while (!(sexo == "f" || sexo == "m")) {
            sexo = prompt("No es sexo. Ingrese f ó m .");
        }
        
        promedio = acumulador / 5
    
        alert("El promedio de las notas totales: " + promedio);
        alert("La nota más baja y el sexo de esa persona: " +  );
        alert("La cantidad de varones que su nota haya sido mayor o igual a 6: " +  );
    */

    var contador = 0;
    var nota;
    var sexo;
    var acumulador = 0;
    var minimo;
    var sexominimo;

    while (contador < 5) {
        contador++;
        do {
            nota = parseInt(prompt("Ingrese una nota entre 0 y 10."));
        } while (isNaN(nota) || (!(nota >= 0 && nota <= 10));

        do {
            sexo = prompt("Ingrese f ó m .");
        } while (!(sexo == "f" || sexo == "m"));
    }

    acumulador = acumulador + nota

    if (contador == 1) {
        minimo = nota;
        sexominimo = sexo;
    }

    else {
        if (nota < minimo) {
            minimo = nota;
            sexominimmo = sexo;
        }
    }

    if (sexo == m && nota >= 6) {
        contador++
    }



}
