function Persona(nombre, apellidos){
    this.nombre=nombre;
    this.apellidos = apellidos;
    
    
}
//podemos crear metodos en el objetos a traves de protoype
Persona.prototype.getNombre =function(){
    return `${this.nombre} ${this.apellidos}`;
    }
//pero podemos crear propiedades tambien
Persona.prototype.cosas = 'cosas';
let batman = new Persona ('Bruce', 'Batman');

console.log(Persona.prototype);
console.log(batman.getNombre());
console.log(batman.cosas);

let arra = [1,2,3,4];
function sum(arra){

    let result = 0;
    for (let i=0;i<arra.length;i++){
        result +=arra[i];
    }
    return result;
}
console.log(sum(arra));//funcion

console.log(Array.prototype.pop);
Array.prototype.sum = function sum(){

    let result = 0;
    for (let i=0;i<this.length;i++){
        result +=this[i];
    }
    return result;
}
console.log(arra.sum()); //añado un prototipo al objeto array