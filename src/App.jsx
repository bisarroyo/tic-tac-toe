import { useState } from 'react'
import { cubicBezier, motion } from 'framer-motion'

import { MouseFollower } from './components/Cursor'
import { Modal } from './components/Modal'

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
      <MouseFollower turn={turn} />
      <motion.h1
        initial={{
          scale: 0
        }}
        animate={{
          scale: 1
        }}
      >
        TIC-TAC-TOE
      </motion.h1>
      <section className='board'>
        {board.map((square, i) => {
          return (
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              className='square'
              key={i}
              onClick={() => updateBoard(i)}
            >
              <div className={`${square}`}>{square}</div>
            </motion.div>
          )
        })}
      </section>
      <section className='results'>
        <p>
          {winner === false && ' Empate'}
          {winner && `Ganó ${winner}`}
        </p>
      </section>
      <motion.section
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{
          duration: 1,
          transition: cubicBezier(0.58, 0.54, 0, 0.58)
        }}
        className='options'
      >
        <button className='reset-game' onClick={resetGame}>Reset Game</button>
      </motion.section>
    </main>
  )
}

export default App
