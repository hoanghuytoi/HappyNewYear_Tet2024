// Tính toán thời gian cho Tết âm lịch vào ngày 10/02/2024
var fut = new Date("February 10, 2024 00:00:00").getTime();

let x = setInterval(function stime(){
    var now = new Date().getTime();
    var D = fut - now;
    var days = Math.floor(D / (1000 * 60 * 60 * 24));
    var hours = Math.floor((D % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((D % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((D % (1000 * 60)) / 1000);
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // Tính toán thời gian 5 giây sau ngày Tết
    var fiveSecondsAfterTet = fut + (5 * 1000);

    // So sánh thời gian hiện tại với thời gian 5 giây sau ngày Tết
    if (now >= fiveSecondsAfterTet) {
        clearInterval(x);
        window.location.href = "intro.html";
    }
}, 1000);
