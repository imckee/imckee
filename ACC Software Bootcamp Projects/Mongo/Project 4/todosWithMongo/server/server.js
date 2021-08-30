const express = require("express");
const app = express();

const logger = require("morgan");
app.use(logger("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("../client"));

// NOTE: HOW TO CONVERT TO MONGO/MONGOOSE
// 1) Build our connection
//    a) install Mongoose
//    b) connect

// Connection
const keys = require('./config/keys')
const mongoose = require('mongoose');
mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('Connected to database'))
.catch(error => console.log("Cannot connect to DB", error));

// 2) Build blueprints
//    a) Schema
//    b) Model

let todoSchema = mongoose.Schema({
  description: {
    type: String,
    required: [true, "Must have description!!!"]
  },
  isComplete: {
    type: Boolean,
    default: false
  }
})

let TodoModel = mongoose.model("Todos", todoSchema)

// Read - GET
app.get("/todos", (req, res) => {
  TodoModel.find({}, (error, results)=> {
    if(error){
      console.log("Error getting data from db: ", error)
      // using random numbers for internal communication
      // in real world, probably use 400 or 404
      res.status(444).json("Error reading data from DB")
    } else {
      console.log("Results: ", results)
      // using random numbers for internal communication
      // in real world, probably use 200
      res.status(264).json(results);
    }
  });
  
});

// Create - POST
app.post("/todos", (req, res) => {
  let newTodo = new TodoModel({
    description: req.body.description
  });
  newTodo.save((error, result)=>{
    if(error){
      console.log("Error: ", error)
      res.status(445).json("Error adding data to DB")
    } else {
      console.log("Success: ", result)
      res.json(result);
    }
  })
});

// Delete - DELETE
app.delete("/todos/:id", (req, res) => {
  let requestedTodoId = req.params.id;
  TodoModel.findByIdAndDelete(requestedTodoId , (error, result)=>{
    // this IS valid code.
    // If...else... simplified
    // if only one option, you can put on one line
    if(error) res.status(446).json("Error deleting from DB")
      else res.json(result);
  })
});

// Update - PUT
app.put("/todos/:id", (req, res) => {
  let requestedTodoId = req.params.id;

  // findById
    // get a result back
    // if error
      // handle it
    // else 
      // update iscomplete
      // save the new result
  
  requestedTodo.isComplete = !requestedTodo.isComplete;
  res.json(requestedTodo);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App on port ${port}`));
