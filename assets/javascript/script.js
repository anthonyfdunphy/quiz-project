const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

const shuffledQuestions, currectQuestionIndex

startButton.addEventListener('click', startGame)

function startGame(){
    console.log('startGame')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currectQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currectQuestionIndex])

}

function showQuestion(){

}

function selectAnswer(){

}

const questions = [
    {
        question: 'What is 2 + 2',
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false}
        ]
    }
]