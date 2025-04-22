//Propiedades y metodos basicos de un arreglo
//Los metodos son funciones que vienen internas de los arreglos
//Las propiedades son variables que vienen dentro del arreglo

let juegos = ['Zelda','Mario','Metroid','Genshin Impact'];

//Obteniendo el largo de un arreglo
console.log('Largo:', juegos.length);

//Obteniendo un elemento por operacion matematica
let primero= juegos[2-2];
//Obteniendo el ultimo elemento del arreglo
let ultimo = juegos[juegos.length - 1];

console.log({primero,ultimo});

//forEach ejecuta una funcion por cada uno de los elementos
//Imprimiendo los elementos por cada uno de los elementos del arreglo
juegos.forEach((elemento,indice,arr) => {
    console.log(elemento,indice,arr);
});

//Agregando un elemento al final del arreglo
let nuevaLongitud=juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

//Insertando un elemento al inicio del arreglo
nuevaLongitud=juegos.unshift('Fire Emblem');
console.log({nuevaLongitud,juegos});

//Eliminar el ultimo elemento del arreglo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

//Borrando un elemento a partir de una posicion en especifico
let pos = 1;
let juegosBorrados= juegos.splice(pos ,2);
console.log({juegosBorrados,juegos});

//Obteniendo en que poscision se encuentra un elemento en especifico
let genshinIndex= juegos.indexOf('Genshin Impact');
console.log({genshinIndex});

