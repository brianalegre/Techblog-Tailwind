// Import Model
const { User } = require('../models');

// Create Seed Data
const userData = [
    {
        username: 'userJuan',
        user_email: 'UserJuan@test.com',
        user_password: 'test123',
        // blog_id: 1,
    },
    {
        username: 'userThu',
        user_email: 'UserThu@test.com',
        user_password: 'test123',
        // blog_id: 2,
    },
]

const seedUsers = () => User.bulkCreate(userData);

// Export
module.exports = seedUsers;