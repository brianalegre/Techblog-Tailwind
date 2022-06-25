// Import Model
const { Blog } = require('../models');

// Create Seed Data
const blogData = [
    {
        title: 'One Post For All',
        content: 'Testing My First Post, what does it look like',
        post_date: 'September 12, 2021 08:30:00',
        username: 'userJuan',
    },
    {
        title: 'Two is the new me',
        content: 'It takes Thu to keep the moment going',
        post_date: 'September 21, 2022 09:30:00',
        username: 'userThu',
    },
]

const seedBlogs = () => Blog.bulkCreate(blogData);

// Export
module.exports = seedBlogs;