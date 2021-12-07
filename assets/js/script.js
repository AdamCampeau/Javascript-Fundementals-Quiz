var t;

// Countdown Timer Function 


//FOR loop to loop over options array
//create button for each option
//assign data attribute to each buttons
//btn.addAttribute("data-answer", questions[index].options[i])

// Statement 1 is executed (one time) before the execution of the code block.

// Statement 2 defines the condition for executing the code block.

// Statement 3 is executed (every time) after the code block has been executed.

// var totalScore = Document.getElementbyId('totalScore');
// totalScore.innerHTML=score;

// Store

// var currentQuestion = 0
// Game starts: show question 1 (index  0)
// var question = QandA[currentQuestion]

// var questionEl = document.getElementById('Question-id');

// localStorage.highScore = totalScore;
// Retrieve
// document.getElementById(totalScore).innerHTML = localStorage.highScore;

//var highScore = localStorage.getItem('highScore')

// Increase score counter
// var score=0
// var score = document.getElementById.();


// Quiz Questions
var questions = [
    //1
    {
        question: "What is JavaScript?",
        options: [
            "Java Language for web development",
            "Markup Language",
            "Scripting/Programing language",
            "Scripting Language"],
        answer: "Java Language for web development"
    },

    //2
    {
        question: "Strings are ______",
        options: ["Classes",
            "Text",
            "Ids",
            "Rows"],
        answer: "Text"
    },
    //3
    {
        question: "What is an API?",
        options: ["Software interface connected bewteen devices",
            "Secure server monitoring software",
            "Apple Product Inc. licensed plug-in",
            "An application program id"],
        answer: "Software interface connected bewteen devices"
    },
    //4        
    {
        question: "DOM means:",
        options: ["Document Object Mass",
            "Documented Object Markup",
            "Document Object Model",
            "Docomented Ordered Mass"],
        answer: "Document Object Model"
    }
];

var timer = 60;
function startTimer() {
    console.log(timer)
    timer = timer - 1;

    if (timer === 0) {
        alert('Out of time!');
    }

}  

var score = 0;

document.getElementById("start").addEventListener("click", startQuiz);
var quizContainer = document.querySelector('.quizContainer')

function startQuiz() {
    quizContainer.innerHTML = ""
    timer;
    displayQuestionOne()
}


function displayQuestionOne() {
    var questionEl = document.createElement('h1')
    questionEl.textContent = questions[0].question
    quizContainer.append(questionEl)

    var optionsContainer = document.createElement('ul')
    quizContainer.append(optionsContainer)
    for (var i = 0; i < questions[0].options.length; i++) {
        var listItems = document.createElement('li')
        listItems.setAttribute('id', questions[0].options[i])
        listItems.textContent = questions[0].options[i]
        optionsContainer.append(listItems)

        listItems.addEventListener('click', function (event) {
            if (event.target.id === questions[0].answer) {
                console.log('correct');
                score += 20
            } else {
                console.log('incorrect');
                time -= 10
            }
            displayQuestionTwo()
        })
    }
}

function displayQuestionTwo() {
    quizContainer.innerHTML = ""
    var questionEl = document.createElement('h1')
    questionEl.textContent = questions[1].question
    quizContainer.append(questionEl)

    var optionsContainer = document.createElement('ul')
    quizContainer.append(optionsContainer)
    for (var i = 0; i < questions[1].options.length; i++) {
        var listItems = document.createElement('li')
        listItems.setAttribute('id', questions[1].options[i])
        listItems.textContent = questions[1].options[i]
        optionsContainer.append(listItems)

        listItems.addEventListener('click', function (event) {
            if (event.target.id === questions[1].answer) {
                console.log('correct');
                score += 20
            } else {
                console.log('incorrect');
                time -= 10
            }
            displayQuestionThree()
        })
    }
}

function displayQuestionThree() {
    quizContainer.innerHTML = ""
    var questionEl = document.createElement('h1')
    questionEl.textContent = questions[2].question
    quizContainer.append(questionEl)

    var optionsContainer = document.createElement('ul')
    quizContainer.append(optionsContainer)
    for (var i = 0; i < questions[2].options.length; i++) {
        var listItems = document.createElement('li')
        listItems.setAttribute('id', questions[2].options[i])
        listItems.textContent = questions[2].options[i]
        optionsContainer.append(listItems)

        listItems.addEventListener('click', function (event) {
            if (event.target.id === questions[2].answer) {
                console.log('correct');
                score += 20
            } else {
                console.log('incorrect');
                time -= 10
            }
            displayQuestionFour()
        })
    }
}

function displayQuestionFour() {
    quizContainer.innerHTML = ""
    var questionEl = document.createElement('h1')
    questionEl.textContent = questions[3].question
    quizContainer.append(questionEl)

    var optionsContainer = document.createElement('ul')
    quizContainer.append(optionsContainer)
    for (var i = 0; i < questions[3].options.length; i++) {
        var listItems = document.createElement('li')
        listItems.setAttribute('id', questions[3].options[i])
        listItems.textContent = questions[3].options[i]
        optionsContainer.append(listItems)

        listItems.addEventListener('click', function (event) {
            if (event.target.id === questions[3].answer) {
                console.log('correct');
                score += 20
            } else {
                console.log('incorrect');
                time -= 10
            }
            endQuiz()
        })
    }
}

function endQuiz() {
    console.log('Quiz is over your final score is: ' + score)
}
// function startTimer() {
//     //var timer = duration, seconds;
//     //var timer = 5;
//     setInterval(function () {
//         // seconds = parseInt(timer = 60,10);
//         timer = timer - 1;
//         if (timer < 0) {
//             // timer = duration;
//             displayResult();
//         } else {
//             $("#time").text(timer);
//         }
//     }, 1000);
// }


/*window.onload = function () {
    var sixtySeconds = 0,
        display = document.querySelector('#time');
    startTimer(sixtySeconds, display);
}*/



/* Modal */
//var theQuiz=document.getElementById("quizModal");

//var btn=document.getElementById("start");

//btn.onclick=function() {
   // modal.style.display="block";
   //startTimer();
   //displayQuestion(index);
//}


