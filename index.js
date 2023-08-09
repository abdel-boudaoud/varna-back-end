const ignoredWords = [
  "the",
  "at",
  "in",
  "on",
  "is",
  "and",
  "it",
  "a",
  "an",
  "to",
  "for",
  "of",
  "with",
  "you",
  "me",
  "we",
  "us",
  "he",
  "she",
  "they",
  "them",
  "are",
  "am",
  "is",
  "was",
  "were",
  "be",
  "been",
  "being",
];

let testP = `The Blackwell Reference Grammars are essential companions for students of modern
languages at senior secondary school and undergraduate level. The volumes provide
a comprehensive survey of the grammar of each language and include plentiful examples.
The series will cover the major European languages, including French, German, Spanish,
Portuguese, and Russian.`;

let testWords = testP
  .toLowerCase()
  .replace(/[\r\n]/gm, " ")
  .split(" ");
// console.log(testWords);

let evaluateWords = (words) => {
  newWords = [];
  words.forEach((word) => {
    if (word.length > 8) {
      newWords.push(word);
    }
  });

  console.log(newWords);
  console.log(`length is =>`, newWords.length);
};

//get words frequency
let wordsFrequency = [];
getFrequency = (array, value) => {
  let n = array.filter((word) => {
    if (word === value) {
      return word;
    }
  }).length;

  // console.log(`the word ${value} has been mentioned ${n} times`)
  wordsFrequency.push({ word: value, frqeuency: n });
};

testWords.forEach((word) => {
  getFrequency(testWords, word);
});
console.log(
  wordsFrequency.sort((a, b) => {
    return b.frqeuency - a.frqeuency ;
  })
);
