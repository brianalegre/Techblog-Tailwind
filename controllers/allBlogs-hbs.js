const router = require('express').Router();
const { User, Blog, Comment } = require('../models');

//endpoint of 

router.get('/allBlogs', async (req, res) => {
    try {
        const allBlogs = await Blog.findAll({
            include: [{ model: User }, { model: Comment }]
        });

        // res.status(200).json(allBlogs)

        const blogs = allBlogs.map((posts) =>
            posts.get({ plain: true })
        );
        res.render('home', {
            blogs,
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

module.exports = router;
