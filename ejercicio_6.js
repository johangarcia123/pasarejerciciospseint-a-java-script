
	
	// Escribir un programa que nos indique si la letra ingresada es vocal o consonante
	var letra = new String();
	document.write("Escribe la letra",'<BR/>');
	letra = prompt("Escribe la letra");
	switch (letra) {
	case "a": case "A":
		document.write("Es vocal",'<BR/>');
		break;
	case "e": case "E":
		document.write("Es vocal",'<BR/>');
		break;
	case "i": case "I":
		document.write("Es vocal",'<BR/>');
		break;
	case "o": case "O":
		document.write("Es vocal",'<BR/>');
		break;
	case "u": case "U":
		document.write("Es vocal",'<BR/>');
		break;
	default:
		alert("La letra es consonante",'<BR/>');  
	}
    alert("La letra es vocal",'<BR/>'); 


