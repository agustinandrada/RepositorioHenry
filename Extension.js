class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;

    }
    saludar(){
        console.log('Hola mi nombre es '+ this.nombre + ' tengo '+ this.edad)
    }
}

class Programador extends Persona{
    constructor(nombre, edad, añosDeExperiencia){
        super(nombre, edad);
        this.añosDeExperiencia = añosDeExperiencia
    }
    codear (){
        console.log('Soy '+ this.nombre +' codeo desde hace '+ this.añosDeExperiencia + ' y tengo '+ this.edad + ' años ');
    }
}

var martin = new Persona('Martin', 25);
martin.saludar();

var Pablo = new Programador('Pablo', 27, 4)
Pablo.codear();