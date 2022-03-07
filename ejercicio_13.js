
	
	// Ingresar tres numeros enteros y mostrar el mayor de ellos.
	var num = new Number();
	var contador = new Number();
	var nummay = new Number();
	nummay = 0;
	num = 0;
	document.write("Escriba 3 numeros para mostrarle cual es el mayor",'<BR/>');
	for (contador=1;contador<=3;contador++) {
		num = Number(prompt("Escriba 3 numeros para mostrarle cual es el mayor"));
		if (num>nummay) {
			nummay = num;
		} else {
			num = 0;
		}
	}
	alert("El numero de mayor es",'<BR/>');
	alert(nummay,'<BR/>');


