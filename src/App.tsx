import { useState } from 'react'
import './App.css'

const TURN = {
  x: 'x',
  o: 'o'
}

const WINNER_COMBS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [2, 5, 8]
]

const checkWinner = (boardToCheck: any[]) => {
  // check for winner
  for(const combo of WINNER_COMBS) {
    const [a, b, c] = combo
    if(
      boardToCheck[a] &&
      boardToCheck[a] === WINNER_COMBS[b] &&
      boardToCheck[a] === WINNER_COMBS[c]
    ) {
      return boardToCheck[a]
    }
  }
  // if no winner
  return null
}

const checkEndGame = (boardToCheck:any[]) => {
  // return a true value if all spaces are filled
  boardToCheck.every((board) => board !== null)
}


function App() {
  const [board , setBoard] = useState(() => Array(9).fill(null))
  const [turn, setTurn] = useState(TURN.x)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURN.x)
    setWinner(null)
  }

  const updateBoard = (index: number) => {
    if(board[index] || winner) return

    // create a new board with the updated move
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Select new turn for x or o
    const newTurn = turn === TURN.x ? TURN.o : TURN.x
    setTurn(newTurn)

    // check if winner
    const newWinner = checkWinner(newBoard)
    if(newWinner) {
      setWinner(newWinner)
    } else if(checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  return (
    <main className='container'>
      <h1>TIC-TAC-TOE</h1>
      <section className='board'>
        {board.map((square, i) => {
          return (
            <div className='square' key={i} onClick={()=>updateBoard(i)}>
              <div className='item' >{square}</div>
            </div>
          )
        })}
      </section>
      <section>
        { winner && winner === false ? 'empate' : `ganó ${winner}`}
      </section>
      <section className='options'>
        <button onClick={resetGame}>Reset game</button>
      </section>
    </main>
  )
}

export default App
