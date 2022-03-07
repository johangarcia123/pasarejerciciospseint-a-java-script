    
	// REALIZAR UN PROGRAMA QUE MUESTRE LA SIGUIENTE SERIE NUMERICA GRAFICA:
    var i, j;
    var num = new Number();
    num = Number(prompt("Ingrese un numero"));

    for (i=num;i>=1;i--) {
        for (j=1;j<=i;j++) {
        alert(j);
        }
        alert("",'<BR/>');
    }
