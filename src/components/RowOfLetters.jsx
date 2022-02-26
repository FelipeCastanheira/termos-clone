import React, { useContext } from "react";
import PropTypes from 'prop-types';
import WordContext from "../context/WordContext";

function RowOfLetters(index) {
  const { attempts } = useContext(WordContext);
  console.log(attempts[0]);
  return (
        <section className="word-row">
          { attempts[index].split('').map((letter) => (
            <h2 key={ letter }>{ letter }</h2>
          ))}
        </section>
  )
}

RowOfLetters.propTypes = {
  index: PropTypes.number.isRequired,
}

export default RowOfLetters;
