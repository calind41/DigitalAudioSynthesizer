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
// ------------------------------------------------------------------------DUO SYNTH---------------------------------------------------------------------

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
