// Import
const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const userRoutes = require('./userRoutes');



router.use('/blogs', blogRoutes);
router.use('/users', userRoutes);


// Export
module.exports = router;