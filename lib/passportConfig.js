const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user')

// Save the ID into the session
passport.serializeUser(function(user, done) {
    done(null, user.id)
})

passport.deserializeUser(async function(id, done) {
    try {
        const user = await User.findById(id)
        done(null, user)
    } catch (error) {
        done(error)
    }
})

passport.use(new LocalStrategy({
        usernameField: 'userName',
        passwordField: 'password'
    },
    async function(userName, password, done) {
        try {
            const user = await User.findOne({ userName: userName })
            if (!user) {
                console.log('user not found');
                return done(null, false)
            }
            if (!user.verifyPassword(password)) {
                console.log('wrong pass');
                return done(null, false)
            }
            return done(null, user)
        } catch (error) {
            return done(error)
        }
    }
))

module.exports = passport