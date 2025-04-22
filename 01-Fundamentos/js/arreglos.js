//Creando arreglo como una constante con new Array de 10 elementos
//  const arr = new Array(10);
//  console.log(arr);

//Creando arreglos vacios

// const arr= [];
// console.log(arr);

let videojuegos = ['Mario 3','Megaman','Chronoi Trigger'];
console.log({videojuegos});

//Imprimiendo un valor especifico del arreglo
console.log(videojuegos[0]);

let arregloCosas=[
    true,
    123,
    'Fernando',
    1+2,
    function(){},
    ()=>{},
    {a: 1},
    ['x', 'Megaman','Zero', 'Dr.Light', 
        ['Dr.Willy','Woodman']
    ]
];
//Obteniendo informacion dentro de un arreglo dentro de otro arreglo
console.log(arregloCosas[7][4][1]);



