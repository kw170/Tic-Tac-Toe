const gameBoard = (()=>{
        let board = ["", "", "", "", "", "", "", "", ""]
        // let board = ["X", "O", "X", "O", "X", "O", "O", "X", "X"]

        const resetBoard = () =>{
            for(let i = 0; i < board.length; i++){
                board[i] = ""
            }
            renderGridContent()
            turnCounter = 0
            move();
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
const clickHandler = (event) => {
    const clickedSquare = event.target;
  
    if (clickedSquare.textContent !== "X" && clickedSquare.textContent !== "O") {
      if (turnCounter % 2 === 0) {
        clickedSquare.textContent = "X";
        clickedSquare.style.color = "#34C3BE";
        gameBoard.board[clickedSquare.dataset.index] = "X";
        turnDisplay.textContent = "O TURN";
        turnDisplay.style.color = "#F2B138";
        checkWin("X");
      } else {
        clickedSquare.textContent = "O";
        clickedSquare.style.color = "#F2B138";
        gameBoard.board[clickedSquare.dataset.index] = "O";
        turnDisplay.textContent = "X TURN";
        turnDisplay.style.color = "#34C3BE";
        checkWin("O");
      }
      turnCounter++;
    }
  };
  
  function move() {
    square.forEach(square => {
      square.addEventListener('click', clickHandler);
    });
  }

  // Call the move function to add the event listeners
  move();
  
  // To remove the event listeners
  function removeListeners() {
    square.forEach(square => {
      square.removeEventListener('click', clickHandler);
    });
  }



function checkWin(playerSymbol){
    for (let combination of gameBoard.winningCombinations) {
        if (
          gameBoard.board[combination[0]] === playerSymbol &&
          gameBoard.board[combination[1]] === playerSymbol &&
          gameBoard.board[combination[2]] === playerSymbol
        ) {
            turnDisplay.textContent = playerSymbol + " WINS!"
            turnDisplay.style.color = "#A9BEC8";
            // gameBoard.resetBoard()
            removeListeners()

        }
      }
    if (turnCounter == 8){
        turnDisplay.textContent = "CATS GAME"
        turnDisplay.style.color = "#A9BEC8";
        removeListeners()
        // gameBoard.resetBoard()
    }
    } 
renderGridContent();

