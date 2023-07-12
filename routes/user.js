const express = require('express')
const router = express.Router()
const isLoggedIn = require('../lib/isLoggedIn')

const userController = require('../controllers/user')

// Routes
router.get('/user/detail', userController.user_detail_get)
router.get('/user/detail', userController.user_posts)

module.exports = router
