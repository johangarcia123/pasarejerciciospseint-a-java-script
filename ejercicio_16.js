
	// Abendaño Mishelle
	// Ingresar un n�mero y mostrar la suma de todos los pares e impares desde 0 
	var pares = new Number();
	var impares = new Number();
	var inicio = new Number();
	var fi = new Number();
	pares = 0;
	impares = 0;
	document.write("Ingrese el numero inical",'<BR/>');
	inicio = Number(prompt("Ingrese el numero inical"));
	document.write("Ingrese el numero final",'<BR/>');
	fi = Number(prompt("Ingrese el numero final"));
	while ((inicio<fi)) {
		if (((inicio%2)==0)) {
			pares = pares+inicio;
		} else {
			impares = impares+inicio;
		}
		inicio = inicio+1;
	}
	alert("la suma de par es",'<BR/>');
	alert(pares,'<BR/>');
	alert("la suma de un impar es",'<BR/>');
	alert(impares,'<BR/>');


