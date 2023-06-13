const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')


const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestion,currectQuestionIndex;
let quizScore=0;


startButton.addEventListener('click',startGame)

nextButton.addEventListener('click',()=>{
    currectQuestionIndex++
    setnextQuestion()
})


function startGame(){
    startButton.classList.add('hide')
    shuffledQuestion=questions.sort(()=>Math.random() -0.5)
    currectQuestionIndex=0;
    questionContainerElement.classList.remove('hide')
    setnextQuestion()
    quizScore=0;
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
}
}
function selectAnswer(e){
    const selectedButton=e.target
    const correct =selectedButton.dataset.correct
    setStatusClass(document.body.correct)
    Array.from(answerButtonElement.children).forEach((button) =>{
        setStatusClass(button,button.dataset.correct)
    })
    if(shuffledQuestion.length > currectQuestionIndex +1){
        nextButton.classList.remove("hide")
    }else{
        startButton.innerText="restart"
        startButton.classList.remove("hide")
    }
    if(selectedButton.dataset = correct){
        quizScore++
    }
    document.getElementById('right-answer').innerText=quizScore}

function clearStatusClass(element){
Element.classList.remove('wrong')
}
const question = [
    {
    question :'which one of the is a javascript framework?',
    answers : [
        {text: 'python',correct:false},
        {text: 'django',correct:false},
        {text: 'react',correct:true},
        {text: 'eclips',correct:false}
    ],
},
{
    question :'which one of the is a javascript framework?',
    answers : [
        {text: 'python',correct:false},
        {text: 'django',correct:false},
        {text: 'react',correct:true},
        {text: 'eclips',correct:false}
    ],
},
{
    question :'which one of the is a javascript framework?',
    answers : [
        {text: 'python',correct:false},
        {text: 'django',correct:false},
        {text: 'react',correct:true},
        {text: 'eclips',correct:false}
    ],
}]