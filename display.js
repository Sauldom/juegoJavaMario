//escala para que no quede pequeño
const SCALE =20;

//crear un sitio donde pintar

//funcion auxiliar para crear elementos de html
function createElement (type, className){
    //document es todo el objeto del html
    let element = document.createElement(type); //crea un elemento del document del tipo que hemos dicho por ejemplo div
    if (className) element.className = className;
    return element
}
//el display tiene un nvel y u sitio donde pintarse
function DOMDisplay (parent, level){
    //crea un hijo de html con un game
    this.wrap = parent.appendChild(createElement('div','game'));//al padre le ñado un hijo div game
    this.level = level;

    //this.wrap.appendChild();
    //crea un tabla y un fondo
    this.drawBackground = function(){
        let table = createElement('table', 'background');
            table.style.width = this.level.width *SCALE+ 'px';

            this.level.grid.forEach(row => {
                let rowElement = createElement('tr');
                table.appendChild(rowElement);
                
            });
        return table;
    }
    this.wrap.appendChild(this.drawBackground());

}

