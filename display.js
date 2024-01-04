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
    //crea un tabla y un fondo lo pasamos  a un prototipo
    
    this.wrap.appendChild(this.drawBackground());
    //this.wrap.appendChild(this.drawActors());
    this.actorsLayer =null;

    
    

}

DOMDisplay.prototype.drawBackground = function(){
    let table = createElement('table', 'background');
    table.style.width = this.level.width *SCALE+ 'px';

    this.level.grid.forEach(row => {
        let rowElement = createElement('tr');
        rowElement.style.height = SCALE+'px';
        table.appendChild(rowElement);
        row.forEach(type=>rowElement.appendChild(createElement('td', type)));
        
    });
    return table;
}
DOMDisplay.prototype.drawActors = function (){
    let actorWrap = createElement('div');
    this.level.actors.map(actor =>{
        let actorElement = createElement('div', `actor ${actor.type}`);
        let rect = actorWrap.appendChild(actorElement);
        rect.style.width = actor.size.x * SCALE + 'px';
        rect.style.height = actor.size.y * SCALE+'px';
        rect.style.left = actor.position.x * SCALE + 'px';
        rect.style.top = actor.position.y * SCALE + 'px';
    });
    
    return actorWrap;
}

DOMDisplay.prototype.drawFrame = function (){
    if(this.actorsLayer) this.wrap.removeChild(this.actorsLayer); //removemos del html
    this.actorsLayer = this.wrap.appendChild(this.drawActors());
    this.wrap.className = 'game' + (this.level.status || '');
}

DOMDisplay.prototype.clear = function (){
    this.wrap.parentNode.removeChild(this.wrap);
}

