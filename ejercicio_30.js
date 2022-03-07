
	var cont, i, j;
	
	// PROGRAMA QUE MUESTRE LA SIGUIENTE SERIE GRAFICA:
	var acumulador = new String();
	var num = new Number();
	alert("ingrese un numero",'<BR/>');
	num = Number(prompt("ingrese un numero"));
	if (num<3) {
		document.write("No se puede ejecutar con numeros menores a 3 por favor vuelva a ingresar un numero",'<BR/>');
	} else {
		cont = num;
		acumulador = "";
		// bajada
		for (i=1;i<=3;i++) {
			acumulador = "";
			for (j=1;j<=cont;j++) {
				acumulador = acumulador+" * ";
			}
			cont = cont-1;
			alert(acumulador,'<BR/>');
		}
		// subida
		cont = cont+1;
		for (i=1;i<=2;i++) {
			acumulador = "";
			cont = cont+1;
			for (j=1;j<=cont;j++) {
				acumulador = acumulador+" * ";
			}
			alert(acumulador,'<BR/>');
		}
	}


