import React, { useContext } from "react";
import WordContext from "../context/WordContext";
import { FIRST_LINE, SECOND_LINE, THIRD_LINE, WORD_LENGTH } from "../services/constants";
import { getLetterColor } from "../services/functions";

function Keyboard() {
  const { setAttempts, counter, setCounter, attempts, data,
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
  
  return (
    <section>
      <div>
        { FIRST_LINE.map((keyButton) => (
          <button
            key={ keyButton }
            type="button"
            id={ `${keyButton}-btn` }
            className={ getLetterColor(attempts, data, keyButton) }
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
          className={ getLetterColor(attempts, data, keyButton) }
          id={ `${keyButton}-btn` }
          onClick={ handleKeyboard }
        >
          { keyButton }
        </button>
        ))}
        <button
        type="button"
        onClick={ () => setInput((prevInput) => prevInput.slice(0,-1)) }
        className="c-default ml-5"
        >
          <i className="fas fa-backspace"></i>
        </button>
      </div>
      <div>
        { THIRD_LINE.map((keyButton) => (
          <button
          key={ keyButton }
          type="button"
          className={ getLetterColor(attempts, data, keyButton) }
          id={ `${keyButton}-btn` }
          onClick={ handleKeyboard }
        >
          { keyButton }
        </button>
        ))}
        <button
          type="button"
          onClick={ handleClick }
          className="c-default ml-5"
          disabled={ input.length !== WORD_LENGTH }
        >
          Enter
        </button>
      </div>
    </section>
  )
}

export default Keyboard;
