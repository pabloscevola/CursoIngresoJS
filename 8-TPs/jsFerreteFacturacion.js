/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var numuno; 
    var numdos; 
    var numtres; 
    var resultado; 
    numuno = document.getElementById("PrecioUno").value; 
    numdos = document.getElementById("PrecioDos").value; 
    numtres = document.getElementById("PrecioTres").value; 
    numuno = parseInt (numuno); 
    numdos = parseInt (numdos); 
    numtres = parseInt (numtres); 
    resultado = numuno + numdos + numtres; 
    alert (resultado); 
}
function Promedio () 
{
	var numuno; 
    var numdos; 
    var numtres; 
    var promedio; 
    var resultadouno; 
    var resultadodos; 
    numuno = document.getElementById("PrecioUno").value; 
    numdos = document.getElementById("PrecioDos").value; 
    numtres = document.getElementById("PrecioTres").value; 
    promedio = 3; 
    numuno = parseInt (numuno); 
    numdos = parseInt (numdos); 
    numtres = parseInt (numtres); 
    resultado = numuno + numdos + numtres; 
    resultadodos = resultado / promedio; 
    alert (resultadodos); 
}
function PrecioFinal () 
{
    var numuno; 
    var numdos; 
    var numtres; 
    var iva; 
    var resultado; 
    var resultadofinal; 
    numuno = document.getElementById("PrecioUno").value; 
    numdos = document.getElementById("PrecioDos").value; 
    numtres = document.getElementById("PrecioTres").value; 
    iva = 1.21; 
    numuno = parseInt (numuno); 
    numdos = parseInt (numdos); 
    numtres = parseInt (numtres); 
    resultado = numuno + numdos + numtres; 
    resultadofinal = resultado * iva; 
    alert (resultadofinal); 
}
