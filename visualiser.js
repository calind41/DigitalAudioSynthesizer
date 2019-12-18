let canvas, 
    ctx, 
    center_x, 
    center_y, 
    radius, 
    bars, 
    x_end, 
    y_end, 
    bar_height, 
    bar_width,
    frequency_array,a;

bars = 230;
bar_width = 2;

function initPage(){
    a = new Audio();
    context = new (window.AudioContext || window.webkitAudioContext)();
    analyser = context.createAnalyser();
    a.src = "dub.mp3"; // the source path
    source = context.createMediaElementSource(a);
    source.connect(analyser);
    analyser.connect(context.destination);
    frequency_array = new Uint8Array(analyser.frequencyBinCount);
    a.play();
    animationLooper();
}

function animationLooper(){
    // set to the size of device
    canvas = document.getElementById("renderer");
    canvas.width = 500;
    canvas.height = 500;
    ctx = canvas.getContext("2d");
    // find the center of the window
    center_x = canvas.width / 2;
    center_y = canvas.height / 2;
    radius = 90;
    // style the background
    var gradient = ctx.createLinearGradient(0,0,0,canvas.height);
    gradient.addColorStop(0,"rgba(35, 7, 77, 1)");
    gradient.addColorStop(1,"rgba(204, 83, 51, 1)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,canvas.width,canvas.height);
    //draw a circle
    ctx.beginPath();
    ctx.arc(center_x,center_y,radius,0,2*Math.PI);
    ctx.stroke();
    analyser.getByteFrequencyData(frequency_array);
    for(var i = 0; i < bars; i++) {
        //divide a circle into equal parts
        rads = Math.PI * 2 / bars;
        bar_height = frequency_array[i]*0.2;
        // set coordinates
        x = center_x + Math.cos(rads * i) * (radius);
        y = center_y + Math.sin(rads * i) * (radius);
        x_end = center_x + Math.cos(rads * i)*(radius + bar_height);
        y_end = center_y + Math.sin(rads * i)*(radius + bar_height);
        //draw a bar
        drawBar(x, y, x_end, y_end, bar_width,frequency_array[i]);
    }
    window.requestAnimationFrame(animationLooper);
}

// for drawing a bar
function drawBar(x1, y1, x2, y2, width,frequency) {
    var lineColor = "rgb(" + frequency + ", " + frequency + ", " + 205 + ")";
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = width;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}