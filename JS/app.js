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



    function questionCheckOne() {
        var correctAnswer = document.getElementById("female")
        var wrongAnswer = document.getElementById("male")
        if (correctAnswer.checked == true) {
            score += 100;
            console.log(score)
            document.getElementById("score").innerHTML = "Score: " + score 
            // alert("Correct, your score is now " + score)
        }
        else if (wrongAnswer.checked == true) {
            score-=100;
            document.getElementById("score").innerHTML = "Score: " + score 
        }
    };

function questionCheckTwo() {
        console.log('clicked')
        var correctAnswer = document.getElementById("tyana")
        var wrongAnswer = document.getElementById("aiden")
        if (correctAnswer.checked == true) {
            score+=100;
            document.getElementById("score").innerHTML = "Score: " + score 
            // alert("Correct, your score is now " + score)
        }
        else if (wrongAnswer.checked == true) {
            score-=100;
            document.getElementById("score").innerHTML = "Score: " + score 
        }
    }

