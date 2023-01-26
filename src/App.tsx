import { useState } from 'react'
import './App.css'

const TURNS = {
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




function App() {
  const [board , setBoard] = useState(() => Array(9).fill(null))

  const updateBoard = () => {

  }
  return (
    <main className='container'>
      <h1>TIC-TAC-TOE</h1>
      <section className='board'>
        {board.map((_, i) => {
          return (
            <div className='square' key={i}>
              <div className='item' onClick={()=>updateBoard}>{i}</div>
            </div>
          )
        })}
      </section>
      <section className='buttom'>

      </section>
    </main>
  )
}

export default App
