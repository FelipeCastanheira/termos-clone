import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import WordContext from './WordContext';
import { picWord } from '../services/functions';
import { loadFBase } from '../services/firebase';

function WordProvider({ children }) {
  const [data, setData] = useState('');
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState('');
  const [fireMsg, setFireMsg] = useState('');
  const [attempts, setAttempts] = useState([
    ['A', 'B', 'C', 'D', 'E'],
    ['A', 'B', 'C', 'D', 'E'],
    ['A', 'B', 'C', 'D', 'E'],
    ['A', 'B', 'C', 'D', 'E'],
    ['A', 'B', 'C', 'D', 'E'],
    ['A', 'B', 'C', 'D', 'E'],
  ]);

  useEffect(() => {
    setData(picWord());
    setFireMsg(loadFBase());
  }, [])
  console.log(fireMsg);

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
