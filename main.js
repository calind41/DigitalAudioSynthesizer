
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
let duoSynth = new Tone.DuoSynth().toMaster();
let monoS = new Tone.MonoSynth().toMaster();
let amSynth = new Tone.AMSynth().toMaster();
synths[0] = duoSynth;
synths[1] = monoS;
synths[2] = amSynth;

// div containing 4 input ranges 
let synthValues = document.querySelectorAll('.duo-synth')[0];


let attack = undefined;
let decay = undefined;
let sustain = undefined;
let release = undefined;

let sel = document.getElementById('synth-type');

synthValues.children[0].children[1].onchange = () => {
    let vibratoAmount = synthValues.children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "vibratoAmount" : Number(vibratoAmount)
        }).toMaster();
    }
}

synthValues.children[1].children[1].onchange = () => {
    let vibratoRate = synthValues.children[1].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "vibratoRate" : Number(vibratoRate)
        }).toMaster();
    }
}

synthValues.children[2].children[1].onchange = () => {
    let harmonicity = synthValues.children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "harmonicity" : Number(harmonicity)
        }).toMaster();
    }
}

// ----------------------------------------------------------------------- duo synth voice 0 ------------------------------------------------------
// freq env voice0
synthValues.children[3].children[3].children[0].children[1].onchange = () => {
    let attack = synthValues.children[3].children[3].children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "filterEnvelope" : {
                    "attack": Number(attack)
                }
            }
        }).toMaster();
    }
}
synthValues.children[3].children[3].children[1].children[1].onchange = () => {
    let decay = synthValues.children[3].children[3].children[1].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "filterEnvelope" : {
                    "decay": Number(decay)
                }
            }
        }).toMaster();
    }
}
synthValues.children[3].children[3].children[2].children[1].onchange = () => {
    let sustain = synthValues.children[3].children[3].children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "filterEnvelope" : {
                    "sustain": Number(sustain)
                }
            }
        }).toMaster();
    }
}
synthValues.children[3].children[3].children[3].children[1].onchange = () => {
    let release = synthValues.children[3].children[3].children[3].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "filterEnvelope" : {
                    "release": Number(release)
                }
            }
        }).toMaster();
    }
}
//  end freq env voice0

// amp env voice0 
synthValues.children[3].children[5].children[0].children[1].onchange = () => {
    let attack = synthValues.children[3].children[5].children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "envelope" : {
                    "attack": Number(attack)
                }
            }
        }).toMaster();
    }
}
synthValues.children[3].children[5].children[1].children[1].onchange = () => {
    let decay = synthValues.children[3].children[5].children[1].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "envelope" : {
                    "decay": Number(decay)
                }
            }
        }).toMaster();
    }
}
synthValues.children[3].children[5].children[2].children[1].onchange = () => {
    let sustain = synthValues.children[3].children[5].children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "envelope" : {
                    "sustain": Number(sustain)
                }
            }
        }).toMaster();
    }
}

synthValues.children[3].children[5].children[3].children[1].onchange = () => {
    let release = synthValues.children[3].children[5].children[3].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "envelope" : {
                    "release": Number(release)
                }
            }
        }).toMaster();
    }
}
// end amp env voice0 

// voice0 volume
synthValues.children[3].children[6].children[1].onchange = () => {
    let volume = synthValues.children[3].children[6].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "volume": Number(volume)
            }
        }).toMaster();
    }
}
// voice0 portamento 
synthValues.children[3].children[7].children[1].onchange = () => {
    let portamento = synthValues.children[3].children[7].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0": {
                "portamento": Number(portamento)
            }
        }).toMaster();
    }
}

// voice0 oscillator type 
synthValues.children[3].children[9].onchange = (evt) => {
  let oscTypeValue = evt.currentTarget.value;
  let idx = Number(document.getElementById('synth-type').value);
  if (idx-1 === 0) {
      synths[idx-1] = new Tone.DuoSynth({
          "voice0": {
              "oscillator" : {
                  "type" : oscTypeValue
              }
          }
      }).toMaster();
  }  
}

