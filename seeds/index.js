// Import Modules
const sequelize = require('../config/connection');
const seedUsers = require('./user-seeds');
const seedBlogs = require('./blog-seeds');

// Add Seed Data
const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUsers();

    await seedBlogs();

    process.exit(0);
};

seedAll();
