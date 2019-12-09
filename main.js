
// apply transition on white piano tiles 
const whiteTiles = [];
for (let i = 0; i < 21; i++ ) {
    let nr = i+1;
    whiteTiles[i] = document.getElementById('wt' + nr);
    whiteTiles[i].onmousedown = () => {
        whiteTiles[i].style.top = '2%';
    }
    whiteTiles[i].onmouseup = () => {
        whiteTiles[i].style.top = '0%';
    }
}

// apply transition on black piano tiles
const blackTiles = [];
for (let i = 0; i < 15; i++ ) { 
    let nr = i + 1;
    blackTiles[i] = document.getElementById('bt' + nr);

    blackTiles[i].onmousedown = () => {
        blackTiles[i].style.top = '2%';
    }
    blackTiles[i].onmouseup = () => {
        blackTiles[i].style.top = '0%';
    }
}

// adding keypress events 
for (let i = 0; i < 21; i++ ) {
    whiteTiles[i].onkeydown = () => {
        // let  keyCode = event.which || event.keyCode;
        console.log('wtf');
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------------------
let synths = [];
let synth = new Tone.DuoSynth().toMaster();
let monoS = new Tone.MonoSynth().toMaster();
let amSynth = new Tone.AMSynth().toMaster();
synths[0] = synth;
synths[1] = monoS;
synths[2] = amSynth;

// div containing 4 input ranges 
let envelope = document.querySelectorAll('.envelope');

let attack = undefined;
let decay = undefined;
let sustain = undefined;
let release = undefined;

let sel = document.getElementById('synth-type');

envelope[0].children[0].onchange = () => {
    console.log('waaaaaaaadaaaaaaaaat');
    attack = envelope[0].children[0].value;
    let idx = Number( document.getElementById('synth-type').value);
    console.log('in attack , idx is ' + idx);
    if (idx-1 === 0) {
        
        synths[idx-1] = new Tone.DuoSynth({
            "envelope": {
                "attack": Number(attack)
            }
        }).toMaster();
    }
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({
            "envelope": {
                "attack": Number(attack)
            }
        }).toMaster();
    }
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "envelope": {
                "attack": Number(attack)
            }
        }).toMaster();
    }
    
    
}
envelope[0].children[1].onchange = () => {
    decay = envelope[0].children[1].value;
    let idx = Number( document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "envelope": {
                "decay": Number(decay)
            }
        }).toMaster();
    }
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({
            "envelope": {
                "decay": Number(decay)
            }
        }).toMaster();
    }
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "envelope": {
                "decay": Number(decay)
            }
        }).toMaster();
    }
    
    
}
envelope[0].children[2].onchange = () => {
    sustain = envelope[0].children[2].value;
    let idx = Number( document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "envelope": {
                "sustain": Number(sustain)
            }
        }).toMaster();
    }
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({
            "envelope": {
                "sustain": Number(sustain)
            }
        }).toMaster();
    }
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "envelope": {
                "sustain": Number(sustain)
            }
        }).toMaster();
    }
    
}
envelope[0].children[3].onchange = () => {
    release = envelope[0].children[3].value;
    let idx = Number( document.getElementById('synth-type').value);
    console.log('release VLAUE IS '+ release);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "envelope": {
                "release": Number(release)
            }
        }).toMaster();
    }
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({
            "envelope": {
                "release": Number(release)
            }
        }).toMaster();
    }
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "envelope": {
                "release": Number(release)
            }
        }).toMaster();
    }
    

}

