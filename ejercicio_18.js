
	var i, nmayor, num;
	document.write("Ingrese 10 numeros",'<BR/>');
	nmayor = 0;
	for (i=1;i<=10;i++) {
		num = prompt("Ingrese 10 numeros");
		if (nmayor<num) {
			nmayor = num;
		}
	}
	document.write("El n�mero mayor de los 10 digitos es: ",nmayor,'<BR/>');
    alert(nmayor,'<BR/>');


