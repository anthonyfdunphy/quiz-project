//GAME PAGE VARIABLES
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const highScoreButton = document.getElementById('score-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const totalScore = document.getElementById('score-board');
const controls = document.getElementById('controls');
const inputButton = document.getElementById('submit-button');
const fieldInput = document.getElementById('input-field');

//INPUT VARIABLES
const inputKey = document.getElementById('inpKey');
const submitButton = document.getElementById('submit-button');
//HIGH SCORE PAGE VARIABLES
const highScoreText = document.getElementById('score-storage');

// USER OVERALL SCORE
let scoreCounter = 0;
let shuffledQuestions; 
let currentQuestionIndex;

// EVENT LISTENER FOR START GAME
if(startButton != null){
    startButton.addEventListener('click', startGame);
}
//EVENT LISTENER FOR NEXT BUTTON
if(nextButton != null){
    nextButton.addEventListener('click', () => {
        currentQuestionIndex++;
        setNextQuestion();
    })
}
//EVENT LISTENER FOR HIGHSCORE BUTTON - LINKS TO HIGH SCORE HTML PAGE
if (highScoreButton != null){
    highScoreButton.addEventListener('click', () => {
    const highScorePage = "highscore.html";
    window.location.href = highScorePage;
    })
}
//FUNCTION FOR SAVING SCORE TO LOCAL STORAGE
function savingFunction(username, score) {
    localStorage.setItem(username, score);
}
//EVENT LISTENER FOR INPUT BUTTON
if(submitButton != null){
    submitButton.addEventListener('click', () =>{
    const key = inputKey.value;
    //CHECK IF BLANK SPACES IN INPUT KEY
    if (key.trim() === '') {
        alert('Please enter a username');
    }
    // localStorage.setItem(key, value)
    saveUserScore(key, scoreCounter);
    insertValues();
    })
}
function startGame(){
    startButton.classList.add('hide'); //HIDE START BUTTON
    highScoreButton.classList.add('hide'); //HIDE RESTART BUTTON
    totalScore.classList.remove('hide'); //SHOW SCORE DIV CONTAINER
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    scoreCounter = 0; // RESET COUNTER BACK TO 0 FOR START OF GAME
    setNextQuestion();
}
function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    fieldInput.classList.add('hide')
    //totalScore.style.display = 'none' //HIDE SCORE DIV CONTAINER
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild( answerButtonsElement.firstChild)
    }
}
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart' //RENAME START BUTTON
        startButton.classList.remove('hide') //SHOW BUTTON
        highScoreButton.classList.remove('hide') //SHOW HIGH SCORE BUTTON
        controls.classList.add('add-space') //JUSTIFY CONTENT ON FLEX - THIS WILL SPACE THE BUTTONS
        fieldInput.classList.remove('hide') // SHOW FIELDSET PAGE
    }
    //THIS IS CODE TO FIGURE OUT IF ANSWER IS CORRECT OR WRONG 
    //THIS SCORE IS THEN ADDED TO THE SCORECOUNTER VARIABLE
    if(document.body.classList.contains('correct')){
        scoreCounter++
        totalScore.innerText = 'Total Score = '+ scoreCounter
        //savingFunction('username', scoreCounter)
    } else {
        scoreCounter -= 1
        if(scoreCounter < 0){
            scoreCounter =0
        }
        totalScore.innerText = 'Total Score = '+ scoreCounter
        //savingFunction('username', scoreCounter)
    } 
}
function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
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
]