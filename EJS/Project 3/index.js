var express = require("express");
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

// app.get("/", function(req, res){
//     res.send('This is the root page');
// });

app.get("/", function(req, res){
    res.render("home.ejs",);
});

app.get("/about", function(req, res){
    res.render("about.ejs",);
});

app.get("/contact", function(req, res){
    res.render("contact.ejs",);
});

app.listen(3000, function(){
    console.log("App is running on port 3000");
});