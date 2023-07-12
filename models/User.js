const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true,
        minlength: [4, 'username must be 4 or more characters'],
        maxlength: [60, 'username cannot be more than 60 characters']
    },

    emailAddress: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    }],
}, {
    timestamps: true
})

userSchema.methods.verifyPassword = function(password) {
    console.log('Verifying Password: ', password)
    return bcrypt.compareSync(password, this.password)
}

const User = mongoose.model('User', userSchema)

module.exports = User
