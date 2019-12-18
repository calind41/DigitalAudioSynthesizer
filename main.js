
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

// // adding keypress events 
// for (let i = 0; i < 21; i++ ) {
//     whiteTiles[i].onkeydown = () => {
//         // let  keyCode = event.which || event.keyCode;
//         console.log('wtf');
//     }
// }



// ------------------------------------------------------------------------DUO SYNTH---------------------------------------------------------------------

const audio = document.querySelector('audio');
const actx = Tone.context;
const dest = actx.createMediaStreamDestination();
const recorder = new MediaRecorder(dest.stream);


let synths = [];
let duoSynth = new Tone.DuoSynth().toMaster();
let monoS = new Tone.MonoSynth().toMaster();
let amSynth = new Tone.AMSynth().toMaster();
duoSynth.connect(dest);
monoS.connect(dest);
amSynth.connect(dest);
synths[0] = duoSynth;
synths[1] = monoS;
synths[2] = amSynth;

 
// div containing 4 input ranges 
let duoSynthVals = document.querySelectorAll('.duo-synth')[0];
let monoSynthVals = document.querySelectorAll('.mono-synth')[0];
let amSynthVals = document.querySelectorAll('.am-synth')[0];


let attack = undefined;
let decay = undefined;
let sustain = undefined;
let release = undefined;

let sel = document.getElementById('synth-type');


// hide controls for other types of synths and show only the one is selected
document.getElementById('synth-type').onchange = (evt) => {

    if (evt.currentTarget.value !== '0') {
        drums.style.backgroundColor='rgb(48, 43, 43)';
        bass.style.backgroundColor='rgb(48, 43, 43)';
        guitar.style.backgroundColor='rgb(48, 43, 43)';
        cymbal.style.backgroundColor='rgb(48, 43, 43)';
        percussion.style.backgroundColor='rgb(48, 43, 43)';
}
    let selVal = evt.currentTarget.value;
    let duoSynth = document.querySelectorAll('.duo-synth')[0];
    let monoSynth = document.querySelectorAll('.mono-synth')[0];
    let amSynth = document.querySelectorAll('.am-synth')[0];
    let musicMaker = document.querySelectorAll('.song-maker')[0];
    if (selVal === '0') {
        // nothing is selected so display nothing
        duoSynth.style.display="none";
        monoSynth.style.display="none";
        amSynth.style.display="none";
        musicMaker.style.display="block";
    }
    else if (selVal === '1') {
        // display duo synth
        duoSynth.style.display="block";
        monoSynth.style.display="none";
        amSynth.style.display="none";
        musicMaker.style.display="none";
    }
    else if (selVal === '2') {
        // display duo synth
        monoSynth.style.display="block";
        duoSynth.style.display="none";
        amSynth.style.display="none";
        musicMaker.style.display="none";
    }
    else if (selVal === '3') {
        // display duo synth
        amSynth.style.display="block";
        duoSynth.style.display="none";
        monoSynth.style.display="none";
        musicMaker.style.display="none";
    }
}

duoSynthVals.children[0].children[1].onchange = () => {
    let vibratoAmount = duoSynthVals.children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "vibratoAmount" : Number(vibratoAmount)
        }).toMaster();
        synths[idx-1].connect(dest);
    }
}

duoSynthVals.children[1].children[1].onchange = () => {
    let vibratoRate = duoSynthVals.children[1].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "vibratoRate" : Number(vibratoRate)
        }).toMaster();
        synths[idx-1].connect(dest);
    }
}

duoSynthVals.children[2].children[1].onchange = () => {
    let harmonicity = duoSynthVals.children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "harmonicity" : Number(harmonicity)
        }).toMaster();
        synths[idx-1].connect(dest);
    }
}

