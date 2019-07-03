/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numuno; 
    var numdos; 
    var resultados; 
    numuno = document.getElementById("numeroUno").value; 
    numdos = document.getElementById("numeroDos").value; 
    numuno = parseInt(numuno); 
    numdos = parseInt(numdos);
    resultados = numuno + numdos; 

    alert ("El resultado es: " + resultados); 
}

function restar()
{
    var numuno; 
    var numdos; 
    var resultados; 
    numuno = document.getElementById("numeroUno").value; 
    numdos = document.getElementById("numeroDos").value; 
    numuno = parseInt(numuno); 
    numdos = parseInt(numdos);
    resultados = numuno - numdos; 

    alert ("El resultado es: " + resultados); 
}

function multiplicar()
{ 
    var numuno; 
    var numdos; 
    var resultados; 
    numuno = document.getElementById("numeroUno").value; 
    numdos = document.getElementById("numeroDos").value; 
    numuno = parseInt(numuno); 
    numdos = parseInt(numdos);
    resultados = numuno * numdos; 

    alert ("El resultado es: " + resultados); 
}

function dividir()
{
    var numuno; 
    var numdos; 
    var resultados; 
    numuno = document.getElementById("numeroUno").value; 
    numdos = document.getElementById("numeroDos").value; 
    numuno = parseInt(numuno); 
    numdos = parseInt(numdos);
    resultados = numuno / numdos; 

    alert ("El resultado es: " + resultados); 
}

