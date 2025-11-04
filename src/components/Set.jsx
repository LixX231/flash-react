import { useState } from 'react'
import Card from './Card'
import data from '../data.json'
import './Set.css'

export default function Set() {
  const [step, setStep] = useState(0)
  const current = data[step]

  const next = () => {
    setStep((step + 1) % data.length)
  }

  const prev = () => {
    setStep((step - 1 + data.length) % data.length)
  }

  return (
    <div className="set">
      <Card key={current.id} front={current.front} back={current.back} />
      <div className="controls">
        <button className="btn" onClick={prev}>← Предыдущая</button>
        <span className="counter">{step + 1} / {data.length}</span>
        <button className="btn" onClick={next}>Следующая →</button>
      </div>
    </div>
  )
}