var timer = 60;
// Countdown Timer Function 
var questions = [
    {question: "What is JavaScript?",
    options: ["Java language for web development",
            "Markup Language",
            "Scripting/Programing language",
            "Scripting Language"],
    answer: "Java language for web development"},

    {question: "Strings are ______",
    options: ["Classes",
            "Text",
            "Ids",
            "Rows"],
    answer: "Text"}
];

var index = 0;

function startTimer(){
    //var timer = duration, seconds;
    //var timer = 5;
    setInterval(function () {
       // seconds = parseInt(timer = 60,10);
        timer = timer - 1;
        if(timer < 0) {
           // timer = duration;
           displayResult();
        }else{
            $("#time").text(timer);
        }
    }, 1000);
}

function displayQuestion(index){
    console.log(index);
    $("#q").empty();
    //based on index will display first question
    var p = $("<p>");
    p.text(questions[index].question);
    $("#q").append(p);

    //FOR loop to loop over options array
    //create button for each option
    //assign data attribute to each buttons
    //btn.addAttribute("data-answer", questions[index].options[i])
}

/*window.onload = function () {
    var sixtySeconds = 0,
        display = document.querySelector('#time');
    startTimer(sixtySeconds, display);
}*/



/* Modal */
var theQuiz=document.getElementById("quizModal");

var btn=document.getElementById("start");

btn.onclick=function() {
   // modal.style.display="block";
   startTimer();
   displayQuestion(index);
}


