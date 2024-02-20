function validatePIN(pin) {
  return /^\d{4}$|^\d{6}$/.test(pin);
}



console.log(validatePIN("1234"));