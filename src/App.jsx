import { useState } from 'react'
import { WinnerModal } from './components/WinnerModal'
import './App.css'
import { TURN } from './constants'
import { checkWinner, checkEndGame } from './logic/board'

function App () {
  const [board, setBoard] = useState(() => Array(9).fill(null))
  const [turn, setTurn] = useState(TURN.x)
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURN.x)
    setWinner(null)
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    // create a new board with the updated move
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Select new turn for x or o
    const newTurn = turn === TURN.x ? TURN.o : TURN.x
    setTurn(newTurn)

    // check if winner
    const newWinner = checkWinner(newBoard)

    if (newWinner) {
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }
  return (
    <main className='container'>
      <h1>TIC-TAC-TOE</h1>
      <section className='board'>
        {board.map((square, i) => {
          return (
            <div className='square' key={i} onClick={() => updateBoard(i)}>
              <div className='item'>{square}</div>
            </div>
          )
        })}
      </section>
      <section>
        <WinnerModal winner={winner} />
      </section>
      <section className='options'>
        <button onClick={resetGame}>Reset game</button>
      </section>
    </main>
  )
}

export default App
