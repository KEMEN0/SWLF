const User = require('../models/user')
const Post = require('../models/posts')

exports.user_detail_get = async(req, res) => {
    try {
        const user = await User.findById(req.query.id).populate('posts')
        const posts = user.posts
        console.log('im rendering')
        console.log(user)
        res.render('user/detail', {user, posts})
    } catch (error) {
        console.log(error.message)
    }

}

exports.user_posts = async(req, res) =>{
    try{
        const userpost =  await Post.findById(req.query.id)
            return res.redirect('user/detail', {userpost})
    }catch(error){
        console.log(error)
        res.send(error.message)
    }
}
