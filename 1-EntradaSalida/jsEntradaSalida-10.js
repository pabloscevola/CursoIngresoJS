/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe; 
    var numuno = 0.75; 
    var resultado; 
    importe = document.getElementById("importe").value; 
    importe = parseInt(importe); 
    resultado = importe * numuno; 
    document.getElementById("resultado").value = resultado; 
}
