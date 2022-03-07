import React, { useContext } from "react";
import WordContext from "../context/WordContext";
import { feedback, isFinished } from "../services/functions";

function EndGame() {
  const { data, attempts, counter } = useContext(WordContext);
  return (
  <>
    { isFinished(data, attempts, counter)
      && <div className="endGame">{ feedback(data, attempts) }</div>
    }
  </>
  );
}

export default EndGame;
