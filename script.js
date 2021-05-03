const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
let timer;
let hh = 0;
let mm = 0;
let ss = 0;
let ml = 0;
let timing = 1;


start.addEventListener('click', () => {
    timer = setInterval(showClock, timing);
})

reset.addEventListener('click', () => {
    clearInterval(timer);
    hh = 0;
    mm = 0;
    ss = 0;
    ml = 0;
    document.getElementById('timer').innerHTML = '00:00:00:00';
});

stop.addEventListener('click', () => {
    clearInterval(timer);
});

function showClock() {
    ml++;

    if(ml == 1000) {
        ml = 0;
        ss++
    }else if(ss == 60) {
        ss = 0;
        mm++
    }else if(mm == 60) {
        mm = 0;
        hh++
    }

    let concat = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss) + ':' + (ml < 10 ? '0' + ml : ml);
    document.getElementById('timer').innerHTML = '<p>'+concat+'</p>';
}