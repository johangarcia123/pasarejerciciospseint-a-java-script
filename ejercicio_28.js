
	var d1, d2, d3, num, r1;
	
	// REALIZAR UN PROGRAMA QUE VERIFIQUE QUE UN NUMERO CUALQUIERA ES PALINDROMO O NO.
	document.write("COMPROBAR SI ES PALINDROMO",'<BR/>');
	document.write(" ",'<BR/>');
	document.write("Ingrese un numero");
	num = Number(prompt("Ingrese un numero"));
	d1 = (num-(num%100))/100;
	r1 = num%100;
	d2 = (r1-(r1%10))/10;
	d3 = r1%10;
	document.write(" ",'<BR/>');
	if (num==((d3*100)+(d2*10)+d1)) {
		alert("El numero es palindromo",'<BR/>');
	} else {
		alert("El numero NO ES palindromo",'<BR/>');
	}

