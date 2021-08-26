var express = require('express');
var app = express();

var logger = require('morgan');
app.use(logger('dev'));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

// app.get('/', (req, res)=>{
//     res.send('I am the root route.');
//   });

var pizza = "I like my pizza with extra pineapple.";

var cappuccino = "I like my cappuccino to be sweet";

var fries = "I like my fries cirspy with extra salt";

// app.get('/', (req, res)=> {
//     res.render('home.ejs');
//   });

app.get('/', function (req, res) {
    res.render('home.ejs');
});

  app.get('/about/', function (req, res) {
    var cappuccino = req.params.stuff;
    res.render("about.ejs", { stuff: cappuccino });
});

app.get('/contact', function (req, res) {
    var fries = req.params.stuff;
    res.render("contact.ejs", { stuff: fries });
});
  
app.listen(3000, function(){
    console.log("App is running on port 3000");
});

