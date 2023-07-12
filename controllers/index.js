const Post = require('../models/posts')
// APIs


exports.index_get = async(req, res) => {
    try {
        const posts = await Post.find()
        console.log('POSTS', posts)
        res.render('home/index', { posts })
    } catch (error) {
        console.log(error.message)
        res.send('sumthing went wrong')
    }
}
