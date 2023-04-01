function fearNotLetter(str) {
    let lastLetter=str.charCodeAt(0);
    let missingLetter;
    for (let i=1; i<str.length; i++) {
      let currentLetter=str.charCodeAt(i);
      console.log(lastLetter, currentLetter);
      if ((lastLetter+1) < currentLetter) {
        missingLetter = String.fromCharCode(currentLetter-1);
        break;
      }
      else {
        lastLetter=currentLetter;
      }
    }
    return missingLetter;
  }
  
  fearNotLetter("abce");