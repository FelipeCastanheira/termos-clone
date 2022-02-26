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
