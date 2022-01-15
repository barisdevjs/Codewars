function alphabetPosition(text) {
    text = text.toLowerCase()
    text = text.replace(/[^a-z]/g, '')
    return text.split('').map(function(letter) {
        return letter.charCodeAt(0) - 96
    }).join(' ')
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."))
  // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"