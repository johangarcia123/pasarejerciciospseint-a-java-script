var x = new Number();
var contador = new Number();
var suma = new Number();
alert("Suma de los 5 primeros numeros pares");
x = Number(prompt("Ingresar un numero"));
contador = 0;
limite = 5;

while (contador<limite) {
    if (x%2==0) {
        document.write(x,'<BR/>');
        suma = suma+x;
        contador = contador+1;
    }
    x = x+1;
}

alert("La suma de los 5 numeros pares es: ",suma,'<BR/>');
alert(suma,'<BR/>');
	