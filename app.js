const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const session = require('express-session')
const {urlencoded} = require('express')
const bodyParser = require('body-parser')

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
    secret: 'Login Use',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))


app.use(routes)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))