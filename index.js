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

let testP = `Several books have been written in English about the Mongol
conquests, the subsequent empires which the Mongols ruled, the
travellers who visited them and even the diplomatic relations
between their khans and the papacy. But nothing has been written
about the Mongol invasion of Europe. In this book I have rashly
endeavoured to fill that gap. But I did not set out to write a
detailed account of every event that took place in Europe during
the invasion. I have simply attempted to tell the story of an
extraordinary campaign, outline its causes and far-reaching consequences and place it in its historical perspective.`;

let testWords = testP
  .toLowerCase()
  .replace(/[\r\n]/gm, " ")
  .split(" ");

let evaluateWords = (words) => {
  newWords = [];
  words.forEach((word) => {
    if (word.length > 8) {
      newWords.push(word);
    }
  });
};

//get words frequency
let wordsFrequency = [];
getFrequency = (array, value) => {
  let n = array.filter((word) => {
    if (word === value) {
      return word;
    }
  }).length;

  if (!wordsFrequency.filter((list) => list.word === value).length > 0) {
    wordsFrequency.push({ word: value, frqeuency: n });
  }
};

testWords.forEach((word) => {
  getFrequency(testWords, word);
});
console.log(
  wordsFrequency.sort((a, b) => {
    return b.frqeuency - a.frqeuency;
  })
);
