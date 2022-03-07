
	var el;
	// johann garcia
	// Realizar un programa en el que se ingresen los datos de un trabajador y nos de como resultado el sueldo que 
	// debe obtener en base a sus horas trabajadas.
	var nombre = new String();
	var horast = new Number();
	var hora = new Number();
	var sueldo = new Number();
	document.write("Escribir el nombre del trabajador",'<BR/>');
	nombre = prompt("Escribir el nombre del trabajador");
	document.write("Escribir las horas trabajadas",'<BR/>');
	horast = Number(prompt("Escribir las horas trabajadas"));
	document.write("Escribir cuanto vale la hora",'<BR/>');
	hora = Number(prompt("Escribir cuanto vale la hora"));
	sueldo = horast*hora;
	document.write("El sueldo del trabajador es ",'<BR/>');
	alert(sueldo,'<BR/>');


