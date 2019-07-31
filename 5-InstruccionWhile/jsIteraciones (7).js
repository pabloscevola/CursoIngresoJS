function mostrar() {
	var contador = 0;
	var acumulador = 0;
	var respuesta;
	var promedio = 0;
	var numero;
	do {
		numero = parseInt(prompt("Ingrese número:"))
		acumulador = acumulador + numero
		contador = contador + 1
		respuesta = prompt("Quiere ingresar otro número?");
	}
	while (respuesta == "si");

	promedio = acumulador / 5
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;
}//FIN DE LA FUNCIÓN