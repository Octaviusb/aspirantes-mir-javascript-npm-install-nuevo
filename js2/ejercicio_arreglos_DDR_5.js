function maxIndex() {
	var num = new Number();
	var cantidad = new Number();
	var a1 = new Number();
	var numerobuscado = new Number();
	var i = new Number();
	var encontrado = new Boolean();
	input ("cuantos numeros desea ingresar; ",'<BR/>');
	num = Number(prompt());
	cantidad = 5;
	var a1 = new Array(cantidad);
	a1[0] = 2;
	a1[1] = 5;
	a1[2] = 4;
	a1[3] = 3;
	a1[4] = 2;
	input ("Inserta elemento a buscar",'<BR/>');
	numerobuscado = Number(prompt());
	encontrado = false;
	for (i=0;i<=cantidad-1;i++) {
		if (numerobuscado==a1[i]) {
			document.write("Se ha encontrado el numero ",numerobuscado," en la posicion ",i,'<BR/>');
			encontrado = true;
		}
	}
	if (!encontrado) {
		input ("No se ha encontrado ningun elemento",'<BR/>');
	}
}

