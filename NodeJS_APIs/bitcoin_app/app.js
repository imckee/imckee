const express = require('express');
const app = express();
const request = require('request');
app.use(express.static('public'));

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

app.get('/', (req, res) => {
    res.render('index.ejs', {rate: '', symbol: ''});
})

app.get('/getPrice', (req, res) => {
    let country = req.query.country;
    request(url, (error, response, body) => {
        if(!error && response.statusCode == 200) {
            let data = JSON.parse(body);
            console.log(data);
            let {rate_float, symbol} = data.bpi[country];
            res.render('index.js', {rate: rate_float.toFixed(2), symbol: symbol});
        }
    })
});

app.listen(3000, () => {
    console.log('Bitcoin App listening on port 3000');
});