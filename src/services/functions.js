import { WORD_LIST } from "./constants";

export const picWord = () => {
  const numOfWords = WORD_LIST.length;
  const index = Math.floor(Math.random() * numOfWords);
  return WORD_LIST[index];
}

export const wordClassName = (index, counter) => {
  const subtraction = index - counter;
  if (subtraction < 0) {
    return 'prevWord';
  }
  return (subtraction ? 'nextWord' : 'curWord');
}

const almostCorrectLetter = ({ word, colors }, letter) => {
  let filteredWord = '';
  let keepRemoving = true;
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === letter && keepRemoving) {
      keepRemoving = false;
    } else {
      filteredWord += word[i];
    }
  }
  return { word: filteredWord, colors: [...colors, 'c-almost'] }
}

export const letterClassName = (letterIndex, correctWord, input) => {
  const initialResult = input.reduce((acc, letter, index) => {
    if (letter === correctWord[index]) {
      return {
        word: acc.word,
        colors: [...acc.colors, 'c-correct'],
      };
    }
    return {
      word: acc.word + correctWord[index],
      colors: [...acc.colors, 'wrong'],
    };
  }, {word: '', colors: []});
  const finalResult = initialResult.colors.reduce((acc, color, index) => {
    if (color === 'c-correct') {
      return {word: acc.word, colors: [...acc.colors, color]};
    }
    if (acc.word.includes(input[index])) {
      return almostCorrectLetter(acc, input[index]);
    }
    return {word: acc.word, colors: [...acc.colors, 'c-used']};
  }, {word: initialResult.word, colors: []});
  const lettersClassNames = finalResult.colors;
  return lettersClassNames[letterIndex];
}

export const getClassName = (index, counter, letterIndex, word, input) => {
  const firstClassName = wordClassName(index, counter);
  const sndClassName = letterClassName(letterIndex, word, input);
  return `letter ${firstClassName} ${sndClassName}`;
}
