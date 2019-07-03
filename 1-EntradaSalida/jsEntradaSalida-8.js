/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numdivid; 
    var numdivis; 
    var resultados; 
    numdivid = document.getElementById("numeroDividendo").value; 
    numdivis = document.getElementById("numeroDivisor").value; 
    numdivid = parseInt(numdivid); 
    numdivis = parseInt(numdivis);
    resultados = numdivid % numdivis; 
    alert ("El resto es: " + resultados); 	
}
