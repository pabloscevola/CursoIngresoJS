/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo; 
    var numuno = 1.10; 
    var resultado; 
    sueldo = document.getElementById("sueldo").value; 
    sueldo = parseInt(sueldo); 
    resultado = sueldo * numuno; 
    document.getElementById("resultado").value = resultado; 
}
