function destroyer(arr, ...destroy) {
    console.log(arr)
    console.log(destroy)
    return arr.filter(element => !destroy.includes(element));
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));