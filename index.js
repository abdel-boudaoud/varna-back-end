const fs = require("fs");
let checker = require("./commonWords");

fs.readFile(`./test-paragraph.txt`, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let testWords = data
      .toLowerCase()
      .replace(/\./g, " ")
      .replace(/[\r\n]/gm, " ")
      .split(/\W+/);

    //get an example of the word
    let getExample = (word, paragraph) => {
      const index = paragraph.toLowerCase().indexOf(word);

      for (let i = index; i < paragraph.length; i++) {
        if (paragraph[i] == "." || paragraph[i] == ",") {
          return paragraph.slice(index, i).replace(/[\r\n]/gm, " ");
        }
      }
    };

    //get words frequency
    let wordsFrequency = [];
    getFrequency = (array, value) => {
      let n = array.filter((word) => {
        if (word === value) {
          return word;
        }
      }).length;

      if (
        !wordsFrequency.filter((list) => list.word === value).length > 0 &&
        checker.notCommon(value) &&
        !parseInt(value) &&
        value.length > 3
      ) {
        wordsFrequency.push({
          word: value,
          frequency: n,
          index: testWords.indexOf(value),
          sentence: getExample(value, data),
          length: value.length,
        });
      }
    };

    testWords.forEach((word) => {
      getFrequency(testWords, word);
    });

    let wordsByfrequency = wordsFrequency.sort((a, b) => {
      return b.frequency - a.frequency;
    });

    let mostFrequent = wordsByfrequency.filter((word) => {
      return word.frequency >= 5;
    });

    console.log(mostFrequent);
  }
});
