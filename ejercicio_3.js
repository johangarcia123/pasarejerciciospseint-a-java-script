
	var descuento;
	// Abenda�o Mishelle
	// Realizar un programa en el que se calcule la cuenta a pagar de un producto en base a su precio 
	// y cantidad despu�s sacar el 10% de descuento para el total a pagar.
	var producto = new String();
	var costo = new Number();
	var total = new Number();
	var cantidad = new Number();
	var subtotal = new Number();
	document.write("Escribe el nombre del producto",'<BR/>');
	producto = prompt("Escribe el nombre del producto");
	document.write("costo del producto",'<BR/>');
	costo = Number(prompt("costo del producto"));
	document.write("Escribir la cantidad de productos",'<BR/>');
	cantidad = Number(prompt("Escribir la cantidad de productos"));
	subtotal = costo*cantidad;
	document.write("El subtotal es de",'<BR/>');
	document.write(subtotal,'<BR/>');
	descuento = subtotal*0.1;
	document.write("Escribir su descuento es de",'<BR/>');
	document.write(descuento,'<BR/>');
	total = subtotal-descuento;
	document.write("total por la compra",'<BR/>');
	alert(total,'<BR/>');

