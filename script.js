function calculateTime() {
    let time = document.getElementById("time").value;

    let timeHours = +(time.slice(0,2));
    let timeMinutes = +(time.slice(3));

    let alarmDate = new Date();
    alarmDate.setHours(timeHours);
    alarmDate.setMinutes(timeMinutes);
    alarmDate.setSeconds(0);

    let remainingTime = alarmDate - (new Date());

  //Alarm for next day
    if (remainingTime < 0) {
        remainingTime += 864e5;
    }

    return remainingTime;
}

function playAudio() {
    audio = document.getElementById("alarmAudio");
    audio.currentTime = 0;
    audio.play();
}

let setAlarm = false;
document.getElementById("setAlarm").addEventListener('click',()=> {
    if (setAlarm === false) {
        setAlarm = true;
        setTimeout(playAudio,calculateTime());
        console.log("done!")
    }
})
