var needle = require('needle');
// const fetch = require('node-fetch');
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function(req, res){
    res.render("index.ejs");
});

app.get("/quote", function(req, res){
    needle.get("https://api.coindesk.com/v1/bpi/currentprice.json", function(error, response, body) {
        if(!error && response.statusCode == 200){
            var obj = JSON.parse(body);
            var randomNum = Math.floor(Math.random() * obj.length)

        
            let rate = JSON.parse(body).bpi.GBP.rate; 
            let code = JSON.parse(body).bpi.code;
            let result = `${code} ${rate}`

            console.log(result);
            console.log("Result type: " + result);
            res.render("quote.ejs", {result});
        }
    })
});

app.listen(3000, function(){
    console.log('App is listening on Port 3000');
});
