const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const pizzaSchema = new mongoose.Schema({
    username: String,
    age: Number,
    favorite_pizza: String
});

const Pizza = mongoose.model("Pizza", pizzaSchema);

// const thePizza = new Pizza({
//     username: "Nancy",
//     age: 22,
//     favorite_pizza: "pepperoni"
//   });

  const thePizza = new Pizza({
    username: "Tommy",
    age: 22,
    favorite_pizza: "veggie"
  });

thePizza.save(function(error, result){
    if(error){
        console.log(error);
    } else {
        console.log(result);
    }
});

// Pizza.create({
//     name: "Bacon",
//     price: 12
// }, function(error, result){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(result);
//     }
// });