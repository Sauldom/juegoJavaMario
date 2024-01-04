//script de inicio de juego
const ARROW_CODES ={
    37:'left',
    38:'up',
    39:'right'
}
let arrows = trackKeys(ARROW_CODES);
function trackKeys(keyCodes){
    let pressedKeys ={};
    //los listener son eventos que nos permiten reaccionar
    function handler(event){
        if(keyCodes.hasOwnProperty(event.keyCode)){
            let downPressed =event.type === 'keydown';
            pressedKeys[keyCodes[event.keyCode]]=downPressed;
        }
        console.log(pressedKeys);
    }
    addEventListener('keydown', handler);
    addEventListener('keyup', handler);

    return pressedKeys;
}

let level = new Level(GAME_LEVELS);
let display = new DOMDisplay(document.body,level);
