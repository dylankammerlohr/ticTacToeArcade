function playerGameOptions(){
    let playerNameBox = document.getElementById('single-player')
    if (playerNameBox.style.display ==='none'){
        playerNameBox.style.display = 'flex'
    } else {
        return
    }  
    
    let topButtons = document.getElementById('player-buttons')
    if (topButtons.style.display === 'flex'){
        topButtons.style.display = 'none'
    } else {
        return
    }
}

function singleStart(){
    document.getElementById('single-player-name').innerText = 'Player One:' + ' ' + document.getElementById('single-name').value
    document.getElementById('computer').innerText = 'Player Two: Computer'

    let nameBox = document.getElementById('single-player')
    if (nameBox.style.display === 'flex'){
        nameBox.style.display = 'none'
    } else {
        return
    }
}

function twoPlayerOption(){
    let playerNamesBox = document.getElementById('two-players')
    if (playerNamesBox.style.display === "none") {
        playerNamesBox.style.display = "flex";
    } else {
        return
    }

    let optionBoxes = document.getElementById('player-buttons')
    if (optionBoxes.style.display === 'flex'){
        optionBoxes.style.display = 'none'
    } else {
        return
    }
}

const playerOne = document.getElementById('player-one')
const playerTwo = document.getElementById('player-two')
function startButton(){
    let playerNames = [playerOne.value, playerTwo.value]
    let startPlayer = playerNames[Math.floor(Math.random() * playerNames.length)]
    document.getElementById('start-player').innerText = startPlayer + ' ' + 'starts' + '!' 
    document.getElementById('name-one').innerText = 'Player One:' + ' ' + playerOne.value
    document.getElementById('name-two').innerText = 'Player Two:' + ' ' + playerTwo.value

    let playersBox = document.getElementById('two-players')
    if (playersBox.style.display === 'flex'){
        playersBox.style.display = 'none'
    } else {
        return
    }
}

const gameState = {
    board: [[null, null, null],
            [null, null, null],
            [null, null, null]]
}
const players = ['x','o']
let currentPlayer = players[1]

const gameBoard = Array.from(document.getElementsByClassName('box'))
gameBoard.forEach((boxes) => {
    boxes.addEventListener('click', onBoardClick)
})

function onBoardClick(element) {
    if (element.target.innerText != ''){
        return
    }
    if (currentPlayer === players[1]){
        currentPlayer = players[0]
        element.target.innerText = currentPlayer
    } else {
        currentPlayer = players[1]
        element.target.innerText = currentPlayer
    }
}

function checkForWinner(){  
    if (gameBoard[0] == currentPlayer && gameBoard[0] == gameBoard[1] && gameBoard[0] == gameBoard[2]){
        document.getElementById('end-of-game-message').innerText = currentPlayer + 'wins'
        return
    }
    if (gameBoard[3] == currentPlayer && gameBoard[3] == gameBoard[4] && gameBoard[3] == gameBoard[5]){
        document.getElementById('end-of-game-message').innerText = currentPlayer + 'wins'
        return
    }
    if (gameBoard[6] == currentPlayer && gameBoard[6] == gameBoard[7] && gameBoard[6] == gameBoard[8]){
        document.getElementById('end-of-game-message').innerText = currentPlayer + 'wins'
        return
    }
    if (gameBoard[0] == currentPlayer && gameBoard[0] == gameBoard[3] && gameBoard[0] == gameBoard[6]){
        document.getElementById('end-of-game-message').innerText = currentPlayer + 'wins'
        return
    }
    if (gameBoard[1] == currentPlayer && gameBoard[1] == gameBoard[4] && gameBoard[1] == gameBoard[7]){
        document.getElementById('end-of-game-message').innerText = currentPlayer + 'wins'
        return
    }
    if (gameBoard[2] == currentPlayer && gameBoard[2] == gameBoard[5] && gameBoard[2] == gameBoard[8]){
        document.getElementById('end-of-game-message').innerText = currentPlayer + 'wins'
        return
    }
    if (gameBoard[0] == currentPlayer && gameBoard[0] == gameBoard[4] && gameBoard[0] == gameBoard[8]){
        document.getElementById('end-of-game-message').innerText = currentPlayer + 'wins'
        return
    }
    if (gameBoard[2] == currentPlayer && gameBoard[2] == gameBoard[4] && gameBoard[2] == gameBoard[6]){
        document.getElementById('end-of-game-message').innerText = currentPlayer + 'wins'
        return
    }
}

const restartGame = document.getElementById('restart-button')
restartGame.addEventListener('click', gameState)

