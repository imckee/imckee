var express = require('express');
var app = express();

var logger = require('morgan');
app.use(logger('dev'));

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

app.get('/', function (req, res) {
    res.send('I am the root route.');
});

app.get('/messages', function(req, res) {
    var messages = [
        {name: "Jim", message: "I'm a cartoonist"},
        {name: "Jane", message: "How about pasta for dinner?"},
        {name: "Gary", message: "I like my pasta with butter"},
    ]
    res.render("messages.ejs", {data: messages});
});

app.listen(3000, function(){
    console.log("App is running on port 3000");
});