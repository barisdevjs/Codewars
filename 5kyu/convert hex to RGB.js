
/* function hexStringToRGB(h) {
    return {
      r: parseInt(h.slice(1,3), 16),
      g: parseInt(h.slice(3,5), 16),
      b: parseInt(h.slice(5,7), 16)
    };  
  }

  console.log(hexStringToRGB('#FF9933')) */

  const hexStringToRGB = hexString =>
  (([r, g, b]) => ({r, g, b}))
  (hexString.match(/\w{2}/g).map(val => parseInt(val, 16)));
  console.log(hexStringToRGB('#FF9933'))