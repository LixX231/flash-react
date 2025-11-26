import Header from "./Header";
import { BtnSet } from "./BtnSet";
import cards from "../data.json";   

export function PageSelectSet() {
  const uniqueSets = [];
  const map = {};

  for (const item of cards) {
    if (!map[item.setName]) {
      map[item.setName] = true;
      uniqueSets.push(item.setName);
    }
  }

  return (
    <div>
      <Header />
      <h2>Выбор сетов</h2>

      <ul className="set-list">
        {uniqueSets.map((name, index) => (
          <BtnSet key={index} name={name} />
        ))}
      </ul>
    </div>
  );
}
