const body = document.querySelector(".clock-container");

function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM";
    body.style.backgroundColor = "white";

    if (hours > 12) {
        hours = hours - 12;
        session = "PM";
        body.style.backgroundColor = "black";
    }

    if (hours == 0) {
        hours = 12;
    }

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    var time = hours + ":" + minutes + ":" + seconds + " " + session;


    document.getElementById("clock").innerText = time;

    document.getElementById("clock").textContent = time;


    setTimeout(showTime, 1000);
}

function showDay() {
    var time = new Date();
    let month = time.getMonth();
    let year = time.getFullYear();
    let date = time.getDate();
    let dayDisplay = time.getDay();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let currentDay =
        week[dayDisplay] + ", " + months[month] + " " + date + ", " + year;
    document.querySelector(".displayDay").innerHTML = currentDay;
}

showTime();
showDay();