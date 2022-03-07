
	var nota1, nota2, nota3, promedio;
	// Abendaño Mishelle
	// Hacer un programa para calcular el promedio de 3 notas, si el promedio es menor a 6.95 se lo considera REPROBADO caso contrario Aprobado.
	var nota = new Number();
	document.write("Escribe tu primera nota",'<BR/>');
	nota1 = Number(prompt("Escribe tu primera nota"));
	document.write("Escribe tu segunda nota",'<BR/>');
	nota2 = Number(prompt("Escribe tu segunda nota"));
	document.write("Escribe tu tercera nota",'<BR/>');
	nota3 = Number(prompt("Escribe tu tercera nota"));
	promedio = (nota1+nota2+nota3)/3;
	if (promedio>=6.95) {
		alert("Esta aprobado",'<BR/>');
	} else {
		alert("Esta reprobado",'<BR/>');
	}


