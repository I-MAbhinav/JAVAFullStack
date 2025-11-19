const Post = require("../models/postModel")

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;
        const post = new Post({ title, body });
        const savedPost = await post.save();

        res.json({
            post: savedPost
        })
    }
    catch (err) {
        return res.status(400).json({
            error: "Error While Creating Post"
        })
    }
}

exports.getAllPosts = async (req, res) => {
    try {
        // const posts = await Post.find();
        const posts = await Post.find().populate("likes").populate("comments").exec();
        res.status(200).json({
            message: "All Post Fetched sucessfully",
            success: true,
            data: posts
        })
    }
    catch (err) {
        console.log("Error in create Todo", err);
        res.status(500).json({
            message: "Error in fetching all todos",
            error: err,
            success: false,
        })
    }
}