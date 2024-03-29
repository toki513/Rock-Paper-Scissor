const computerChoiceDisplay = document.getElementById('Computer-choice')
const userChoiceDisplay = document.getElementById('User-choice')
const resultDisplay = document.getElementById('Result')
const possibleChoices = document.querySelectorAll('button')
let userchoice;
let computerChoice;
let result

possibleChoices.forEach(possible=>possible.addEventListener('click' , (e) =>{
    e.target.style.backgroundColor = '#ffcc00';
    userchoice = e.target.id 
    
    userChoiceDisplay.innerHTML = userchoice
    randomNumber()
    getResult()
}))

function randomNumber (){
    const random = Math.floor(Math.random() *possibleChoices.length + 1)

    if(random === 1){
        computerChoice = 'Rock'
    }
    if(random === 2){
        computerChoice = 'Paper'
    }
    if(random === 3){
        computerChoice = 'Scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userchoice){
        result = "It's a Draw!"
    }
     
    if(computerChoice == 'Rock' && userchoice == 'Paper'){
        result = "You won!"
    } 
    if(computerChoice == 'Rock' && userchoice == 'Scissor'){
        result = "You lost!"
    }
    if(computerChoice == 'Paper' && userchoice == 'Scissor'){
        result = "You won!"
    }
    if(computerChoice == 'Paper' && userchoice == 'Rock'){
        result = "You lost!"
    }
    if(computerChoice == 'Scissor' && userchoice == 'Rock'){
        result = "You won!"
    }
    if(computerChoice == 'Scissor' && userchoice == 'Paper'){
        result = "You lost!"
    }

    resultDisplay.innerHTML = result
}