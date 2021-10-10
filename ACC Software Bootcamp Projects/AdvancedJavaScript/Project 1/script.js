var rubric = ["a", "a", "c", "d"]
var student1 = ["a", "", "b", "d"]
var student2 = ["a",   , "b", "d"]

function checkAnswers(a, b) {

  var score = 0

  for (let i=0; i<a.length; i++){
      a[i] === b[i] ? score += 4 : 
          b[i] ? score -= 1 : 0 
                                
  }
  return score
}

console.log(checkAnswers(rubric, student1))
console.log(checkAnswers(rubric, student2))
