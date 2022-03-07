
	var a, b, c, n1, n2, n3;
	document.write("Ingrese 3 numeros para ordenarlos",'<BR/>');
	document.write("Numero 1:",'<BR/>');
	n1 = prompt("Numero 1");
	document.write("Numero 2:",'<BR/>');
	n2 = prompt("Numero 2");
	document.write("Numero 3:",'<BR/>');
	n3 = prompt("Numero 3");
	if ((n1>n2) && (n1>n3)) {
		a = n1;
		if (n2>n3) {
			b = n2;
			c = n3;
		} else {
			b = n3;
			c = n2;
		}
	} else {
		if (n2>n3) {
			a = n2;
			if (n1>n3) {
				b = n1;
				c = n3;
			} else {
				b = n3;
				c = n1;
			}
		} else {
			a = n3;
			if (n1>n2) {
				b = n1;
				c = n2;
			} else {
				b = n2;
				c = n1;
			}
		}
	}
	alert("Ascendente : ",c,", ",b,", ",a,'<BR/>');
    alert(c,'<BR/>');
    alert(b,'<BR/>');
    alert(a,'<BR/>');
	alert("Descendente : ",a,", ",b,", ",c,'<BR/>');
    alert(a,'<BR/>');
    alert(b,'<BR/>');
    alert(c,'<BR/>');

