var timer = 60;
// Countdown Timer Function 


//FOR loop to loop over options array
//create button for each option
//assign data attribute to each buttons
//btn.addAttribute("data-answer", questions[index].options[i])

//for (statement 1; statement 2; statement 3) {
  // code block to be executed
//}

// Statement 1 is executed (one time) before the execution of the code block.

// Statement 2 defines the condition for executing the code block.

// Statement 3 is executed (every time) after the code block has been executed.

// var totalScore = Document.getElementbyId('totalScore');
// totalScore.innerHTML=score;

// Store

// New comments
// Initialize  
// var QandA = [ // length of 10 for ex.
// //    {Question, [options]},
//     {
//         Question: "What is your name?",
//         options: [
//             { option1: "Adam", isCorrect: true},
//             { option1: "Eve", isCorrect: false},
//             "Kishan"
//         ],
//         correctAnswer: 2
//     }
// ] 

// var currentQuestion = 0
// Game starts: show question 1 (index  0)
// var question = QandA[currentQuestion]

// var questionEl = document.getElementById('Question-id');

localStorage.highScore = totalScore;
// Retrieve
document.getElementById(totalScore).innerHTML = localStorage.highScore;

//var highScore = localStorage.getItem('highScore')

// Increase score counter
// var score=0
// var score = document.getElementById.();

document.getElementByFunction("start").addEventListener("click",displayQuestion(index));
document.getElementByFunction("start").addEventListener("click", startTimer);
  

// let start = prompt(questions);

for (questions;
    if {     
            text = ("Correct!");
            score = score+1.5;
        }  

        else 
        {
            text = ("Wrong!");
            score = score - 0.5;
        }
    

// Quiz Questions
var questions = [
//1
    {question: "What is JavaScript?",
    options: [
           "Java Language for web development",
            <button>Markup Language</button>,
            <button>Scripting/Programing language</button>,
            <button>Scripting Language</button>,
    answer: "Java language for web development"},

//2
    {question: "Strings are ______",
    options: ["Classes",
            "Text",
            "Ids",
            "Rows"],
    answer: "Text"},
//3
    {question: "What is an API?",
    options: ["Software interface connected bewteen devices",	
        "Secure server monitoring software",
        "Apple Product Inc. licensed plug-in",
        "An application program id"],
    answer: "Software interface connected bewteen devices"},
//4        
    {question:"DOM means:",
    options: ["Document Object Mass",
        "Documented Object Markup",
        "Document Object Model",	
        "Docomented Ordered Mass"],
    answer: "Document Object Model"},
//5
    {question:"What does the DOM do?",
    options: ["Connects web pages to programming/scripting languages",
        "Allows a programming interface to external Document customization",  
        "Represents Document as a logical tree",
        "All of the above"],
    answer: "All of the above"},
//6    
    {question:"A function is",
    options: ["Run when an event occurs",	
        "Undefined",
        "A single use event",
        "Not available in JavaScript"],
    answer: "Run when an event occurs"},
//7
    {question:"An operator",
    options:["Joins strings and runs tests",
        "Executes math equations",
        "All of the above", 	
        "None of the above"],
    answer: "All of the above"},
//8
    {question:"Conditionals", 
    options:["Are interchanging logic-based code blocks",
        "Are True/False logic-based code blocks",		
        "Are Numeric logic-based code blocks",
        "Are Not logic-based code blocks"],
    answer:"Are True/False logic-based code blocks"},
//9
    {question:"Browser interaction is known as",
    options: ["An occurance",
        "An interaction",
        "A rebase",
        "An event"], 	
    answer:"An event"},
//10        
    {question:"Event listeners",
    options: ["Listen for browser events",
        "Alerts user on event",
        "Are not compatible with JavaScript",
        "Are only usable once"],
    answer:"Listen for browser events"},
//11
    {question:"addEventListener()",
    options: ["Adds event listener to an event", 	
        "Adds event listener to an element",
        "Adds event listnere to an interacation",
        "Adds event listener to an interface"],
    answer: "Adds event listenet to an event"},
//12
    {question:"JavaScript files are only available externally",
    options: ["True",
            "False"],
    answer: "False"}, 	
//13
    {question:"Choose the correct JavaScript link",
    options:["<script src=\"../assets/js/script.js\"></script>", 		
        "<script a href=\"../assets/js/script.js\">/script>",
        "<src script=\"../assets/js/script.js\"></script>",
        "<script src=\">.script.is</script>\""],
    answer:"<script src=\"../assets/js/script.js\"></script>"},
//14
    {question:"console.log()",
    options:["Displays browser data",	
        "Logs event errors",
        "Logs user events", 
        "Logs user commands"],
    answer:"Displayes browser data"},
//15
    {question:"window.print()",
    options:["Prints window", 	
        "Is only available in CSS",
        "Is only available in HTML",
        "None of the above"],
    answer:"Prints window"},
//16
    {question:" document.getElementId(\"quiz\").innterHTML=\"Hello World\";",
    options:["Writes \"Hello World\" into HTML element id, \"quiz\"", 	
        "Will do nothing, code is written incorrectly",
        "Writes \"quiz\" into internal HTML element id, \"Hello World\"",
        "None of the above"],
    answer:"Writes \"Hello World\" into HTML element id, \"quiz\""},
//17
    {question:"Code blocks are",
    options:["Against best practice",
        "Statements grouped together", 	
        "All of the above",
        "None of the above"],
    answer:"Statements grouped togethor"},
//18
    {question:"return",
    options:["Is a line break",
        "Exits function", 	
        "Is a variable id",
        "Triggers Enter key"],
    answer:"Exits function"},
//19
    {question:"JavaScript variables",
    options:["Cannot be re-declared",
        "Cannot remain undefined",
        "Cannot span multiple lines",
        "Cannot use a hyphen"], 	
    answer:"Cannot use a hyphen"},
//20
    {question:"Scopes can be",
    options:["Declared locally",
        "Declared globally and locally",
        "Declared withing {} block, globally, and locally",
        "Declared within a block [],globally, and locally "],
    answer:"Declared withing {} block, globally, and locally"},
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
//var theQuiz=document.getElementById("quizModal");

//var btn=document.getElementById("start");

//btn.onclick=function() {
   // modal.style.display="block";
   //startTimer();
   //displayQuestion(index);
//}


