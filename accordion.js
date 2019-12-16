
let envelopes = [];

let v0freqEnv = document.querySelectorAll('.freq-env-title')[0];
let v0ampEnv = document.querySelectorAll('.amp-env-title')[0];
let v1freqEnv = document.querySelectorAll('.freq-env-title1')[0];
let v2ampEnv = document.querySelectorAll('.amp-env-title1')[0];

envelopes[0] = v0freqEnv;
envelopes[1] = v0ampEnv;
envelopes[2] = v1freqEnv;
envelopes[3] = v2ampEnv;

// accordion effect
for (let i = 0; i < 4; i++ ) {
    envelopes[i].addEventListener("click",function() {
        let envBody = envelopes[i].nextElementSibling;

        if (envBody.style.maxHeight)
            envBody.style.maxHeight = null;
        else    
            envBody.style.maxHeight = envBody.scrollHeight + "px";
    });
}

// attach events to triger sounds on duo synth





