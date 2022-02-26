import React, { useContext, useState } from "react";
import WordContext from "../context/WordContext";

function Keyboard() {
  const { setAttempts } = useContext(WordContext);
  const [input, setInput] = useState('');
  const handleClick = () => {
    setAttempts((prevAttempts) => [...prevAttempts, input]);
    setInput('');
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
