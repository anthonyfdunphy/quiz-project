const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const highScoreButton = document.getElementById('score-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const totalScore = document.getElementById('score-board')

let scoreCounter = 0 
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

//EVENT LISTENER FOR HIGHSCORE BUTTON - LINKS TO HIGH SCORE HTML PAGE
highScoreButton.addEventListener('click', () => {
    var highScorePage = "highscore.html";
    window.location.href = highScorePage;
})

function startGame(){
    console.log('startGame')
    startButton.classList.add('hide') //HIDE START BUTTON
    highScoreButton.classList.add('hide') //HIDE RESTART BUTTON
    totalScore.style.display = 'flex' //SHOW SCORE DIV CONTAINER
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question){
    questionElement.innerText = question.question
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
    }

    //THIS IS CODE TO FIGURE OUT IF ANSWER IS CORRECT OR WRONG 
    //THIS SCORE IS THEN ADDED TO THE SCORECOUNTER VARIABLE
    if(document.body.classList.contains('correct')){
        scoreCounter++
        totalScore.innerText = 'Total Score = '+ scoreCounter
    } else {
        scoreCounter -= 1
        if(scoreCounter < 0){
            scoreCounter =0
        }
        totalScore.innerText = 'Total Score = '+ scoreCounter
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