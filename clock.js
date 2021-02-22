const Container = document.querySelector('.navbar__column');
const clockTitle = document.querySelector('.navbar__column--clock');
const batteryNumber = document.querySelector('.navbar__column--battery');

function getRandomInt(){
    const battery = Math.floor(Math.random() * 100) + 1;
    return battery;
}

function getTime(){
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    clockTitle.innerHTML = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}`;
}

function init_clock(){
    getTime();
    setInterval(getTime, 1000);
}

function init_battery(){
    const getBattery = getRandomInt();
    batteryNumber.innerHTML = `${getBattery}`;
}

init_clock();
init_battery();

