const allWords = (wordArray) => {
  const newArr = [];
  const allSplices = [];

  const wordArraySorted = wordArray.sort();

  const findWords = (newWord) => {

    const wordFrontTrim = newWord.slice(1);

    if (wordFrontTrim.length > 1) {
      findWords(wordFrontTrim)
    }

    for (let index in newWord) {

      let indexPlusOne = Number(index) + 1;

      const wordToPush = newWord.slice(0, indexPlusOne).join("")

      if (wordToPush.length > 1) {
        newArr.push(wordToPush)
      }}};

  const spliceWords = (newWord, index) => {

    allSplices.push(newWord);

    if (newWord.length > 2) {
      
      for (let innerIndex = index; innerIndex < newWord.length - 1; innerIndex ++) {
        
        const newSplice = [...newWord]
        newSplice.splice(Number(innerIndex), 1);
        spliceWords(newSplice, Number(innerIndex))

      }} 
    return allSplices;
  }
  
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  //find all splices for rack
  spliceWords(wordArraySorted, 1)

  //find all words for all splices of rack
  for (let splice of allSplices) {
    findWords(splice)
  }
  
  //filter for only unique words
  const filteredArr = newArr.filter(onlyUnique)

    return filteredArr;

}

const alphabet = {
  a: {count : 9, value : 1},
  b: {count : 2, value : 3},
  c: {count : 2, value : 3},
  d: {count : 4, value : 2},
  e: {count : 12, value : 1},
  f: {count : 2, value : 4},
  g: {count : 3, value : 2},
  h: {count : 2, value : 4},
  i: {count : 9, value : 1},
  j: {count : 1, value : 8},
  k: {count : 1, value : 5},
  l: {count : 4, value : 1},
  m: {count : 2, value : 3},
  n: {count : 6, value : 1},
  o: {count : 8, value : 1},
  p: {count : 2, value : 3},
  q: {count : 1, value : 10},
  r: {count : 6, value : 1},
  s: {count : 4, value : 1},
  t: {count : 6, value : 1},
  u: {count : 4, value : 1},
  v: {count : 2, value : 4},
  w: {count : 2, value : 4},
  x: {count : 1, value : 8},
  y: {count : 2, value : 4},
  z: {count : 1, value : 10}
}

const wordScore = (word, alphabet) => {
  let score = 0;
  for (const letter of word) {
    score += alphabet[letter].value
  }
  return score;
}

const totalScore = (wordList, wordScore, alphabet) => {
  let score = 0;
  for (let word of wordList) {
    score += wordScore(word, alphabet);
  }
  return score;
}

const generateRack = (alphabet) => {

  const emptyRack = ["","","","","","",""];
  const alphabetProbabilityArray = [];
  for (const [letter, info] of Object.entries(alphabet)) {
    for (let i = 0; i < info.count; i++) {
      alphabetProbabilityArray.push(letter)
    }
  }

  const pickRandomLetter = (alphabet) => {
    const pseudoRandom = Math.floor(Math.random() * alphabet.length);
    return alphabet[pseudoRandom];
  }
  const rack = emptyRack.map(letter => pickRandomLetter(alphabetProbabilityArray))

  return rack;
  // setState(prev => ({...prev, rack: rack}))
}

const generateDict = (rack, alphabetDict, allWords) => {

  const allTileCombinations = allWords(rack);
  const allLegalLetters = allTileCombinations.filter((word) => {
    return alphabetDict[word]
  })
  
  const dict = 
  allLegalLetters.reduce((array, word) => [...array, ...alphabetDict[word]], []);

  return dict

}

const reset = (setState, generateRack, generateDict, alphabet, alphabetDict, allWords) => {

  const rack = generateRack(alphabet)
  
  const dict = generateDict(rack, alphabetDict, allWords)

  setState({
    rack: rack,
    input: "",
    foundList: [],
    dict: dict,
    show: false,
    message: "",
    lastWord: "",
    totalScore: 0,
    definition: {}
  })
}

export { allWords, alphabet, wordScore, totalScore, generateRack, reset, generateDict };

