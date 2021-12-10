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

var score = 0;
var timer = 60;

document.getElementById("start").addEventListener("click", startQuiz);

var quizContainer = document.querySelector('.quizContainer')
var timeContainer = document.getElementById('time')

function startQuiz() {
    quizContainer.innerHTML = ""
    startTimer()
    displayQuestionOne()
}

function startTimer() {
    timeContainer.textContent = timer
    var setTime = setInterval(function() {
        if (timer <= 1) {
            clearInterval(setTime)
        }
        timer--
        timeContainer.textContent = timer
    }, 1000)
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
                timer -= 10
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
                timer -= 10
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
                timer -= 10
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
                timer -= 10
            }
            endQuiz()
        })
    }
}

function endQuiz() {
    quizContainer.textContent = 'Quiz is over your final score is: ' + score

    var input = document.createElement('input')
    input.setAttribute('placeholder', 'What is you name?')
    quizContainer.append(input)

    var btn = document.createElement('button')
    btn.textContent = 'Submit'
    quizContainer.append(btn)

    btn.addEventListener('click', function() {
        var storage = JSON.parse(localStorage.getItem('highscore'))
        if(storage === null) {
            storage = []
        }

        var user = {
            name: input.value,
            currentScore: score
        }

        storage.push(user)
        localStorage.setItem('highscore', JSON.stringify(storage))
        window.location.href = 'highscore.html'
    })

};