window.onkeydown = (evt) => {
    let code = evt.keyCode;

    switch (code) {
        case 97:
        case 65: {
            whiteTiles[0].style.top='2%';
            // synth.triggerAttackRelease("C3", "5");
           
            // console.log(monoS.envelope.attack);
            // monoS.triggerAttackRelease('c3','4');
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('c3','7n');
        
            

            break;
        }
        case 115:
        case 83: {
            console.log('pressed s or S');
            whiteTiles[1].style.top='2%';
            // synth.triggerAttackRelease("d3", "7n");  
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d3','7n');
            break;
        }
        case 100:
        case 68: {
            console.log('pressed d or D');
            whiteTiles[2].style.top='2%';
            // synth.triggerAttackRelease("e3", "7n");  
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('e3','7n');
            break;
        }
        case 102:
        case 70: {
            console.log('pressed f or F');
            whiteTiles[3].style.top='2%';
            // synth.triggerAttackRelease("f3", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f3','7n');
            break;
        }
        case 103:
        case 71: {
            console.log('pressed g or G');
            whiteTiles[4].style.top='2%';
            // synth.triggerAttackRelease("g3", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g3','7n');
            break;
        }
        case 104:
        case 72: {
            console.log('pressed h or H');
            whiteTiles[5].style.top='2%';
            // synth.triggerAttackRelease("a3", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a3','7n');
            break;
        }
        case 106:
        case 74: {
            console.log('pressed j or J');
            whiteTiles[6].style.top='2%';
            // synth.triggerAttackRelease("b3", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('b3','7n');
            break;
        }
        case 107:
        case 75: {
            console.log('pressed k or K');
            whiteTiles[7].style.top='2%';
            // synth.triggerAttackRelease("c4", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('c4','7n');
            break;
        }
        case 108: 
        case 76: {
            console.log('pressed l or L');
            whiteTiles[8].style.top='2%';
            // synth.triggerAttackRelease("d4", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d4','7n');
            break;
        }
        case 186: {
            console.log('pressed ;');
            whiteTiles[9].style.top='2%';
            // synth.triggerAttackRelease("e4", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('e4','7n');
            break;
        }
        case 222: {
            console.log('pressed \'');
            whiteTiles[10].style.top='2%';
            // synth.triggerAttackRelease("f4", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f4','7n');
            break;
        }
        case 122:
        case 90: {
            console.log('pressed z or Z');
            whiteTiles[11].style.top='2%';
            // synth.triggerAttackRelease("g4", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g4','7n');
            break;
        }
        case 120:
        case 88: {
            console.log('pressed x or X');
            whiteTiles[12].style.top='2%';
            // synth.triggerAttackRelease("a4", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a4','7n');
            break;
        }
        case 99: 
        case 67: {
            console.log('pressed c or C');
            whiteTiles[13].style.top='2%';
            // synth.triggerAttackRelease("b4", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('b4','7n');
            break;
        }
        case 118: 
        case 86: {
            console.log('pressed v or V');
            whiteTiles[14].style.top='2%';
            // synth.triggerAttackRelease("c5", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('c5','7n');
            break;
        }
        case 98: 
        case 66: {
            console.log('pressed b or B');
            whiteTiles[15].style.top='2%';
            // synth.triggerAttackRelease("d5", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d5','7n');
            break;
        }
        case 110: 
        case 78: {
            console.log('pressed n or N');
            whiteTiles[16].style.top='2%';
            // synth.triggerAttackRelease("e5", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('e5','7n');
            break;
        }
        case 109:
        case 77: {
            console.log('pressed m or M');
            whiteTiles[17].style.top='2%';
            // synth.triggerAttackRelease("f5", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f5','7n');
            break;
        }
        case 188: {
            console.log('pressed , ');
            whiteTiles[18].style.top='2%';
            // synth.triggerAttackRelease("g5", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g5','7n');
            break;
        }
        case 190: {
            console.log('pressed . ');
            whiteTiles[19].style.top='2%';
            // synth.triggerAttackRelease("a5", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a5','7n');
            break;
        }
        case 191: {
            console.log('pressed  / ');
            whiteTiles[20].style.top='2%';
            // synth.triggerAttackRelease("b5", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('b5','7n');
            break;
        }
        // black tile keycodes
        case 81: {
            console.log('pressed q');
            blackTiles[0].style.top = '2%';
            // synth.triggerAttackRelease("C#3", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('C#3','7n');
            break;
        }
        case 87: {
            console.log('pressed w');
            blackTiles[1].style.top = '2%';
            // synth.triggerAttackRelease("D#3", "7n"); 
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d#3','7n');
            break;
        }
        case 69: {
            console.log('pressed e');
            blackTiles[2].style.top = '2%';
            // synth.triggerAttackRelease("f#3", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f#3','7n');
            break;
        }
        case 82: {
            console.log('pressed r');
            blackTiles[3].style.top = '2%';
            // synth.triggerAttackRelease("g#3", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g#3','7n');
            break;
        }
        case 84: {
            console.log('pressed t');
            blackTiles[4].style.top = '2%';
            // synth.triggerAttackRelease("a#3", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a#3','7n');
            break;
        }
        case 89: {
            console.log('pressed y');
            blackTiles[5].style.top = '2%';
            // synth.triggerAttackRelease("c#4", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('C#4','7n');
            break;
        }
        case 85: {
            console.log('pressed u');
            blackTiles[6].style.top = '2%';
            // synth.triggerAttackRelease("d#4", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d#4','7n');
            break;
        }
        case 73: {
            console.log('pressed i');
            blackTiles[7].style.top = '2%';
            // synth.triggerAttackRelease("f#4", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f#4','7n');
            break;
        }
        case 79: {
            console.log('pressed o');
            blackTiles[8].style.top = '2%';
            // synth.triggerAttackRelease("g#4", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g#4','7n');
            break;
        }
        case 80: {
            console.log('pressed p');
            blackTiles[9].style.top = '2%';
            // synth.triggerAttackRelease("a#4", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a#4','7n');
            break;
        }
        case 219: {
            console.log('pressed [');
            blackTiles[10].style.top = '2%';
            // synth.triggerAttackRelease("c#5", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('c#5','7n');
            break;
        }
        case 221: {
            console.log('pressed ]');
            blackTiles[11].style.top = '2%';
            // synth.triggerAttackRelease("d#5", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d#5','7n');
            break;
        }
        case 48: {
            console.log('pressed 0');
            blackTiles[12].style.top = '2%';
            // synth.triggerAttackRelease("f#5", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f#5','7n');
            break;
        }
        case 189: {
            console.log('pressed -');
            blackTiles[13].style.top = '2%';
            // synth.triggerAttackRelease("g#5", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g#5','7n');
            break;
        }
        case 187: {
            console.log('pressed =');
            blackTiles[14].style.top = '2%';
            // synth.triggerAttackRelease("a#5", "7n");
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a#5','7n');
            break;
        }

    }
    
}


