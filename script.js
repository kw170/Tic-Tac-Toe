const gameBoard = (()=>{
        let board = ["", "", "", "", "", "", "", "", ""]
        // let board = ["X", "O", "X", "O", "X", "O", "O", "X", "X"]


        const resetBoard = () =>{
            for(let i = 0; i < board.length; i++){
                board[i] = ""
            }
        }
// Creates gameboard object
        return {
            board: board,
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
    renderGridContent()
})
//Adds mark when square is click on
square.forEach(square =>{
    square.addEventListener('click', () =>{
        if(square.textContent !== "X" && square.textContent !== "O"){
            if(turnCounter % 2 == 0){
                square.textContent = "X"
                turnDisplay.textContent = "0 TURN"
            }
            else{
                square.textContent = "O"
                turnDisplay.textContent = "X TURN"
            }
            turnCounter++;
        }
    })
})


renderGridContent();


//Square click add X or O based on turn

//Turn Display Update

//Check if game is over who won