

// declared score variable equal to zero
var score = 0;
// bootsrap modal timer javascript for results
var DISPLAY_TIME = 5;
$('#timedAlert')
  .on('show.bs.modal', function() {
    $(this).find('.modal-body span').text(DISPLAY_TIME);
    }).on('shown.bs.modal', function () { 
        var audio = new Audio('../Music/Jeopardy-theme-song.mp3');
        audio.play()
        
    var countdownTimer = setInterval(function(timedAlert){
      var spanElt  = timedAlert.find('.modal-body span'),
          timeLeft = parseInt(spanElt.text());
      $('.modal-body span').text(--timeLeft);
      if (timeLeft <= 0) timedAlert.modal('hide');
    },1000, $(this));
    $(this).data('countdownTimer', countdownTimer);
}).on('hidden.bs.modal', function() {
  clearInterval($(this).data('countdownTimer'));
    });


// created function for question One
function questionCheckOne() {
    // added toggle so after you click button it will disappear
    $('#one').hide()
    // created variable for correct answer
    var correctAnswer = document.getElementById("female")
    // created variable for wrong answer
    var wrongAnswer = document.getElementById("male")
     // if the correct answer was checked then update score
    if (correctAnswer.checked == true) {
         // add 100 points to score
        score += 100;
        // grab score ID and change .innerHTML to say Score: + (whatever the score is)
        document.getElementById("score").innerHTML = "Score: " + score
        // change color to green when they click this radio button
        document.getElementById("score").style.color = "#008000";
            
    }
    // otherwise if the wrong answer is checked
    else if (wrongAnswer.checked == true) {
        // subtract 100 points from score
        score -= 100;
        // grab score ID and change .innerHTML to say Score: + (whatever the score is)
        document.getElementById("score").innerHTML = "Score: " + score
        // change color to red when they click this radio button
        document.getElementById("score").style.color = "#ff0000";
        
    }
    // animate modal box when clicked on
    $('.modal-dialog').addClass('animated rubberBand');
   
}

// ***** repeated same steps for all other questions ******



function questionCheckTwo() {
    $('#two').hide()
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
    $('#nine').hide()
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
    $('#three').hide()
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
    $('#four').hide()
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
    $('#ten').hide()
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
    $('#five').hide()
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
    $('#six').hide()
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
    $('#eleven').hide()
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
    $('#seven').hide()
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
    $('#eight').hide()
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
    $('#twelve').hide()
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



