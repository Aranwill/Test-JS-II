// No cambies los nombres de las funciones

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:

  // return nombre[0].toUpperCase() + nombre.slice(1);

  return nombre.charAt(0).toUpperCase() + nombre.slice(1);

}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  return cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:

  return cb(n1, n2);
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:

  // let suma = 0;
  // for (var i = 0; i < numeros.length; i++) {
  //   suma = suma + numeros[i];
  // }cb(suma);
  
  var sumReduce = numeros.reduce(function(ac,ele){
    return ac + ele;
  });
  cb(sumReduce);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  return cb = array.forEach(cb);

}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:

  // let newArray = array.map(function(ele){
  //   return cb(ele);
  // });
  // return newArray;

  let arrayNuevo = array.map(cb);
  return arrayNuevo;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

  let newArray = array.filter((str) => str[0] === "a" );
  return newArray;
}

// No modificar nada debajo de esta línea, sino no correrán los test!
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
