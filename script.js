const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
let timer;
let timing;


start.addEventListener('click', () => {
    timer = setInterval(showClock, 100)
})

function resetar() {
    reset.addEventListener('click', () => {
    timing = new Date();

    hour = timing.setHours(0);
    minutes = timing.setMinutes(0);
    seconds = timing.setSeconds(0);
    miliseconds = timing.setMilliseconds(0)

    showClock(timing);
})
}

function showClock(timing) {
    timing = new Date();
    let hour = timing.getHours();
    let minutes = timing.getMinutes();
    let seconds = timing.getSeconds();
    let miliseconds = timing.getMilliseconds();

    let concat = `${hour} : ${minutes} : ${seconds} : ${miliseconds}`

    document.getElementById('timer').innerHTML = '<p>'+concat+'</p>';
}

