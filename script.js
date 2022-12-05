const statusDiv = document.querySelector('.status')
const resetDiv = document.querySelector('.reset');
const cellDivs = document.querySelectorAll('.game2-cell')

const xSymbol ='X';
const oSymbol = '0'

//game variables
let gameIsLive =true;
let xIsNext =true;

// function 
const letterToSymbol = (Letter) => Letter === 'X' ? xSymbol :oSymbol;

const handleWin = (Letter) => {
    gameIsLive =false;
    if (Letter ==='X'){
        statusDiv.innerHTML=`${letterToSymbol(Letter)} has won!`
    } else {
        statusDiv.innerHTML=`<span>${letterToSymbol(Letter)} has won</span>!`
    }

}


