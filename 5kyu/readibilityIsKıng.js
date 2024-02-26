function fleschKincaid(text){
    const wordsLength = sentence => sentence.split(" ").length
    const sentences = text.split(/[.!?]/).filter(Boolean)
    const syllables = new_countOfSyllable(text);
    const words = wordsLength(text);
    let result = []
    sentences.forEach((sentence ,idx ) => {
      
    })   
  }

  console.log(fleschKincaid("Do not cut your fingers as your katana is getting sharper! Be gentle."))
//   console.log(fleschKincaid("To be or not to be. That is the question."))


  function new_countOfSyllable(word) {
    word = word.toLowerCase();                                     //word.downcase!
    if(word.length <= 3) { return 1; }                             //return 1 if word.length <= 3
      word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');   //word.sub!(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
      word = word.replace(/^y/, '');                                 //word.sub!(/^y/, '')
      return word.match(/[aeiouy]{1,2}/g).length;                    //word.scan(/[aeiouy]{1,2}/).size
  }