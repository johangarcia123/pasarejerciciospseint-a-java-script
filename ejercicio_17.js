
	var notas = new Number();
	var suma = new Number();
	var prom = new Number();
	var n = new Number();
	var acum = new Number();
	acum = 1;
	suma = 0;
	document.write("Ingrese el numero de notas",'<BR/>');
	notas = Number(prompt("Ingrese el numero de notas"));
	while (acum<=notas) {
		document.write("Nota numero:",acum,'<BR/>');
		n = Number(prompt("Ingrese las notas"));
		suma = suma+n;
		acum = acum+1;
	}
	prom = suma/notas;
	alert("Su promedio es : ",prom,'<BR/>');
    alert(prom,'<BR/>');
