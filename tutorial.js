function sequencer() {
    const kick = new Tone.Player("./drums/kick-electro01.wav").toMaster();
    const snare = new Tone.Player("./drums/snare-lofi02.wav").toMaster();
    const tom = new Tone.Player("./drums/tom-lofi.wav").toMaster();

    const clapFat = new Tone.Player("./drums/clap-fat.wav").toMaster();
    const cowbell = new Tone.Player("./drums/cowbell-808.wav").toMaster();
    const crashnoise = new Tone.Player("./drums/crash-noise.wav").toMaster();
    const hihatAnalog = new Tone.Player("./drums/hihat-analog.wav").toMaster();
    const percHollow = new Tone.Player("./drums/perc-hollow.wav").toMaster();
    const snareBrute = new Tone.Player("./drums/snare-brute.wav").toMaster();
    const tomRototom = new Tone.Player("./drums/tom-rototom.wav").toMaster();
    
    let index = 0;


    Tone.Transport.bpm.value = 140;
    Tone.Transport.scheduleRepeat(repeat,"16n");

    Tone.Transport.start();

    function repeat()  {
        let step = index % 16;
        console.log(step);
        let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
        let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
        let tomInputs = document.querySelector(`.tom input:nth-child(${step + 1})`);

        let clapFatInputs = document.querySelector(`.clap input:nth-child(${step + 1})`);
        let cowbellInputs = document.querySelector(`.cowbell input:nth-child(${step + 1})`);
        let crashnoiseInputs = document.querySelector(`.crash-noise input:nth-child(${step + 1})`);
        let hihatAnalogInputs = document.querySelector(`.hihat-analog input:nth-child(${step + 1})`);
        let percHollowInputs = document.querySelector(`.perc-hollow input:nth-child(${step + 1})`);
        let snareBruteInputs = document.querySelector(`.snare-brute input:nth-child(${step + 1})`);
        let tomRototomInputs = document.querySelector(`.tom-rototom input:nth-child(${step + 1})`);
        if (kickInputs.checked) {
            kick.start();
        }
        if (snareInputs.checked) {
            snare.start();
        }
        if (tomInputs.checked) {
            tom.start();
        }

        if (clapFatInputs.checked) {
            clapFat.start();
        }
        if (cowbellInputs.checked) {
            cowbell.start();
        }
        if (crashnoiseInputs.checked) {
            crashnoise.start();
        }
        if (hihatAnalogInputs.checked) {
            hihatAnalog.start();
        }
        if (percHollowInputs.checked) {
            percHollow.start();
        }
        if (snareBruteInputs.checked) {
            snareBrute.start();
        }
        if (tomRototomInputs.checked) {
            tomRototom.start();
        }
        index++;
    }
}

sequencer();