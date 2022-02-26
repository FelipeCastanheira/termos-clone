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

export const letterClassName = (letter, letterIndex, correctWord) => {
  if (letter === correctWord[letterIndex]) {
    return 'c-correct';
  }
  return (correctWord.includes(letter) ? 'c-almost' : 'c-used');
}

export const getClassName = (index, counter, letter, letterIndex, correctWord) =>
  `letter ${wordClassName(index, counter)} ${letterClassName(letter, letterIndex, correctWord)}`;
