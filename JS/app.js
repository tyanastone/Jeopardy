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
// declared variable for score to equal zero 
var score=0;



    function questionCheckOne() {
        var correctAnswer = document.getElementById("female")
        var wrongAnswer = document.getElementById("male")
        if (correctAnswer.checked == true) {
            score += 100;
            document.getElementById("score").innerHTML = "Score: " + score 
            document.getElementById("score").style.color = "#008000";
        }
        else if (wrongAnswer.checked == true) {
            score-=100;
            document.getElementById("score").innerHTML = "Score: " + score 
            document.getElementById("score").style.color = "#ff0000";
        }
    }

function questionCheckTwo() {
        var correctAnswer = document.getElementById("tyana")
        var wrongAnswer = document.getElementById("aiden")
        if (correctAnswer.checked == true) {
            score+=200;
            document.getElementById("score").innerHTML = "Score: " + score 
            document.getElementById("score").style.color = "#008000"
        }
        else if (wrongAnswer.checked == true) {
            score-=200;
            document.getElementById("score").innerHTML = "Score: " + score 
            document.getElementById("score").style.color = "#ff0000"
        }
}
    
function questionCheckThree() {
    var correctAnswer = document.getElementById("yes")
    var wrongAnswer = document.getElementById("no")
    if (correctAnswer.checked == true) {
        score+=300;
        document.getElementById("score").innerHTML = "Score: " + score 
        document.getElementById("score").style.color = "#008000"
    }
    else if (wrongAnswer.checked == true) {
        score-=300;
        document.getElementById("score").innerHTML = "Score: " + score 
        document.getElementById("score").style.color = "#ff0000"
    }
}

