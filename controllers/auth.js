const bcrypt = require('bcrypt')

const User = require('../models/user')
const passport = require('../lib/passportConfig')

exports.auth_join_get = (req, res) => {
    res.render('auth/join')
}

exports.auth_login_get = (req, res) => {
    res.render('auth/login')
}

exports.auth_join_post = async(req, res) => {
    try {
        console.log(req.body)
        const user = new User(req.body)

        const hash = bcrypt.hashSync(req.body.password, 10)
        console.log(hash)

        user.password = hash



        await user.save()

        res.redirect('/')
    } catch (error) {
        console.log(error.message)
    }
}

exports.auth_login_post = passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login'
})

exports.auth_logout_get = (req, res, next) => {
    req.logout(function(err){
        if (err) {
            return next()
        }
        res.redirect('/auth/login')
    })
}
