import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import WordContext from './WordContext';
import picWord from '../services/functions';

function WordProvider({ children }) {
  const [data, setData] = useState('');

  useEffect(() => {
    setData(picWord());
  }, [])

  const globalState = {
    data,
    setData,
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
