var n = parseFloat(prompt("Cantidad de notas"));
var average;
var sum=0;
for (let i=1;i<=n;i++) {
    var nota= parseInt(prompt("Ingrese las nota "+ i));
    sum=sum+nota
}
average=sum/n;

document.write("Promedio: "+ average,'<BR/>')
alert(average,'<BR/>');