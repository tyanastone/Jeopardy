
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
        score -= 100;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#ff0000";
        
    }
    $('.modal-dialog').addClass('animated rubberBand');
}
    function questionCheckTwo() {
        var correctAnswer = document.getElementById("tyana")
        var wrongAnswer = document.getElementById("aiden")
        if (correctAnswer.checked == true) {
            score += 200;
            document.getElementById("score").innerHTML = "Score: " + score
            document.getElementById("score").style.color = "#008000"
        }
        else if (wrongAnswer.checked == true) {
            score -= 200;
            document.getElementById("score").innerHTML = "Score: " + score
            document.getElementById("score").style.color = "#ff0000"
        }
        $('.modal-dialog-1').addClass('animated rubberBand');
    }
    
    function questionCheckThree() {
        var correctAnswer = document.getElementById("yes")
        var wrongAnswer = document.getElementById("no")
        if (correctAnswer.checked == true) {
            score += 300;
            document.getElementById("score").innerHTML = "Score: " + score
            document.getElementById("score").style.color = "#008000"
        }
        else if (wrongAnswer.checked == true) {
            score -= 300;
            document.getElementById("score").innerHTML = "Score: " + score
            document.getElementById("score").style.color = "#ff0000"
        }
        $('.modal-dialog').addClass('animated rubberBand');
    }
function questionCheckFour() {
   
        var correctAnswer = document.getElementById("harrison")
    var wrongAnswer = document.getElementById("helen")
    
        if (correctAnswer.checked == true) {
            score += 100;
            document.getElementById("score").innerHTML = "Score: " + score
            document.getElementById("score").style.color = "#008000";
              
        }
        else if (wrongAnswer.checked == true) {
            score -= 100;
            document.getElementById("score").innerHTML = "Score: " + score
            document.getElementById("score").style.color = "#ff0000";   
        }
        $('.modal-dialog').addClass('animated rubberBand');
}

function questionCheckFive() {
   
    var correctAnswer = document.getElementById("wiig")
var wrongAnswer = document.getElementById("bank")

    if (correctAnswer.checked == true) {
        score += 200;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#008000";
          
    }
    else if (wrongAnswer.checked == true) {
        score -= 200;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#ff0000";   
    }
    $('.modal-dialog').addClass('animated rubberBand');
}

function questionCheckSix() {
   
    var correctAnswer = document.getElementById("katy")
var wrongAnswer = document.getElementById("kris")

    if (correctAnswer.checked == true) {
        score += 300;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#008000";
          
    }
    else if (wrongAnswer.checked == true) {
        score -= 300;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#ff0000";   
    }
    $('.modal-dialog').addClass('animated rubberBand');
}

function questionCheckSeven() {
   
    var correctAnswer = document.getElementById("five")
var wrongAnswer = document.getElementById("les")

    if (correctAnswer.checked == true) {
        score += 100;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#008000";
          
    }
    else if (wrongAnswer.checked == true) {
        score -= 100;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#ff0000";   
    }
    $('.modal-dialog').addClass('animated rubberBand');
}

function questionCheckEight() {
   
    var correctAnswer = document.getElementById("pete")
var wrongAnswer = document.getElementById("jake")

    if (correctAnswer.checked == true) {
        score += 200;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#008000";
          
    }
    else if (wrongAnswer.checked == true) {
        score -= 200;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#ff0000";   
    }
    $('.modal-dialog').addClass('animated rubberBand');
}

function questionCheckNine() {
   
    var correctAnswer = document.getElementById("eight")
var wrongAnswer = document.getElementById("six")

    if (correctAnswer.checked == true) {
        score += 300;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#008000";
          
    }
    else if (wrongAnswer.checked == true) {
        score -= 300;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#ff0000";   
    }
    $('.modal-dialog').addClass('animated rubberBand');
}

function questionCheckTen() {
   
    var correctAnswer = document.getElementById("flag")
var wrongAnswer = document.getElementById("mush")

    if (correctAnswer.checked == true) {
        score += 100;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#008000";
          
    }
    else if (wrongAnswer.checked == true) {
        score -= 100;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#ff0000";   
    }
    $('.modal-dialog').addClass('animated rubberBand');
}

function questionCheckEleven() {
   
    var correctAnswer = document.getElementById("eightyFive")
var wrongAnswer = document.getElementById("eighty")

    if (correctAnswer.checked == true) {
        score += 200;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#008000";
          
    }
    else if (wrongAnswer.checked == true) {
        score -= 200;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#ff0000";   
    }
    $('.modal-dialog').addClass('animated rubberBand');
}

function questionCheckTwelve() {
   
    var correctAnswer = document.getElementById("winky")
var wrongAnswer = document.getElementById("clyde")

    if (correctAnswer.checked == true) {
        score += 300;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#008000";
          
    }
    else if (wrongAnswer.checked == true) {
        score -= 300;
        document.getElementById("score").innerHTML = "Score: " + score
        document.getElementById("score").style.color = "#ff0000";   
    }
    $('.modal-dialog').addClass('animated rubberBand');
}