// -------------------------------------------------------------------------------------------------------------------------------------------------
// on key up
window.onkeyup = (evt) => {
    let code = evt.keyCode;

    console.log('outside switch' + code);
    switch (code) {
        case 97:
        case 65: {
            console.log('pressed a or A');
            whiteTiles[0].style.top='0%';
           
            break;
        }
        case 115:
        case 83: {
            console.log('pressed s or S');
            whiteTiles[1].style.top='0%';
            break;
        }
        case 100:
        case 68: {
            console.log('pressed d or D');
            whiteTiles[2].style.top='0%';
            break;
        }
        case 102:
        case 70: {
            console.log('pressed f or F');
            whiteTiles[3].style.top='0%';
            break;
        }
        case 103:
        case 71: {
            console.log('pressed g or G');
            whiteTiles[4].style.top='0%';
            break;
        }
        case 104:
        case 72: {
            console.log('pressed h or H');
            whiteTiles[5].style.top='0%';
            break;
        }
        case 106:
        case 74: {
            console.log('pressed j or J');
            whiteTiles[6].style.top='0%';
            break;
        }
        case 107:
        case 75: {
            console.log('pressed k or K');
            whiteTiles[7].style.top='0%';
            break;
        }
        case 108: 
        case 76: {
            console.log('pressed l or L');
            whiteTiles[8].style.top='0%';
            break;
        }
        case 186: {
            console.log('pressed ;');
            whiteTiles[9].style.top='0%';
            break;
        }
        case 222: {
            console.log('pressed \'');
            whiteTiles[10].style.top='0%';
            break;
        }
        case 122:
        case 90: {
            console.log('pressed z or Z');
            whiteTiles[11].style.top='0%';
            break;
        }
        case 120:
        case 88: {
            console.log('pressed x or X');
            whiteTiles[12].style.top='0%';
            break;
        }
        case 99: 
        case 67: {
            console.log('pressed c or C');
            whiteTiles[13].style.top='0%';
            break;
        }
        case 118: 
        case 86: {
            console.log('pressed v or V');
            whiteTiles[14].style.top='0%';
            break;
        }
        case 98: 
        case 66: {
            console.log('pressed b or B');
            whiteTiles[15].style.top='0%';
            break;
        }
        case 110: 
        case 78: {
            console.log('pressed n or N');
            whiteTiles[16].style.top='0%';
            break;
        }
        case 109:
        case 77: {
            console.log('pressed m or M');
            whiteTiles[17].style.top='0%';
            break;
        }
        case 188: {
            console.log('pressed , ');
            whiteTiles[18].style.top='0%';
            break;
        }
        case 190: {
            console.log('pressed . ');
            whiteTiles[19].style.top='0%';
            break;
        }
        case 191: {
            console.log('pressed  / ');
            whiteTiles[20].style.top='0%';
            break;
        }
        // black tile keycodes
        case 81: {
            console.log('pressed q');
            blackTiles[0].style.top = '0%';
            break;
        }
        case 87: {
            console.log('pressed w');
            blackTiles[1].style.top = '0%';
            break;
        }
        case 69: {
            console.log('pressed e');
            blackTiles[2].style.top = '0%';
            break;
        }
        case 82: {
            console.log('pressed r');
            blackTiles[3].style.top = '0%';
            break;
        }
        case 84: {
            console.log('pressed t');
            blackTiles[4].style.top = '0%';
            break;
        }
        case 89: {
            console.log('pressed y');
            blackTiles[5].style.top = '0%';
            break;
        }
        case 85: {
            console.log('pressed u');
            blackTiles[6].style.top = '0%';
            break;
        }
        case 73: {
            console.log('pressed i');
            blackTiles[7].style.top = '0%';
            break;
        }
        case 79: {
            console.log('pressed o');
            blackTiles[8].style.top = '0%';
            break;
        }
        case 80: {
            console.log('pressed p');
            blackTiles[9].style.top = '0%';
            break;
        }
        case 219: {
            console.log('pressed [');
            blackTiles[10].style.top = '0%';
            break;
        }
        case 221: {
            console.log('pressed ]');
            blackTiles[11].style.top = '0%';
            break;
        }
        case 48: {
            console.log('pressed 0');
            blackTiles[12].style.top = '0%';
            break;
        }
        case 189: {
            console.log('pressed -');
            blackTiles[13].style.top = '0%';
            break;
        }
        case 187: {
            console.log('pressed =');
            blackTiles[14].style.top = '0%';
            break;
        }

    }
    
}


