/* Declaring variables */

let availableQuestions[]

/* Array of questions */
let questions = [
    {
        question: 'Which of the following is an amplifer manufacturer',
        choice1: 'Sennheiser',
        choice2: 'Powersoft',
        choice3: 'Shure',
        choice4: 'Gibson',
        answer: 2,
    },
    {
        question: 'Which of the following is an microphone from Neumann',
        choice1: '4038',
        choice2: 'SM58',
        choice3: 'TLM 103',
        choice4: 'Beta 87A',
        answer: 3,
    },
    {
        question: 'Which of the following is an hifi brand',
        choice1: 'Sennheiser',
        choice2: 'Sono',
        choice3: 'Shure',
        choice4: 'Nike',
        answer: 2,
    },
    {
        question: 'Which of the following is an guitar manufacturer',
        choice1: 'Sennheiser',
        choice2: 'Powersoft',
        choice3: 'Shure',
        choice4: 'Gibson',
        answer: 3,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = ()=> {
    
}