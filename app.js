const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const session = require('express-session')
const {urlencoded} = require('express')
const bodyParser = require('body-parser')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })


app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.post('/profile', upload.single('avatar'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
  })
app.use(session({
    secret: 'Login Use',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))


app.use(routes)

app.listen(port, () => console.log(`CodeByHacktiv8listening at http://localhost:${port}`))