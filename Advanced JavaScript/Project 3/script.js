var myPetsAges = [2, 1, 8]

myPetsAges.sort()

console.log('array sorted by default :', myPetsAges)

myPetsAges.sort(function(a, b){
  return b-a;
})

console.log('array sorted by compare function :', myPetsAges)

var myPets = [
    {   
        "type": "camel",
        "name": "Wednesday",
        "age": 8,
        "food": "Hay, mostly",
        "daily food quantity": 30
    },
    {
        "type": "cobra",
        "name": "Slitherio",
        "age": 2,
        "food": "Rodents",
        "daily food quantity": 0.05
    },
    {   
        "type": "elephant",
        "name": "Hathi",
        "age": 1,
        "food": "Plant matter, grass, hay, fruit",
        "daily food quantity": 50
    }
]


myPets.sort(function(a, b){
   return a["daily food quantity"] - b["daily food quantity"]
})

console.log('array sorted by food quantity \n', myPets)


myPets.sort(function(a, b){
    return a["age"] - b["age"]
})

console.log('array sorted by age \n', myPets)
