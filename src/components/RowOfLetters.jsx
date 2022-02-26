import React, { useContext } from "react";
import PropTypes from 'prop-types';
import WordContext from "../context/WordContext";

function RowOfLetters({ index }) {
  const { attempts } = useContext(WordContext);
  return (
    <section className="word-row">
      { attempts[index].map((letter, index) => (
        <h2 key={ `${letter} +${index}` }>{ letter }</h2>
      ))}
    </section>
  )
}

RowOfLetters.propTypes = {
  index: PropTypes.number.isRequired,
}

export default RowOfLetters;
