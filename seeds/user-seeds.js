// Import Model
const { User } = require('../models');

// Create Seed Data
const userData = [
    {
        username: 'userJuan',
        email: 'UserJuan@test.com',
        password: 'test123',
        // blog_id: 1,
    },
    {
        username: 'userThu',
        email: 'UserThu@test.com',
        password: 'test123',
        // blog_id: 2,
    },
]

const seedUsers = () => User.bulkCreate(userData);

// Export
module.exports = seedUsers;