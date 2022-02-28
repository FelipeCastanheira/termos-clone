import React, { useContext } from "react";
import WordContext from "../context/WordContext";
import { FIRST_LINE, SECOND_LINE, THIRD_LINE } from "../services/constants";

function Keyboard() {
  const { setAttempts, counter, setCounter,
    input, setInput } = useContext(WordContext);
  
  const handleKeyboard = ({ target }) => {
    const letterKey = target.id[0];
    setInput((prevInput) => (prevInput + letterKey));
  }

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
          <button
            key={ keyButton }
            type="button"
            id={ `${keyButton}-btn` }
            onClick={ handleKeyboard }
          >
            { keyButton }
          </button>
        ))}
      </div>
      <div>
        { SECOND_LINE.map((keyButton) => (
          <button
          key={ keyButton }
          type="button"
          id={ `${keyButton}-btn` }
          onClick={ handleKeyboard }
        >
          { keyButton }
        </button>
        ))}
        <button
        type="button"
        onClick={ () => setInput((prevInput) => prevInput.slice(0,-1)) }
        className="c-default"
        >
          Apagar
        </button>
      </div>
      <div>
        { THIRD_LINE.map((keyButton) => (
          <button
          key={ keyButton }
          type="button"
          id={ `${keyButton}-btn` }
          onClick={ handleKeyboard }
        >
          { keyButton }
        </button>
        ))}
        <button
        type="button"
        onClick={ handleClick }
        className="c-default"
        >
          Enter
        </button>
      </div>
    </section>
  )
}

export default Keyboard;