// ----------------------------------------------------------------------- duo synth voice 1 ------------------------------------------------------
// freq-env1 
synthValues.children[4].children[3].children[0].children[1].onchange = () => {
    let attack = synthValues.children[4].children[3].children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "filterEnvelope" : {
                    "attack": Number(attack)
                }
            }
        }).toMaster();
    }
}

synthValues.children[4].children[3].children[1].children[1].onchange = () => {
    let decay = synthValues.children[4].children[3].children[1].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "filterEnvelope" : {
                    "decay": Number(decay)
                }
            }
        }).toMaster();
    }
}
synthValues.children[4].children[3].children[2].children[1].onchange = () => {
    let sustain = synthValues.children[4].children[3].children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "filterEnvelope" : {
                    "sustain": Number(sustain)
                }
            }
        }).toMaster();
    }
}
synthValues.children[4].children[3].children[3].children[1].onchange = () => {
    let release = synthValues.children[4].children[3].children[3].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "filterEnvelope" : {
                    "release": Number(release)
                }
            }
        }).toMaster();
    }
}
// end freq env voice1

// amp env voice1
synthValues.children[4].children[5].children[0].children[1].onchange = () => {
    let attack = synthValues.children[4].children[5].children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "envelope" : {
                    "attack": Number(attack)
                }
            }
        }).toMaster();
    }
}
synthValues.children[4].children[5].children[1].children[1].onchange = () => {
    let decay = synthValues.children[4].children[5].children[1].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "envelope" : {
                    "decay": Number(decay)
                }
            }
        }).toMaster();
    }
}
synthValues.children[4].children[5].children[2].children[1].onchange = () => {
    let sustain = synthValues.children[4].children[5].children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "envelope" : {
                    "sustain": Number(sustain)
                }
            }
        }).toMaster();
    }
}
synthValues.children[4].children[5].children[3].children[1].onchange = () => {
    let release = synthValues.children[4].children[5].children[3].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "envelope" : {
                    "release": Number(release)
                }
            }
        }).toMaster();
    }
}
// end envelope voice1


synthValues.children[4].children[6].children[1].onchange = () => {
    let volume = synthValues.children[4].children[6].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "volume": Number(volume)
            }
        }).toMaster();
    }
}

synthValues.children[4].children[7].children[1].onchange = () => {
    let portamento = synthValues.children[4].children[7].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1": {
                "portamento": Number(portamento)
            }
        }).toMaster();
    }
}

synthValues.children[4].children[9].onchange = (evt) => {
    let oscTypeValue = evt.currentTarget.value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1": {
                "oscillator" : {
                    "type" : oscTypeValue
                }
            }
        }).toMaster();
    }  
}


