import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import WordContext from './WordContext';
import { picWord } from '../services/functions';

function WordProvider({ children }) {
  const [data, setData] = useState('');
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState([
    ['A', 'B', 'C', 'D', 'E'],
    ['A', 'B', 'C', 'D', 'E'],
    ['A', 'B', 'C', 'D', 'E'],
    ['A', 'B', 'C', 'D', 'E'],
    ['A', 'B', 'C', 'D', 'E'],
  ]);

  useEffect(() => {
    setData(picWord());
  }, [])

  const globalState = {
    data,
    setData,
    attempts,
    setAttempts,
    counter,
    setCounter,
    input,
    setInput,
  };

  return (
    <WordContext.Provider value={ globalState }>
      { children }
    </WordContext.Provider>
  );
}

WordProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default WordProvider;
