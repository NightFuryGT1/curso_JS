//Creando un objeto literal
let personaje={
    nombre: 'Tony Stark',
    codeName:'IronMan',
    vivo: false,
    edad: 40,
    coord:{
        lat: 34.034,
        lng:-118.70
    },
    trajes: ['Mark I', 'Mark V','Hulkbuster'],
    direccion:{
        zip:'10880, 9095',
        ubicacion:'Malibu, California'
    },
    //Usando caracteres especiales para nombrar una llave
    'ultima-pelicula': 'End Game',
};
console.log(personaje);
//Accediendo a las propiedades del objeto
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad',personaje.edad);
console.log('Coors', personaje.coord);
console.log('Latitud', personaje.coord.lat);

//Ejercicio sacando el numero de trajes que tiene IronMan
console.log('Numero de trajes', personaje.trajes.length);
//obteniendo el ultimo traje
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length-1]);

const x= 'vivo';
//Preguntando si esta vivo o no
console.log('Vivo', personaje[x])

//Obteniendo la ultima pelicula
console.log('Ultima Pelicula', personaje['ultima-pelicula']);

//Mas detalles

//Borrando una propiedad del objeto
delete personaje.edad;

console.log(personaje);

personaje.casado= true;

//Trabajar objeto pero como si fuera un arreglo
const entriesPares= Object.entries(personaje);
console.log(entriesPares);

//Bloqueando modificaciones al objeto
Object.freeze(personaje);

personaje.dinero=10000000000;
console.log(personaje);

//Listado de todas las propiedades que tiene el objeto
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);
console.log({propiedades, valores});


