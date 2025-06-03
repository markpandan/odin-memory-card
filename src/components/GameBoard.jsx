import { useEffect, useState } from "react";
import Card from "./Card";

export default function GameBoard({ cardData }) {
  const [newCardData, setNewCardData] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => setNewCardData(cardData), [cardData]);

  if (cardData.length === 0) {
    return <p>No Data Available</p>;
  }

  return (
    <>
      <h2>Score: {score}</h2>
      <h2>High Score: {highScore}</h2>
      <div className="game-board">
        {newCardData.map((value) => (
          <Card
            key={value.id}
            imageUrl={value.imageUrl}
            imageName={value.name}
          />
        ))}
      </div>
    </>
  );
}
