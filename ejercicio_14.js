
	// Abendaño Mishelle
	// Ejercicio 14 Se pide ingresar el sueldo de un trabajador y su categoria, dependiendo de la 
	// categoria se le dara una bonificacion en el neto a pagar.
	// Bonificacion por categor�a: A = 10%; B = 20%; C = 30%; D = 50%
	var sueldo = new Number();
	var bonificacion = new Number();
	var categoria = new String();
	var total = new Number();
	alert("Colocar el sueldo trabajador",'<BR/>');
	sueldo = Number(prompt("Colocar el sueldo trabajador"));
	alert("Coloque la categoria A,B,C,D",'<BR/>');
	categoria = prompt();
	switch (categoria) {
	case "a": case "A":
		total = (sueldo*0.10)+sueldo;
		alert("Bonificacion incluido el sueldo es de",'<BR/>');
		alert(total,'<BR/>');
		break;
	case "b": case "B":
		total = (sueldo*0.20)+sueldo;
		alert("Bonificacion incluido el sueldo es de",'<BR/>');
		alert(total,'<BR/>');
		break;
	case "c": case "C":
		total = (sueldo*0.30)+sueldo;
		alert("Bonificacion incluido el sueldo es de",'<BR/>');
		alert(total,'<BR/>');
		break;
	case "d": case "D":
		total = (sueldo*0.50)+sueldo;
		alert("Bonificacion incluido el sueldo es de",'<BR/>');
		alert(total,'<BR/>');
		break;
	default:
		document.write("Ingrese de nuevo la categoria ",'<BR/>');
	}

