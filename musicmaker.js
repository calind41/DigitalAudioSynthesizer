function sequencerV1() {
    
    const openHat = new Tone.Player("./drums/open_hat.wav").toMaster();
    const closedHat = new Tone.Player("./drums/closed_hat.wav").toMaster();
    const clap = new Tone.Player("./drums/clap-808.wav").toMaster();

    const kick = new Tone.Player("./drums/kick-electro01.wav").toMaster();
    const snare = new Tone.Player("./drums/snare-lofi02.wav").toMaster();
  
    
    let index = 0;

    Tone.Transport.scheduleRepeat(repeat,"16n");

    Tone.Transport.start();
    

    function repeat()  {
        if (clicked != 1)
            Tone.Transport.cancel();
        else
            Tone.Transport.start();
        let step = index % 16;
        console.log(step);
        let openHatInputs = document.querySelector(`.c1 span:nth-child(${step + 1})`);
        let closedHatInputs = document.querySelector(`.c2 span:nth-child(${step + 1})`);
        let clapInputs = document.querySelector(`.c3 span:nth-child(${step + 1})`);

        let kickInputs = document.querySelector(`.c4 span:nth-child(${step + 1})`);
        let snareInputs = document.querySelector(`.c5 span:nth-child(${step + 1})`);
       
        if (openHatInputs.style.backgroundColor === 'goldenrod') {
            openHat.start();
        }
        if (closedHatInputs.style.backgroundColor === 'goldenrod') {
            closedHat.start();
        }
        if (clapInputs.style.backgroundColor === 'goldenrod') {
            clap.start();
        }

        if (kickInputs.style.backgroundColor === 'goldenrod') {
            kick.start();
        }
        if (snareInputs.style.backgroundColor === 'goldenrod') {
            snare.start();
        }
        index++;
        
     
    }
}

// bass samples 
function sequencerV2() {
    const casioBass2 = new Tone.Player("./BASS/acoustic/Korg-NS5R-AcousticBs-C3.wav").toMaster();
    const casioBDB = new Tone.Player("./BASS/acoustic/Kawai-K5000W-Ac-Bass1-C2.wav").toMaster();
    const casioPulse = new Tone.Player("./BASS/acoustic/Kawai-K1r-Acoustic-Bass-C2.wav").toMaster();

    const casioQuickB = new Tone.Player("./BASS/acoustic/Alesis-Fusion-Acoustic-Bass-C2 (2).wav").toMaster();
    const casioSB = new Tone.Player("./BASS/synth/casio-synth-bass.wav").toMaster();
    
  
    
    let index = 0;


    Tone.Transport.scheduleRepeat(repeat,"16n");

    Tone.Transport.start();
    

    function repeat()  {
        if (clicked != 2)
            Tone.Transport.cancel();
        else
            Tone.Transport.start();
        let step = index % 16;
        console.log(step);
        let casioBass2Inputs = document.querySelector(`.c1 span:nth-child(${step + 1})`);
        let casioBDBInputs = document.querySelector(`.c2 span:nth-child(${step + 1})`);
        let casioPulseInputs = document.querySelector(`.c3 span:nth-child(${step + 1})`);

        let casioQuickBInputs = document.querySelector(`.c4 span:nth-child(${step + 1})`);
        let casioSBInputs = document.querySelector(`.c5 span:nth-child(${step + 1})`);
       
        if (casioBass2Inputs.style.backgroundColor === 'goldenrod') {
            casioBass2.start();
        }
        if (casioBDBInputs.style.backgroundColor === 'goldenrod') {
            casioBDB.start();
        }
        if (casioPulseInputs.style.backgroundColor === 'goldenrod') {
            casioPulse.start();
        }

        if (casioQuickBInputs.style.backgroundColor === 'goldenrod') {
            casioQuickB.start();
        }
        if (casioSBInputs.style.backgroundColor === 'goldenrod') {
            casioSB.start();
        }
        index++;
        
        
    }
}

