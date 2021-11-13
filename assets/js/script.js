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
    answer: "Text"},

    {question: "What is an API?",
    options: ["Software interface connected bewteen devices",	
        "Secure server monitoring software",
        "Apple Product Inc. licensed plug-in",
        "An application program id"],
    answer: "Software interface connected bewteen devices"},
        
    {question:"DOM means:",
    options: ["Document Object Mass",
        "Documented Object Markup",
        "Document Object Model",	
        "Docomented Ordered Mass"],
    answer= "Document Object Model"},

    {question:"What does the DOM do?"
    options: ["Connects web pages to programming/scripting languages",
        "Allows a programming interface to external Document customization",  
        "Represents Document as a logical tree"],
        "All of the above"},
    
    {q}

A function is

Run when an event occurs	x
Undefined
A single use event
Not available in JavaScript

An operator

Joins strings and runs tests
Executes math equations 
All of the above 	x
None of the above

Conditionals 

Are interchanging logic-based code blocks
Are True/False logic-based code blocks		x
Are Numeric logic-based code blocks
Are Not logic-based code blocks

Browser interaction is known as

an occurance
a rebase
an event 	x
an interaction


Event listeners 

Listen for browser events 	x
Alerts user on event
Are not compatible with JavaScript
Are only usable once

addEventListener()

Adds event listener to an event 	x
Adds event listener to an element
Adds event listnere to an interacation
Adds event listener to an interface

JavaScript files are only available externally

True
False 	*


Choose the correct JavaScript link

<script src="../assets/js/script.js"></script> 		x
<script a href="../assets/js/script.js">/script>
<src script="../assets/js/script.js"></script>
<script>./script.js</script>

console.log()

Displays browser data	x
Logs event errors
Logs user events 
Logs user commands

15.

window.print()

Prints window 	x
Is only available in CSS
Is only available in HTML
None of the above


document.getElementId("quiz").innterHTML="Hello World";

Writes "Hello World" into HTML element id, "quiz" 	x
Will do nothing, code is written incorrectly
Writes "quiz" into internal HTML element id, "Hello World"
None of the above



Code blocks are

Against best practice
Statements grouped together 	x
All of the above
None of the above

return

Is a line break
Exits a function 	x
Is a variable id
'Enter' key event

JavaScript variables

Cannot be re-declared
Cannot remain undefined
Cannot span multiple lines
Cannot use a hyphen 	x


Scopes can be

Declared locally within the function
Declared globally, outside of function
Declared withing {} block, and used externally
ALl of the above		x
Can Only be declared locally and globally

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


