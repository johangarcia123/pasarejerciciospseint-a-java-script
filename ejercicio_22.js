
	// Abendaño Mishelle
	// REALIZAR UN PROGRAMA QUE MUESTRE LA SERIE DE FIBONACCI CON N�MEROS MENORES AL X200 ES DECIR X<200
	var a = new Number();
	var b = new Number();
	document.write("Escribir un numero",'<BR/>');
	a = Number(prompt("Escribir un numero"));
	b = a+1;
	while (b<200) {
		alert(a,'<BR/>');
		alert(b,'<BR/>');
		a = a+b;
		b = b+a;
	}


