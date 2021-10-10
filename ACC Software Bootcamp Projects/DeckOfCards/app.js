const express = require('express')
const app = express()
const needle = require('needle')

const logger = require('morgan')
app.use(logger('dev'))

app.set('view engine', 'ejs')

// app.get('/', (req, res)=> {
//     res.render('index', {cards: []})
// })

// let endpoint = 'https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=5'
// app.get('/deal', (req, res)=>{
//     needle.get(endpoint, (error, data)=>{
//         if(!error && data.statusCode == 200)
//         res.render('index', {cards: data.body.cards})
//     } else {
//         res.render('error')
//     }
//     })
// })

app.get('/', (req, res)=> {
    res.render('index', {cards: []})
  })
  
  let endpoint = 'https://deckofcardsapi.com/api/deck/new/draw/?count=5'
  app.get('/deal', (req, res)=>{
    needle.get(endpoint, (error, data)=>{
      if(!error && data.statusCode == 200){
        res.render('index', {cards: data.body.cards})
      } else {
        res.render('error')
      }
    })
  })
  

// What are we trying to do?
// user is going to click something - button of some kind 
// consume an api - deckofcards api
    // need to know endpoints 
        // READ endpoint 

// Got cards - now what?
    // do something with the parsed data 
        // send to client?
        // send back to index page 

// https://deckofcardsapi.com/api/deck/new/draw/?count=2


const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`app on port ${port}`))

