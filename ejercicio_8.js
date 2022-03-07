	var nota = new Number();
	var nombre = new String();
    let refuerzo, reprobado = new String();
	nombre = prompt("Ingrese el nombre del estudiante");
	nota = Number(prompt("Ingrese la nota del estudiante"));
		
		if (nota>=0 && nota<=2) {
		document.write("El estudiante ",nombre," necesita Reforzamiento",'<BR/>');
        alert(nombre,'<BR/>');
        alert(" necesita Reforzamiento",'<BR/>');
		} else {
	    if (nota>=3 && nota<=4) {
		alert("El estudiante ",nombre," esta Desaprobado",'<BR/>');
        alert(nombre,'<BR/>');
        alert(" esta Desaprobado",'<BR/>');
		} else {
		if (nota>=5 && nota<=7) {
		alert("El estudiante ",nombre," esta aprobado",'<BR/>');
        alert(nombre,'<BR/>');
        alert(" esta aprobado",'<BR/>');
		} else {
		if (nota>=8 && nota<=9) {
		alert("El estudiante ",nombre," tiene un promedio EXCELENTE",'<BR/>');
        alert(nombre, '<BR/>');
        alert(" tiene un promedio EXCELENTE",'<BR/>');
		} else {
		if (nota==10) {
		alert("El estudiante ",nombre," esta BECADO",'<BR/>');
        alert(nombre,'<BR/>');
        alert(" esta BECADO",'<BR/>');
		} else {
		alert("Nota no valida volver a ingresar",'<BR/>');
}}}}}

			