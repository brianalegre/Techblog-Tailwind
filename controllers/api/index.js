// Import
const router = require('express').Router();
const blogRoutes = require('./blogRoutes');


router.use('/blogs', blogRoutes);

// Export
module.exports = router;