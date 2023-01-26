import { WINNER_COMBS } from '../constants'

export const checkWinner = (boardToCheck) => {
  // check for winner
  for (const combo of WINNER_COMBS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a]
    }
  }
  // if no winner
  return null
}

export const checkEndGame = (boardToCheck) => {
  // return a true value if all spaces are filled
  return boardToCheck.every((board) => board !== null)
}
