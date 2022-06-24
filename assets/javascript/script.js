//DECLARING VARIABLE
const question = document.querySelector('#questionText');
const choices = Array.from(document.querySelectorAll('.questions'));
const progressText = document.querySelector('#progress-text');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

//CREATING VARIABLES AND ARRAYS
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


// array of objects outlinning the question and answers to appear in quiz.
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

];
//setting more variables to be used within file.
const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

//begin quiz
startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
};

//GET THE NEXT QUIZ QUESTION
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
    
        return window.location.assign('highscore.html')
    }

    //COUNTER UP THROUGH THE ARRAY
    questionCounter++


    //display questions at random, not the same order everytime.
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    //display answer choices underneath question, pulled from questions array
    choices.forEach(choice => {
        const number = choice.dataset.number
        choice.innerText = currentQuestion['choice' + number]
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true
};

//enable users to phyically click on their choosen answer
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset.number
        //IF statement to apply style when correct and another style when incorrect
        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 
  'incorrect'
        //give points when answer is correct
        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply);
        
        // ALLOW TIME BETWEEN QUESTIONS FOR USER TO SEE CORRECT/INCORRECT ANSWERS
        setTimeout (() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    })
})
//count users score 
incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

console.log('choice.innerText')
//starts running quiz
startGame();

console.log('runn after')