
    var tiempollamada, total;
    var clave = new Number();

    alert("(1) - 0.15$ - Estados Unidos ",'<BR/>');
    alert("(2) - 0.14$ -Canada",'<BR/>');
    alert("(3) - 0.25$ -España",'<BR/>');
    alert("(4) - 0.05$ -Colombia",'<BR/>');
    alert("(5) - 0.10$ -Venezuela",'<BR/>');
    alert("(6) - 0.11$ -Mexico",'<BR/>');
    alert("(7) - 0.12$ -Argentina",'<BR/>');
    alert("(8) - 0.08$ -Panama",'<BR/>');
    
    clave = Number(prompt("Escoja la clave hacia a donde llama:"));

    switch (clave) {
    case 1:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.15*tiempollamada;
        alert("Su total a pagar es de: ",total,"$",'<BR/>');
        alert(total,'<BR/>');
        break;
    case 2:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.14*tiempollamada;
        alert("Su total a pagar es de: ",total,"$",'<BR/>');
        alert(total,'<BR/>');
        break;
    case 3:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.25*tiempollamada;
        alert("Su total a pagar es de: ",total,"$",'<BR/>');
        alert(total,'<BR/>');
        break;
    case 4:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.05*tiempollamada;
        alert("Su total a pagar es de: ",total,"$",'<BR/>');
        alert(total,'<BR/>');
        break;
    case 5:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.10*tiempollamada;
        alert("Su total a pagar es de: ",total,"$",'<BR/>');
        alert(total,'<BR/>');
        break;
    case 6:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.11*tiempollamada;
        alert("Su total a pagar es de: ",total,"$",'<BR/>');
        alert(total,'<BR/>');
        break;
    case 7:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.12*tiempollamada;
        alert("Su total a pagar es de: ",total,"$",'<BR/>');
        alert(total,'<BR/>');
        break;
    case 8:
        tiempollamada = Number(prompt("¿Cuanto duro la llamada?"));
        total = 0.08*tiempollamada;
        alert("Su total a pagar es de: ",total,"$",'<BR/>');
        alert(total,'<BR/>');
        break;
    default:
        alert("Ingreso la clave incorrecta por favor repetir.",'<BR/>');
    }