// guitar
function sequencerV3() {
    const casioBass2 = new Tone.Player("./GUITAR/acoustic/Kawai-K5000W-SteelGt1-C3.wav").toMaster();
    const casioBDB = new Tone.Player("./GUITAR/acoustic/Ensoniq-SQ-1-ClassicGuitar-C5.wav").toMaster();
    const casioPulse = new Tone.Player("./GUITAR/acoustic/Ensoniq-SQ-1-ClassicGuitar-C3.wav").toMaster();

    const casioQuickB = new Tone.Player("./GUITAR/acoustic/E-Mu-Proteus-FX-AcStereo-C3.wav").toMaster();
    const casioSB = new Tone.Player("./GUITAR/acoustic/Alesis-Fusion-Nylon-String-Guitar-C4.wav").toMaster();
    
  
    
    let index = 0;


    Tone.Transport.scheduleRepeat(repeat,"16n");

    Tone.Transport.start();
   

    function repeat()  {
        if (clicked != 3)
            Tone.Transport.cancel();
        else
            Tone.Transport.start();
        let step = index % 16;
        console.log(step);
        let casioBass2Inputs = document.querySelector(`.c1 span:nth-child(${step + 1})`);
        let casioBDBInputs = document.querySelector(`.c2 span:nth-child(${step + 1})`);
        let casioPulseInputs = document.querySelector(`.c3 span:nth-child(${step + 1})`);

        let casioQuickBInputs = document.querySelector(`.c4 span:nth-child(${step + 1})`);
        let casioSBInputs = document.querySelector(`.c5 span:nth-child(${step + 1})`);
       
        if (casioBass2Inputs.style.backgroundColor === 'goldenrod') {
            casioBass2.start();
        }
        if (casioBDBInputs.style.backgroundColor === 'goldenrod') {
            casioBDB.start();
        }
        if (casioPulseInputs.style.backgroundColor === 'goldenrod') {
            casioPulse.start();
        }

        if (casioQuickBInputs.style.backgroundColor === 'goldenrod') {
            casioQuickB.start();
        }
        if (casioSBInputs.style.backgroundColor === 'goldenrod') {
            casioSB.start();
        }
        index++;
       
        
    }
}

// cymbal
function sequencerV4() {
    
    const casioBass2 = new Tone.Player("./z_CYMBALS/crash/Crash-Cymbal-1.wav").toMaster();
    const casioBDB = new Tone.Player("./z_CYMBALS/crash/Crash-Cymbal-2.wav").toMaster();
    const casioPulse = new Tone.Player("./z_CYMBALS/crash/Crash-Cymbal-3.wav").toMaster();

    const casioQuickB = new Tone.Player("./z_CYMBALS/crash/Crash-Cymbal-4.wav").toMaster();
    const casioSB = new Tone.Player("./z_CYMBALS/crash/Crash-Cymbal-5.wav").toMaster();
    
  
    
    let index = 0;


    Tone.Transport.scheduleRepeat(repeat,"16n");

    Tone.Transport.start();
    

    function repeat()  {
        if (clicked != 4)
            Tone.Transport.cancel();
        else
            Tone.Transport.start();
        let step = index % 16;
        console.log(step);
        let casioBass2Inputs = document.querySelector(`.c1 span:nth-child(${step + 1})`);
        let casioBDBInputs = document.querySelector(`.c2 span:nth-child(${step + 1})`);
        let casioPulseInputs = document.querySelector(`.c3 span:nth-child(${step + 1})`);

        let casioQuickBInputs = document.querySelector(`.c4 span:nth-child(${step + 1})`);
        let casioSBInputs = document.querySelector(`.c5 span:nth-child(${step + 1})`);
       
        if (casioBass2Inputs.style.backgroundColor === 'goldenrod') {
            casioBass2.start();
        }
        if (casioBDBInputs.style.backgroundColor === 'goldenrod') {
            casioBDB.start();
        }
        if (casioPulseInputs.style.backgroundColor === 'goldenrod') {
            casioPulse.start();
        }

        if (casioQuickBInputs.style.backgroundColor === 'goldenrod') {
            casioQuickB.start();
        }
        if (casioSBInputs.style.backgroundColor === 'goldenrod') {
            casioSB.start();
        }
        index++;
      
      
    }
}


