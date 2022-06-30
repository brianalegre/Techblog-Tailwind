// Import Model
const { Blog } = require('../models');

// Create Seed Data
const blogData = [
    {
        blog_title: 'One Post For All',
        blog_content: 'Testing My First Post, what does it look like',
        blog_post_date: 'September 12, 2021 08:30:00',
        user_id: 1,
    },
    {
        blog_title: 'Two is the new me',
        blog_content: 'It takes Thu to keep the moment going',
        blog_post_date: 'September 21, 2022 09:30:00',
        user_id: 2,
    },
]

const seedBlogs = () => Blog.bulkCreate(blogData);

// Export
module.exports = seedBlogs;