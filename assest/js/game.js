
const questions = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const ScoreText = document.querySelector('#score');
const ProgressBarFull = document.querySelector('#progressBarFull');

let currentQuestion ={};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0
let availableQuestions = [];

let question = [
{
questions: 'What is 2 + 2',
choice1: '2',
choice2: '4',
choice3: '21',
choice4: '17',
answer: 2,
},

{
questions: 'What is 3 + 3',
choice1: '2',
choice2: '4',
choice3: '21',
choice4: '6',
answer: 4,
},

{
questions: 'What is 4 + 4',
choice1: '2',
choice2: '4',
choice3: '8',
choice4: '17',
answer: 3,
},

{
questions: 'What is 5 + 5',
choice1: '10',
choice2: '4',
choice3: '21',
choice4: '17',
answer: 1,
},

]

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame =() =>{
questionsCounter = 0
score = 0
availableQuestions = [...questions]
getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionsCounter > MAX_QUESTIONS){
    localStorage.setItem('mostReentScore', score)
    return window.location.assign('/end.html')

    }
questionCounter++
progressText.inerText = `Question ${questionCounter} of ${MAX_QUESTIONS}` 
progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`


const questionIndex = Math.floor(Math.random() * availableQuestions.length)


}
