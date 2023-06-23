const gameBoard = (()=>{
        let board = ["", "", "", "", "", "", "", "", ""]
        // let board = ["X", "O", "X", "O", "X", "O", "O", "X", "X"]

        const resetBoard = () =>{
            for(let i = 0; i < board.length; i++){
                board[i] = ""
            }
            renderGridContent()
            turnCounter = 0
        }
        const winningCombinations = [
            [0, 1, 2], // top row
            [3, 4, 5], // middle row
            [6, 7, 8], // bottom row
            [0, 3, 6], // left column
            [1, 4, 7], // middle column
            [2, 5, 8], // right column
            [0, 4, 8], // top-left to bottom-right diagonal
            [2, 4, 6]  // top-right to bottom-left diagonal
        ];
// Creates gameboard object
        return {
            board: board,
            winningCombinations: winningCombinations,
            resetBoard: resetBoard
          };
})();

function createPlayer(symbol){
    return{
        symbol: symbol,
    }
}
// const createPlayer = (symbol) => {
//     this.symbol = symbol

//     const getSymbol = () =>{
//         return this.symbol
//     }
//     return {
//         getSign
//     }
// }

const playerX = createPlayer("X")
const playerO = createPlayer("O")

const square = document.querySelectorAll('.square');
const reset = document.querySelector(".reset")
const turnDisplay = document.querySelector(".turnDisplay")

let turnCounter = 0;

//Display board array content into gameboard grid
function renderGridContent() {
    for (let i = 0; i < 9; i++) {
      square[i].textContent = gameBoard.board[i];
    }
  }

//Reset button resets array and game display
reset.addEventListener('click', () =>{
    gameBoard.resetBoard()

})
//Adds mark when square is click on
square.forEach(square =>{
    square.addEventListener('click', () =>{
        if(square.textContent !== "X" && square.textContent !== "O"){
            if(turnCounter % 2 == 0){
                square.textContent = "X"
                square.style.color = "#34C3BE"
                gameBoard.board[square.dataset.index] = "X"
                turnDisplay.textContent = "0 TURN"
                turnDisplay.style.color = "#F2B138"
                checkWin("X")
            }
            else{
                square.textContent = "O"
                square.style.color = "#F2B138"
                gameBoard.board[square.dataset.index] = "O"
                turnDisplay.textContent = "X TURN"
                turnDisplay.style.color = "#34C3BE"
                checkWin("O")
                console.log(turnCounter)
            }
            turnCounter++;
        }
    })
})

function checkWin(playerSymbol){
    for (let combination of gameBoard.winningCombinations) {
        if (
          gameBoard.board[combination[0]] === playerSymbol &&
          gameBoard.board[combination[1]] === playerSymbol &&
          gameBoard.board[combination[2]] === playerSymbol
        ) {
            turnDisplay.textContent = playerSymbol + " WINS!"
            gameBoard.resetBoard()
        //   return true; // Player has won
        }
      }
    if (turnCounter == 8){
        turnDisplay.textContent = "CATS GAME"
        gameBoard.resetBoard()
    }
    } 
renderGridContent();


