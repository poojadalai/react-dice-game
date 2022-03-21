import React, { useEffect } from "react";

import { useState } from "react";

export default function Home() {
  const initial_roll = 0;
  const initial_score = 0;
  const [player1, setPlayer1] = useState(initial_roll);
  const [player2, setPlayer2] = useState(initial_roll); // current roll
  const [score, setScore] = useState(""); // final result

  const [p1Score, setp1Score] = useState(initial_score); // player points
  const [p2Score, setp2Score] = useState(initial_score);

  const randomNumber = () => {
    const randomNum = Math.round(Math.random() * 5 + 1);
    console.log(randomNum);
    return randomNum;
  };

  const setPlayerScore = (player) => {
    if (player === 1) {
      setPlayer1(randomNumber());
    } else {
      setPlayer2(randomNumber());
    }
  };

  const comparePlayers = () => {
    if (player1 === player2) {
      newTurn();
      console.log("Both Players has the same value");
      return;
    }
    if (player1 > player2) {
      setp1Score(p1Score + 1);
      newTurn();
    } else if (player1 < player2) {
      setp2Score(p2Score + 1);
      newTurn();
    }
  };

  const newTurn = () => {
    setPlayer1(initial_roll);
    setPlayer2(initial_roll);
    setScore("");
  };

  useEffect(() => {
    const finalResult = () => {
      const target_score = 3;
      if (p1Score === target_score) {
        setScore("Player 1 Won");
        setp1Score(initial_score);
        setp2Score(initial_score);
        setPlayer1(initial_roll);
        setPlayer2(initial_roll);
      } else if (p2Score === target_score) {
        setScore("player2 won");
        setp1Score(initial_score);
        setp2Score(initial_score);
        setPlayer1(initial_roll);
        setPlayer2(initial_roll);
      }
    };

    finalResult();
  }, [p1Score, p2Score]);

  return (
    <div>
      <h2>Score</h2>
      <div>
        <div>Player1:{p1Score}</div>
        <div>Player2:{p2Score}</div>
      </div>
      <div>
        <h4>{player1}</h4>
        <button onClick={() => setPlayerScore(1)} disabled={!!player1}>
          ROLL
        </button>
      </div>
      <div>
        <h4>{player2}</h4>
        <button onClick={() => setPlayerScore(2)} disabled={!!player2}>
          ROLL
        </button>
      </div>
      <br></br>
      <span>{score}</span>
      <div>
        <br></br>
        <button onClick={() => comparePlayers()}>Compare Scores</button>
      </div>
      <br></br>
      <div>
        <button onClick={() => newTurn()}>New Turn</button>
      </div>
    </div>
  );
}
