function mostrar() {

    var letra;
    var numero;
    var contadorpos = 0;
    var contadorneg = 0;
    var acumulador = 0;
    var contadorpar = 0;
    var contadorimpar = 0;
    var contadorceros = 0;
    var bandera;
    var minimo;
    var maximo;
    var respuesta = "si";
    var letramaxima;
    var letraminima;

    while (prompt("Ingrese un número: ")) {
        letra = prompt("Ingrese una letra: ");
        do {
            numero = parseInt(prompt("Ingrese un número: "));
        } while (isNaN(numero) || numero < 100 || numero < 100);
    /*    do {
            respuesta = prompt("Quiere continuar?")
        } while (respuesta == "si");*/
    }

        if (numero % 2 == 0) { //a
            contadorpar++;
        }
        else if (numero == 0) { //c
            contadorceros++;
        }
        else { //b
            contadorimpar++;
        }

        if (numero > 0) {
            contadorpor++;
            acumulador += numero;
        }
        else if (numero < 0) {
            contadorneg++;
            acumulador += numero;
        }

        if (bandera) {
            bandera = false;
            minimo = numero;
            maximo = numero;
            letramaxima = letra;
            letraminima = letra;
        }
        else {
            if (numero > maximo) {
                maximo = numero;
                letramaxima = letra;
            }
        }



        document.write("La cantidad de números pares: " + contadorpar);
        document.write("La cantidad de números impares: " + contadorimpar);
        document.write("La cantidad de ceros: " + contadorceros);
/*        
        document.write("El promedio de todos los números positivos ingresados: " +  );
        document.write("La suma de todos los números negativos: " +  );
        document.write("El número y la letra del máximo y el mínimo: " +  );
*/

        /* OTRO EJERCIDIO
        Realizar el algoritmo que pida los datos necesarios de un triángulo equilatero por promt. 
        Validar que sea un triángulo equilatero y calcular el perímetro. 

        var lado; 
        var perimetro; 
        var superficie; 

        do {
            lado = parseInt(prompt(" "));
        } while (isNaN(lado) || lado < 1);

        perimetro = lado * 3; 

        superficie = lado * lado / 2; 

        */

}