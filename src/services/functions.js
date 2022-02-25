import { WORD_LIST } from "./constants";

const picWord = () => {
  const numOfWords = WORD_LIST.length;
  const index = Math.floor(Math.random() * numOfWords);
  return WORD_LIST[index];
}

export default picWord;
