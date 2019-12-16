function sequencer() {
    const openHat = new Tone.Player("./drums/open_hat.wav").toMaster();
    const closedHat = new Tone.Player("./drums/closed_hat.wav").toMaster();
    const clap = new Tone.Player("./drums/clap-808.wav").toMaster();

    const kick = new Tone.Player("./drums/kick-electro01.wav").toMaster();
    const snare = new Tone.Player("./drums/snare-lofi02.wav").toMaster();
  
    
    let index = 0;


   
    
 
    Tone.Transport.scheduleRepeat(repeat,"16n");

    Tone.Transport.start();

    function repeat()  {
        let step = index % 16;
        console.log(step);
        let openHatInputs = document.querySelector(`.c1 span:nth-child(${step + 1})`);
        let closedHatInputs = document.querySelector(`.c2 span:nth-child(${step + 1})`);
        let clapInputs = document.querySelector(`.c3 span:nth-child(${step + 1})`);

        let kickInputs = document.querySelector(`.c4 span:nth-child(${step + 1})`);
        let snareInputs = document.querySelector(`.c5 span:nth-child(${step + 1})`);
       
        if (openHatInputs.style.backgroundColor === 'red') {
            openHat.start();
        }
        if (closedHatInputs.style.backgroundColor === 'red') {
            closedHat.start();
        }
        if (clapInputs.style.backgroundColor === 'red') {
            clap.start();
        }

        if (kickInputs.style.backgroundColor === 'red') {
            kick.start();
        }
        if (snareInputs.style.backgroundColor === 'red') {
            snare.start();
        }
        index++;
    }
}




const spanElems = document.querySelectorAll('.song-maker span');
const size = spanElems.length;
for (let i = 0; i < size; i++) {
    spanElems[i].onclick = () => {
        if (spanElems[i].style.backgroundColor !== "red")
            spanElems[i].style.backgroundColor = "red";
        else
            spanElems[i].style.backgroundColor = "white";
    }
}
console.log(spanElems);
sequencer();

const bpmElem = document.querySelector('.song-maker input');
bpmElem.onchange = (evt) => {
    let value = evt.currentTarget.value;
    Tone.Transport.bpm.value = value;
}
