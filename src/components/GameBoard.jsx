import { useEffect, useState } from "react";
import shuffle from "../utilities/shuffle";
import Card from "./Card";

export default function GameBoard({ cardData }) {
  const [newCardData, setNewCardData] = useState([]);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => setNewCardData(cardData), [cardData]);

  if (cardData.length === 0) {
    return <p>No Data Available</p>;
  }

  const handleClick = (id) => {
    const selectedIndex = newCardData.find((value) => value.id === id);

    if (selectedIndex.isSelected) {
      alert("Game Over");
      score > highScore && setHighScore(score);

      const refreshCardData = newCardData.map((value) => {
        return { ...value, isSelected: false };
      });
      setNewCardData(shuffle(refreshCardData));
      setScore(0);
    } else {
      const confirmSelectedIndex = newCardData.map((value) => {
        if (value.id === id) {
          return { ...value, isSelected: true };
        } else return value;
      });
      setNewCardData(shuffle(confirmSelectedIndex));
      setScore(score + 1);
    }
  };

  return (
    <>
      <div className="score-board">
        <h2>Score: {score}</h2>
        <h2>High Score: {highScore}</h2>
      </div>

      <div className="game-board">
        {newCardData.map((value) => (
          <Card
            key={value.id}
            imageUrl={value.imageUrl}
            imageName={value.name}
            onClick={() => handleClick(value.id)}
          />
        ))}
      </div>
    </>
  );
}
