
// Countdown Timer Function 

function startTimer(duration, display){
    var timer = duration, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60,10);

        if(--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var sixtySeconds = 0,
        display = document.querySelector('#time');
    startTimer(sixtySeconds, display);
}

/* Modal */
var theQuiz=document.getElementById("quizModal");

var btn=document.getElementById("start");

btn.onclick=function() {
    modal.style.display="block";
}