// Percussions
function sequencerV5() {
    
    const casioBass2 = new Tone.Player("./Percussion/Kawai-K5000W-Marimba-C4.wav").toMaster();
    const casioBDB = new Tone.Player("./Percussion/Kawai-K5000W-Glocken-C5.wav").toMaster();
    const casioPulse = new Tone.Player("./Percussion/Kawai-K11-Open-Triangle.wav").toMaster();

    const casioQuickB = new Tone.Player("./Percussion/E-Mu-Proteus-FX-Marimba-C3.wav").toMaster();
    const casioSB = new Tone.Player("./Percussion/E-Mu-Proteus-2-Glockenspiel-C4.wav").toMaster();
    
  
    
    let index = 0;


    Tone.Transport.scheduleRepeat(repeat,"16n");

    Tone.Transport.start();
    

    function repeat()  {
        if (clicked != 5)
            Tone.Transport.cancel();
        else
            Tone.Transport.start();
        let step = index % 16;
        console.log(step);
        let casioBass2Inputs = document.querySelector(`.c1 span:nth-child(${step + 1})`);
        let casioBDBInputs = document.querySelector(`.c2 span:nth-child(${step + 1})`);
        let casioPulseInputs = document.querySelector(`.c3 span:nth-child(${step + 1})`);

        let casioQuickBInputs = document.querySelector(`.c4 span:nth-child(${step + 1})`);
        let casioSBInputs = document.querySelector(`.c5 span:nth-child(${step + 1})`);
       
        if (casioBass2Inputs.style.backgroundColor === 'goldenrod') {
            casioBass2.start();
        }
        if (casioBDBInputs.style.backgroundColor === 'goldenrod') {
            casioBDB.start();
        }
        if (casioPulseInputs.style.backgroundColor === 'goldenrod') {
            casioPulse.start();
        }

        if (casioQuickBInputs.style.backgroundColor === 'goldenrod') {
            casioQuickB.start();
        }
        if (casioSBInputs.style.backgroundColor === 'goldenrod') {
            casioSB.start();
        }
        index++;
        
       
    }
}



const spanElems = document.querySelectorAll('.song-maker span');
const size = spanElems.length;
for (let i = 0; i < size; i++) {
    
    spanElems[i].onclick = () => {
        if (clicked === -1)
            return;
        if (spanElems[i].style.backgroundColor !== "goldenrod")
            spanElems[i].style.backgroundColor = "goldenrod";
        else
            spanElems[i].style.backgroundColor = "white";
    }
}

const drums = document.querySelector('.drums');
const bass = document.querySelector('.bass');
const guitar = document.querySelector('.guitar');
const cymbal = document.querySelector('.cymbal');
const percussion = document.querySelector('.percussion');

let clicked = -1;
let stopBtn = document.querySelector('.song-maker button');
stopBtn.onclick = () => {
    for (let i = 0; i < size; i++) {
        if (spanElems[i].style.backgroundColor === "goldenrod")
            spanElems[i].style.backgroundColor = "white";
    }
    playBtn.style.backgroundColor = "white";


}
let playBtn = document.querySelector('.song-maker .play');


