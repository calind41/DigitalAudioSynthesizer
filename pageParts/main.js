
// apply transition on white piano tiles -------------------------------------------------------------------------------------------------------
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

//----------------------------------------------------------------------------------------------------------------------------------------------

window.onkeydown = (evt) => {
    sel.blur();
    let code = evt.keyCode;

    // Values For DuoSynth----------------------------------------
    let vibratoAmount = duoSynthVals.children[0].children[1].value;
    let vibratoRate = duoSynthVals.children[1].children[1].value;
    let harmonicity = duoSynthVals.children[2].children[1].value;

    let v0OscType = duoSynthVals.children[3].children[7].options[duoSynthVals.children[3].children[7].selectedIndex].value;

    let v0FreqEnvAttack = duoSynthVals.children[3].children[3].children[0].children[1].value;
    let v0FreqEnvDecay = duoSynthVals.children[3].children[3].children[1].children[1].value;
    let v0FreqEnvSustain = duoSynthVals.children[3].children[3].children[2].children[1].value;
    let v0FreqEnvRelease = duoSynthVals.children[3].children[3].children[3].children[1].value;

    let v0AmpEnvAttack = duoSynthVals.children[3].children[5].children[0].children[1].value;
    let v0AmpEnvDecay = duoSynthVals.children[3].children[5].children[1].children[1].value;
    let v0AmpEnvSustain = duoSynthVals.children[3].children[5].children[2].children[1].value;
    let v0AmpEnvRelease = duoSynthVals.children[3].children[5].children[3].children[1].value;


    let v1FreqEnvAttack = duoSynthVals.children[4].children[3].children[0].children[1].value;
    let v1FreqEnvDecay = duoSynthVals.children[4].children[3].children[1].children[1].value;
    let v1FreqEnvSustain = duoSynthVals.children[4].children[3].children[2].children[1].value;
    let v1FreqEnvRelease = duoSynthVals.children[4].children[3].children[3].children[1].value;

    let v1AmpEnvAttack = duoSynthVals.children[3].children[5].children[0].children[1].value;
    let v1AmpEnvDecay = duoSynthVals.children[3].children[5].children[1].children[1].value;
    let v1AmpEnvSustain = duoSynthVals.children[3].children[5].children[2].children[1].value;
    let v1AmpEnvRelease = duoSynthVals.children[3].children[5].children[3].children[1].value;
    // End Values for DuoSynth---------------------------------------------------------------

    // Values For Monosynth ---------------------------------------------------
    let monoFreqAttack = monoSynthVals.children[1].children[0].children[1].value;
    let monoFreqDecay = monoSynthVals.children[1].children[1].children[1].value;
    let monoFreqSustain = monoSynthVals.children[1].children[2].children[1].value;
    let monoFreqRelease = monoSynthVals.children[1].children[3].children[1].value;

    let monoAmpAttack = monoSynthVals.children[3].children[0].children[1].value;
    let monoAmpDecay = monoSynthVals.children[3].children[1].children[1].value;
    let monoAmpSustain = monoSynthVals.children[3].children[2].children[1].value;
    let monoAmpRelease = monoSynthVals.children[3].children[3].children[1].value;

    let monoOscType = monoSynthVals.children[5].options[monoSynthVals.children[5].selectedIndex].value;

    let monoFilterQ = monoSynthVals.children[7].children[0].children[1].value;
    let monoFilterType = monoSynthVals.children[7].children[1].children[1].options[monoSynthVals.children[7].children[1].children[1].selectedIndex].value;
    let monoFilterRolloff = monoSynthVals.children[7].children[2].children[1].value;
    // End Values For MonoSynth----------------------------------------------------


    // Values For AmSynth
    let amEnvAttack = amSynthVals.children[2].children[0].children[1].value;
    let amEnvDecay = amSynthVals.children[2].children[1].children[1].value;
    let amEnvSustain = amSynthVals.children[2].children[2].children[1].value;
    let amEnvRelease = amSynthVals.children[2].children[3].children[1].value;

    let amModEnvAttack = amSynthVals.children[5].children[0].children[1].value;
    let amModEnvDecay = amSynthVals.children[5].children[1].children[1].value;
    let amModEnvSustain = amSynthVals.children[5].children[2].children[1].value;
    let amModEnvRelease = amSynthVals.children[5].children[3].children[1].value;

    let amHarmonicity = amSynthVals.children[0].children[1].value;
    let amModType = amSynthVals.children[3].children[1].options[amSynthVals.children[3].children[1].selectedIndex].value;
    let amOscType = amSynthVals.children[6].children[1].options[amSynthVals.children[6].children[1].selectedIndex].value;
    // End Values For AmSynth
    
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
    
        synths[idx-1] = new Tone.DuoSynth({
            "vibratoAmount": Number(vibratoAmount),
            "vibratoRate": Number(vibratoRate),
            "harmonicity": Number(harmonicity),
            "voice0": {
                "oscillator": {
                    "type": v0OscType
                },
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
        synths[idx-1].connect(dest);

    }
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({
            "oscillator": {
                "type": monoOscType
            },
            "filter" : {
                "Q": Number(monoFilterQ),
                "type": monoFilterType,
                "rolloff": Number(monoFilterRolloff)
            },
            "envelope": {
                "attack": Number(monoAmpAttack),
                "decay": Number(monoAmpDecay),
                "sustain": Number(monoAmpSustain),
                "release": Number(monoAmpRelease)
            },
            "filterEnvelope": {
                "attack": Number(monoFreqAttack),
                "decay": Number(monoFreqDecay),
                "sustain": Number(monoFreqSustain),
                "release": Number(monoFreqRelease)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "harmonicity": Number(amHarmonicity),
            "oscillator": {
                "type": amOscType
            },
            "envelope": {
                "attack": Number(amEnvAttack),
                "decay": Number(amEnvDecay),
                "sustain": Number(amEnvSustain),
                "release": Number(amEnvRelease)
            },
            "modulation": {
                "type": amModType
            },
            "modulationEnvelope": {
                "attack": Number(amModEnvAttack),
                "decay": Number(amModEnvDecay),
                "sustain": Number(amModEnvSustain),
                "release": Number(amModEnvRelease)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
  
    switch (code) {
        case 97:
        case 65: {
            whiteTiles[0].style.top='2%';
            whiteTiles[0].style.backgroundColor = 'red';
            let idx = Number(document.getElementById('synth-type').value);
            synths[idx-1].triggerAttackRelease('c3','7n');
        
            

            break;
        }
        case 115:
        case 83: {
            whiteTiles[1].style.top='2%';
            whiteTiles[1].style.backgroundColor = 'red';
            let idx = Number(document.getElementById('synth-type').value);
            synths[idx-1].triggerAttackRelease('d3','7n');
            break;
        }
        case 100:
        case 68: {
            whiteTiles[2].style.top='2%';
            whiteTiles[2].style.backgroundColor = 'red';
            let idx = Number(document.getElementById('synth-type').value);
            synths[idx-1].triggerAttackRelease('e3','7n');
            break;
        }
        case 102:
        case 70: {
            whiteTiles[3].style.top='2%';
            whiteTiles[3].style.backgroundColor = 'red';
            let idx = Number(document.getElementById('synth-type').value);
            synths[idx-1].triggerAttackRelease('f3','7n');
            break;
        }
        case 103:
        case 71: {
            whiteTiles[4].style.top='2%';
            whiteTiles[4].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g3','7n');
            break;
        }
        case 104:
        case 72: {
            whiteTiles[5].style.top='2%';
            whiteTiles[5].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a3','7n');
            break;
        }
        case 106:
        case 74: {
            whiteTiles[6].style.top='2%';
            whiteTiles[6].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('b3','7n');
            break;
        }
        case 107:
        case 75: {
            whiteTiles[7].style.top='2%';
            whiteTiles[7].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('c4','7n');
            break;
        }
        case 108: 
        case 76: {
            whiteTiles[8].style.top='2%';
            whiteTiles[8].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d4','7n');
            break;
        }
        case 186: {
            whiteTiles[9].style.top='2%';
            whiteTiles[9].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('e4','7n');
            break;
        }
        case 222: {
            whiteTiles[10].style.top='2%';
            whiteTiles[10].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f4','7n');
            break;
        }
        case 122:
        case 90: {
            whiteTiles[11].style.top='2%';
            whiteTiles[11].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g4','7n');
            break;
        }
        case 120:
        case 88: {
            whiteTiles[12].style.top='2%';
            whiteTiles[12].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a4','7n');
            break;
        }
        case 99: 
        case 67: {
            whiteTiles[13].style.top='2%';
            whiteTiles[13].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('b4','7n');
            break;
        }
        case 118: 
        case 86: {
            whiteTiles[14].style.top='2%';
            whiteTiles[14].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('c5','7n');
            break;
        }
        case 98: 
        case 66: {
            whiteTiles[15].style.top='2%';
            whiteTiles[15].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d5','7n');
            break;
        }
        case 110: 
        case 78: {
            whiteTiles[16].style.top='2%';
            whiteTiles[16].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('e5','7n');
            break;
        }
        case 109:
        case 77: {
            whiteTiles[17].style.top='2%';
            whiteTiles[17].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f5','7n');
            break;
        }
        case 188: {
            whiteTiles[18].style.top='2%';
            whiteTiles[18].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g5','7n');
            break;
        }
        case 190: {
            whiteTiles[19].style.top='2%';
            whiteTiles[19].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a5','7n');
            break;
        }
        case 191: {
            whiteTiles[20].style.top='2%';
            whiteTiles[20].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('b5','7n');
            break;
        }
        // black tile keycodes
        case 81: {
            blackTiles[0].style.top = '2%';
            blackTiles[0].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('C#3','7n');
            break;
        }
        case 87: {
            blackTiles[1].style.top = '2%';
            blackTiles[1].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d#3','7n');
            break;
        }
        case 69: {
            blackTiles[2].style.top = '2%';
            blackTiles[2].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f#3','7n');
            break;
        }
        case 82: {
            blackTiles[3].style.top = '2%';
            blackTiles[3].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g#3','7n');
            break;
        }
        case 84: {
            blackTiles[4].style.top = '2%';
            blackTiles[4].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a#3','7n');
            break;
        }
        case 89: {
            blackTiles[5].style.top = '2%';
            blackTiles[5].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('C#4','7n');
            break;
        }
        case 85: {
            blackTiles[6].style.top = '2%';
            blackTiles[6].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d#4','7n');
            break;
        }
        case 73: {
            blackTiles[7].style.top = '2%';
            blackTiles[7].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f#4','7n');
            break;
        }
        case 79: {
            blackTiles[8].style.top = '2%';
            blackTiles[8].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g#4','7n');
            break;
        }
        case 80: {
            blackTiles[9].style.top = '2%';
            blackTiles[9].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('a#4','7n');
            break;
        }
        case 219: {
            blackTiles[10].style.top = '2%';
            blackTiles[10].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('c#5','7n');
            break;
        }
        case 221: {
            blackTiles[11].style.top = '2%';
            blackTiles[11].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('d#5','7n');
            break;
        }
        case 48: {
            blackTiles[12].style.top = '2%';
            blackTiles[12].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('f#5','7n');
            break;
        }
        case 189: {
            blackTiles[13].style.top = '2%';
            blackTiles[13].style.backgroundColor = 'red';
            let idx = Number(sel.value);
            synths[idx-1].triggerAttackRelease('g#5','7n');
            break;
        }
        case 187: {
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
    
    switch (code) {
        case 97:
        case 65: {
            whiteTiles[0].style.top='0%';
            whiteTiles[0].style.backgroundColor = 'white';
           
            break;
        }
        case 115:
        case 83: {
            whiteTiles[1].style.top='0%';
            whiteTiles[1].style.backgroundColor = 'white';
            break;
        }
        case 100:
        case 68: {
            whiteTiles[2].style.top='0%';
            whiteTiles[2].style.backgroundColor = 'white';
            break;
        }
        case 102:
        case 70: {
            whiteTiles[3].style.top='0%';
            whiteTiles[3].style.backgroundColor = 'white';
            break;
        }
        case 103:
        case 71: {
            whiteTiles[4].style.top='0%';
            whiteTiles[4].style.backgroundColor = 'white';
            break;
        }
        case 104:
        case 72: {
            whiteTiles[5].style.top='0%';
            whiteTiles[5].style.backgroundColor = 'white';
            break;
        }
        case 106:
        case 74: {
            whiteTiles[6].style.top='0%';
            whiteTiles[6].style.backgroundColor = 'white';
            break;
        }
        case 107:
        case 75: {
            whiteTiles[7].style.top='0%';
            whiteTiles[7].style.backgroundColor = 'white';
            break;
        }
        case 108: 
        case 76: {
            whiteTiles[8].style.top='0%';
            whiteTiles[8].style.backgroundColor = 'white';
            break;
        }
        case 186: {
            whiteTiles[9].style.top='0%';
            whiteTiles[9].style.backgroundColor = 'white';
            break;
        }
        case 222: {
            whiteTiles[10].style.top='0%';
            whiteTiles[10].style.backgroundColor = 'white';
            break;
        }
        case 122:
        case 90: {
            whiteTiles[11].style.top='0%';
            whiteTiles[11].style.backgroundColor = 'white';
            break;
        }
        case 120:
        case 88: {
            whiteTiles[12].style.top='0%';
            whiteTiles[12].style.backgroundColor = 'white';
            break;
        }
        case 99: 
        case 67: {
            whiteTiles[13].style.top='0%';
            whiteTiles[13].style.backgroundColor = 'white';
            break;
        }
        case 118: 
        case 86: {
            whiteTiles[14].style.top='0%';
            whiteTiles[14].style.backgroundColor = 'white';
            break;
        }
        case 98: 
        case 66: {
            whiteTiles[15].style.top='0%';
            whiteTiles[15].style.backgroundColor = 'white';
            break;
        }
        case 110: 
        case 78: {
            whiteTiles[16].style.top='0%';
            whiteTiles[16].style.backgroundColor = 'white';
            break;
        }
        case 109:
        case 77: {
            whiteTiles[17].style.top='0%';
            whiteTiles[17].style.backgroundColor = 'white';
            break;
        }
        case 188: {
            whiteTiles[18].style.top='0%';
            whiteTiles[18].style.backgroundColor = 'white';
            break;
        }
        case 190: {
            whiteTiles[19].style.top='0%';
            whiteTiles[19].style.backgroundColor = 'white';
            break;
        }
        case 191: {
            whiteTiles[20].style.top='0%';
            whiteTiles[20].style.backgroundColor = 'white';
            break;
        }
        // black tile keycodes
        case 81: {
            blackTiles[0].style.top = '0%';
            blackTiles[0].style.backgroundColor = 'black';
            break;
        }
        case 87: {
            blackTiles[1].style.top = '0%';
            blackTiles[1].style.backgroundColor = 'black';
            break;
        }
        case 69: {
            blackTiles[2].style.top = '0%';
            blackTiles[2].style.backgroundColor = 'black';
            break;
        }
        case 82: {
            blackTiles[3].style.top = '0%';
            blackTiles[3].style.backgroundColor = 'black';
            break;
        }
        case 84: {
            blackTiles[4].style.top = '0%';
            blackTiles[4].style.backgroundColor = 'black';
            break;
        }
        case 89: {
            blackTiles[5].style.top = '0%';
            blackTiles[5].style.backgroundColor = 'black';
            break;
        }
        case 85: {
            blackTiles[6].style.top = '0%';
            blackTiles[6].style.backgroundColor = 'black';
            break;
        }
        case 73: {
            blackTiles[7].style.top = '0%';
            blackTiles[7].style.backgroundColor = 'black';
            break;
        }
        case 79: {
            blackTiles[8].style.top = '0%';
            blackTiles[8].style.backgroundColor = 'black';
            break;
        }
        case 80: {
            blackTiles[9].style.top = '0%';
            blackTiles[9].style.backgroundColor = 'black';
            break;
        }
        case 219: {
            blackTiles[10].style.top = '0%';
            blackTiles[10].style.backgroundColor = 'black';
            break;
        }
        case 221: {
            blackTiles[11].style.top = '0%';
            blackTiles[11].style.backgroundColor = 'black';
            break;
        }
        case 48: {
            blackTiles[12].style.top = '0%';
            blackTiles[12].style.backgroundColor = 'black';
            break;
        }
        case 189: {
            blackTiles[13].style.top = '0%';
            blackTiles[13].style.backgroundColor = 'black';
            break;
        }
        case 187: {
            blackTiles[14].style.top = '0%';
            blackTiles[14].style.backgroundColor = 'black';
            break;
        }

    }
    
}