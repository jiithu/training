var questions = [
    {
        question: 'Which amongst the following is the largest mammal?',
        choices: ['Elephant', 'Whale', 'Dinosaur', 'Rhinoceros'],
        correctAnswer: 1
    },
    {
        question: 'Animal with the sharpest hearing ability?',
        choices: ['Rat', ' Moth', 'Bat', 'Squirrel'],
        correctAnswer: 2
    },
    {
        question: 'Which of the following dog breeds is the smallest??',
        choices: ['Dachshund', ' Poodle', 'Pomeranian', 'Chihuahua'],
        correctAnswer: 3
    },
    {
        question: 'Which of the following animals sleeps standing up?',
        choices: ['Gorillas', 'Flamingos', 'Hedgehogs', ' Ravens'],
        correctAnswer: 2
    },
    {
        question: 'What is the fastest water animal?',
        choices: ['Porpoise', ' Sailfish', 'Flying fish', 'Tuna'],
        correctAnswer: 1
    }
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

window.addEventListener('DOMContentLoaded', function(e){
    displayCurrentQuestion();

    var quizMessage = document.getElementById('quizMessage');

        quizMessage.style.display = 'none';

    document.getElementById('nextButton').addEventListener('click', function(){
        
        if(!quizOver){
            var radioBtnsChecked = document.querySelector('input[type=radio]:checked');

            if (radioBtnsChecked === null){
                quizMessage.innerText = 'Please select an answer';
                quizMessage.style.display = 'block';
            } else {
                console.log(radioBtnsChecked.value);
                quizMessage.style.display = 'none';
                if (parseInt(radioBtnsChecked.value) === questions[currentQuestion].correctAnswer){
                    correctAnswers++;
                }

                currentQuestion++;

                if (currentQuestion < questions.length){
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    document.getElementById('nextButton').innerText = 'Play Again?';
                    quizOver = true;
                 }
                }   
        } else {
            quizOver = false;
            document.getElementById('nextButton').innerText = 'Next Question';
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion(){
    console.log('In display current Questions');

    var question = questions[currentQuestion].question;
    var questionClass = document.getElementById('question');
    var choiceList = document.getElementById('choiceList');
    var numChoices = questions[currentQuestion].choices.length;

    //Set the questionClass text to the current question
    questionClass.innerText = question;

    //Remove all current <li> elements (if any)
    choiceList.innerHTML = '';

    var choice;
    for (i = 0; i < numChoices; i++){
		
        choice = questions[currentQuestion].choices[i];
        var li = document.createElement('li');
           
			li.innerHTML = '<li> <p><label><input class="with-gap" type="radio" value="' + i + '" name="group1" /><span style="color:blue;">' + choice + '</span></li></p></label>'
        choiceList.appendChild(li);

    }
	
	
	
        
        var li = document.createElement('li');
           
			li.innerHTML = '<li> <p><label><input class="with-gap" style="visibility: hidden;display=none;"  value="' + i + '" name="group1" /><span>' + "" + '</span></li></p></label>'
        choiceList.appendChild(li);
}

function resetQuiz(){
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore(){
    document.getElementById('result').innerText = 'You scored: ' + correctAnswers + ' out of ' + questions.length;
    document.getElementById('result').style.display = 'block';
}

function hideScore(){
    document.getElementById('result').style.display = 'none';
}