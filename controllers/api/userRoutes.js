// Import
const router = require('express').Router();
const { Blog, User, Comment } = require('../../models');

// Endpoint /api/users

// GET ALL
router.get('/', async (req, res) => {
    try {
        const allUsers = await User.findAll({
            include: [{ model: Blog }],
        })
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json('Something went wrong', err);
    }
});

// GET SINGLE
router.get('/:id', async (req, res) => {
    try {
        const singleUser = await User.findByPk(req.params.id, {
            include: [{ model: Blog }],
        })
        if (!singleUser) {
            res.status(404).json({ message: 'No User found with that id' });
            return;
        }
        res.status(200).json(singleUser);
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});

// POST CREATE
router.post('/', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(200).json(newUser);
    } catch (err) {
        res.status(400).json('Something went wrong', err);
    }
});

// PUT UPDATE
router.put('/:id', async (req, res) => {
    try {
        const checkID = await User.findByPk(req.params.id)
        const updateUser = await User.update(req.body, {
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
        const delUser = await User.destroy({
            where: {
                id: req.params.id
            },
        })
        if (!delUser) {
            res.status(404).json({ message: 'No Blog found with that id' });
        }
        res.status(200).json({ message: 'Blog has been deleted' })
    } catch (err) {
        res.status(500).json('Something went wrong', err)
    }
});

// Export
module.exports = router;