drums.onclick = () => {
    if (document.querySelector('#synth-type').options[document.querySelector('#synth-type').selectedIndex].value !== '0')
        return;
    if (clicked != 1) 
        count = 0;
    clicked = 1;
    playBtn.style.backgroundColor = 'white';
    drums.style.backgroundColor='gray';
    bass.style.backgroundColor='rgb(48, 43, 43)';
    guitar.style.backgroundColor='rgb(48, 43, 43)';
    cymbal.style.backgroundColor='rgb(48, 43, 43)';
    percussion.style.backgroundColor='rgb(48, 43, 43)';


    for (let i = 0; i < size; i++) {
        if (spanElems[i].style.backgroundColor === "goldenrod")
            spanElems[i].style.backgroundColor = "white";
    }
}
bass.onclick = () => {
    if (document.querySelector('#synth-type').options[document.querySelector('#synth-type').selectedIndex].value !== '0')
        return;
    if(clicked != 2)
        count = 0;
    clicked = 2;
    playBtn.style.backgroundColor = 'white';
    drums.style.backgroundColor='rgb(48, 43, 43)';
    bass.style.backgroundColor='gray';
    guitar.style.backgroundColor='rgb(48, 43, 43)';
    cymbal.style.backgroundColor='rgb(48, 43, 43)';
    percussion.style.backgroundColor='rgb(48, 43, 43)';

    for (let i = 0; i < size; i++) {
        if (spanElems[i].style.backgroundColor === "goldenrod")
            spanElems[i].style.backgroundColor = "white";
    }
}
guitar.onclick = () => {
    if (document.querySelector('#synth-type').options[document.querySelector('#synth-type').selectedIndex].value !== '0')
        return;
    if (clicked != 3)
        count = 0;
    clicked = 3;
    playBtn.style.backgroundColor = 'white';
    drums.style.backgroundColor='rgb(48, 43, 43)';
    bass.style.backgroundColor='rgb(48, 43, 43)';
    guitar.style.backgroundColor='gray';
    cymbal.style.backgroundColor='rgb(48, 43, 43)';
    percussion.style.backgroundColor='rgb(48, 43, 43)';

    for (let i = 0; i < size; i++) {
        if (spanElems[i].style.backgroundColor === "goldenrod")
            spanElems[i].style.backgroundColor = "white";
    }
}
cymbal.onclick = () => {
    if (document.querySelector('#synth-type').options[document.querySelector('#synth-type').selectedIndex].value !== '0')
        return;
    if (clicked != 4)
        count = 0;
    clicked = 4;
    playBtn.style.backgroundColor = 'white';
    drums.style.backgroundColor='rgb(48, 43, 43)';
    bass.style.backgroundColor='rgb(48, 43, 43)';
    guitar.style.backgroundColor='rgb(48, 43, 43)';
    cymbal.style.backgroundColor='gray';
    percussion.style.backgroundColor='rgb(48, 43, 43)';

    for (let i = 0; i < size; i++) {
        if (spanElems[i].style.backgroundColor === "goldenrod")
            spanElems[i].style.backgroundColor = "white";
    }
}
percussion.onclick = () => {
    if (document.querySelector('#synth-type').options[document.querySelector('#synth-type').selectedIndex].value != '0')
        return;
    if (clicked != 5)
        count = 0;
    clicked = 5;
     playBtn.style.backgroundColor = 'white';
    drums.style.backgroundColor='rgb(48, 43, 43)';
    bass.style.backgroundColor='rgb(48, 43, 43)';
    guitar.style.backgroundColor='rgb(48, 43, 43)';
    cymbal.style.backgroundColor='rgb(48, 43, 43)';
    percussion.style.backgroundColor='gray';

    for (let i = 0; i < size; i++) {
        if (spanElems[i].style.backgroundColor === "goldenrod")
            spanElems[i].style.backgroundColor = "white";
    }
}
let stopped = false;


let count = 0;
let previousCliked = -1;
playBtn.onclick = () => {
    if (clicked == -1)
        return;
    playBtn.style.backgroundColor='gray';
    if (count != 0)
        return;
    count++;
    stopped = false;
    switch(clicked) {
        case 1: {
            sequencerV1();
            break;
        }
        case 2: {
            sequencerV2();
            break;
        }
        case 3: {
            sequencerV3();
            break;
        }
        case 4: {
            sequencerV4();
            break;
        }
        case 5: {
            sequencerV5();
            break;
        }
        default: {
            console.log('wwwww');
        }
    }
}

// sequencerV1();
// sequencerV2();
// sequencerV3();
// sequencerV4();
// sequencerV5();

const bpmElem = document.querySelector('.song-maker input');
bpmElem.onchange = (evt) => {
    let value = evt.currentTarget.value;
    Tone.Transport.bpm.value = value;
}

document.querySelector('.song-maker input').oninput = () => {
    displayValue();
}

function displayValue() {
    let val = document.querySelector('.song-maker input').value;
    document.querySelector('.song-maker label').innerHTML = "bpm: " + val;
}
