const gameBoard = (()=>{
        // let board = ["", "", "", "", "", "", "", "", ""]
        let board = ["X", "O", "X", "O", "X", "O", "O", "X", "X"]


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

const player1 = createPlayer("X")
const player2 = createPlayer("O")

gameBoard.board.forEach(square =>{
    console.log(square)
})

// function renderGridContent(){
//     gameBoard.board.forEach(symbol =>{
//         console.log(symbol)
//     })
// }

// renderGridContent()