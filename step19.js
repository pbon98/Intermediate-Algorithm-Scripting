function addTogether() {
    let array = [...arguments]
    console.log(array)
    if (array.some(element => typeof element !== 'number')) {
      return undefined
    } else if (array.length == 1) {
      return function addNum2(num2) {
        return addTogether(array[0], num2)
      }
    } else {
      return array[0] + array[1]
    }
  }
  
  addTogether(2)(3);