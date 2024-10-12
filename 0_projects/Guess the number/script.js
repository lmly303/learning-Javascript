let random_number = Math.round(Math.random()*100 +1);
console.log(random_number)

const submit = document.querySelector('#subt');
const uinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultParas');

const p =document.createElement('p');

let prevGuess = [];
let numGuesses = 1;

let playGame = true;


if(playGame){
    submit.addEventListener('click',(event)=>{
        event.preventDefault()
        const guess = parseInt(uinput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a valid number`)
    }
    else if(guess<1){
        alert(`Number should be greater than 1`)
    }
    else if(guess>100){
        alert(`Number should be less than 100`)
    }
    else{
        prevGuess.push(guess);
        if(numGuesses === 11){
            dispalyGuess(guess)
            displayMessage(`Game Over. Random number was ${random_number}`)
            endGame()
        }
        else{
            dispalyGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === random_number){
        displayMessage(`You gussed it right`)
        endGame()
    }
    else if(guess < random_number){
        displayMessage(`Number is too low`)
    }
    else{
        displayMessage(`Number id too high`)
    }
}

function dispalyGuess(guess){
    uinput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuesses++;
    lastResult.innerHTML = `${11-numGuesses}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(message){
    uinput.value = '';
    uinput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 class = 'newGame'>Start New Game</h2>`
    resultParas.appendChild(p);
    playGame = false
    newGame()
}

function newGame(message){
    const newGameButton = document.querySelector('.newGame')
    newGameButton.addEventListener('click', (event)=>{
        random_number = Math.round(Math.random()*100 +1);
        console.log(random_number)
        prevGuess = []
        numGuesses = 1;
        guessSlot.innerHTML = ''
        lowOrHigh.innerHTML = '';
        lastResult.innerHTML = `${11-numGuesses}`;
        uinput.removeAttribute('disabled');
        resultParas.removeChild(p);

        playGame = true
    })
}