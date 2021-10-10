const express = require("express");
const app = express();
const postRoutes = require("./routes/posts");
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/message_board', {useNewUrlParser: true, useUnifiedTopology: true});

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true}));
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});


