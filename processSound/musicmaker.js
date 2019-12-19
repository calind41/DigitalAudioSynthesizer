function sequencerV1() {
    const openHat = new Tone.Player("./drums/open_hat.wav").toMaster();
    const closedHat = new Tone.Player("./drums/closed_hat.wav").toMaster();
    const clap = new Tone.Player("./drums/clap-808.wav").toMaster();

    const kick = new Tone.Player("./drums/kick-electro01.wav").toMaster();
    const snare = new Tone.Player("./drums/snare-lofi02.wav").toMaster();
  
    openHat.connect(dest);
    closedHat.connect(dest);
    clap.connect(dest);
    kick.connect(dest);
    snare.connect(dest);
    
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
    

    casioBass2.connect(dest);
    casioBDB.connect(dest);
    casioPulse.connect(dest);
    casioQuickB.connect(dest);
    casioSB.connect(dest);
  
    
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
    const g1 = new Tone.Player("./GUITAR/acoustic/Kawai-K5000W-SteelGt1-C3.wav").toMaster();
    const g2 = new Tone.Player("./GUITAR/acoustic/Ensoniq-SQ-1-ClassicGuitar-C5.wav").toMaster();
    const g3 = new Tone.Player("./GUITAR/acoustic/Ensoniq-SQ-1-ClassicGuitar-C3.wav").toMaster();

    const g4 = new Tone.Player("./GUITAR/acoustic/E-Mu-Proteus-FX-AcStereo-C3.wav").toMaster();
    const g5 = new Tone.Player("./GUITAR/acoustic/Alesis-Fusion-Nylon-String-Guitar-C4.wav").toMaster();
    
  

    g1.connect(dest);
    g2.connect(dest);
    g3.connect(dest);
    g4.connect(dest);
    g5.connect(dest);
    
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
        let g1Inputs = document.querySelector(`.c1 span:nth-child(${step + 1})`);
        let g2Inputs = document.querySelector(`.c2 span:nth-child(${step + 1})`);
        let g3Inputs = document.querySelector(`.c3 span:nth-child(${step + 1})`);

        let g4Inputs = document.querySelector(`.c4 span:nth-child(${step + 1})`);
        let g5Inputs = document.querySelector(`.c5 span:nth-child(${step + 1})`);
       
        if (g1Inputs.style.backgroundColor === 'goldenrod') {
            g1.start();
        }
        if (g2Inputs.style.backgroundColor === 'goldenrod') {
            g2.start();
        }
        if (g3Inputs.style.backgroundColor === 'goldenrod') {
            g3.start();
        }

        if (g4Inputs.style.backgroundColor === 'goldenrod') {
            g4.start();
        }
        if (g5Inputs.style.backgroundColor === 'goldenrod') {
            g5.start();
        }
        index++;
       
        
    }
}

// cymbal
function sequencerV4() {
    
    const c1 = new Tone.Player("./z_CYMBALS/crash/Crash-Cymbal-1.wav").toMaster();
    const c2 = new Tone.Player("./z_CYMBALS/crash/Crash-Cymbal-2.wav").toMaster();
    const c3 = new Tone.Player("./z_CYMBALS/crash/Crash-Cymbal-3.wav").toMaster();

    const c4 = new Tone.Player("./z_CYMBALS/crash/Crash-Cymbal-4.wav").toMaster();
    const c5 = new Tone.Player("./z_CYMBALS/crash/Crash-Cymbal-5.wav").toMaster();
    
  

    c1.connect(dest);
    c2.connect(dest);
    c3.connect(dest);
    c4.connect(dest);
    c5.connect(dest);
    
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
        let c1Inputs = document.querySelector(`.c1 span:nth-child(${step + 1})`);
        let c2Inputs = document.querySelector(`.c2 span:nth-child(${step + 1})`);
        let c3Inputs = document.querySelector(`.c3 span:nth-child(${step + 1})`);

        let c4Inputs = document.querySelector(`.c4 span:nth-child(${step + 1})`);
        let c5Inputs = document.querySelector(`.c5 span:nth-child(${step + 1})`);
       
        if (c1Inputs.style.backgroundColor === 'goldenrod') {
            c1.start();
        }
        if (c2Inputs.style.backgroundColor === 'goldenrod') {
            c2.start();
        }
        if (c3Inputs.style.backgroundColor === 'goldenrod') {
            c3.start();
        }

        if (c4Inputs.style.backgroundColor === 'goldenrod') {
            c4.start();
        }
        if (c5Inputs.style.backgroundColor === 'goldenrod') {
            c5.start();
        }
        index++;
      
      
    }
}


// Percussions
function sequencerV5() {
    
    const p1 = new Tone.Player("./Percussion/Kawai-K5000W-Marimba-C4.wav").toMaster();
    const p2 = new Tone.Player("./Percussion/Kawai-K5000W-Glocken-C5.wav").toMaster();
    const p3 = new Tone.Player("./Percussion/Kawai-K11-Open-Triangle.wav").toMaster();

    const p4 = new Tone.Player("./Percussion/E-Mu-Proteus-FX-Marimba-C3.wav").toMaster();
    const p5 = new Tone.Player("./Percussion/E-Mu-Proteus-2-Glockenspiel-C4.wav").toMaster();
    
    

    p1.connect(dest);
    p2.connect(dest);
    p3.connect(dest);
    p4.connect(dest);
    p5.connect(dest);
    
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
        let p1Inputs = document.querySelector(`.c1 span:nth-child(${step + 1})`);
        let p2Inputs = document.querySelector(`.c2 span:nth-child(${step + 1})`);
        let p3Inputs = document.querySelector(`.c3 span:nth-child(${step + 1})`);

        let p4Inputs = document.querySelector(`.c4 span:nth-child(${step + 1})`);
        let p5Inputs = document.querySelector(`.c5 span:nth-child(${step + 1})`);
       
        if (p1Inputs.style.backgroundColor === 'goldenrod') {
            p1.start();
        }
        if (p2Inputs.style.backgroundColor === 'goldenrod') {
            p2.start();
        }
        if (p3Inputs.style.backgroundColor === 'goldenrod') {
            p3.start();
        }

        if (p4Inputs.style.backgroundColor === 'goldenrod') {
            p4.start();
        }
        if (p5Inputs.style.backgroundColor === 'goldenrod') {
            p5.start();
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
