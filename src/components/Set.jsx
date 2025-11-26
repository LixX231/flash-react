import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Card from './Card'
import cardsData from '../data.json'
import './Set.css'

export default function Set() {
  const location = useLocation();
  const { set } = location.state;

  const cards = cardsData.filter((item) => item.setName === set);

  const [index, setIndex] = useState(0);

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="set-container">
      <h2>Набор: {set}</h2>

      <div className="counter">
        {index + 1} / {cards.length}
      </div>

      <div className="slider">
        <button className="slide-btn" onClick={prevCard}>◀</button>

        <div className="slide">
          <Card
            front={cards[index].front}
            back={cards[index].back}
            key={cards[index].id}
          />
        </div>

        <button className="slide-btn" onClick={nextCard}>▶</button>
      </div>
    </div>
  );
}



