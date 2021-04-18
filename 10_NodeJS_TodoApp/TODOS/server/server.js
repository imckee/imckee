const express = require('express');
const app = express();
var bodyParser = require('body-parser')

const logger = require('morgan');
app.use(logger('dev'));

// parse application/x-wwww-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.get('/', (req, res)=> {
    res.send('This is the root page.')
})

var toDoArray = [
    {"id": 1, "description": "Call mom", "isComplete": false},
    {"id": 2, "description": "Buy groceries", "isComplete": false},
    {"id": 3, "description": "Go to movies", "isComplete": false}
]

app.get('/todos', (req, res)=> {
    res.send(toDoArray)
});

app.post('/todos', (req, res)=> {
    let newTodo = {
            "id": 4,
            "description": "Buy more stuff",
            "isComplete": false
        }
        toDoArray.push(newTodo)
        res.status(200).json(newTodo)
})

app.delete('/todos/:id', (req, res)=> {
    const index = toDoArray.findIndex(4);
    if (index >= -1) {
        toDoArray.splice(index, 1);
    }
    res.status(200).json(newTodo)
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listen on port ${port}`))