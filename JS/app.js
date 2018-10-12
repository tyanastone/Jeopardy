// var first= querySelector()
// var score = 0
// $('input[type=radio]').click(function () {
   
//     points += 10    
//     .innerHTML =  
// });

// var score = document.querySelector("#score")
// var changeScore = 0

// function answer(a, b) {
// if ()


// }

var score=0;

function checkAll() {

    function questioncheckOne() {
        var correctAnswer = document.getElementById("female")
        var wrongAnswer = document.getElementById("male")
        if (correctAnswer.checked == true) {
            score+=100;
            document.getElementById("score").innerHTML = "Score: " + score 
            // alert("Correct, your score is now " + score)
        }
        else if (wrongAnswer.checked == true) {
            score-=100;
            document.getElementById("score").innerHTML = "Score: " + score 
        }
        questioncheckOne()
    };
    function questioncheckTwo() {
        var correctAnswer = document.getElementById("female")
        var wrongAnswer = document.getElementById("male")
        if (correctAnswer.checked == true) {
            score+=100;
            document.getElementById("score").innerHTML = "Score: " + score 
            // alert("Correct, your score is now " + score)
        }
        else if (wrongAnswer.checked == true) {
            score-=100;
            document.getElementById("score").innerHTML = "Score: " + score 
        }
        questioncheckTwo()
    };
}

