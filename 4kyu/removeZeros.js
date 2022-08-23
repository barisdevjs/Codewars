removeZeros=a=>eval('['+/[1-9].*[1-9]/.exec(a)+']')



console.log(removeZeros([0, 9, 5, 0, 0, 0, 0, 2, 0, 0]))