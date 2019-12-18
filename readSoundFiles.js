window.AudioContext = window.AudioContext || window.webkitAudioContext;

let context = new window.AudioContext();
let source;

function playSound(arraybuffer) {
    context.decodeAudioData(arraybuffer,function(buf) {
        source = context.createBufferSource();
        source.connect(context.destination);
        source.buffer = buf;
        source.start(0);
    });
}

function handleFileSelect(evt) {
    let files = evt.target.files; // FileList object
    playFile(files[0]);
}
var fileName;
function playFile(file) {
    console.log(file.name);
    fileName = file.name;
    initPage();
    let freader = new FileReader();

    freader.onload = function(e) {
        console.log(e.target.result);
        // playSound(e.target.result);
    };
    freader.readAsArrayBuffer(file);
}

player = document.getElementById('player');
document.getElementById('files').addEventListener('change',handleFileSelect,false);

document.getElementById('play').onclick = function () {
    // player.play();
}