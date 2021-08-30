const express = require("express");
const app = express();

const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require("passport-local-mongoose");

const keys = require('./config/keys')

var User = require("./models/user");

mongoose.connect(keys.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(console.log('Connected to database'))
.catch(err => console.log("Error!!!"))
app.use(express.urlencoded({extended: true}));

app.use(require('express-session')({
    secret: "Blah blah blah", //used to calculate the hash to protect our password
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize()); //start a session
app.use(passport.session()); //allows access to session
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.post("/signup", function(req, res){
    var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.render("signup.ejs")
        } else {
            passport.authenticate("local")(req, res, function(){
                res.redirect("/newsfeed");
            });
        }
    })
});

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/newsfeed", isLoggedIn, function(req, res){
    res.render("newsfeed.ejs");
});

app.get("/signup", function(req, res){
    res.render("signup.ejs");
});

app.get("/login", function(req, res){
    res.render("login.ejs");
});

app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/newsfeed',
        failureRedirect: '/login'
    }), function(req, res){
});

app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

app.listen(3000, function(){
    console.log("App is running on port 3000.");
});



