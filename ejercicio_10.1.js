
var a, b, d, fecha, m;

	alert("Ingrese cualquier Fecha con formato: dd/mm/aaaa",'<BR/>');
	fecha = prompt("Ingrese cualquier Fecha con formato: dd/mm/aaaa");
	if (fecha.length>=11) {
		alert("La fecha ingresada es incorrecta",'<BR/>');
	} else {
		d = fecha.substring(0,2);
		m = fecha.substring(3,5);
		a = fecha.substring(6,10);
		document.write("Dia: ",d,'<BR/>');
		document.write("Mes: ",m,'<BR/>');
		document.write("Año: ",a,'<BR/>');
		// año bisiesto
		if ((1582<=a && a<=3000) && (m>0 && m<=12) && (d>=1 && d<=31)) {
			if ((a%4)==0 && (a%100)!=0 || (a%400)==0) {
				alert("Es año Bisiesto",'<BR/>');
				b = 1;
			} else {
				alert("No es año Bisiesto",'<BR/>');
				b = 1;
			}
			if (b==1) {
				switch (m) {
				case 1: case 3: case 5: case 7: case 8: case 10: case 12:
					if (d>=1 && d<=31) {
						alert("Fecha correcta",'<BR/>');
					} else {
						alert("Fecha Incorrecta",'<BR/>');
					}
					break;
				case 2:
					if (d>=1 && d<=28) {
						alert("Fecha correcta",'<BR/>');
					} else {
						alert("Fecha Incorrecta",'<BR/>');
					}
					break;
				case 4: case 6: case 9: case 11:
					if (d>=1 && d<=30) {
						alert("Fecha correcta",'<BR/>');
					} else {
						alert("Fecha Incorrecta",'<BR/>');
					}
					break;
				}
			}
		}
	}
