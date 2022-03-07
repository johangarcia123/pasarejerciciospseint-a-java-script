
	var pi;
	
	// Hacer un programa que muestre el �rea y per�metro de un c�rculo.
	var radio = new Number();
	var perimetro = new Number();
	var area = new Number();
	document.write("Escibre el radio del circulo: ",'<BR/>');
	radio = Number(prompt("Escibre el radio del circulo"));
	perimetro = (2*Math.PI)*radio;
	area = (perimetro*radio)/2;
	alert("El perimetro del circulo es",'<BR/>');
	alert(perimetro,'<BR/>');
	alert("El Area del circulo es",'<BR/>');
	alert(area,'<BR/>');


