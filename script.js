var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');

var shuffledQuestions, currentQuestionIndex;

    

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() => {
    currentQuestionIndex++;
    setNextQuestion();
    
})


function startGame(){
    
    startButton.classList.add('hide');
    shuffledQuestions= questions.sort(()=> Math.random()- .5)
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();

}

function setNextQuestion(){
    resetState()
    showQuestions(shuffledQuestions[currentQuestionIndex]);

}
function showQuestions(questions){
    questionElement.innerText= questions.question;
    questions.answers.forEach(answers => {
const button = document.createElement('button')
button.innerText = answers.text;
button.classList.add('btn');
if (answers.correct){
    button.dataset.correct = answers.correct;
}
button.addEventListener('click', selectAnswer)
answerButtonsElement.appendChild(button);
        
    });

}
function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }

}

function selectAnswer(e){
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from (answerButtonsElement.children).forEach(button=>{
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length>currentQuestionIndex+1){
nextButton.classList.remove('hide')
}
else{
    
    startButton.innerText="Restart";
    startButton.classList.remove('hide');
}
}
function setStatusClass(element, correct){
    clearStatusClass(element);
    if (correct){
        element.classList.add('correct');
    }
    else{
        element.classList.add ('wrong');
    }
}
function clearStatusClass(element){
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
var questions = [
    {
      question:  "What is full form of JS?",
      answers: [
          {text: 'javascript', correct: true},
              {text: 'John Sena', correct: false},
              {text: 'Java Scale', correct:false},
              {text: 'Java standard', correct:false}
          
      ]
    },
    {
        question:  "What variables have global scope in javascript?",
        answers: [
            {text: 'local variable', correct: false},
                {text: 'any defined variable', correct: false},
                {text: 'global variable', correct:true},
                {text: 'undefined variable', correct:false}
            
        ]
      },
      {
        question:  "What is purpose of this operator?",
        answers: [
            {text: 'declare variable', correct: false},
                {text: 'refers to object it belongs to', correct: true},
                {text: 'point out to null variable', correct:false},
                {text: 'all of the above', correct:false}
            
        ]
      },
      {
        question:  "What does ConCat() does?",
        answers: [
                {text: 'play music', correct: false},
                {text: 'split two characters', correct: false},
                {text: 'assign values to variables', correct:false},
                {text: 'joins two or more strings', correct:true}
            
        ]
      }
];