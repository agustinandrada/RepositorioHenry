// adicción
function mayorYMenorYPar(num) {
    if (num > 5 && num < 10 && num % 2 === 0)
        console.log(true);
    else console.log(false);
}

mayorYMenorYPar(7);
mayorYMenorYPar(8);

//operador or
function operadorOr(str) {
    if (str === 'Henry' || str.length < 2) console.log(true);
    else console.log(false);

}

operadorOr('H');
operadorOr('Henry');
operadorOr('asdasd');

//negación
function negación(permiso) {
    if (!permiso) console.log('tiene permiso');

}

negación(true);
negación(false);

function condicionCompleja(num){
    if(num>9 && num % 2 === 0 || num === 3) console.log(true);
    else console.log(false);
}

condicionCompleja(3);
condicionCompleja(5);
condicionCompleja(10);
