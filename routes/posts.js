const express = require('express')
const router = express.Router()
const postController = require('../controllers/posts')
const isLoggedIn = require('../lib/isLoggedIn')
const isAdmin = require('../lib/isAdmin')

router.get('/post/add', isLoggedIn, postController.post_create_get)
router.post('/post/add', postController.post_create_post)
router.get('/post/index', postController.post_index_get)
router.post('/post/delete', postController.post_delete)
router.get('/post/detail', postController.post_detail_get)




module.exports = router