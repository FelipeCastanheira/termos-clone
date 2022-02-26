import React, { useContext, useState } from "react";
import WordContext from "../context/WordContext";

function Keyboard() {
  const { setAttempts } = useContext(WordContext);
  const [input, setInput] = useState('');
  const [counter, setCounter] = useState(0);
  const handleClick = () => {
    setAttempts((prevAttempts) => prevAttempts
      .map((prev, i) => {
        if (i === counter) {
          return [...input]
        }
        return prev;
      }));
    setInput('');
    setCounter((prevCounter) => (prevCounter + 1));
  }
  return (
    <section>
      <input
        type="text"
        value={ input }
        onChange={ ({ target }) => setInput(target.value)}
      />
      <button
        type="button"
        onClick={ handleClick }
        className="c-default"
      >
        Enter
      </button>
    </section>
  )
}

export default Keyboard;
