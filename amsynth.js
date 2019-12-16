
let e = [];

let ampEnv1 = document.querySelectorAll('.am-amp-env-title')[0];
let ampEnv2 = document.querySelectorAll('.modulation-env-title')[0];

e[0] = ampEnv1;
e[1] = ampEnv2;

console.log( e[0].nextElementSibling);

// accordion effect
for (let i = 0; i < 2; i++ ) {
    
    e[i].addEventListener("click",function() {
        console.log("clicked");
        let ebody = e[i].nextElementSibling;
        
        if (ebody.style.maxHeight)
            ebody.style.maxHeight = null;
        else    
            ebody.style.maxHeight = ebody.scrollHeight + "px";
    });
}

// attach events to triger sounds on duo synth





