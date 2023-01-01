import wordsList from "./Words";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const newWordGenerator = () => {
  const randomIndex = Math.floor(Math.random() * wordsList.length);
  const newWord = wordsList[randomIndex].toUpperCase();
  return newWord;
};

export const newWord = newWordGenerator();

console.log(newWord);
