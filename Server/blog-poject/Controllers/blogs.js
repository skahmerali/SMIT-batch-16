const { blogSchema } = require("../dbSchema/blogSchema");


async function createBlog(req, res) {
    try {
        const { blogTitle, blogDescripation, autherName } = req.body;
        const newBlogs = new blogSchema({ blogTitle, blogDescripation, autherName, });
        await newBlogs.save();
        res.send({
            status: 200,
            newBlogs,
            message: "blog has been created successfully"
        });
    }
    catch (err) {
        res.send({
            status: 500,
            message: "server code is failed",
            err,
        })
    }
}