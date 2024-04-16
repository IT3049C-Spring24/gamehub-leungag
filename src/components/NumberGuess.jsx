import React, { useState, useEffect } from 'react';

function NumberGuessingGame() {
  const [guess, setGuess] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [guessesLeft, setGuessesLeft] = useState(10);

  useEffect(() => {
    if (attempts === 10) {
      setMessage(`Sorry, you've run out of guesses. The correct number was ${randomNumber}.`);
    }
  }, [attempts, randomNumber]);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleInputChange(event) {
    setGuess(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault(); // handle what button does
    const guessedNumber = parseInt(guess, 10);
    if (guessedNumber === randomNumber) {
      setMessage(`Congratulations! You've guessed the correct number ${randomNumber} in ${attempts + 1} attempts.`);
    } else if (guessedNumber < randomNumber) {
      setMessage('Try a higher number.');
    } else {
      setMessage('Try a lower number.');
    }
    setAttempts(prevAttempts => prevAttempts + 1);
    setGuessesLeft(prevGuessesLeft => prevGuessesLeft - 1);
    setGuess('');
  }

  return (
    <div>
      <p>{message}</p>
      {!message.includes('Congratulations') && (
        <div>
          <p>Guesses left: {guessesLeft}</p>
          <form onSubmit={handleFormSubmit}>
            <input
              type="number"
              value={guess}
              onChange={handleInputChange}
              placeholder="Enter your guess"
              min="0"
              max="100"
              required
            />
            <button type="submit">Guess</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default NumberGuessingGame;
