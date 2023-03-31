function sumAll(arr) {
    return (arr[0] + (arr)[1]) * (Math.abs (arr[0] - (arr)[1]) + 1) / 2;
  }
  
  console.log(sumAll([1, 4]));