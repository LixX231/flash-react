import { useState } from 'react'
import './Card.css'

export default function Card({ front, back }) {
  const [flipped, setFlipped] = useState(false)

  const handleClick = () => {
    setFlipped(!flipped)
  }

  return (
    <div className="card-container" onClick={handleClick}>
      <div className={`card ${flipped ? 'flipped' : ''}`}>
        <div className="card-front">
          <p>{front}</p>
        </div>
        <div className="card-back">
          <p>{back}</p>
        </div>
      </div>
    </div>
  )
}