// ----------------------------------------------------------------------- duo synth voice 0 ------------------------------------------------------
// freq env voice0
duoSynthVals.children[3].children[3].children[0].children[1].onchange = () => {
    let attack = duoSynthVals.children[3].children[3].children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[3].children[3].children[0].children[0].children[0];
    displayValueElem.innerHTML = "" + attack;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "filterEnvelope" : {
                    "attack": Number(attack)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);
    }
}
duoSynthVals.children[3].children[3].children[1].children[1].onchange = () => {
    let decay = duoSynthVals.children[3].children[3].children[1].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[3].children[3].children[1].children[0].children[0];
    displayValueElem.innerHTML = "" + decay;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "filterEnvelope" : {
                    "decay": Number(decay)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
duoSynthVals.children[3].children[3].children[2].children[1].onchange = () => {
    let sustain = duoSynthVals.children[3].children[3].children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[3].children[3].children[2].children[0].children[0];
    displayValueElem.innerHTML = "" + sustain;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "filterEnvelope" : {
                    "sustain": Number(sustain)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
duoSynthVals.children[3].children[3].children[3].children[1].onchange = () => {
    let release = duoSynthVals.children[3].children[3].children[3].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[3].children[3].children[3].children[0].children[0];
    displayValueElem.innerHTML = "" + release;
    displayValueElem.style.color="white";
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
duoSynthVals.children[3].children[5].children[0].children[1].onchange = () => {
    let attack = duoSynthVals.children[3].children[5].children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[3].children[5].children[0].children[0].children[0];
    displayValueElem.innerHTML = "" + attack;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "envelope" : {
                    "attack": Number(attack)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
duoSynthVals.children[3].children[5].children[1].children[1].onchange = () => {
    let decay = duoSynthVals.children[3].children[5].children[1].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[3].children[5].children[1].children[0].children[0];
    displayValueElem.innerHTML = "" + decay;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "envelope" : {
                    "decay": Number(decay)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
duoSynthVals.children[3].children[5].children[2].children[1].onchange = () => {
    let sustain = duoSynthVals.children[3].children[5].children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[3].children[5].children[2].children[0].children[0];
    displayValueElem.innerHTML = "" + sustain;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "envelope" : {
                    "sustain": Number(sustain)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}

duoSynthVals.children[3].children[5].children[3].children[1].onchange = () => {
    let release = duoSynthVals.children[3].children[5].children[3].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[3].children[5].children[3].children[0].children[0];
    displayValueElem.innerHTML = "" + release;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice0" : {
                "envelope" : {
                    "release": Number(release)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
// end amp env voice0 

// // voice0 volume
// duoSynthVals.children[3].children[6].children[1].onchange = () => {
//     let volume = duoSynthVals.children[3].children[6].children[1].value;
//     let idx = Number(document.getElementById('synth-type').value);
//     if (idx-1 === 0) {
//         synths[idx-1] = new Tone.DuoSynth({
//             "voice0" : {
//                 "volume": Number(volume)
//             }
//         }).toMaster();
//         synths[idx-1].connect(dest);

//     }
// }
// // voice0 portamento 
// duoSynthVals.children[3].children[7].children[1].onchange = () => {
//     let portamento = duoSynthVals.children[3].children[7].children[1].value;
//     let idx = Number(document.getElementById('synth-type').value);
//     if (idx-1 === 0) {
//         synths[idx-1] = new Tone.DuoSynth({
//             "voice0": {
//                 "portamento": Number(portamento)
//             }
//         }).toMaster();
//         synths[idx-1].connect(dest);

//     }
// }

// voice0 oscillator type 
duoSynthVals.children[3].children[7].onchange = (evt) => {
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
      synths[idx-1].connect(dest);

  }  
}

// ----------------------------------------------------------------------- duo synth voice 1 ------------------------------------------------------
// freq-env1 
duoSynthVals.children[4].children[3].children[0].children[1].onchange = () => {
    let attack = duoSynthVals.children[4].children[3].children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[4].children[3].children[0].children[0].children[0];
    displayValueElem.innerHTML = "" + attack;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "filterEnvelope" : {
                    "attack": Number(attack)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}

duoSynthVals.children[4].children[3].children[1].children[1].onchange = () => {
    let decay = duoSynthVals.children[4].children[3].children[1].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[4].children[3].children[1].children[0].children[0];
    displayValueElem.innerHTML = "" + decay;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "filterEnvelope" : {
                    "decay": Number(decay)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
duoSynthVals.children[4].children[3].children[2].children[1].onchange = () => {
    let sustain = duoSynthVals.children[4].children[3].children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[4].children[3].children[2].children[0].children[0];
    displayValueElem.innerHTML = "" + sustain;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "filterEnvelope" : {
                    "sustain": Number(sustain)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
duoSynthVals.children[4].children[3].children[3].children[1].onchange = () => {
    let release = duoSynthVals.children[4].children[3].children[3].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[4].children[3].children[3].children[0].children[0];
    displayValueElem.innerHTML = "" + release;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "filterEnvelope" : {
                    "release": Number(release)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
// end freq env voice1

// amp env voice1
duoSynthVals.children[4].children[5].children[0].children[1].onchange = () => {
    let attack = duoSynthVals.children[4].children[5].children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[4].children[5].children[0].children[0].children[0];
    displayValueElem.innerHTML = "" + attack;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "envelope" : {
                    "attack": Number(attack)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
duoSynthVals.children[4].children[5].children[1].children[1].onchange = () => {
    let decay = duoSynthVals.children[4].children[5].children[1].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[4].children[5].children[1].children[0].children[0];
    displayValueElem.innerHTML = "" + decay;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "envelope" : {
                    "decay": Number(decay)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
duoSynthVals.children[4].children[5].children[2].children[1].onchange = () => {
    let sustain = duoSynthVals.children[4].children[5].children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[4].children[5].children[2].children[0].children[0];
    displayValueElem.innerHTML = "" + sustain;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "envelope" : {
                    "sustain": Number(sustain)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
duoSynthVals.children[4].children[5].children[3].children[1].onchange = () => {
    let release = duoSynthVals.children[4].children[5].children[3].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    let displayValueElem = duoSynthVals.children[4].children[5].children[3].children[0].children[0];
    displayValueElem.innerHTML = "" + release;
    displayValueElem.style.color="white";
    if (idx-1 === 0) {
        synths[idx-1] = new Tone.DuoSynth({
            "voice1" : {
                "envelope" : {
                    "release": Number(release)
                }
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
// end envelope voice1


// duoSynthVals.children[4].children[6].children[1].onchange = () => {
//     let volume = duoSynthVals.children[4].children[6].children[1].value;
//     let idx = Number(document.getElementById('synth-type').value);
//     if (idx-1 === 0) {
//         synths[idx-1] = new Tone.DuoSynth({
//             "voice1" : {
//                 "volume": Number(volume)
//             }
//         }).toMaster();
//         synths[idx-1].connect(dest);

//     }
// }

// duoSynthVals.children[4].children[7].children[1].onchange = () => {
//     let portamento = duoSynthVals.children[4].children[7].children[1].value;
//     let idx = Number(document.getElementById('synth-type').value);
//     if (idx-1 === 0) {
//         synths[idx-1] = new Tone.DuoSynth({
//             "voice1": {
//                 "portamento": Number(portamento)
//             }
//         }).toMaster();
//         synths[idx-1].connect(dest);

//     }
// }

// duoSynthVals.children[4].children[9].onchange = (evt) => {
//     let oscTypeValue = evt.currentTarget.value;
//     let idx = Number(document.getElementById('synth-type').value);
//     if (idx-1 === 0) {
//         synths[idx-1] = new Tone.DuoSynth({
//             "voice1": {
//                 "oscillator" : {
//                     "type" : oscTypeValue
//                 }
//             }
//         }).toMaster();
//         synths[idx-1].connect(dest);

//     }  
// }
//------------------------------------------------------------------END DUO SYNTH----------------------------------------------------------------




//-------------------------------------------------------------------MONO SYNTH------------------------------------------------------------------

// freq env 
monoSynthVals.children[1].children[0].children[1].onchange = () => {
    let attack = monoSynthVals.children[1].children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({ 
            "filterEnvelope" : {
                "attack": Number(attack)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
monoSynthVals.children[1].children[1].children[1].onchange = () => {
    let decay = monoSynthVals.children[1].children[1].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({ 
            "filterEnvelope" : {
                "decay": Number(decay)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
monoSynthVals.children[1].children[2].children[1].onchange = () => {
    let sustain = monoSynthVals.children[1].children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({ 
            "filterEnvelope" : {
                "sustain": Number(sustain)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
monoSynthVals.children[1].children[3].children[1].onchange = () => {
    let release = monoSynthVals.children[1].children[3].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({ 
            "filterEnvelope" : {
                "release": Number(release)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}

// amp env 
monoSynthVals.children[3].children[0].children[1].onchange = () => {
    let attack = monoSynthVals.children[3].children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({ 
            "envelope" : {
                "attack": Number(attack)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
monoSynthVals.children[3].children[1].children[1].onchange = () => {
    let decay = monoSynthVals.children[3].children[1].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({ 
            "envelope" : {
                "decay": Number(decay)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
monoSynthVals.children[3].children[2].children[1].onchange = () => {
    let sustain = monoSynthVals.children[3].children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({ 
            "envelope" : {
                "sustain": Number(sustain)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}
monoSynthVals.children[3].children[3].children[1].onchange = () => {
    let release = monoSynthVals.children[3].children[3].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({ 
            "envelope" : {
                "release": Number(release)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}

// oscillator type 
monoSynthVals.children[5].onchange = (evt) => {
    let oscTypeValue = evt.currentTarget.value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({
            "oscillator" : {
                "type" : oscTypeValue
            }
        }).toMaster();
        synths[idx-1].connect(dest);

  }
}

// filter values 
monoSynthVals.children[7].children[0].children[1].onchange = () => {
    let q = monoSynthVals.children[7].children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({ 
            "filter" : {
                "Q": Number(q)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}

monoSynthVals.children[7].children[1].children[1].onchange = (evt) => {
    let filterType = evt.currentTarget.value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({
            "filter" : {
                "type" : filterType
            }
        }).toMaster();
        synths[idx-1].connect(dest);

  }
}

monoSynthVals.children[7].children[2].children[1].onchange = () => {
    let rolloff = monoSynthVals.children[7].children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 1) {
        synths[idx-1] = new Tone.MonoSynth({ 
            "filter" : {
                "rolloff": Number(rolloff)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

    }
}

//-----------------------------------------------------------END MONOSYNTH-----------------------------------------------------------------------




//-----------------------------------------------------------AM SYNTH---------------------------------------------------------------------------

// amp env (envelope)
amSynthVals.children[2].children[0].children[1].onchange = () => {
    let attack = amSynthVals.children[2].children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "envelope" : {
                "attack" : Number(attack)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

  }
}
amSynthVals.children[2].children[1].children[1].onchange = () => {
    let decay = amSynthVals.children[2].children[1].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "envelope" : {
                "decay" : Number(decay)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

  }
}
amSynthVals.children[2].children[2].children[1].onchange = () => {
    let sustain = amSynthVals.children[2].children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "envelope" : {
                "sustain" : Number(sustain)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

  }
}
amSynthVals.children[2].children[3].children[1].onchange = () => {
    let release = amSynthVals.children[2].children[3].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "envelope" : {
                "release" : Number(release)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

  }
}

// amp env (modulation env)
amSynthVals.children[5].children[0].children[1].onchange = () => {
    let attack = amSynthVals.children[5].children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "modulationEnvelope" : {
                "attack" : Number(attack)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

  }
}
amSynthVals.children[5].children[1].children[1].onchange = () => {
    let decay = amSynthVals.children[5].children[1].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "modulationEnvelope" : {
                "decay" : Number(decay)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

  }
}
amSynthVals.children[5].children[2].children[1].onchange = () => {
    let sustain = amSynthVals.children[5].children[2].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "modulationEnvelope" : {
                "sustain" : Number(sustain)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

  }
}
amSynthVals.children[5].children[3].children[1].onchange = () => {
    let release = amSynthVals.children[5].children[3].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "modulationEnvelope" : {
                "release" : Number(release)
            }
        }).toMaster();
        synths[idx-1].connect(dest);

  }
}

// harmonicity
amSynthVals.children[0].children[1].onchange = () => {
    let h = amSynthVals.children[0].children[1].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "harmonicity" : Number(h)
        }).toMaster();
        synths[idx-1].connect(dest);

  }
}

// modulation type
amSynthVals.children[3].children[1].onchange = (evt) => {
    let modType = evt.currentTarget.value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "modulation" : {
                "type" : modType
            }
        }).toMaster();
        synths[idx-1].connect(dest);

  }
}

// osc type 
amSynthVals.children[6].children[1].onchange = (evt) => {
    let oscType = evt.currentTarget.value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 2) {
        synths[idx-1] = new Tone.AMSynth({
            "oscillator" : {
                "type" : oscType
            }
        }).toMaster();
        synths[idx-1].connect(dest);

  }
}

// --------------------------------------------------------- END AM SYNTH ------------------------------------------------------------------------

window.onkeydown = (evt) => {
    sel.blur();
    let code = evt.keyCode;

    // Values For DuoSynth----------------------------------------
    let vibratoAmount = duoSynthVals.children[0].children[1].value;
    let vibratoRate = duoSynthVals.children[1].children[1].value;
    let harmonicity = duoSynthVals.children[2].children[1].value;

    // let v0Volume = duoSynthVals.children[3].children[6].children[1].value;
    // let v0Portamento = duoSynthVals.children[3].children[7].children[1].value;
    let v0OscType = duoSynthVals.children[3].children[7].options[duoSynthVals.children[3].children[7].selectedIndex].value;

    let v0FreqEnvAttack = duoSynthVals.children[3].children[3].children[0].children[1].value;
    let v0FreqEnvDecay = duoSynthVals.children[3].children[3].children[1].children[1].value;
    let v0FreqEnvSustain = duoSynthVals.children[3].children[3].children[2].children[1].value;
    let v0FreqEnvRelease = duoSynthVals.children[3].children[3].children[3].children[1].value;

    let v0AmpEnvAttack = duoSynthVals.children[3].children[5].children[0].children[1].value;
    let v0AmpEnvDecay = duoSynthVals.children[3].children[5].children[1].children[1].value;
    let v0AmpEnvSustain = duoSynthVals.children[3].children[5].children[2].children[1].value;
    let v0AmpEnvRelease = duoSynthVals.children[3].children[5].children[3].children[1].value;

    // let v1Volume = duoSynthVals.children[3].children[6].children[1].value;
    // let v1Portamento = duoSynthVals.children[3].children[7].children[1].value;
    // let v1OscType = duoSynthVals.children[3].children[9].options[duoSynthVals.children[3].children[9].selectedIndex].value;

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



//----------------------------------------------------- RECORDING PART --------------------------------------------------------------------------
let chunks = [];

recorder.ondataavailable = evt => chunks.push(evt.data);
recorder.onstop = evt => {
    let blob = new Blob(chunks,{ type: 'audio/ogg; codecs=opus'});
    //  audio.src = URL.createObjectURL(blob);
     a = new Audio();
     context = new (window.AudioContext || window.webkitAudioContext)();
     analyser = context.createAnalyser();
     a.src = URL.createObjectURL(blob); // the source path
     document.querySelector('.save-export').href = a.src;
     document.querySelector('.save-export').download='file.mp3';
     source = context.createMediaElementSource(a);
     source.connect(analyser);
     analyser.connect(context.destination);
     frequency_array = new Uint8Array(analyser.frequencyBinCount);
     a.play();
     animationLooper();
     chunks = [];
}

let playBackUp = document.querySelector('.right-side .record-controls .tempo .change-tempo i:first-child');
let playBackDown = document.querySelector('.right-side .record-controls .tempo .change-tempo i:nth-child(2)');

playBackUp.onclick = () => {
    a.playbackRate += 0.1;
    console.log(a.playbackRate);
    document.querySelector('.t-nr').innerHTML = "" + a.playbackRate.toFixed(1);
}

playBackDown.onclick = () => {
    a.playbackRate -= 0.1;
    console.log(a.playbackRate);
    document.querySelector('.t-nr').innerHTML = "" + a.playbackRate.toFixed(1);
}



let paused = false;
document.querySelector('canvas').onclick = () => {
    if (paused){
        paused = false;
        a.play();
    }
    else {
        a.pause();
        paused = true;
    }
}

// play and stop
let intervalID;
document.querySelector('#start_record').onclick = () => {
    console.log('started');
    totalSeconds = 0;
    intervalID = setInterval(countTimer,1000);
    recorder.start();
}
document.querySelector('.stop').onclick = () => {
    recorder.stop();
    clearInterval(intervalID);
} 
var duration;
document.querySelector('#playbtn').onclick = () => {
    duration = a.duration;
    let display = document.querySelector('.timer');
    if (duration > 0) {
        console.log('duration is ' + duration);
        console.log('esteeee ');
        startTimer(duration,display);
        
    }
        
    a.play();
}

//----------------------------------------------------END RECORDING PART--------------------------------------------------------------------------


//--------------------------------------------------- VISUALIZE RECORDING PART-------------------------------------------------------------------
let canvas, 
    ctx, 
    center_x, 
    center_y, 
    radius, 
    bars, 
    x_end, 
    y_end, 
    bar_height, 
    bar_width,
    frequency_array,a;

bars = 230;
bar_width = 2;

function initPage(){
    a = new Audio();
    context = new (window.AudioContext || window.webkitAudioContext)();
    analyser = context.createAnalyser();
    a.src = fileName; // the source path
    source = context.createMediaElementSource(a);
    source.connect(analyser);
    analyser.connect(context.destination);
    frequency_array = new Uint8Array(analyser.frequencyBinCount);
    a.play();
    animationLooper();
}

function animationLooper(){
    // set to the size of device
    canvas = document.getElementById("renderer");
    // canvas.width = 500;
    // canvas.height = 1000;
    ctx = canvas.getContext("2d");
    // find the center of the window
    center_x = canvas.width / 2;
    center_y = canvas.height / 2;
    radius = 50;
    // style the background
    var gradient = ctx.createLinearGradient(0,0,0,canvas.height);
    gradient.addColorStop(0,"rgba(35, 7, 77, 1)");
    gradient.addColorStop(1,"rgba(204, 83, 51, 1)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    //draw a circle
    ctx.beginPath();
    ctx.arc(center_x,center_y,radius,0,2*Math.PI);
    ctx.stroke();
    analyser.getByteFrequencyData(frequency_array);
    for(var i = 0; i < bars; i++) {
        //divide a circle into equal parts
        rads = Math.PI * 2 / bars;
        bar_height = frequency_array[i]*0.2;
        // set coordinates
        x = center_x + Math.cos(rads * i) * (radius);
        y = center_y + Math.sin(rads * i) * (radius);
        x_end = center_x + Math.cos(rads * i)*(radius + bar_height);
        y_end = center_y + Math.sin(rads * i)*(radius + bar_height);
        //draw a bar
        drawBar(x, y, x_end, y_end, bar_width,frequency_array[i]);
    }
    window.requestAnimationFrame(animationLooper);
}

// for drawing a bar
function drawBar(x1, y1, x2, y2, width,frequency) {
    var lineColor = "rgb(" + frequency + ", " + frequency + ", " + 205 + ")";
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}

//----------------------------------------------- END VISUALIZING RECORDING PART ----------------------------------------------------------------