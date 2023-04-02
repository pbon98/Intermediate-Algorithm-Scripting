function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b)
    const numDivisors = max - min + 1
    let upper = 1
    for (let i = min; i <= max; i++) {
      upper *= i
    }
    for (let multiple = max; multiple <= upper; multiple += max) {
      let divCount = 0
      for (let i = min; i <= max; i++) {
        if (multiple % i === 0) {
          divCount += 1
        }
      }
      if (divCount === numDivisors) {
        return multiple
      }
    }
  }
  
  console.log(smallestCommons([1,5]));