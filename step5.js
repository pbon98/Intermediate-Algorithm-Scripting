function spinalCase(str) {
    return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[^a-z\d]/ig, "-")
    .toLowerCase()
  }
  
  console.log(spinalCase('This Is Spinal Tap'));