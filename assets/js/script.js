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

var timer = setInterval(() => {
    1000 * 60

});

start.addEventListener('click', function startTimer() {
    console.log(timer)
    timer = timer - 1;

    if (timer === 0) {
        alert('Out of time!');
    }

}); 

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
