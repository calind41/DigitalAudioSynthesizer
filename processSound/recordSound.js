const audio = document.querySelector('audio');
const actx = Tone.context;
const dest = actx.createMediaStreamDestination();
const recorder = new MediaRecorder(dest.stream);

//----------------------------------------------------- RECORDING PART --------------------------------------------------------------------------
let chunks = [];

recorder.ondataavailable = evt => chunks.push(evt.data);
recorder.onstop = evt => {
    let blob = new Blob(chunks,{ type: 'audio/ogg; codecs=opus'});
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
    document.querySelector('.t-nr').innerHTML = "" + a.playbackRate.toFixed(1);
}

playBackDown.onclick = () => {
    a.playbackRate -= 0.1;
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
        startTimer(duration,display);
    }
        
    a.play();
}

//----------------------------------------------------END RECORDING PART--------------------------------------------------------------------------
