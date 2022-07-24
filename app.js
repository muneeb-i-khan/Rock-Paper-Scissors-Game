const ComChoiceDisp = document.getElementById('com-choice')
const YourChoiceDisp = document.getElementById('your-choice')
const ResultDisp = document.getElementById('result')
const Buttons = document.querySelectorAll('button')
const body = document.querySelector('body')

let UserChoice
let ComChoice
let Result
Buttons.forEach(btn => btn.addEventListener('click', (e) => {
    UserChoice = e.target.id
    YourChoiceDisp.innerHTML = UserChoice
    getComChoice()
    getResult()
    changeStatus()
}))


function getComChoice() {
    const randomNum = Math.floor(Math.random() * 3) + 1

    if(randomNum === 1){
        ComChoice = 'Rock'
    }

    if(randomNum === 2){
        ComChoice = 'Paper'
    }

    if(randomNum === 3){
        ComChoice = 'Scissor'
    }

    ComChoiceDisp.innerHTML = ComChoice
}

function getResult(){
    if(ComChoice === UserChoice){
        Result = 'Draw'
    }

    if(ComChoice === 'Rock' && UserChoice === 'Paper'){
        Result = 'You Win'
    }

    if(ComChoice === 'Rock' && UserChoice === 'Scissor'){
        Result = 'You Lost'
    }
    if(ComChoice === 'Paper' && UserChoice === 'Rock'){
        Result = 'You Lost'
    }

    if(ComChoice === 'Paper' && UserChoice === 'Scissor'){
        Result = 'You Win'
    }
    if(ComChoice === 'Scissor' && UserChoice === 'Rock'){
        Result = 'You Win'
    }

    if(ComChoice === 'Scissor' && UserChoice === 'Paper'){
        Result = 'You Lost'
    }
    
    ResultDisp.innerHTML = Result
}


function changeStatus(){
    if(Result === 'You Win'){
        body.style.background = 'Green';
    }

    if(Result === 'You Lost'){
        body.style.background = 'Red';
    }

    if(Result === 'Draw'){
        body.style.background = 'powderblue';
    }
}