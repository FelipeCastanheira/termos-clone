import React, { useContext } from "react";
import PropTypes from 'prop-types';
import WordContext from "../context/WordContext";
import { wordClassName } from "../services/functions";

function RowOfLetters({ index }) {
  const { attempts, counter } = useContext(WordContext);
  return (
    <section className="word-row">
      { attempts[index].map((letter, letterIndex) => (
        <h2
          key={ `${letter} +${letterIndex}` }
          className={ `letter ${wordClassName(index, counter)}` }
        >
          { letter }
        </h2>
      ))}
    </section>
  )
}

RowOfLetters.propTypes = {
  index: PropTypes.number.isRequired,
}

export default RowOfLetters;
