var alcoholInBob = {
    vol: 24,  // in oz
    alcPct: 0.08 // in percent
}

var genderOfBob = 'male'
var timeSinceBobDrank = 3
var weightOfBob = 220

function bac(alcohol, weight, gender, time) {
   if(gender !== 'male' && gender !== 'female') return "Wrong gender"
   if(time < 0 || time > 24) return "time out of bound" 
   var r = gender === 'male' ? 0.73 : 0.66;
   var answer = (alcohol.vol*alcohol.alcPct * 5.14 / (weight * r)) - 0.015 * time
   return Number(answer.toFixed(4));
}

var bobsBAC = bac(alcoholInBob, weightOfBob, genderOfBob, timeSinceBobDrank)
console.log("bob's bac level is ", bobsBAC )
