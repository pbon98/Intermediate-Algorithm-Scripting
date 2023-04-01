function pairElement(str){
    let answer = [];
    for (let element of str){
      console.log(element)
      if (element == "G"){
        answer.push(["G", "C"])
      } else if (element == "C"){
        answer.push(["C", "G"])
      } else if (element == "A"){
        answer.push(["A", "T"])
      } else if (element == "T"){
        answer.push(["T", "A"])
      }
    }
    return answer;
  }
  
  pairElement("GCG");