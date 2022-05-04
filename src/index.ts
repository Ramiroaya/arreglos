let btnEnviar1 = <HTMLButtonElement>document.getElementById("btnEnviar1");

btnEnviar1.addEventListener("click", () => {
  let tamañoArreglo = Number(prompt("Ingrese el tamaño de los arreglos"));
  while (tamañoArreglo >= 10) {
    alert("Ingrese un numero menor");
    tamañoArreglo = Number(prompt("Ingrese el tamaño de los arreglos"));
  }
  let arreglo1: number[] = new Array(tamañoArreglo);
  let arreglo2: number[] = new Array(tamañoArreglo);
  let arreglo3: number[] = new Array(tamañoArreglo);
  let arregloSuma: number[] = new Array(tamañoArreglo);
  let indice: number;
  for (indice = 0; indice < tamañoArreglo; indice++) {
    arreglo1[indice] = Number(
      prompt("Ingrese el valor en el indice: " + indice + " del arreglo1")
    );
  }
  for (indice = 0; indice < tamañoArreglo; indice++) {
    arreglo2[indice] = Number(
      prompt("Ingrese el valor en el indice: " + indice + " del arreglo2")
    );
  }
  for (indice = 0; indice < tamañoArreglo; indice++) {
    arreglo3[indice] = Number(
      prompt("Ingrese el valor en el indice: " + indice + " del arreglo3")
    );
  }
  for (indice = 0; indice < tamañoArreglo; indice++) {
    arregloSuma[indice] =
      arreglo1[indice] + arreglo2[indice] + arreglo3[indice];
  }
  for (indice = 0; indice < tamañoArreglo; indice++) {
    console.log(
      "La suma del indice" + indice + "  es:  " + arregloSuma[indice]
    );
  }
});
