var totalSeconds = 0;

function countTimer() {
    ++totalSeconds;
    var hour = Math.floor(totalSeconds / 3600); // count hour 
    var minute = Math.floor((totalSeconds - hour * 3600)/ 60);
    var seconds = Math.floor(totalSeconds - (hour * 3600 + minute * 60));

    document.querySelector('.timer').innerHTML = hour + "h:" + minute + "m:" + seconds + "s";
}