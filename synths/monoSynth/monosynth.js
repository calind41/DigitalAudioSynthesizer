
let envs = [];

let freqEnv = document.querySelectorAll('.m-freq-env-title')[0];
let ampEnv = document.querySelectorAll('.m-amp-env-title')[0];

envs[0] = freqEnv;
envs[1] = ampEnv;


// accordion effect
for (let i = 0; i < 2; i++ ) {
    
    envs[i].addEventListener("click",function() {
        console.log("clicked");
        let ebody = envs[i].nextElementSibling;
        
        if (ebody.style.maxHeight)
            ebody.style.maxHeight = null;
        else    
            ebody.style.maxHeight = ebody.scrollHeight + "px";
    });
}





