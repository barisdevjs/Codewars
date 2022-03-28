function filterLongWords(sentence, n) {
    return sentence.split(' ').filter(e=> e.length > n);
  }