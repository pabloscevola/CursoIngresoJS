/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

