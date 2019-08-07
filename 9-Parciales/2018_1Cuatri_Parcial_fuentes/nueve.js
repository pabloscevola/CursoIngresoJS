function mostrar() {
    var marca;
    var peso;
    var temperatura;
    var contarpar;
    var bandera;
    var maximo;
    var marcamaximo;
    var marca;
    var contador;
    var acumuladorpeso;

    while (prompt("Ingrese una marca: ")) {
        do {
            peso = parseInt(prompt("Ingrese el peso: "));
        } while (isNaN(peso) || peso > 100 || numero > 1);

    }

    if (temperatura % 2 == 0) {
        contarpar++;
    }
    if (bandera) {
        maximo = peso;
        marcamaximo = marca;
    }
    else {
        if (peso > maximo) {
            maximo = peso;
            marcamaximo = marca;
        }
    }

    if (temperatura < 0) {
        contador++;
    }

    acumuladorpeso += peso;
    contador++;




}