const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timing = 1;


start.addEventListener('click', () => {
    document.querySelector('.title-change').innerHTML = '<strong>Welldone</strong>'
    timer = setInterval(showClock, timing);
})

reset.addEventListener('click', () => {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById('timer').innerHTML = '<p>00:00:00:00</p>';
    document.querySelector('.title-change').innerHTML = '<strong>Nooo, I was doing a pretty good</strong>'
});

stop.addEventListener('click', () => {
    document.querySelector('.title-change').innerHTML = '<strong>Thanks. I was tired. Break Time </strong>'
    clearInterval(timer);
});

function showClock() {
    milliseconds++;

    if(milliseconds == 1000) {
        milliseconds = 0;
        seconds++
    }else if(seconds == 60) {
        seconds = 0;
        minutes++
    }else if(minutes == 60) {
        minutes = 0;
        hours++
    }

    let concat = (hours < 10 ? '0' + hours : hours) + ':' + (minutes < 10 ? '0' + minutes : minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds) + ':' + (milliseconds < 10 ? '0' + milliseconds : milliseconds);
    document.getElementById('timer').innerHTML = '<p>'+concat+'</p>';
}