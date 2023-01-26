export function WinnerModal ({ winner }) {
  if (winner === null) return null

  const textWinner = winner === false ? 'empate' : 'Ganó'
  console.log('algo')
  return (

    <div>
      <div>{textWinner}</div>
      {winner && <div>{winner}</div>}
    </div>

  )
}
