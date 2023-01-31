function viajar (destino) {
    if (destino === 'Brasil') {
    console.log('gire a la IZQUIERDA');
} else if (destino === 'Argentina') {
    console.log('gire a la DERECHA');
}  else {
    console.log('Tas perdido bro');
} 
}

viajar('Brasil');
viajar('Argentina');

viajar('chile');

function PuedeManejar(edad) {
    if (edad >= 18) {
        console.log('circule nomas');
    } if (edad < 18) {
        console.log('donde vas capo?');
    }
}

PuedeManejar(17)