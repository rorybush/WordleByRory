import wordsList from "./Words";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const newWord = () => {
  const randomIndex = Math.floor(Math.random() * wordsList.length);
  return wordsList[randomIndex].toUpperCase();
};
