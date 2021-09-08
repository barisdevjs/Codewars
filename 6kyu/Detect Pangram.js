function isPangram(string) {
    const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
    string = string.toLowerCase().split('')
    return  alphabet.every((e) => string.includes(e));
  }
console.log(isPangram("The quick brown fox jumps over the lazy dog."))
