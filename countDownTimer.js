function startTimer(duration, display) {
    if (duration === Infinity)
        return;
    var timer = duration, minutes, seconds;
    let v = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "" + minutes : minutes;
        seconds = seconds < 10 ? "" + seconds : seconds;

        display.textContent = "0h:" + minutes + "m:" + seconds + "s";

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);

     setTimeout(()=>{clearInterval(v)},duration*1000);

}