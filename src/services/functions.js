import { MAX_COUNTER, NORMAL_LETTERS, SPECIAL_LETTERS, WORD_LIST } from "./constants";

export const picWord = () => {
  const numOfWords = WORD_LIST.length;
  const index = Math.floor(Math.random() * numOfWords);
  let currentWord = WORD_LIST[index];
  for (let i = 0; i < currentWord.length; i += 1) {
    currentWord = SPECIAL_LETTERS.reduce((acc, specialChar, index) => {
      return acc[i] === specialChar
        ? acc.replace(specialChar, NORMAL_LETTERS[index])
        : acc;
    }, currentWord);
  }
  return currentWord;
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

const isLetterCorrect = (attempts, data, letter) => {
  return attempts.reduce((acc, word) => {
    const isCorrect = word
      .some((char, i) => (char === data[i]) && (data[i] === letter));
    return (isCorrect || acc);
  }, false)
}

export const getLetterColor = (attempts, data, letter) => {
  if (attempts.some((word) => word.includes(letter))) {
    if (isLetterCorrect(attempts, data, letter)) {
      return 'c-correct';
    }
    return (data.includes(letter) ? 'c-almost' : 'c-used');
  }
  return 'c-default';
}

export const getInputClassName = (letterIndex, input) => {
  const subtraction = letterIndex - input.length;
  if (subtraction < 0) {
    return 'letter prevInputLetter';
  }
  return (subtraction ? 'letter curWord' : 'letter curInputLetter');
}

export const isFinished = (data, attempts, counter) => {
  const win = attempts.some((word) => word.join('') === data);
  const lose = counter === MAX_COUNTER;
  return (win || lose);
}

export const feedback = (data, attempts) => {
  const goodAnswers = [
    'ESPETACULAR!!!',
    'Fenomenal!',
    'Muito bom!',
    'Jogou bem!',
    'Você venceu!',
    'Ufa! Essa foi com emoção até o fim!',
  ]
  for (let i = 0; i < attempts.length; i += 1) {
    const word = attempts[i].join('');
    if (word === data) {
      return goodAnswers[i];
    }
  }
  return `A palavra certa era ${data}`;
}
