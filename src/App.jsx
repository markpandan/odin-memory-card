import "./styles/App.css";
import Game from "./components/Game";

function App() {
  return (
    <>
      <div className="game-title">
        <h1>Memory Flash Game</h1>
        <hr />
      </div>

      <Game />
    </>
  );
}

export default App;
