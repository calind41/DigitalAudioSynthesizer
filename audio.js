let pianoTiles = document.querySelectorAll('.wrapper .middle .piano-wrap .piano-tiles');



pianoTiles[0].children[0].addEventListener("click",handleeClick);
pianoTiles[0].children[1].addEventListener("click",handleeClick);
pianoTiles[0].children[2].addEventListener("click",handleeClick);
pianoTiles[0].children[3].addEventListener("click",handleeClick);
pianoTiles[0].children[4].addEventListener("click",handleeClick);
pianoTiles[0].children[5].addEventListener("click",handleeClick);
pianoTiles[0].children[6].addEventListener("click",handleeClick);

pianoTiles[0].children[7].addEventListener("click",handleeClick);
pianoTiles[0].children[8].addEventListener("click",handleeClick);
pianoTiles[0].children[9].addEventListener("click",handleeClick);
pianoTiles[0].children[10].addEventListener("click",handleeClick);
pianoTiles[0].children[11].addEventListener("click",handleeClick);
pianoTiles[0].children[12].addEventListener("click",handleeClick);
pianoTiles[0].children[13].addEventListener("click",handleeClick);

pianoTiles[0].children[14].addEventListener("click",handleeClick);
pianoTiles[0].children[15].addEventListener("click",handleeClick);
pianoTiles[0].children[16].addEventListener("click",handleeClick);
pianoTiles[0].children[17].addEventListener("click",handleeClick);
pianoTiles[0].children[18].addEventListener("click",handleeClick);
pianoTiles[0].children[19].addEventListener("click",handleeClick);
pianoTiles[0].children[20].addEventListener("click",handleeClick);

pianoTiles[0].children[21].children[0].addEventListener("click",handleeClick);
pianoTiles[0].children[21].children[1].addEventListener("click",handleeClick);
pianoTiles[0].children[21].children[2].addEventListener("click",handleeClick);
pianoTiles[0].children[21].children[3].addEventListener("click",handleeClick);
pianoTiles[0].children[21].children[4].addEventListener("click",handleeClick);
pianoTiles[0].children[21].children[5].addEventListener("click",handleeClick);
pianoTiles[0].children[21].children[6].addEventListener("click",handleeClick);
pianoTiles[0].children[21].children[7].addEventListener("click",handleeClick);
pianoTiles[0].children[21].children[8].addEventListener("click",handleeClick);
pianoTiles[0].children[21].children[9].addEventListener("click",handleeClick);
pianoTiles[0].children[21].children[10].addEventListener("click",handleeClick);
pianoTiles[0].children[21].children[11].addEventListener("click",handleeClick);
pianoTiles[0].children[21].children[12].addEventListener("click",handleeClick);
pianoTiles[0].children[21].children[13].addEventListener("click",handleeClick);
pianoTiles[0].children[21].children[14].addEventListener("click",handleeClick);


function handleeClick (evt)  {
    let tile = evt.currentTarget;

    let attack = envelope[0].children[0].value;
    let decay = envelope[0].children[1].value;
    let sustain = envelope[0].children[2].value;
    let release = envelope[0].children[3].value;
    let idx = Number(document.getElementById('synth-type').value);
    if (idx-1 === 0) {
    
        synths[idx-1] = new Tone.DuoSynth({
            "voice0": {
                "filterEnvelope": {
                    "attack": Number(attack),
                    "decay": Number(decay),
                    "sustain": Number(sustain),
                    "release": Number(release)
                },
                "envelope": {
                    "attack": Number(attack),
                    "decay": Number(decay),
                    "sustain": Number(sustain),
                    "release": Number(release)
                }
            },
            "voice1": {
                "filterEnvelope": {
                    "attack": Number(attack),
                    "decay": Number(decay),
                    "sustain": Number(sustain),
                    "release": Number(release)
                },
                "envelope": {
                    "attack": Number(attack),
                    "decay": Number(decay),
                    "sustain": Number(sustain),
                    "release": Number(release)
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
 
  switch (tile.id) {
      case "wt1": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('c3','7n');
        break;
      }
      case "wt2": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('d3','7n');
        break;
      }
      case "wt3": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('e3','7n');
        break;
      }
      case "wt4": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('f3','7n');
        break;
      }
      case  "wt5": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('g3','7n');
        break;
      }
      case "wt6": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('a3','7n');
        break;
      }
      case "wt7": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('b3','7n');
        break;
      }
      case "wt8": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('c4','7n');
        break;
      }
      case "wt9": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('d4','7n');
        break;
      }
      case "wt10": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('e4','7n');
        break;
      }
      case "wt11": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('f4','7n');
        break;
      }
      case "wt12": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('g4','7n');
        break;
      }
      case "wt13": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('a4','7n');
        break;
      }
      case "wt14": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('b4','7n');
        break;
      }
      case "wt15": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('c5','7n');
        break;
      }
      case "wt16": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('d5','7n');
        break;
      }
      case "wt17": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('e5','7n');
        break;
      }
      case "wt18": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('f5','7n');
        break;
      }
      case "wt19": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('g5','7n');
        break;
      }
      case "wt20": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('a5','7n');
        break;
      }
      case "wt21": {
        let idx = Number(document.getElementById('synth-type').value);
        synths[idx-1].triggerAttackRelease('b5','7n');
        break;
      }
      // black tiles 
      case "bt1": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('C#3','7n');
        break;
      }
      case "bt2": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('d#3','7n');
        break;
      }
      case "bt3": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('f#3','7n');
        break;
      }
      case "bt4": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('g#3','7n');
        break;
      }
      case "bt5": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('a#3','7n');
        break;
      }
      case "bt6": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('C#4','7n');
        break;
      }
      case "bt7": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('d#4','7n');
        break;
      }
      case "bt8": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('f#4','7n');
        break;
      }
      case "bt9": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('g#4','7n');
        break;
      }
      case "bt10": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('a#4','7n');
        break;
      }
      case "bt11": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('c#5','7n');
        break;
      }
      case "bt12": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('d#5','7n');
        break;
      }
      case "bt13": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('f#5','7n');
        break;
      }
      case "bt14": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('g#5','7n');
        break;
      }
      case "bt15": {
        let idx = Number(sel.value);
        synths[idx-1].triggerAttackRelease('a#5','7n');
        break;
      }
  }
}