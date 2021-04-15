var express = require('express');
var app = express();

const fetch = require('node-fetch');

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

// const url = 'https://www.coindesk.com/coindesk-api';

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res)=> {
    res.render('index', {url});
})

app.get("/price", function(req, res){
    let choice = req.query.inlineRadioOptions.toUpperCase();
    console.log(choice);
    request(endpoint, (error, response, body) => {
      let rate = JSON.parse(body).bpi[choice].rate;
      let symbol = JSON.parse(body).bpi[choice].symbol;
      let result = `${symbol} ${rate}`;
      console.log(result);
      console.log("Result type:  " + result);
      res.render("index.ejs", {result} );
    });
  });

// app.get('/price', function (req, res) {
//     fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
//     .then(res => res.json())
//     .then(json => console.log(url));
// })

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`App listening on port ${port}`))