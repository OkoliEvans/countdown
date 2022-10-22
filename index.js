const countdown = () => {
    const countDate = new Date("October 28, 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //set up time
    const seconds = 1000;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calc. the time
    const dayGap = Math.floor(gap / day);
    const hourGap = Math.floor((gap % day) / hour);
    const minuteGap = Math.floor((gap % hour) / minute);
    const secondGap = Math.floor((gap % minute) / seconds);

    document.querySelector('.day').innerHTML = dayGap;
    document.querySelector('.hour').innerHTML = hourGap;
    document.querySelector('.minute').innerHTML = minuteGap;
    document.querySelector('.second').innerHTML = secondGap;
}

setInterval(countdown, 1000)