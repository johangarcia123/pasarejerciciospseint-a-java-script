var tiempollamada, total;
var clave = new Number();
alert("[1]   Estados Unidos - $.13",'<BR/>');
alert("[2]   Canada - $0.11",'<BR/>');
alert("[5]   America del Sur - $0.52",'<BR/>');
alert("[6]   America Central - $0.99",'<BR/>');
alert("[8]   Mexico - $0.17",'<BR/>');
alert("[9]   Europa - $0.17",'<BR/>');
alert("[10]  Asia - $0.20",'<BR/>');
alert("[15]  Africa - $0.59",'<BR/>');
alert("[20]  Oceania - $0.28",'<BR/>');

clave = Number(prompt("Escoja la clave del destino hacia a donde desea llamar:"));
switch (clave) {
case 1:
    tiempollamada = Number(prompt("¿Cuanto fue la duracion de la llamada en minutos?"));
    total = .13*tiempollamada;
    document.write("El costo de la llamada es de: ",total,"$",'<BR/>');
    alert(total,'<BR/>');
    break;
case 2:
    tiempollamada = Number(prompt("¿Cuanto fue la duracion de la llamada en minutos?"));
    total = .11*tiempollamada;
    document.write("El costo de la llamada es de: ",total,"$",'<BR/>');
    alert(total,'<BR/>');
    break;
case 5:
    tiempollamada = Number(prompt("¿Cuanto fue la duracion de la llamada en minutos?"));
    total = .52*tiempollamada;
    document.write("El costo de la llamada es de: ",total,"$",'<BR/>');
    alert(total,'<BR/>');
    break;
case 6:
    tiempollamada = Number(prompt("¿Cuanto fue la duracion de la llamada en minutos?"));
    total = .99*tiempollamada;
    document.write("El costo de la llamada es de: ",total,"$",'<BR/>');
    alert(total,'<BR/>');
    break;
case 8:
    tiempollamada = Number(prompt("¿Cuanto fue la duracion de la llamada en minutos?"));
    total = .17*tiempollamada;
    document.write("El costo de la llamada es de: ",total,"$",'<BR/>');
    alert(total,'<BR/>');
    break;
case 9:
    tiempollamada = Number(prompt("¿Cuanto fue la duracion de la llamada en minutos?"));
    total = .17*tiempollamada;
    document.write("El costo de la llamada es de: ",total,"$",'<BR/>');
    alert(total,'<BR/>');
    break;
case 10:
    tiempollamada = Number(prompt("¿Cuanto fue la duracion de la llamada en minutos?"));
    total = .20*tiempollamada;
    document.write("El costo de la llamada es de: ",total,"$",'<BR/>');
    alert(total,'<BR/>');
    break;
case 15:
    tiempollamada = Number(prompt("¿Cuanto fue la duracion de la llamada en minutos?"));
    total = .59*tiempollamada;
    document.write("El costo de la llamada es de: ",total,"$",'<BR/>');
    alert(total,'<BR/>');
    break;
case 20:
    tiempollamada = Number(prompt("¿Cuanto fue la duracion de la llamada en minutos?"));
    total = .28*tiempollamada;
    document.write("El costo de la llamada es de: ",total,"$",'<BR/>');
    alert(total,'<BR/>');
    break;
default:
    document.write("Ingreso la clave incorrecta por favor repetir.",'<BR/>');
}


