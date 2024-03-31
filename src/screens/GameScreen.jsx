import {PropTypes} from 'prop-types';
import { useState } from 'react';
import { RockPaperScissors } from '../RPS';

const GameScreen = ({name}) => {
  const [ game, setGame ] = useState(new RockPaperScissors(name));
  const [ selection, setSelection ] = useState(`rock`);
  // const [ score, setScore ] = useState({user: 0, cpu: 0});
  const [ userScore, setUserScore ] = useState(0);
  const [ cpuScore, setCpuScore ] = useState(0);
  const [ history, setHistory ] = useState([]);    

  const updateScoreAndHistory = () => {
    // setScore({...game.score});
    setUserScore(game.score.user)
    setCpuScore(game.score.cpu)
    setHistory([...game.gameHistoryLog]);
  }
  
  const onGoButtonClick = () => {
    game.play(selection);
    console.log(game.score);
    updateScoreAndHistory();
  }

  const onResetGameButtonClick = () => {
    console.log(`Reset button was clicked`);
    setGame(new RockPaperScissors(name));
    // setScore({user: 0, cpu: 0});
    setUserScore(0)
    setCpuScore(0)
    setHistory([]);
  }

  return (
    <div id="game-screen">
      <div id="score-tally">
        <p id="score"> {name}: {userScore} v CPU: {cpuScore}</p>
        <span>{selection}</span>
      </div>

      <form id="game-form">
        <div className="form-group">
          <label htmlFor="user-selection">Select your choice:</label>
          <select 
            className="custom-select" 
            id="user-selection" 
            name="user-selection" 
            value={selection}
            onChange={(e) =>setSelection(e.target.value)}
          >
            <option id="rock" value="rock">
              Rock
            </option>
            <option id="paper" value="paper">
              Paper
            </option>
            <option id="scissors" value="scissors">
              Scissors
            </option>
          </select>
        </div>
        <button className="btn btn-success" type="button" id="go-button" onClick={onGoButtonClick}>
          Go!
        </button>
      </form>

      <div id="game-history">
        <ul>
          {history.map((round, index) => (
            <li key={index}>{round}</li>
          ))}
        </ul>
      </div>
      <button id="reset-game-button" className="btn btn-secondary" onClick={onResetGameButtonClick}>
        Reset
      </button>
    </div>
  );
};
GameScreen.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GameScreen;
