const express = require('express')
const mongoose = require('mongoose')
const expressLayouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./lib/passportConfig')


// Import our Routes
const indexRoute = require('./routes/index')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const userRoute = require('./routes/user')



const app = express()

const PORT = 4001


app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.urlencoded({
    extended: true
}))

app.use(session({
    secret: 'Thisisasecret!',
    saveUninitialized: true,
    resave: false,
    cookie: { maxAge: 86400000 }
}))



app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next) {
    res.locals.currentUser = req.user
    next()
})


app.use('/', indexRoute)
app.use('/', authRoute)
app.use('/', postRoute)
app.use('/', userRoute)




app.listen(PORT, () => {
    console.log(`SWLF is connected on the port: ${PORT}`)
})

mongoose.connect('mongodb://127.0.0.1:27017/SWLF', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Mongoose Is Connected to MongoDB')
}).catch((err) => {
    console.log('An error occurred', err)
})
