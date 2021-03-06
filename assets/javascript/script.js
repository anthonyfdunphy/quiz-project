//game page variables 
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const totalScore = document.getElementById('score-board');
const controls = document.getElementById('controls');
const fieldInput = document.getElementById('input-field');

//input variables
const inputKey = document.getElementById('inpKey');
const submitButton = document.getElementById('submit-button');

// user overall score
let scoreCounter = 0;
let shuffledQuestions; 
let currentQuestionIndex;

//event listener for start game
if(startButton != null){
    startButton.addEventListener('click', startGame);
}

//event listener for next button
if(nextButton != null){
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
    });
}

//event listener for submit button
if(submitButton != null){
    submitButton.addEventListener('click', () =>{
    const key = inputKey.value;
    //check if blank spaces are in input key
    if (key.trim() === '') {
        alert('Please enter a username');
    }else {
        //add key and value to local storage
        saveUserScore(key, scoreCounter);
        insertValues();

        //open high score page when data is submitted
        const highScorePage = "highscore.html";
        window.location.href = highScorePage;

    }

    });
}

function startGame(){
    startButton.classList.add('hide'); //hide start button
    totalScore.classList.remove('hide'); //show score div container
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    scoreCounter = 0; // reset counter back to 0 for start of game
    setNextQuestion();
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    inputKey.classList.add('hide');
    submitButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild( answerButtonsElement.firstChild);
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart'; //rename start button 
        startButton.classList.remove('hide'); //show button 
        controls.classList.add('add-space'); //justify content on flex - allows buttons some space
        inputKey.classList.remove('hide'); //input key
        submitButton.classList.remove('hide'); //show submit button
    }

    //This is code to figure out if answer is correct or wrong
    //This score is then added to the scorecounter variable
    if(document.body.classList.contains('correct')){
        scoreCounter++;
        totalScore.innerText = 'Total Score = '+ scoreCounter;
    } else {
        scoreCounter -= 1;
        if(scoreCounter < 0){
            scoreCounter =0;
        }
        totalScore.innerText = 'Total Score = '+ scoreCounter;
    } 
}

function setStatusClass(element, correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question: 'Which of the following is an amplifer manufacturer?',
        answers: [
            {text: 'Gibson', correct: false},
            {text: 'Shure', correct: false},
            {text: 'Sennheiser', correct: false},
            {text: 'Powersoft', correct: true}
        ]
    },
    {
        question: 'Which of the following is an microphone from Neumann?',
        answers: [
            {text: '4038', correct: false},
            {text: 'TLM 103', correct: true},
            {text: 'Beta 57A', correct: false},
            {text: 'SM57', correct: false}
        ]
    },
    {
        question: 'Which of the following is an hifi brand?',
        answers: [
            {text: 'Sennheiser', correct: false},
            {text: 'Sonos', correct: true},
            {text: 'Nike', correct: false},
            {text: 'Shure', correct: false}
        ]
    },
    {
        question: 'How many cores are in an 8 Pole Speakon?',
        answers: [
            {text: '8', correct: true},
            {text: '4', correct: false},
            {text: '6', correct: false},
            {text: '2', correct: false}
        ]
    },
    {
        question: 'Which of the following is a Behringer audio console?',
        answers: [
            {text: 'CL5', correct: false},
            {text: 'L350', correct: false},
            {text: 'X32', correct: true},
            {text: 'SQ5', correct: false}
        ]
    },
    {
        question: 'Which of the following is a well known audio compressor from UREI?',
        answers: [
            {text: '1011', correct: false},
            {text: '1176', correct: true}
        ]
    }
];
