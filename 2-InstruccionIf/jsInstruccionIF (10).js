function mostrar() {
	var numero
	numero = Math.floor(Math.random() * (11 - 1)) + 1;
	if (numero >= 9) {
		alert("Excelente")
	}
	else if (numero >=4) {
		alert("Aprobó")
	}
	else {
		alert("Vamos, la proxima se puede")
	}
}//FIN DE LA FUNCIÓN