window.onkeydown = (evt) => {
    sel.blur();
    let code = evt.keyCode;
    let vibratoAmount = synthValues.children[0].children[1].value;
    let vibratoRate = synthValues.children[1].children[1].value;
    let harmonicity = synthValues.children[2].children[1].value;

    let v0Volume = synthValues.children[3].children[6].children[1].value;
    let v0Portamento = synthValues.children[3].children[7].children[1].value;
    let v0OscType = synthValues.children[3].children[9].options[synthValues.children[3].children[9].selectedIndex].value;

    let v0FreqEnvAttack = synthValues.children[3].children[3].children[0].children[1].value;
    let v0FreqEnvDecay = synthValues.children[3].children[3].children[1].children[1].value;
    let v0FreqEnvSustain = synthValues.children[3].children[3].children[2].children[1].value;
    let v0FreqEnvRelease = synthValues.children[3].children[3].children[3].children[1].value;

    let v0AmpEnvAttack = synthValues.children[3].children[5].children[0].children[1].value;
    let v0AmpEnvDecay = synthValues.children[3].children[5].children[1].children[1].value;
    let v0AmpEnvSustain = synthValues.children[3].children[5].children[2].children[1].value;
    let v0AmpEnvRelease = synthValues.children[3].children[5].children[3].children[1].value;

    let v1Volume = synthValues.children[3].children[6].children[1].value;
    let v1Portamento = synthValues.children[3].children[7].children[1].value;
    let v1OscType = synthValues.children[3].children[9].options[synthValues.children[3].children[9].selectedIndex].value;

    let v1FreqEnvAttack = synthValues.children[4].children[3].children[0].children[1].value;
    let v1FreqEnvDecay = synthValues.children[4].children[3].children[1].children[1].value;
    let v1FreqEnvSustain = synthValues.children[4].children[3].children[2].children[1].value;
    let v1FreqEnvRelease = synthValues.children[4].children[3].children[3].children[1].value;

    let v1AmpEnvAttack = synthValues.children[3].children[5].children[0].children[1].value;
    let v1AmpEnvDecay = synthValues.children[3].children[5].children[1].children[1].value;
    let v1AmpEnvSustain = synthValues.children[3].children[5].children[2].children[1].value;
    let v1AmpEnvRelease = synthValues.children[3].children[5].children[3].children[1].value;



 



    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
    
        synths[idx-1] = new Tone.DuoSynth({
            "voice0": {
                "filterEnvelope": {
                    "attack": Number(v0FreqEnvAttack),
                    "decay": Number(v0FreqEnvDecay),
                    "sustain": Number(v0FreqEnvSustain),
                    "release": Number(v0FreqEnvRelease)
                },
                "envelope": {
                    "attack": Number(v0AmpEnvAttack),
                    "decay": Number(v0AmpEnvDecay),
                    "sustain": Number(v0AmpEnvSustain),
                    "release": Number(v0AmpEnvRelease)
                }
            },
            "voice1": {
                "filterEnvelope": {
                    "attack": Number(v1FreqEnvAttack),
                    "decay": Number(v1FreqEnvDecay),
                    "sustain": Number(v1FreqEnvSustain),
                    "release": Number(v1FreqEnvRelease)
                },
                "envelope": {
                    "attack": Number(v1AmpEnvAttack),
                    "decay": Number(v1AmpEnvDecay),
                    "sustain": Number(v1AmpEnvSustain),
                    "release": Number(v1AmpEnvRelease)
                }
            }
        }).toMaster();
    }
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({
            "envelope": {
                "attack": Number(attack),
                "decay": Number(decay),
                "sustain": Number(sustain),
                "release": Number(release)
            }
        }).toMaster();
    }
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "envelope": {
                "attack": Number(attack),
                "decay": Number(decay),
                "sustain": Number(sustain),
                "release": Number(release)
            }
        }).toMaster();
    }
  
    switch (code) {
        case 97:
        case 65: {
            whiteTiles[0].style.top='2%';
            whiteTiles[0].style.backgroundColor = 'red';
            let idx = Number(document.getElementById('synth-type').value);
            console.log('idx is ' + idx);
            synths[idx-1].triggerAttackRelease('c3','7n');
        
            

            break;
        }
        case 115:
        case 83: {
            console.log('pressed s or S');
            whiteTiles[1].style.top='2%';
            whiteTiles[1].style.backgroundColor = 'red';
            let idx = Number(document.getElementById('synth-type').value);
            synths[idx-1].triggerAttackRelease('d3','7n');
            break;
        }
        case 100:
        case 68: {
            console.log('pressed d or D');
            whiteTiles[2].style.top='2%';
            whiteTiles[2].style.backgroundColor = 'red';
            let idx = Number(document.getElementById('synth-type').value);
            synths[idx-1].triggerAttackRelease('e3','7n');
            break;
        }
        case 102:
        case 70: {
            console.log('pressed f or F');
            whiteTiles[3].style.top='2%';
            whiteTiles[3].style.backgroundColor = 'red';
            let idx = Number(document.getElementById('synth-type').value);
            synths[idx-1].triggerAttackRelease('f3','7n');
            break;
        }
        case 103:
        case 71: {
            console.log('pressed g or G');
            whiteTiles[4].style.top='2%';
            whiteTiles[4].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g3','7n');
            break;
        }
        case 104:
        case 72: {
            console.log('pressed h or H');
            whiteTiles[5].style.top='2%';
            whiteTiles[5].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a3','7n');
            break;
        }
        case 106:
        case 74: {
            console.log('pressed j or J');
            whiteTiles[6].style.top='2%';
            whiteTiles[6].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('b3','7n');
            break;
        }
        case 107:
        case 75: {
            console.log('pressed k or K');
            whiteTiles[7].style.top='2%';
            whiteTiles[7].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('c4','7n');
            break;
        }
        case 108: 
        case 76: {
            console.log('pressed l or L');
            whiteTiles[8].style.top='2%';
            whiteTiles[8].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d4','7n');
            break;
        }
        case 186: {
            console.log('pressed ;');
            whiteTiles[9].style.top='2%';
            whiteTiles[9].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('e4','7n');
            break;
        }
        case 222: {
            console.log('pressed \'');
            whiteTiles[10].style.top='2%';
            whiteTiles[10].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f4','7n');
            break;
        }
        case 122:
        case 90: {
            console.log('pressed z or Z');
            whiteTiles[11].style.top='2%';
            whiteTiles[11].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g4','7n');
            break;
        }
        case 120:
        case 88: {
            console.log('pressed x or X');
            whiteTiles[12].style.top='2%';
            whiteTiles[12].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a4','7n');
            break;
        }
        case 99: 
        case 67: {
            console.log('pressed c or C');
            whiteTiles[13].style.top='2%';
            whiteTiles[13].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('b4','7n');
            break;
        }
        case 118: 
        case 86: {
            console.log('pressed v or V');
            whiteTiles[14].style.top='2%';
            whiteTiles[14].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('c5','7n');
            break;
        }
        case 98: 
        case 66: {
            console.log('pressed b or B');
            whiteTiles[15].style.top='2%';
            whiteTiles[15].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d5','7n');
            break;
        }
        case 110: 
        case 78: {
            console.log('pressed n or N');
            whiteTiles[16].style.top='2%';
            whiteTiles[16].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('e5','7n');
            break;
        }
        case 109:
        case 77: {
            console.log('pressed m or M');
            whiteTiles[17].style.top='2%';
            whiteTiles[17].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f5','7n');
            break;
        }
        case 188: {
            console.log('pressed , ');
            whiteTiles[18].style.top='2%';
            whiteTiles[18].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g5','7n');
            break;
        }
        case 190: {
            console.log('pressed . ');
            whiteTiles[19].style.top='2%';
            whiteTiles[19].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a5','7n');
            break;
        }
        case 191: {
            console.log('pressed  / ');
            whiteTiles[20].style.top='2%';
            whiteTiles[20].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('b5','7n');
            break;
        }
        // black tile keycodes
        case 81: {
            console.log('pressed q');
            blackTiles[0].style.top = '2%';
            blackTiles[0].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('C#3','7n');
            break;
        }
        case 87: {
            console.log('pressed w');
            blackTiles[1].style.top = '2%';
            blackTiles[1].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d#3','7n');
            break;
        }
        case 69: {
            console.log('pressed e');
            blackTiles[2].style.top = '2%';
            blackTiles[2].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f#3','7n');
            break;
        }
        case 82: {
            console.log('pressed r');
            blackTiles[3].style.top = '2%';
            blackTiles[3].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g#3','7n');
            break;
        }
        case 84: {
            console.log('pressed t');
            blackTiles[4].style.top = '2%';
            blackTiles[4].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a#3','7n');
            break;
        }
        case 89: {
            console.log('pressed y');
            blackTiles[5].style.top = '2%';
            blackTiles[5].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('C#4','7n');
            break;
        }
        case 85: {
            console.log('pressed u');
            blackTiles[6].style.top = '2%';
            blackTiles[6].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d#4','7n');
            break;
        }
        case 73: {
            console.log('pressed i');
            blackTiles[7].style.top = '2%';
            blackTiles[7].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f#4','7n');
            break;
        }
        case 79: {
            console.log('pressed o');
            blackTiles[8].style.top = '2%';
            blackTiles[8].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g#4','7n');
            break;
        }
        case 80: {
            console.log('pressed p');
            blackTiles[9].style.top = '2%';
            blackTiles[9].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a#4','7n');
            break;
        }
        case 219: {
            console.log('pressed [');
            blackTiles[10].style.top = '2%';
            blackTiles[10].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('c#5','7n');
            break;
        }
        case 221: {
            console.log('pressed ]');
            blackTiles[11].style.top = '2%';
            blackTiles[11].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d#5','7n');
            break;
        }
        case 48: {
            console.log('pressed 0');
            blackTiles[12].style.top = '2%';
            blackTiles[12].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f#5','7n');
            break;
        }
        case 189: {
            console.log('pressed -');
            blackTiles[13].style.top = '2%';
            blackTiles[13].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g#5','7n');
            break;
        }
        case 187: {
            console.log('pressed =');
            blackTiles[14].style.top = '2%';
            blackTiles[14].style.backgroundColor = 'red';
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
    sel.blur();
    

    console.log('outside switch' + code);
    switch (code) {
        case 97:
        case 65: {
            console.log('pressed a or A');
            whiteTiles[0].style.top='0%';
            whiteTiles[0].style.backgroundColor = 'white';
           
            break;
        }
        case 115:
        case 83: {
            console.log('pressed s or S');
            whiteTiles[1].style.top='0%';
            whiteTiles[1].style.backgroundColor = 'white';
            break;
        }
        case 100:
        case 68: {
            console.log('pressed d or D');
            whiteTiles[2].style.top='0%';
            whiteTiles[2].style.backgroundColor = 'white';
            break;
        }
        case 102:
        case 70: {
            console.log('pressed f or F');
            whiteTiles[3].style.top='0%';
            whiteTiles[3].style.backgroundColor = 'white';
            break;
        }
        case 103:
        case 71: {
            console.log('pressed g or G');
            whiteTiles[4].style.top='0%';
            whiteTiles[4].style.backgroundColor = 'white';
            break;
        }
        case 104:
        case 72: {
            console.log('pressed h or H');
            whiteTiles[5].style.top='0%';
            whiteTiles[5].style.backgroundColor = 'white';
            break;
        }
        case 106:
        case 74: {
            console.log('pressed j or J');
            whiteTiles[6].style.top='0%';
            whiteTiles[6].style.backgroundColor = 'white';
            break;
        }
        case 107:
        case 75: {
            console.log('pressed k or K');
            whiteTiles[7].style.top='0%';
            whiteTiles[7].style.backgroundColor = 'white';
            break;
        }
        case 108: 
        case 76: {
            console.log('pressed l or L');
            whiteTiles[8].style.top='0%';
            whiteTiles[8].style.backgroundColor = 'white';
            break;
        }
        case 186: {
            console.log('pressed ;');
            whiteTiles[9].style.top='0%';
            whiteTiles[9].style.backgroundColor = 'white';
            break;
        }
        case 222: {
            console.log('pressed \'');
            whiteTiles[10].style.top='0%';
            whiteTiles[10].style.backgroundColor = 'white';
            break;
        }
        case 122:
        case 90: {
            console.log('pressed z or Z');
            whiteTiles[11].style.top='0%';
            whiteTiles[11].style.backgroundColor = 'white';
            break;
        }
        case 120:
        case 88: {
            console.log('pressed x or X');
            whiteTiles[12].style.top='0%';
            whiteTiles[12].style.backgroundColor = 'white';
            break;
        }
        case 99: 
        case 67: {
            console.log('pressed c or C');
            whiteTiles[13].style.top='0%';
            whiteTiles[13].style.backgroundColor = 'white';
            break;
        }
        case 118: 
        case 86: {
            console.log('pressed v or V');
            whiteTiles[14].style.top='0%';
            whiteTiles[14].style.backgroundColor = 'white';
            break;
        }
        case 98: 
        case 66: {
            console.log('pressed b or B');
            whiteTiles[15].style.top='0%';
            whiteTiles[15].style.backgroundColor = 'white';
            break;
        }
        case 110: 
        case 78: {
            console.log('pressed n or N');
            whiteTiles[16].style.top='0%';
            whiteTiles[16].style.backgroundColor = 'white';
            break;
        }
        case 109:
        case 77: {
            console.log('pressed m or M');
            whiteTiles[17].style.top='0%';
            whiteTiles[17].style.backgroundColor = 'white';
            break;
        }
        case 188: {
            console.log('pressed , ');
            whiteTiles[18].style.top='0%';
            whiteTiles[18].style.backgroundColor = 'white';
            break;
        }
        case 190: {
            console.log('pressed . ');
            whiteTiles[19].style.top='0%';
            whiteTiles[19].style.backgroundColor = 'white';
            break;
        }
        case 191: {
            console.log('pressed  / ');
            whiteTiles[20].style.top='0%';
            whiteTiles[20].style.backgroundColor = 'white';
            break;
        }
        // black tile keycodes
        case 81: {
            console.log('pressed q');
            blackTiles[0].style.top = '0%';
            blackTiles[0].style.backgroundColor = 'black';
            break;
        }
        case 87: {
            console.log('pressed w');
            blackTiles[1].style.top = '0%';
            blackTiles[1].style.backgroundColor = 'black';
            break;
        }
        case 69: {
            console.log('pressed e');
            blackTiles[2].style.top = '0%';
            blackTiles[2].style.backgroundColor = 'black';
            break;
        }
        case 82: {
            console.log('pressed r');
            blackTiles[3].style.top = '0%';
            blackTiles[3].style.backgroundColor = 'black';
            break;
        }
        case 84: {
            console.log('pressed t');
            blackTiles[4].style.top = '0%';
            blackTiles[4].style.backgroundColor = 'black';
            break;
        }
        case 89: {
            console.log('pressed y');
            blackTiles[5].style.top = '0%';
            blackTiles[5].style.backgroundColor = 'black';
            break;
        }
        case 85: {
            console.log('pressed u');
            blackTiles[6].style.top = '0%';
            blackTiles[6].style.backgroundColor = 'black';
            break;
        }
        case 73: {
            console.log('pressed i');
            blackTiles[7].style.top = '0%';
            blackTiles[7].style.backgroundColor = 'black';
            break;
        }
        case 79: {
            console.log('pressed o');
            blackTiles[8].style.top = '0%';
            blackTiles[8].style.backgroundColor = 'black';
            break;
        }
        case 80: {
            console.log('pressed p');
            blackTiles[9].style.top = '0%';
            blackTiles[9].style.backgroundColor = 'black';
            break;
        }
        case 219: {
            console.log('pressed [');
            blackTiles[10].style.top = '0%';
            blackTiles[10].style.backgroundColor = 'black';
            break;
        }
        case 221: {
            console.log('pressed ]');
            blackTiles[11].style.top = '0%';
            blackTiles[11].style.backgroundColor = 'black';
            break;
        }
        case 48: {
            console.log('pressed 0');
            blackTiles[12].style.top = '0%';
            blackTiles[12].style.backgroundColor = 'black';
            break;
        }
        case 189: {
            console.log('pressed -');
            blackTiles[13].style.top = '0%';
            blackTiles[13].style.backgroundColor = 'black';
            break;
        }
        case 187: {
            console.log('pressed =');
            blackTiles[14].style.top = '0%';
            blackTiles[14].style.backgroundColor = 'black';
            break;
        }

    }
    
}


