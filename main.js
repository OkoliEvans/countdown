

function countdown() {
    const targetDate = new Date('April 9 2023, 00:00:00').getTime();
    const now = new Date().getTime()
    const gap = targetDate - now;

    let seconds = 1000;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const displayDay = Math.floor( gap / day );
    const displayHour = Math.floor((gap % day) / hour );
    const displayMinute = Math.floor( (gap % hour) / minute );
    const displaySecond = Math.floor( (gap % minute) / seconds );

    //fix DOM stuffs
    document.querySelector('.day').innerHTML = displayDay;
    document.querySelector('.hour').innerHTML = displayHour;
    document.querySelector('.minute').innerHTML = displayMinute;
    document.querySelector('.second').innerHTML = displaySecond;
} 

setInterval(countdown, 1000);
