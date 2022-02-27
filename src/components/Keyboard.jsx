import React, { useContext } from "react";
import WordContext from "../context/WordContext";
import { FIRST_LINE, SECOND_LINE, THIRD_LINE } from "../services/constants";

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
  //todo: setInput with keyboard buttons
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
      <div>
        { FIRST_LINE.map((keyButton) => (
          <button type="button" key={ keyButton }>{ keyButton }</button>
        ))}
      </div>
      <div>
        { SECOND_LINE.map((keyButton) => (
          <button type="button" key={ keyButton }>{ keyButton }</button>
        ))}
        <button type="button">Apagar</button>
      </div>
      <div>
        { THIRD_LINE.map((keyButton) => (
          <button type="button" key={ keyButton }>{ keyButton }</button>
        ))}
        <button type="button">Enter</button>
      </div>
      <span className="c-red">Teclado em Construção:</span>
      <span> use o input</span>
    </section>
  )
}

export default Keyboard;
