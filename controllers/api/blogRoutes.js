// Import
const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');

// Endpoint /api/blogs

// GET ALL
router.get('/', async (req, res) => {
    try {
        const allBlogs = await Blog.findAll({
            include: [{ model: User }, { model: Comment }],
        })
        res.status(200).json(allBlogs);
    } catch (err) {
        res.status(500).json('Something went wrong', err);
    }
});

// GET SINGLE
router.get('/:id', async (req, res) => {
    try {
        const singleBlog = await Blog.findByPk(req.params.id, {
            include: [{ model: User }],
        })
        if (!singleBlog) {
            res.status(404).json({ message: 'No Blog found with that id' });
            return;
        }
        res.status(200).json(singleBlog);
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});

// POST CREATE
router.post('/', async (req, res) => {
    try {
        const newBlog = await Blog.create(req.body);
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json('Something went wrong', err);
    }
});

// PUT UPDATE
router.put('/:id', async (req, res) => {
    try {
        const checkID = await Blog.findByPk(req.params.id)
        const updateBlog = await Blog.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        if (!checkID) {
            res.status(404).json('No Blog found with that id');
            return
        }
        res.status(200).json({ message: 'Blog has been updated' })
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});

// DELETE DESTORY
router.delete('/:id', async (req, res) => {
    try {
        const delBlog = await Blog.destroy({
            where: {
                id: req.params.id
            },
        })
        if (!delBlog) {
            res.status(404).json({ message: 'No Blog found with that id' });
        }
        res.status(200).json({ message: 'Blog has been deleted' })
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});

// Export
module.exports = router;