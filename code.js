const hours_s = document.getElementById('hours');
const minutes_s = document.getElementById('minutes');
const seconds_s = document.getElementById('seconds');
const d_year = document.getElementById('year');
const d_month = document.getElementById('month');
const d_day = document.getElementById('day');
var currentTime;
var alarmMusic = new Audio('sources/music.mp3');

window.setInterval(function(){
    updateClock();
    updateDate();
}, 1000);

function alarm() {
    if (currentTime == "21:00:00") {
        console.log('tej!');
        alert('alarm!');
        alarmMusic.play();
    }
}

function updateDate() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var day = now.getDate();
    if (month.toString().length == 1) {
        month = '0'+month;
    }
    if (day.toString().length == 1){
        day = '0'+day;
    }
    d_year.innerHTML = year;
    d_month.innerHTML = month;
    d_day.innerHTML = day;
}

function updateClock() {
    var now = new Date();
    var hour = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    if (hour.toString().length == 1) {
        hour = '0'+hour;
    }
    if (minutes.toString().length == 1){
        minutes = '0'+minutes;
    }
    if (seconds.toString().length == 1){
        seconds = '0'+seconds;
    }
    hours_s.innerHTML = hour;
    minutes_s.innerHTML = minutes;
    seconds_s.innerHTML = seconds;
    currentTime = `${hour}:${minutes}:${seconds}`;
    alarm();
}
