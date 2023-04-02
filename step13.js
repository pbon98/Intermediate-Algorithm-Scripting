function sumPrimes(num) {
    function checkPrimes(number){
      for (let i = 2; i < number; i++){
        if (number % i === 0) return false 
      } return true
    }
    let answer = 0;
    for (let j = 2; j <= num; j++){
      if (checkPrimes(j)) {
      answer += j;
        }
      }
      return answer;
    }
  
  console.log(sumPrimes(10));