// Import
const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./Comment');

// Association
User.hasMany(Blog, {
    foreignKey: 'user_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id'
});

// Export
module.exports = { User, Blog, Comment };
