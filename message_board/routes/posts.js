const express = require("express");
const router = express.Router();
const Post = require("./../models/post");

router.get("/", (req, res) => {
 const posts = [{
     topic: "I like banana smoothies",
     message: "Does anyone have a good recipe?",
     name: "Linda",
 }];
    res.render("index", {posts: posts});
});

router.get("/new", (req, res) => {
    let post = {topic: "", message: "", name: ""}
    res.render("new", {post: post});
});

router.get("/:id", (req, res) => {
    res.send("It works!");
});

router.post("/", (req, res) => {
    let thePost = new Post({
        topic: req.body.topic,
        message: req.body.message,
        name: req.body.name
    });
    thePost.save((error, post) => {
        if(error) {
            console.log(error);
            res.render("new", {post: thePost});
        } else {
            console.log(post);
            res.redirect(`/posts/${post._id}`);
        }
    });
});

module.exports = router;

