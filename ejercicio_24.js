
	//Mishell Abendaño,
	// DIGITALIZAR UN ALGORITMO QUE VIZUALICE LA CUENTA DE LOS
	// N�MEROS QUE SON M�LTIPLOS DE 2 O 3 QUE HAY ENTRE 1 Y 100
	var x = new Number();
	var a = new Number();
	var b = new Number();
	x = 1;
	a = 0;
	b = 0;
	while (x<=100) {
		if (x%2==0) {
			alert("Numero multiplo del 2",'<BR/>');
			alert(x,'<BR/>');
			a = a+1;
		}
		if (x%3==0) {
			alert("Numero multiplo del 3",'<BR/>');
			alert(x,'<BR/>');
			b = b+1;
		}
		x = x+1;
	}
	alert("Numeros multiplos del 2",'<BR/>');
	alert(a,'<BR/>');
	alert("numeros multiplos del 3",'<BR/>');
	alert(b,'<BR/>');


