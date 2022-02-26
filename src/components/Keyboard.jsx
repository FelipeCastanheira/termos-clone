import React, { useContext } from "react";
import WordContext from "../context/WordContext";

function Keyboard() {
  const { setAttempts, counter, setCounter,
    input, setInput } = useContext(WordContext);
  
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
