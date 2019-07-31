function mostrar() {
	/*var contador = 0;
	var acumulador = 0;
	var promedio = 0;
	var numero;
	while (contador < 5) {
		numero = parseInt(prompt("Ingrese numero"))
		acumulador = acumulador + numero
		contador = contador + 1
	}*/

	var contador;
	var acumulador = 0;
	var promedio = 0;
	var numero;
	for(contador=0;contador<5;contador++){
		numero = parseInt(prompt("Ingrese numero"))
		acumulador = acumulador + numero
	}

	promedio = acumulador / 5
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN