// var listaDeCompras = [];
// listaDeCompras[3]='tomates';
// listaDeCompras[1]='lechuga';

//  console.log(listaDeCompras)

var colores = ['amarillo', 'azul'];
colores.push('rojo');
colores.unshift('verde');
// colores.pop();
// colores.shift();

console.log(colores);

// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);

// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// MAP
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);