function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";
    // TO MAKE LESS THAN 12 HOUR
    if (hour > 12) {
        hour = hour - 12;
        am_pm = "PM";
    }
    if (hour >= 12) {
        am_pm = "PM";
    }
    // TO MAKE TIME READABLE WITH 0
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (hour == 0) {
        hour = "0" + hour;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }
    //Final making ready for display
    let currentTime = hour + ":" + min + ":" + sec + am_pm;

    let display = document.querySelector(".displayTime");
    display.innerHTML = currentTime;
}
setInterval(showTime , 1000);
