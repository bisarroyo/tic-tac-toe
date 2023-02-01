import { useState, useEffect } from 'react'

export function MouseFollower ({ turn }) {
  const [mousePosition, setMousePosition] = useState({
    positionX: 0,
    positionY: 0
  })
  const { positionX, positionY } = mousePosition

  useEffect(() => {
    const mouseHandler = (event) => {
      const { clientX, clientY } = event
      setMousePosition({
        positionX: clientX,
        positionY: clientY
      })
    }

    window.addEventListener('pointermove', mouseHandler)

    return () => {
      window.removeEventListener('pointermove', mouseHandler)
    }
  }, [])
  return (
    <div style={{
      position: 'absolute',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      top: -25,
      left: -25,
      backgroundColor: '#ffffff',
      opacity: 0.6,
      transform: `translate(${positionX}px, ${positionY}px)`,
      pointerEvents: 'none',
      cursor: 'none',
      color: 'red',
      fontSize: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <div style={{
        lineHeight: '50px',
        fontSize: '50px'
      }}
      >
        {turn}
      </div>
    </div>
  )
}
